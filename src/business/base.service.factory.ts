
import { Device } from '@ionic-native/device';
import {InjectionToken,Injectable} from '@angular/core';

@Injectable()
export class BaseService{

    constructor(){
    }
    url:string;
    data:any;
    Query(){

    }
}
class A extends BaseService{

    Query(){

        this.url = 'a';
        console.log('a');
    }
}

class B extends BaseService{

    Query(){

        this.url = 'b';
        console.log('b');
    }
}


let baseServiceFactory = (_device:Device)=>{

    
    if(_device.uuid!=null){

        return new A();
    }
    else{
        
        return new B();
    }
}

export const baseService= new InjectionToken <string>('baseServiceFactory');
export let baseServiceProvider =
  { provide: baseService,
    useFactory: baseServiceFactory,
    deps: [Device]
  };