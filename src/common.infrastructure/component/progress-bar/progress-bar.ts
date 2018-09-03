
import { Input, Component, trigger, transition, style, animate, state } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-progress-bar',
    animations: [
        trigger(
            'myAnimation',
            [
                transition(
                    ':leave', [
                        style({ transform: 'translateX(0)', 'opacity': 1 }),
                        animate('1000ms', style({ transform: 'translateX(100%)', 'opacity': 0 }))
                    ]
                )]
        )
    ],
    template: `<div class="progress-outer">

                    <div  *ngIf="showChild"   [@myAnimation] class="progress-inner" ></div>

                  </div>`,
})
export class ProgressBarComponent {
    @Input() showChild: boolean;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        setTimeout(() => {
            this.showChild = false;
        }, 500);
    }
}