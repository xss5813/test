import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
@IonicPage()

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  
  items:any[]=[];
 
  constructor(public navCtrl: NavController ,private keyboard: Keyboard) { 
    
  }

  setItems() {
    this.items = ['Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon'];
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  } 

  go(){

    this.keyboard.onKeyboardShow().subscribe(x=>{
      console.log(JSON.stringify(x));
    })
    this.keyboard.show();
  }
  onCancel(event){
    this.navCtrl.pop()
  }
  onSearchKeyUp(event){
    console.log(event);
    if("Enter"==event.key){
      this.keyboard.close();
      this.navCtrl.push('ProjectListPage');
    }
  }
}
