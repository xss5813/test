import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from '../../../node_modules/rxjs';


@Injectable()
export class CameraService {
    constructor(private camera: Camera) {

    }

    /**
   * 打开摄像头
   * @param isFile 文件路径/base64
   */
    openCamera(isFile?: boolean) {
        const options: CameraOptions = {
            quality: 100,                                                   //相片质量 0 -100
            destinationType: !isFile ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.DATA_URL,        //DATA_URL 是 base64   FILE_URL 是文件路径
            encodingType: this.camera.EncodingType.PNG,
            allowEdit:true,
            mediaType: this.camera.MediaType.ALLMEDIA,
            saveToPhotoAlbum: false,                                       //是否保存到相册
            sourceType: this.camera.PictureSourceType.CAMERA,         //是打开相机拍照还是打开相册选择  PHOTOLIBRARY : 相册选择, CAMERA : 拍照,
            cameraDirection:this.camera.Direction.BACK     //后置摄像头（默认）
        }

        return Observable.fromPromise(this.camera.getPicture(options)).map(res => {

            return !isFile ? `${res}` : `data:image/png;base64,${res}`
        });

    }

    
}