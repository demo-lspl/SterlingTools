import { ItemdetailPage } from './../itemdetail/itemdetail';
import { ApiProvider } from './../../providers/api/api';
import { CartPage } from './../cart/cart';
import { WishlistPage } from './../wishlist/wishlist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { CategoryPage } from '../category/category';

/**
 * Generated class for the CategoryupdatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoryupdated',
  templateUrl: 'categoryupdated.html',
})
export class CategoryupdatedPage {

  productsList: any = [];
  taxaNomyMakeList: any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public apiProvider: ApiProvider) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryupdatedPage');
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


  categoryPage(){
    this.navCtrl.push(CategoryPage);
    }

  itemdetailPage(id,title,url,status,date,modified) {

  
    
      

    this.navCtrl.push(ItemdetailPage, {
      id: id,
      title: title,
      url: url,
      status: status,
      date:date,
      modified:modified
      
    });

    var JSON_Obj = { "one":1, "two":2, "three":3, "four":4, "five":5 };

    // Read key
    for (var key in JSON_Obj) {
       //console.log(key1);
       console.log(JSON_Obj[key]);
   }

 
   

    console.log('Sent productsList id ' + id);
    console.log('Sent productsList title ' + title);
    console.log('Sent productsList url ' + url);
  
     
    
  }


  showLoadingControllerLaunch() {
    let loading = this.loadingController.create({
      content: 'Please wait !'
    });
  
    loading.present();
    
  
    setTimeout(() => {
      loading.dismiss();
    }, 600);
  }

  getAllProducts(){
    // console.log('getAllProducts called    ');
    const service = this.apiProvider.getProducts();
    service.subscribe((data) => {
   
        const resultado = data;

        const resultado1 = data;
       // console.log('Get response: ' + resultado);
        this.productsList = resultado;

        this.taxaNomyMakeList = resultado1;
     
    });
  }

}
