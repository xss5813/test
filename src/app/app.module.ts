import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler  } from 'ionic-angular';
import { MyApp } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { Device } from '@ionic-native/device';

import { CookieService } from 'ngx-cookie-service';
import {httpInterceptorProviders } from '../common.infrastructure/interceptors/index';
import {MessageService} from '../common.infrastructure/services/message.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {BaseHTTPService} from '../business/base.service';

import {BaseService,baseServiceProvider} from '../business/base.service.factory';
import { Pro } from '@ionic/pro';

Pro.init('5dc8e651', {
  appVersion: '0.0.1'
})

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{ 
      mode:'ios', /*强制使用ios样式 */
      backButtonText: '返回',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    Device,
    BaseHTTPService,
    MessageService,
    CookieService,
    httpInterceptorProviders,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    baseServiceProvider,BaseService
  ]
})
export class AppModule {
  

}
