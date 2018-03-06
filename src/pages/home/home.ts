import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('contohanimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(100%)',
      })),
      transition('show => hide', [
        animate('0.5s ease-out', style({
          transform: 'translateX(100%)',
          opacity:0
        }))
      ]),
      transition('hide => show', [
        animate('0.5s ease-out', style({
          transform: 'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class HomePage {
  tampilkan: boolean = true;
  constructor(public navCtrl: NavController) {

  }

  doAnimation(){
    this.tampilkan ? this.tampilkan = false : this.tampilkan = true;
  }

}
