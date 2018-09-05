import { Component, ContentChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NameEditorComponent } from '../../pages/login/test1';
//@IonicPage() 开启编译后，会多生成一个 x.js 用于懒加载
@Component({
  selector:'after-content',
  templateUrl: 'after-content.html'
})
export class AfterContentPage {
  myParam: string;
  private prevHero = '';
// Query for a CONTENT child of type `ChildComponent`
@ContentChild(NameEditorComponent) contentChild: any;
  constructor(
  ) {
    
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      //this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      
    }
  }
 
}