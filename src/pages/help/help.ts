import { HomePage } from './../home/home';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, Platform, AlertController } from 'ionic-angular';

import { App } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { WishlistPage } from '../wishlist/wishlist';

@Component({
  selector: 'page-help ',
  templateUrl: 'help.html'  
})
export class HelpPage implements OnInit{

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              public platform: Platform,
              public  app: App,
              public _alertCtrl: AlertController
              ) {
  
               
  }
     
  
  ngOnInit(){
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'HelpPage') {
          if (nav.canGoBack()){
          } else {
              this.navCtrl.setRoot(HomePage);
          }
      }
  });
  }

//   ionViewCanLeave(): Promise<boolean> {
//     return new Promise(resolve => {
//         this._alertCtrl.create({
//             title: 'Confirm leaving',
//             message: 'There is unsave work, do you like to continue leaving?',
//             buttons: [{
//                 text: 'Leave',
//                 handler: () => {
//                     resolve(true);
//                 }
//             }, {
//                 text: 'Stay',
//                 handler: () => {
//                     resolve(false);
//                 }
//             }]
//         }).present();
//     });
// }
     cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }   
  
     searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  
      wishlistPage(){
    this.navCtrl.push(WishlistPage);
    }


}
