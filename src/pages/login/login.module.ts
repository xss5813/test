import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {UserService} from '../../business/user.service';
import {LocalHTTPService} from '../../assets/local.service';
import { HeroFormComponent } from './test';
import { NameEditorComponent } from './test1';

@NgModule({
  declarations: [
    LoginPage,
    HeroFormComponent,NameEditorComponent
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage,
    HeroFormComponent,NameEditorComponent
  ],
  providers:[UserService,LocalHTTPService]
})
export class LoginPageModule {}