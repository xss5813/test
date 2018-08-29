import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  declarations: [SearchPage],
  imports: [IonicPageModule.forChild(SearchPage)],
  exports: [SearchPage],
  providers:[Keyboard
  ]
})
export class SearchPageModule { }