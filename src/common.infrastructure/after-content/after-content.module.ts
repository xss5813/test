import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AfterContentPage } from './after-content';

@NgModule({
  declarations: [AfterContentPage],
  imports: [IonicPageModule.forChild(AfterContentPage)],
  exports: [AfterContentPage],
  providers:[
  ]
})
export class AfterContentPageModule { }