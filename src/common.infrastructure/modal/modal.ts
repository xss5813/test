import { Component } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  templateUrl: 'modal.html'
})
export class ModalPage {
  myParam: string;

  constructor(
    public viewCtrl: ViewController,
    params: NavParams
  ) {
    this.myParam = params.get('myParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}