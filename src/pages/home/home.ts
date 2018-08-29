import { Component,Inject} from '@angular/core';
import { NavController} from 'ionic-angular';
import { IonicPage,Events  } from 'ionic-angular';
import {UserService} from '../../business/user.service';

import { HTTP } from '@ionic-native/http';
import {BaseService,baseService} from '../../business/base.service.factory';
@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   account:string;
   password:string;
  constructor(public navCtrl: NavController, private userService:UserService,private http:HTTP,@Inject(baseService) private c:BaseService ,private event:Events) {
      event.subscribe("login",(res)=>{
        confirm("djfjdfj1"+res);
      },()=>{
        confirm("djfjdfj2");
      })
  }
  
  login():void{
    this.navCtrl.push('ProjectPage');
   
    
  }
}
