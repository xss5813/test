import { Component, Renderer2, Renderer, ViewChild, NgZone } from '@angular/core';
import { NavController, ModalController, Content } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild(Content) content: Content;
  private _testSegment: string;

    get testSegment(): string {
        return this._testSegment;
    }

    set testSegment(newName: string) {
        
      document.getElementById(newName).scrollIntoView(true);
      
      console.log(newName);
    }
  myParam = 'xss';
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public zone: NgZone) {

  }
  scrollHandler(event) {
    console.log(`ScrollEvent: ${event}`)
    this.zone.run(()=>{
      // since scrollAmount is data-binded,
      // the update needs to happen in zone
      
    })
  }
  search() {
    this.openBasicModal();
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