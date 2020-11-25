/**
 * Generated class for the SearchproductsPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ViewcartPage } from '../viewcart/viewcart';
import { WishlistupdatedPage } from '../wishlistupdated/wishlistupdated';



@IonicPage()
@Component({
  selector: 'page-searchproducts',
  templateUrl: 'searchproducts.html',
})
export class SearchproductsPage implements OnInit{


  obj;
  strMake: string;  
  strModel: string;  
  strEngine: string;  
  strYear: string;  
  featuredProductsList: any = [];  
  strData: string;






  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClient: HttpClient,
              public apiProvider: ApiProvider,
              public toastController: ToastController,
              public loadingController: LoadingController) {

    this.strMake = navParams.get("make");
    this.strModel = navParams.get("model");
    this.strEngine = navParams.get("engine");
    this.strYear = navParams.get("year");


    console.log('ionViewDidLoad SearchproductsPage' + this.strMake);
    
  }    


  ngOnInit(){

    this.showLoadingControllerLaunch();
     
      const service = this.apiProvider.getSearchData(this.strMake,this.strModel,this.strEngine,this.strYear);
      service.subscribe((jsonResponse) => {
  
        const resultado = jsonResponse;
        this.featuredProductsList = resultado;
        this.obj = JSON.stringify(jsonResponse);
  
  
      
   
          if(resultado === null){
            this.showToastOnEmptyFeaturedProducts();
            console.log('data not available');
            this.strData = 'data not available';
          }
          else {
            // console.log('data available');
          }
        }); 
  }


  addToCart(id, name,image,description,regular_price) {
    if (localStorage.getItem("Userid value") === null) {
      let products = [];
      if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products')); // get product list 
      } 
      console.log("Sent productsList id " + id);
      console.log("Sent productsList name " + name);
      products.push({'ProductId' : id , 'ProductName' : name , 'ProductQuantity': '1' ,'ProductImage' : image ,'ProductDescription':description , 'ProductRegularPrice' : regular_price} ); 
      localStorage.setItem('products', JSON.stringify(products)); 
      this.showToastOnAddProduct(name);
    }
    
    else { 
      this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
            this.obj = JSON.stringify(jsonResponse);
            console.log("Sent productsList response " + this.obj);
            console.log("Sent productsList id " + id);
            this.showToastOnAddProductSingle(this.strMake);
          });
    }
  }

  cartPage() {
    this.navCtrl.push(ViewcartPage);
  }

  wishlistPage() {
    this.navCtrl.push(WishlistupdatedPage);
  }


  showToastOnEmptyFeaturedProducts() {
    const toast = this.toastController.create({
      message: "Products not available!",
      duration: 1000,
      position: "bottom",
    });   
    toast.present();  
  }

  showToastOnAddProduct(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'Product Added in Cart : \n ' + strProductAdded + '\n' ,
      duration: 3000,
      position: "bottom",
    });   
    toast.present();  
  }

  showToastOnAddProductSingle(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'Product Added in Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
      duration: 3000,
      position: "bottom",
    });   
    toast.present();  
  }  
  

  showLoadingControllerLaunch() {
    let loading = this.loadingController.create({
      content: "Please wait !",
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 600);
  }

}
