import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormPage } from './form';
import { DynamicFormComponent } from '../../common.infrastructure/form/dynamic-form.component';
import { DynamicFormItemComponent } from '../../common.infrastructure/form/dynamic-form-item.component';

@NgModule({
  declarations: [FormPage,DynamicFormComponent,DynamicFormItemComponent],
  imports: [IonicPageModule.forChild(FormPage)],
  exports: [FormPage,DynamicFormComponent,DynamicFormItemComponent],
  providers:[
  ]
})
export class FormPageModule { }