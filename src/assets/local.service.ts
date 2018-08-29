
import { HTTP, HTTPResponse } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingController, Loading } from 'ionic-angular';



@Injectable()
export class LocalHTTPService {

  private loading: Loading;

  constructor(private http: HTTP) {

  }
  
  Get(configUrl: string): Observable<any> {

    return Observable.from(this.http.get(configUrl||'../../assets/config/config.json', {}, {})).map<HTTPResponse, any>(res => res.data);

  }
}