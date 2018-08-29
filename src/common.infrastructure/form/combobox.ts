import { FormBase } from './base';

export class ComboBox extends FormBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string,selected:boolean}[] = [];
  mode:string;
  private multiple:boolean;
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.multiple = options['multiple'];
    //this.mode=mode;
  }
}