import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  pepperoni:boolean;
  test :number=23.1256;
  constructor(public navCtrl: NavController) {

  }
  
  search(){

    this.navCtrl.push('SearchPage');
  }
}
