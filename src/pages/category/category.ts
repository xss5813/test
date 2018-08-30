import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { Pro } from '@ionic/pro';
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

    //this.navCtrl.push('SearchPage');
    this.performManualUpdate();
  }
  async performManualUpdate() {
    const info = await Pro.deploy.getCurrentVersion()
    
    confirm('version:'+JSON.stringify(info));
    console.log("version:"+info);
    const update = await Pro.deploy.checkForUpdate()
    if (update.available){
      await Pro.deploy.downloadUpdate((progress) => {
        console.log(progress);
      })
      await Pro.deploy.extractUpdate((progress) => {
        console.log(progress);
      })
      await Pro.deploy.reloadApp();
    }
  }
}
