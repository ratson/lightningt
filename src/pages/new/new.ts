import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var admob: any;

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  public banner: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  async ionViewDidLoad() {
    await admob.start();

    this.banner = new admob.BannerAd({
      adUnitId: 'ca-app-pub-3940256099942544/6300978111',
      size: 0
    });
    await this.banner.show();
  }

  async ionViewWillLeave() {
    await this.banner.hide();
  }

}
