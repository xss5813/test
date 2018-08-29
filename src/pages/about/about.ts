import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CameraService } from '../../common.infrastructure/services/camera.service';
import { ImagePickerService } from '../../common.infrastructure/services/image-picker.service';
import { UploadService } from '../../common.infrastructure/services/upload.service';

@IonicPage()

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  path: string;
 
  constructor(private imagePickerService:ImagePickerService,private cameraService:CameraService,protected uploadService:UploadService,public navCtrl: NavController) { 
    
  }

  /**
   * 打开摄像头
   */
  openCamera() {
    
      this.cameraService.openCamera().subscribe(res=>{
        console.log(res);
        this.path = res;
      });
  }

  openPhoto(){
   this.imagePickerService.openPhoto(true).subscribe(x=>{
     this.path= x[x.length-1];
   });
  }
  /**
   * 文件上传
   */
  upload() {
    
    this.uploadService.uploadSingle(this.path).subscribe(x=>{

      this.path = x;
    })
      
  }

  form(){

    this.navCtrl.push('FormPage');
  }
  
  grid(res){
    
    this.navCtrl.push(`Grid${res}Page`)
  }

}
