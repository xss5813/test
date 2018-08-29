import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {UserService} from '../../business/user.service';
import {LocalHTTPService} from '../../assets/local.service';
import {NewPipe} from './NewPipe';
@NgModule({
  declarations: [
    HomePage,
    NewPipe
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ],
  providers:[UserService]
})
export class HomePageModule {}