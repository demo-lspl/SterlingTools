
import { DemoPage } from './../demo/demo';
import { ApiProvider } from './../../providers/api/api';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController, IonicPage } from 'ionic-angular';

import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { WishlistPage } from '../wishlist/wishlist';
import { ItemdetailPage } from '../itemdetail/itemdetail';

/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page implements OnInit{

  driverDetailsList: any = [];
  productsList: any = [];



  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public toastController: ToastController,
    public apiProvider: ApiProvider,
   
  ) {

  }
  
   slides = [
    {
     // title: "Under Rs. 699",
      title: "",
      description: "",
      smalltext: "",
      image: "assets/imgs/slider-12.jpg",
    },
    {
      // title: "Under Rs. 699",
      title: "",
      description: "",
      smalltext: "",
      image: "assets/imgs/slider-13.jpg",
    },
    {
     // title: "Under Rs. 699",
      title: "",
      description: "",
      smalltext: "",
      image: "assets/imgs/slider-12.jpg",
    }
  ];
  
   categoryPage(){
    this.navCtrl.push(CategoryPage);
    }
    wishlistPage(){
    this.navCtrl.push(WishlistPage);
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

  ngOnInit(){

    console.log('****');
    this.getAllProducts();
    // this.platform.backButton.subscribeWithPriority(-1, () => {
    //   if (!this.routerOutlet.canGoBack()) {
    //     App.exitApp();
    //   }
    // });
    

  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }


  ionViewWillEnter() {
    console.log('ionViewWillEnter called****');
    
  }

  

  getAllProducts(){
    console.log('getAllProducts called    ');
    const service = this.apiProvider.getProducts();
    service.subscribe((data) => {
   
        const resultado = data;
        console.log('Get response: ' + resultado);
        this.productsList = resultado;
        // tslint:disable-next-line: one-variable-per-declaration
        let size = 0, key;
        for (key in this.productsList) {
              if (this.productsList.hasOwnProperty(key)){
               size++;
               const strTitle = this.productsList[key].title;
               this.productsList[key].title = strTitle;
             }
          }
       // this.newSearch = resultado;
    });
  }

   showToastOnAlreadyLoggedIn() {
    const toast =  this.toastController.create({
      message: 'User already logged in!',
      duration: 1000,
      position: 'bottom',
    });
    toast.present();
  }


  
}

