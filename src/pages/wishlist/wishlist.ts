import { ViewcartPage } from './../viewcart/viewcart';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { CartPage } from '../cart/cart';
@Component({
  selector: 'page-wishlist ',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {

  constructor(public navController: NavController, public modalCtrl: ModalController) {

  }
  
    cartPage() {
    // let modal = this.modalCtrl.create(CartPage);
    // modal.present();
    this.navController.push(ViewcartPage);
  }

}
