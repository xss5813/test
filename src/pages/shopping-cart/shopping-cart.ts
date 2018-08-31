import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
@IonicPage()

@Component({
  selector: 'page-shopping-cart',
  templateUrl: 'shopping-cart.html'
})
export class ShoppingCartPage {

  items: any[] = [];
  items1: my[] = [];
  constructor(public navCtrl: NavController) {

    this.setItems();
  }

  setItems() {
    this.items = ['Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon'];
    this.items1 = [new my({ name: 'fruit', child: [new my({ name: 'Orange' }), new my({ name: 'Cherries' }), new my({ name: 'Apple' })] }),
    new my({ name: 'people', child: [new my({ name: 'sam' }), new my({ name: 'liujia' }), new my({ name: 'liudehua' })] }),];
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function (item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
  updateCucumber(item: my) {

    if (item.child.length == 0) {
      let item1 = this.items1.filter((value)=>value.child.find((v)=>v.name==item.name))[0];
      //let item1 = Observable.from([item11]);
      if(item.selected)
      {
        
     if (item1.child.every((value,index,array)=>value.selected))
      {
        item1.selected=true;
      }
    }
    else{
      item1.selected=false;
    }
    }
    else {
      for (let i of item.child) {

        i.selected = item.selected;
      }
    }
  }

  search(){

  }
}

class my {
  name: string;
  child: my[];
  selected: boolean;
  constructor(param: {
    name?: string,
    child?: my[], email?: string,
    selected?: boolean
  } = {}) {
    this.name = param.name || '';
    this.child = param.child || [];
    this.selected = false;
  }
}