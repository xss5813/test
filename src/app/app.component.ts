import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * @description 使用懒加载，不需要显示引入模块，引用组件的地方使用名称字符串代替
 */
//import { TabsPage } from '../pages/tabs/tabs';
//--------------------------------------------------------------
import { Pro } from '@ionic/pro';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage';
  //rootPage:any='ProjectPage';
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //this.performManualUpdate();
    });

  }
  
  async performManualUpdate() {
    const info = await Pro.deploy.getCurrentVersion()
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
