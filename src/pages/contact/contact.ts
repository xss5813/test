import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  pepperoni:boolean;
  test :number=23.1256;
  myParam = 'xss';
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }

  search(){
    this.openModalWithParams();
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