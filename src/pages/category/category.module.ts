import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';
import { ProgressBarComponentModule } from '../../common.infrastructure/component/progress-bar/progress-bar.module';

@NgModule({
  declarations: [CategoryPage],
  imports: [IonicPageModule.forChild(CategoryPage),ProgressBarComponentModule],
  exports: [CategoryPage]
})
export class CategoryPageModule { }