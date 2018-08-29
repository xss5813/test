import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

import { FormBase } from './base';

@Injectable()
export class FormControlService {
  constructor() { }

  toFormGroup(questions: FormBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      if(question.required && question.userValidators)
      {
        question.userValidators = Validators.compose([<ValidatorFn>question.userValidators,Validators.required]);
      }
      group[question.key] = new FormControl(question.value || '', question.userValidators)
      //Validators.compose([Validators.minLength(6), Validators.maxLength(11),this.passValidator.bind(this)]))
    });

    return new FormGroup(group);
  }

}

