import { Device } from '@ionic-native/device';
import { Injectable, } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseHTTPService } from './base.service';




@Injectable()
export class UserService {

    protected configUrl = 'https://test.flm158.com/Platform/JSON/UserService.svc';
    
    constructor(protected http: HttpClient,protected device : Device,protected baseService:BaseHTTPService) {
        
    }    

    login(category:string,token:string,account:string,password:string,partner:boolean=false,captcha:string=''):Observable<string>{

        console.log('device:'+this.device.uuid);
        if(this.device.uuid!=null){

            return this.loginN(category,token,account,password,partner,captcha);
        }
        else{
            
            return this.loginW(category,token,account,password,partner,captcha);
        }
    }
    private handleLogin(url:string,res){
        if (/(Login)/g.test(url))
              {
                //this.http.setCookie('test.flm158.com','User=${}')
              }
      }
    private loginW(category:string,token:string,account:string,password:string,partner:boolean=false,captcha:string=''):Observable<string> {
        
        return this.http.post<string>(`${this.configUrl}/Login`,
        {category:category,token:token,account:account,password:password,partner:partner,captcha:captcha}
        ,{headers:new HttpHeaders()}).do(this.handleLogin.bind(this));       
    }

    private loginN(category:string,token:string,account:string,password:string,partner:boolean=false,captcha:string=''):Observable<string> {
    
        return this.baseService.Request(`${this.configUrl}/Login`,{category:category,token:token,account:account,password:password,partner:partner,captcha:captcha},{}).map<any,string>(x=>x.Result)
    }

}
