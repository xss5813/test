import { Injectable, Injector } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {QuerySorter,QueryPager,QueryFilter,ResponseModel} from './base.service';
export {Direction} from './base.service';
import { Observable } from 'rxjs';
import { Device } from '@ionic-native/device';
import { HTTP } from '@ionic-native/http';
import { BaseHTTPService } from './base.service';

@Injectable()
export class ProjectService {

    private configUrl = 'https://test.flm158.com/House1/JSON/ProjectService.svc';
    constructor(private http: HttpClient,private httpn:HTTP,private device : Device,private injector:Injector,private baseService:BaseHTTPService) { }
    query(pager:QueryPager,filter:QueryFilter,sorts:QuerySorter[]):Observable<ResponseModel> {
        
        if(this.device.uuid!=null){

            return this.queryN(pager,filter,sorts);
        }
        else{
            
            return this.queryW(pager,filter,sorts);
        }
        //return this.http.post<ResponseModel>(`${this.configUrl}/Query`,{pager:pager,condition:filter,sorts:sorts},{headers:new HttpHeaders()})
        // .pipe(x=>{
        //   return (<Observable<ResponseModel>>x).map((s:any)=>s.Result);
        // });
    }
    
    
    private queryW(pager:QueryPager,filter:QueryFilter,sorts:QuerySorter[]):Observable<ResponseModel> {
        
        
        return this.http.post<ResponseModel>(`${this.configUrl}/Query`,
        {pager:pager,condition:filter,sorts:sorts}
        ,{headers:new HttpHeaders()});       
    }

    private queryN(pager:QueryPager,filter:QueryFilter,sorts:QuerySorter[]):Observable<ResponseModel> {
        
    //     this.httpn.setDataSerializer('json');
    //     let temp= this.httpn.post(`${this.configUrl}/Query`,{pager:pager,condition:filter,sorts:sorts},{'Content-Type':'application/json'});
    //    return Observable.fromPromise(temp).map<HTTPResponse,ResponseModel>(x=>x.data);
        return this.baseService.Request(`${this.configUrl}/Query`,{pager:pager,condition:filter,sorts:sorts},{},'POST');//.map<any,string>(x=>x.Result)
    }
}