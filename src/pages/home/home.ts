import { Component } from '@angular/core';
import {Nav, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public nav: Nav
  ) {

  }

  goToNewPage(){
    this.nav.push("NewPage");
  }

  goToNewPageWithOutAd(){
    this.nav.push("NewWithOutAdPage");
  }
}
