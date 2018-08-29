

export abstract class ListManageViewModelBase<T>{

    constructor(){

    }
    Items:T[]=[];
    PageIndex:number;
    PageSize:number;
    TotalCount:number;

    RefreshData(){

        let index = Math.max(0,this.PageIndex*this.PageSize);
        let expandoData = null;
        let tempTotalCount:number = 0;
        let tempItems:T[] = null;
        let condition :string="";
        //OnLoadItemsAsyncOverride(isFromWritableDatabase, condition, this.SortItems, index, this.PageSize, out tempItems, out tempTotalCount, out expandoData);
        this.OnLoadItemsAsyncOverride(condition,index, this.PageSize);
    }

    protected abstract OnLoadItemsAsyncOverride(condition:string,start:number, size:number):void;
}