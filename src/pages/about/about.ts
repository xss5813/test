import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CameraService } from '../../common.infrastructure/services/camera.service';
import { ImagePickerService } from '../../common.infrastructure/services/image-picker.service';
import { UploadService } from '../../common.infrastructure/services/upload.service';
import { Pro } from '@ionic/pro';
import { Observable } from 'rxjs';

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

  update(){
    this.performManualUpdate();
  }
  async performManualUpdate() {
    const info = await Pro.deploy.getCurrentVersion()
    
    const update = await Pro.deploy.checkForUpdate()
    if (update.available &&  confirm('发现新版本，是否更新？')){
      
    //  Observable.concat([Observable.fromPromise(Pro.deploy.downloadUpdate(progress=>{
    //   this.updatingText="当前进度:"+progress+"";

    //  })),Observable.fromPromise(Pro.deploy.extractUpdate((progress) => {
    //   this.updatingText="当前进度:"+progress+"";
    //   console.log(progress);
    // })),Observable.fromPromise(Pro.deploy.reloadApp())]).subscribe();
      await Pro.deploy.downloadUpdate((progress) => {
        this.updatingText=progress+"";
        console.log(progress);
      })
      await Pro.deploy.extractUpdate((progress) => {
        this.updatingText=progress+"";
        console.log(progress);
      })
      this.updatingText="即将重启应用...";
      await Pro.deploy.reloadApp();
    }
    else{
      alert('已经是最新版');
    }
  }
  updatingText:string='';
}
