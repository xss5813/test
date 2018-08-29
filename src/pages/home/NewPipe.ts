import {Injectable,Pipe} from '@angular/core';

@Pipe({
    name:'newPipe'
})

@Injectable()
export class NewPipe{

    transform(value:string,args:any[]){
        
        value=value+'';
        return value.toUpperCase()+" world!";
    }
}