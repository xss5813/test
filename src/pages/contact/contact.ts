import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  pepperoni: boolean;
  test: number = 23.1256;
  myParam = 'xss';
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  search() {
    if (true) {
      if (confirm('发现新版本，是否更新？')) {
        this.openModalWithParams();
      }
    }
    else {
      alert('sdssd');
    }
  }

  openBasicModal() {
    let myModal = this.modalCtrl.create('ModalPage');
    myModal.present();
  }
  openModalWithParams() {
    let myModal = this.modalCtrl.create('ModalPage', { 'myParam': this.myParam });
    myModal.present();
  }
}