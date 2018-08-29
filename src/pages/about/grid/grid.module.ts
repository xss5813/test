import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Grid1Page } from './grid';

@NgModule({
  declarations: [
    Grid1Page
  ],
  imports: [
    IonicPageModule.forChild(Grid1Page),
  ],
  exports: [
    Grid1Page,
  ],
  providers:[]
})
export class GridPageModule {}