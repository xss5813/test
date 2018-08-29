import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
let str:string[] = [`
<ion-grid>
    <ion-row>
      <ion-col>
        1 of 2
      </ion-col>
      <ion-col>
        2 of 2
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        1 of 3
      </ion-col>
      <ion-col>
        2 of 3
      </ion-col>
      <ion-col>
        3 of 3
      </ion-col>
    </ion-row>
  </ion-grid>
`,`<ion-grid>
<ion-row>
  <ion-col>
    1 of 3
  </ion-col>
  <ion-col col-8>
    2 of 3 (wider)
  </ion-col>
  <ion-col>
    3 of 3
  </ion-col>
</ion-row>
<ion-row>
  <ion-col>
    1 of 3
  </ion-col>
  <ion-col col-6>
    2 of 3 (wider)
  </ion-col>
  <ion-col>
    3 of 3
  </ion-col>
</ion-row>
</ion-grid>`,`<ion-grid>
<ion-row>
  <ion-col>
    1 of 3
  </ion-col>
  <ion-col col-auto>
    Variable width content
  </ion-col>
  <ion-col>
    3 of 3
  </ion-col>
</ion-row>
<ion-row>
  <ion-col>
    1 of 4
  </ion-col>
  <ion-col>
    2 of 4
  </ion-col>
  <ion-col col-auto>
    <ion-input placeholder="Variable width input"></ion-input>
  </ion-col>
  <ion-col>
    4 of 4
  </ion-col>
</ion-row>
</ion-grid>`,`<ion-grid>
<ion-row>
  <ion-col col-4>
    1 of 4
  </ion-col>
  <ion-col col-2>
    2 of 4
  </ion-col>
  <ion-col col-2>
    3 of 4
  </ion-col>
  <ion-col col-4>
    4 of 4
  </ion-col>
</ion-row>
</ion-grid>`,`<ion-grid>
<ion-row>
  <ion-col col-12 col-sm>
    1 of 4
  </ion-col>
  <ion-col col-12 col-sm>
    2 of 4
  </ion-col>
  <ion-col col-12 col-sm>
    3 of 4
  </ion-col>
  <ion-col col-12 col-sm>
    4 of 4
  </ion-col>
</ion-row>
</ion-grid>`,`<ion-grid>
<ion-row>
  <ion-col col-3>
    1 of 2
  </ion-col>
  <ion-col col-3 offset-3>
    2 of 2
  </ion-col>
</ion-row>
</ion-grid>`,`<ion-grid>
<ion-row>
  <ion-col col-md-3>
    1 of 3
  </ion-col>
  <ion-col col-md-3>
    2 of 3
  </ion-col>
  <ion-col col-md-3 offset-md-3>
    3 of 3
  </ion-col>
</ion-row>
</ion-grid>`,`<ion-grid>
<ion-row>
  <ion-col col-9 push-3>
    1 of 2
  </ion-col>
  <ion-col col-3 pull-9>
    2 of 2
  </ion-col>
</ion-row>
</ion-grid>`,`<ion-grid>
<ion-row>
  <ion-col col-md-6 push-md-3>
    1 of 3
  </ion-col>
  <ion-col col-md-3 push-md-3>
    2 of 3
  </ion-col>
  <ion-col col-md-3 pull-md-9>
    3 of 3
  </ion-col>
</ion-row>
</ion-grid>`,`<ion-grid>
<ion-row align-items-start>
  <ion-col>
    1 of 4
  </ion-col>
  <ion-col>
    2 of 4
  </ion-col>
  <ion-col>
    3 of 4
  </ion-col>
  <ion-col>
    4 of 4 <br>#<br>#<br>#
  </ion-col>
</ion-row>

<ion-row align-items-center>
  <ion-col>
    1 of 4
  </ion-col>
  <ion-col>
    2 of 4
  </ion-col>
  <ion-col>
    3 of 4
  </ion-col>
  <ion-col>
    4 of 4 <br>#<br>#<br>#
  </ion-col>
</ion-row>

<ion-row align-items-end>
  <ion-col>
    1 of 4
  </ion-col>
  <ion-col>
    2 of 4
  </ion-col>
  <ion-col>
    3 of 4
  </ion-col>
  <ion-col>
    4 of 4 <br>#<br>#<br>#
  </ion-col>
</ion-row>
</ion-grid>`,`<ion-grid>
<ion-row>
  <ion-col align-self-start>
    <div>
      1 of 4
    </div>
  </ion-col>
  <ion-col align-self-center>
    <div>
      2 of 4
    </div>
  </ion-col>
  <ion-col align-self-end>
    <div>
      3 of 4
    </div>
  </ion-col>
  <ion-col>
    <div>
      4 of 4 <br>#<br>#<br>#
    </div>
  </ion-col>
</ion-row>
</ion-grid>`,`<ion-grid>
<ion-row justify-content-start>
  <ion-col col-3>
    1 of 2
  </ion-col>
  <ion-col col-3>
    2 of 2
  </ion-col>
</ion-row>

<ion-row justify-content-center>
  <ion-col col-3>
    1 of 2
  </ion-col>
  <ion-col col-3>
    2 of 2
  </ion-col>
</ion-row>

<ion-row justify-content-end>
  <ion-col col-3>
    1 of 2
  </ion-col>
  <ion-col col-3>
    2 of 2
  </ion-col>
</ion-row>

<ion-row justify-content-around>
  <ion-col col-3>
    1 of 2
  </ion-col>
  <ion-col col-3>
    2 of 2
  </ion-col>
</ion-row>

<ion-row justify-content-between>
  <ion-col col-3>
    1 of 2
  </ion-col>
  <ion-col col-3>
    2 of 2
  </ion-col>
</ion-row>
</ion-grid>`];

@IonicPage()
@Component({
  selector: 'page-grid1',
  template: `<ion-content padding>${str}</ion-content>`
})
export class Grid1Page {

}
