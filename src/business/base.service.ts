
export interface ResponseModel{
  Result:{
    Value:any[];
    Count:number;
    Headers:any[];
  }
    }
   export interface QueryPager{
  
      Start:number;
      Limit:number;
    }
    export enum Direction{
      Descending =0,
      Ascending
    }
  export  interface QueryFilter{
  /**
   * @description "item=>true"
   */
      Lambda:string;
      Navigations:string[];
    }
    export   interface QuerySorter{
  
      /**
       * @description "item=>item.PropertyName"
       */
      Property:string;
      /**
       * @description Descending or Ascending
       */
      Direction:Direction;
    }

import { Device } from '@ionic-native/device';
import { HTTP,HTTPResponse } from '@ionic-native/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import {LoadingController, Loading} from 'ionic-angular';


@Injectable()
export class BaseHTTPService {

  private loading:Loading;
    
    constructor(private http:HTTP,private device : Device,private injector:Injector) {

     }    
    private showLoading(){

      this.loading = this.injector.get(LoadingController).create({
        spinner: 'circles',
        content: `加载中...`
      });
      this.loading.present();
    }
    private hideLoading(res:HTTPResponse){
      this.loading.dismiss();
     
    }

    private handleLogin(url:string){
      if (/(Login)/g.test(url))
            {
              this.http.clearCookies();
            }
    }
    private setCookie(res:HTTPResponse){
      if (/(Login)/g.test(res.url))
      {
        console.log(`set cookie!:${(JSON.parse(res.data)).Result}`);
        this.http.setCookie('https://test.flm158.com/',`User=${(JSON.parse(res.data)).Result}`)
      }
      
    }
    private handleError(res:HTTPResponse){
      console.log(JSON.stringify(res));
      this.loading.dismiss();
          switch (res.status) {
            case 401:
              break;
            case 500:
            console.log('服务器异常');
              break;
            case 404:
            console.log('找不到该页');
              break;
            case 403:
              console.log('业务错误');
              break;
          }
    }
      Request(configUrl:string,body:any,headers:any,method:string='POST',bodyType:string='json'):Observable<any> {
        this.showLoading();
        //this.handleLogin(configUrl);
        this.http.setDataSerializer(bodyType);
        let temp= this.http.post(`${configUrl}`,body,Object.assign(headers,{'Content-Type':'application/json'}) );
        return Observable.fromPromise(temp)
        .do(this.setCookie.bind(this))
        .do(this.hideLoading.bind(this))
        .map<HTTPResponse,any>(x=>JSON.parse(x.data))
        
        .catch(this.handleError.bind(this));
   }

   Upload(configUrl:string,body:any,headers:any,method:string='POST'):Observable<any> {
    
    //this.http.setDataSerializer(bodyType);
    let temp= this.http.post(`${configUrl}`,body,Object.assign(headers,{'Content-Type':'multipart/form-data;boundary=---------------------8d1d59f8bd3a4a6'}) );
    return Observable.fromPromise(temp)
    .map<HTTPResponse,any>(x=>JSON.parse(x.data))
    
    .catch(this.handleError.bind(this));
}

}
