import { ItemdetailPage } from './../itemdetail/itemdetail';
import { ApiProvider } from './../../providers/api/api';
import { CartPage } from './../cart/cart';
import { SearchPage } from './../search/search';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { WishlistPage } from '../wishlist/wishlist';

/**
 * Generated class for the ViewallcategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewallcategories',
  templateUrl: 'viewallcategories.html',
})
export class ViewallcategoriesPage implements OnInit{

  categoryList: any = [];
  featuredProductsList: any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public apiProvider: ApiProvider,
    public loadingController: LoadingController) {
  }


  ngOnInit(){
    // this.getAllCategories();
    this.showLoadingControllerLaunch();
    this.getAllFeaturedProducts();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewallcategoriesPage');
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

  getAllCategories(){
    const service = this.apiProvider.getProductCategories();
    service.subscribe((data) => {
        const resultado = data;
        const resultado1 = data;
        this.categoryList = resultado;
       // this.taxaNomyMakeList = resultado1;
      
    });
  }



  getAllFeaturedProducts(){
    const service = this.apiProvider.getFeaturedProducts();
    service.subscribe((data) => {
        const resultado = data;
        const resultado1 = data;
        this.featuredProductsList = resultado;     
    });
  }

  itemdetailPage(id,title) {

    
    
      

    this.navCtrl.push(ItemdetailPage, {
      id: id,
      title: title,
      // url: url,
      // status: status,
      // date:date,
      // modified:modified
      
    });

    var JSON_Obj = { "one":1, "two":2, "three":3, "four":4, "five":5 };

    // Read key
    for (var key in JSON_Obj) {
       //console.log(key1);
       console.log(JSON_Obj[key]);
   }

    console.log('Sent productsList id ' + id);
    console.log('Sent productsList title ' + title);
    // console.log('Sent productsList url ' + url);
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

}
