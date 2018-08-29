import { Injectable } from '@angular/core';

import { Observable } from '../../../node_modules/rxjs';
import { ImagePicker, ImagePickerOptions, OutputType } from '@ionic-native/image-picker';


@Injectable()
export class ImagePickerService {

    constructor(private imagePicker: ImagePicker) {

    }

    console(results) {

        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
        }
    }
    /**
     * 打开相册
     */
    openPhoto(isFile?:boolean) :Observable<string[]>{
        let options: ImagePickerOptions = {
            maximumImagesCount: 8,
            outputType: !isFile?OutputType.FILE_URL:OutputType.DATA_URL
        };

        return Observable.fromPromise(this.imagePicker.getPictures(options)).do(this.console.bind(this)).map(x=><string[]>x);
    }
}