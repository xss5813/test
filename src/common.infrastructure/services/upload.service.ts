import { Injectable } from '@angular/core';

import { FileTransfer, FileUploadOptions, FileTransferObject, FileUploadResult, FileTransferError } from '@ionic-native/file-transfer';
import { Observable } from '../../../node_modules/rxjs';
import { HTTP } from '@ionic-native/http';


@Injectable()
export class UploadService {

    fileTransfer: FileTransferObject = this.transfer.create();
    constructor(private transfer: FileTransfer, private http: HTTP) {

    }
    
    uploadMul(){
        
    }

    /**
     * 单文件上传
     */
    uploadSingle(path:string){
        const apiPath = "https://test.flm158.com/Platform/Upload.ashx";
        let options: FileUploadOptions = {
            fileKey: 'file',
            fileName: path.substring(1+path.lastIndexOf("/")),
           mimeType:'application/octet-stream',
            headers: {},
            // 如果要传参数，写这里
            params: {
                // maxSize: 5000000,
                // modularName: 'CNL',
                // allowType: 'jpg;png;pdf;doc;xls;xlsx;docx',
            }
        };
        return Observable.fromPromise(this.fileTransfer.upload(path, apiPath, options)).map<FileUploadResult,string>(res => res.response)
        
        .catch<string,string>(this.fail.bind(this));
    }

    fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
}