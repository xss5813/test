import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';
import { ProgressBarComponent } from '../../common.infrastructure/component/progress-bar/progress-bar';

@NgModule({
  declarations: [CategoryPage,ProgressBarComponent],
  imports: [IonicPageModule.forChild(CategoryPage)],
  exports: [CategoryPage,ProgressBarComponent]
})
export class CategoryPageModule { }