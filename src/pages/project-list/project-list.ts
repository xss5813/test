import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Refresher } from 'ionic-angular';
import { ProjectService, Direction } from '../../business/project.service';
// import { LocalHTTPService } from '../../assets/local.service';

/**
 * Generated class for the ProjectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { BaseService, baseService } from '../../business/base.service.factory';

@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectListPage implements OnInit {

  start: number = 0;
  pagesize: number = 5;
  items: any[] = [];
  loadingText: string = '加载更多...';
  loadingSpinner:string ='bubbles'
  constructor(public navCtrl: NavController, public navParams: NavParams, private projectService: ProjectService, @Inject(baseService) private c: BaseService,
   private event: Events) {

  }

  ngOnInit() {

    this.navCtrl.remove(this.navCtrl.length()-2);
    this.test(null);
  }
  doRefresh(refresher: Refresher) {
    console.log('DOREFRESH', refresher);
    this.start =0;
    this.items = [];
    this.test(()=>{refresher.complete();})
  }
  doPulling(refresher: Refresher) {
    if(refresher.progress>1){

      console.log('可以松开了!');
    }
    else{

      console.log('下拉刷新!');
    }
  }
  test(completed = null) {
    this.projectService.query({ Start: this.start, Limit: this.pagesize }, { Lambda: "item=>true", Navigations: [] }, [{ Property: "item=>item.Id", Direction: Direction.Descending }])

      .subscribe(res => {
        if (res.Result.Value.length == 0) {
          this.loadingText = '已无更多';
          this.loadingSpinner = 'hide';
        }
        else {
          this.items = this.items.concat(res.Result.Value);
          //this.event.publish('login','data');
          if (completed != null && typeof completed == 'function') {

            completed();
          }
        }

      });
  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ProjectListPage');
  }

  doInfinite(infiniteScroll) {

    console.log('Begin async operation');
    this.start = this.start + this.pagesize;
    this.test(() => infiniteScroll.complete());
  }

  itemSelected(item) {

    this.navCtrl.push('ProjectPage');
  }
}
