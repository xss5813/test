import { Injectable , Injector} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
/** Pass untouched request through to the next request handler. */
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor(/*private injector:Injector*/){
        //需要注入service 使用如下方式
        //let httpService = this.injector.get(HttpService);
    }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        if(req.method!=="POST")
        {
          
          if (/(config)/g.test(req.url))
          {

          }
        }
        else{

          req=req.clone({headers:req.headers.append('Content-Type','application/json')});
        }
        let res = next.handle(req);
        return res;
        
         }


         
}

