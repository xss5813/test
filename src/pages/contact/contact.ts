import { Component, Renderer2, Renderer, ViewChild, NgZone, OnInit } from '@angular/core';
import { NavController, ModalController, Content } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';




@IonicPage()

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit{
  //key为string , value为number
 map: { [key: string]: number} = {};
 items:string[] = ['菜单1','菜单2','菜单3','菜单4',];
  @ViewChild(Content) content: Content;
  private _testSegment: string="菜单2";

    get testSegment(): string {
        return this._testSegment;
    }

    set testSegment(newName: string) {
        
      this._testSegment = newName;
      document.getElementById(newName).scrollIntoView(true);
      console.log(newName);
    }
  myParam = 'xss';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public zone: NgZone) {

  }
  ngAfterViewInit(){
    for(let i=0;i<this.items.length;i++){

      this.map[this.items[i]] = document.getElementById(this.items[i]).offsetTop;
    }
  }
  ngOnInit(){

    
  }
  scrollHandler(event) {
    console.log(`ScrollEvent: ${event}`)

    let name =this.items.find((value)=>this.map[value]==event.scrollTop);
    if(name)
    this.testSegment=name;
    this.zone.run(()=>{
      // since scrollAmount is data-binded,
      // the update needs to happen in zone
      
    })
  }
  search() {
    this.content.resize();
    //this.openBasicModal();
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