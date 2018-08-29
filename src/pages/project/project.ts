import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
// import {ProjectService,Direction} from '../../business/project.service';
// import {LocalHTTPService} from '../../assets/local.service';

/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//import {BaseService,baseService} from '../../business/base.service.factory';

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage implements OnInit{
  constructor(public navCtrl: NavController) {
    
}
ngOnInit(){
  this.istrueorfalse = false;
  this.employees=[];
  for(let i=0;i<4;i++){
    let t = new employee();
    t.name="name"+i;
    t.id =i;
    if(i==1||i==3){
      t.selected=true;
    }
    this.employees.push(t);
  }
 
}
employees:employee[];
toppings:any;
istrueorfalse:boolean;
  appType = 'Paid';
  safari = 'Shared Links';
  weather = 'sunny';
  apps: any = {
    'Paid': [
      {
        name: 'Monopoly',
        price: '$0.99'
      },
      {
        name: 'Angry Birds',
        price: '$2.99'
      }
    ],
    'Free': [
      {
        name: 'Snapchat',
        price: 'GET'
      },
      {
        name: 'Instagram',
        price: 'OPEN'
      }
    ],
    'Top': [
      {
        name: 'Spotify',
        price: 'OPEN'
      },
      {
        name: 'Pandora',
        price: 'GET'
      }
    ]
  };

  items: any = {
    'Bookmarks': [
      {
        name: 'Favorites',
        icon: 'ios-star-outline'
      },
      {
        name: 'History',
        icon: 'ios-clock-outline'
      }
    ],
    'Reading List': [
      {
        name: 'Terms of Service',
        icon: 'create'
      },
      {
        name: 'User Guide',
        icon: 'book'
      }
    ],
    'Shared Links': [
      {
        name: 'Ionic Framework',
        icon: 'ionic'
      },
      {
        name: 'Learn Angular',
        icon: 'logo-angular'
      }
    ]
  };

  getItems(type: any) {
    return this.apps[type];
  }

  getSafariItems(type: any) {
    return this.items[type];
  }
  login(){
    
    let s = 'test';
    //var p =eval('ProjectService'); //error
    
    debugger;
  }
  test(s){
    debugger;
  }
}

class employee{

  name:string;
  id:number;
  selected:boolean;
}