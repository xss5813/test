import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
 
import { FormBase }     from './base';
 
@Component({
  selector: 'form-item',
  templateUrl: './dynamic-form-item.component.html'
})
export class DynamicFormItemComponent {
  @Input() item: FormBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.item.key].valid; }

  get errors(){

    return this.form.controls[this.item.key].errors
  }


 
}

// Function.prototype.getName = function(){   
//   var s = this.toString();   
//   var m = s.match(/function\s+([^(]+)/);   
//   return m[1];   
// }