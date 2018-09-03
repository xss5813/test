import { Injectable ,Injector} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpResponse
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import {LoadingController, Loading,App, NavController} from 'ionic-angular';
//import {ErrorPage} from '../pages/error/error';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
/** Pass untouched request through to the next request handler. */
@Injectable()
export class BusyInterceptor implements HttpInterceptor {
  
  private loading:Loading;
  constructor(private loadingCtrl :LoadingController,public app: App,private injector:Injector){
    
  }
  get navController(): NavController {
    return this.app.getRootNav();
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      this.loading = this.loadingCtrl.create({
        spinner: 'circles',
        content: `加载中...`
      });
      this.loading.present();
        return next.handle(req)
        .do((event:any) => {
          if (event instanceof HttpResponse) {
           this.loading.dismiss();
           if (/(Login)/g.test(req.url))
            {
              this.injector.get(CookieService).set('User',event.body.Result);
            }
            if (event.status == 200) {
              
            }
           
          }
         return event;        
       })
       .pipe(
         /**
          * 失败后重试0次
          */
          retry(0),
          //---------------------------
        catchError((res: HttpResponse<any>) => {   //请求失败处理
          this.loading.dismiss();
          switch (res.status) {
            case 401:
              break;
            case 500:
            //this.navController.push(ErrorPage);
              break;
            case 404:
            console.log('服务器异常');
              break;
            case 403:
              console.log('业务错误');
              break;
          }
          return ErrorObservable.create(event);
        }));

  }
}