import { WishlistupdatedPage } from './../wishlistupdated/wishlistupdated';

/**
 *  Created By Lasting Erp 5/10/2020
 */

import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { ApiProvider } from './../../providers/api/api';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App, Platform } from 'ionic-angular';
import { ProductcategorydetailPage } from '../productcategorydetail/productcategorydetail';
import { ViewcartPage } from '../viewcart/viewcart';

  
@IonicPage()
@Component({
  selector: 'page-productcategory',
  templateUrl: 'productcategory.html',
})
export class ProductcategoryPage implements OnInit{



  obj;
  productCategoryList: any = [];
  productCategoryGridList: any = [];
  items = [];  
  productTitle:''  
  viewCartList:any = [];
  strData: string;
  countProducts:number|any; 
  buttonIcon: string ;
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public apiProvider: ApiProvider,
              public modalCtrl: ModalController,
              public app: App,
              public platform: Platform,
              public toastController: ToastController,
              public httpClient: HttpClient
              ) {

                this.getProductCategoriesApi();
                this.getProductCategoriesApi1();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VieworderPage');
    this.getProductCategoriesApi();
  }

  ngOnInit() {
    console.log('ngOnInit VieworderPage');
    this.viewCartApi();
    this.getProductCategoriesApi();
    this.getProductCategoriesApi1();  
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'ProductcategoryPage') {
          if (nav.canGoBack()){  
          } else {
              this.navCtrl.setRoot(HomePage);
          }
      }
  }); 
  }
  

  cartPage() {
    this.navCtrl.push(ViewcartPage);
  }
  
     searchPage() {  
  }

  wishlistPage() {
    this.navCtrl.push(WishlistupdatedPage);
  }

  
  addToCart(catId,strProductAdded) {
    this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + catId).subscribe((jsonResponse) => {
      this.obj = JSON.stringify(jsonResponse);
      console.log("Sent productsList response " + this.obj);
      console.log("Sent productsList id " + catId);
      this.showToastOnAddProductSingle(strProductAdded);
    });
}  



  doRefresh(event) {
    console.log('Begin async operation');
    this.getProductCategoriesApi();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 500);
  }



  getProductCategoriesApi(){
    console.log('getProductCategoriesApi called    ');
    const service = this.apiProvider.getProductCategories();
    service.subscribe((data) => {
        const resultado = data;
        this.productCategoryList = resultado;
        this.productTitle = data.title;
    });
  }

  getProductCategoriesApi1(){
    console.log('getProductCategoriesApi1 called    ');
    const service = this.apiProvider.getProductCategoriesGrid();
    service.subscribe((data) => {
        const resultado = data;
        this.productCategoryGridList = resultado;
        this.productTitle = data.title;
       
    });
  }
  itemdetailPage(catId,name) {
    this.navCtrl.push(ProductcategorydetailPage, {
      catId: catId,
      name:name
    });
    console.log('Sent productsList id ' + catId);
  }

  async viewCartApi() {            
    try {
      const service = this.apiProvider.getTest1();  
      service.subscribe(async (data) => {
        if (data) {
          const resultado = data;
          this.viewCartList = resultado;     
          this.obj = JSON.stringify(data);
          console.log('All Json Response' + this.obj);
           this.strData = 'No Products in Cart';  
    
               
          // console.log('Length of cart ' + this.viewCartList.length);
  
            
           
       
          if(this.viewCartList.length>=1) {
            console.log('Cart Filled ');
            this.countProducts = this.viewCartList.length;
             this.buttonIcon = "cart";
           }
  
           else{
            console.log('Cart Empty ');
           //  this.buttonIcon = "cart";
           this.countProducts = 'Empty';
  
           }
  
  
  
         
                                
       
        } else {
        }
  
      });
    } catch (error) {}
  }

  showToastOnAddProductSingle(strProductAdded) {
    const toast = this.toastController.create({
      message: 'Product Added in Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
      duration: 3000,
      position: "bottom",
    });   
    toast.present();  
  } 
}

