import { SearchPage } from './../search/search';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusPage');
  }

  searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }

}
