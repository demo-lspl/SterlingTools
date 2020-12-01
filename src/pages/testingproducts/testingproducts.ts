import { Storage } from '@ionic/storage';
import { ApiProvider } from './../../providers/api/api';
import { WishlistPage } from './../wishlist/wishlist';
import { ItemdetailPage } from './../itemdetail/itemdetail';
import { CartPage } from './../cart/cart';
import { SearchPage } from './../search/search';
import { ShortPage } from './../short/short';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

/**
 * Generated class for the TestingproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testingproducts',
  templateUrl: 'testingproducts.html',
})
export class TestingproductsPage {

  selectProduct: any;
  productCount: number = 1;
  cartItems: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cartService: ApiProvider, public toastCtrl: ToastController,
    public storage: Storage) {
    if (this.navParams.get("product")) {
      window.localStorage.setItem('selectedProduct', JSON.stringify(this.navParams.get("product")));

     
    }
 
 
  }
  ionViewDidEnter(){
    this.getSingleProduct();
  }
 
  
  getSingleProduct() {
    if (window.localStorage.getItem('selectedProduct') != 'undefined') {
      this.selectProduct = JSON.parse(window.localStorage.getItem('selectedProduct'))
      console.log('Ionic Storage ' + this.selectProduct);
    }
  }
 
  ionViewDidLoad() {
    this.selectProduct = this.navParams.get("product");
    // this.cartService.getCartItems().then((val) => {
    //   this.cartItems = val;
    // })
 
  }
 
  decreaseProductCount() {
    if (this.productCount > 1) {
      this.productCount--;
    }
 
  }
 
  incrementProductCount() {
    this.storage.set('stuff','My stuff')
    .then(()=> this.storage.get('stuff'))
    .then((stuff)=>console.log(stuff));


    localStorage.setItem('selectedProduct', JSON.stringify(this.navParams.get("product")));


    this.productCount++;

  
 
  }
 
  addToCart(product) {
    var productPrice = this.productCount * parseInt(product.price);
    let cartProduct = {
      product_id: product.id,
      name: product.name,
      thumb: product.thumb,
      count: this.productCount,
      totalPrice: productPrice
    };
    // this.cartService.addToCart(cartProduct).then((val) => {
    //   this.presentToast(cartProduct.name);
    // });
  }
 
 
  presentToast(name) {
    let toast = this.toastCtrl.create({
      message: `${name} has been added to cart`,
      showCloseButton: true,
      closeButtonText: 'View Cart'
    });
 
    toast.onDidDismiss(() => {
      this.navCtrl.push('CartPage');
    });
    toast.present();
  }
 
 
}