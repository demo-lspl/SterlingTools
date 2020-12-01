import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ShortPage } from '../short/short';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';
import { ItemdetailPage } from '../itemdetail/itemdetail';
import { WishlistPage } from '../wishlist/wishlist';
@Component({
  selector: 'page-shirts ',
  templateUrl: 'shirts.html'
})
export class ShirtsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
  shortPage() {
    let modal = this.modalCtrl.create(ShortPage);
    modal.present();
  }
          
 
  
  searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  
  cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }
  
  itemdetailPage() {
    this.navCtrl.push(ItemdetailPage);
  }
      wishlistPage(){
    this.navCtrl.push(WishlistPage);
    }
}
