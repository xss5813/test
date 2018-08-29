import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import {Camera} from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';
import { CameraService } from '../../common.infrastructure/services/camera.service';
import { ImagePickerService } from '../../common.infrastructure/services/image-picker.service';
import { UploadService } from '../../common.infrastructure/services/upload.service';


@NgModule({
  declarations: [AboutPage],
  imports: [IonicPageModule.forChild(AboutPage)],
  exports: [AboutPage],
  providers:[
    FileTransfer,ImagePicker,Camera,
    CameraService,ImagePickerService,UploadService
  ]
})
export class AboutPageModule { }