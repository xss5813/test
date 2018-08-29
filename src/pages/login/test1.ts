import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor1',
  templateUrl: './test1.html'
})
export class NameEditorComponent {
  @Input() 
  name = new FormControl('',[Validators.minLength(8)]);
}