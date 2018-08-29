import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBase } from '../../common.infrastructure/form/base';
import { ComboBox } from '../../common.infrastructure/form/combobox';
import { Textbox } from '../../common.infrastructure/form/textbox';
import { FormControl, Validators } from '@angular/forms';

@IonicPage()

@Component({
  selector: 'page-category',
  templateUrl: 'form.html'
})
export class FormPage {
  path: string;
  questions:any[];
  constructor() { 
    
    this.questions = this.getQuestions();
  }

  passValidator(control: FormControl) {

    const value = control.value;
    let res = {passValidator:{info:''}};
    if(value=='xss5813'){
      
    res.passValidator.info='此帐号已使用';
    }
    else if(value.length>11){
        
      res.passValidator.info='格式不正确';
    }
    else{
      res = null;
    }
    return res;
  }
  getQuestions() {

    let questions: FormBase<any>[] = [
 
      new ComboBox({
        
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid',selected:false},
          {key: 'great',  value: 'Great',selected:true},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        value:'',
        order: 3,
        //multiple:true
      }),
 
      new Textbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
        type:'text'
      }),
 
      new Textbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'text',
        userValidators:Validators.compose([this.passValidator.bind(this)]),
        //required: false,
        order: 2
      })
    ];
 
    return questions.sort((a, b) => a.order - b.order);
  }
}
