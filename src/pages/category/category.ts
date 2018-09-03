import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  pepperoni:boolean;
  test :number=23.1256;
  showParent:boolean = false;
  constructor(public navCtrl: NavController) {

    
  }
  add(){
    this.showParent=true;
    }
  search(){
    this.navCtrl.push('SearchPage');
  }

  
  
}
