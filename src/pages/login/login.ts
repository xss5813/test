import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, Events } from 'ionic-angular';
import { UserService } from '../../business/user.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HTTP } from '@ionic-native/http';
//import { LocalHTTPService } from '../../assets/local.service';
//import { BaseService, baseService } from '../../business/base.service.factory';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  disabled= {};
  account: any;
  captcha: any;
  password: any;
  loginForm: FormGroup;
  loadingCaptcha:boolean;
  count:number=10;
  /**
   * 
   * @param control 
   * @description 自定义验证
   */
  passValidator(control: FormControl) {
    
    const value = control.value;
    return value=='xss5813' ? { passValidator: { info: '此帐号已使用!' } }:null;
  }
  constructor(public navCtrl: NavController, private userService: UserService, private http: HTTP, private event: Events, private formBuilder: FormBuilder) {
    
    this.loginForm = formBuilder.group({
      account1: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(11),Validators.required,this.passValidator])],
      captcha1: ['', Validators.compose([Validators.required])]
    });
    
    this.account = this.loginForm.controls['account1'];
    
    this.captcha = this.loginForm.controls['captcha1'];
  }
  /**
   * @description 验证码倒计时
   */
  getCaptcha(){
 
    this.loadingCaptcha=true;
    
    let interval=setInterval(()=>{
      
      this.count--;
      if(this.count==0)
      {
        this.loadingCaptcha=false;
        clearInterval(interval);
      }
    },1000);
     
  }

  login(param): void {

    // if(this.loginForm.invalid)
    // {
    //   console.log(this.loginForm.errors);
    //   return;
    // }
    this.navCtrl.push('TabsPage');
    // this.userService.login(null,null,'manager','1',true,null).subscribe((res)=>{

    //   //this.navCtrl.popAll();
    //   this.navCtrl.push('TabsPage');

    // },error=>{
    //   this.navCtrl.push('TabsPage');
    // }
  //);

  }

  
}
