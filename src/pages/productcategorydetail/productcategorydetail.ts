import { ApiProvider } from './../../providers/api/api';
import { WishlistupdatedPage } from './../wishlistupdated/wishlistupdated';
import { ProductcategoryPage } from './../productcategory/productcategory';
import { ViewcartPage } from './../viewcart/viewcart';
import { HttpClient } from '@angular/common/http';
import { CartPage } from './../cart/cart';
import { SearchPage } from './../search/search';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, IonicPage, LoadingController, Platform, App, ToastController } from 'ionic-angular';

/**
 * Generated class for the ProductcategorydetailPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productcategorydetail',
  templateUrl: 'productcategorydetail.html',
})
export class ProductcategorydetailPage implements OnInit{

  obj;
  dynamicTermId:string;
  strId:string;
  productCategoryInformation: any = [];
  strData:string;
  strIdValue:string;
  strCommentStatus:string;
  strPingStatus:string;
  strProductCategoryName:string;
  strProductMake:string;

  strProductCategoryRegularPrice:string;
  strProductGuid:string;

  viewCartList: any = [];
  countProducts:number|any;
  buttonIcon: string ;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public httpClient: HttpClient,
              public loadingController: LoadingController,
              public platform: Platform,
              public app: App,
              public toastController: ToastController,
              public apiProvider: ApiProvider) {

      this.strId = navParams.get('catId');
      this.dynamicTermId = this.strId;  
   
      // console.log('Received productsList id ' + this.strId);
  }   
   
  ionViewDidLoad() {  
    console.log('ionViewDidLoad ProductcategorydetailPage');
  }
    
 
  searchPage() {
    // let modal = this.modalCtrl.create(SearchPage);
    // modal.present();
  }  
    
  cartPage() {
    // let modal = this.modalCtrl.create(CartPage);
    // modal.present();

    this.navCtrl.push(ViewcartPage);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.callProductCategoryDetail();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      //  event.target.complete();
      event.complete();
      // window.location.reload();
     // window.location.reload();
      // location.reload();
    }, 600);
  }  


  sortPopular(){
    this.showLoadingControllerLaunch();  
  }

  addToCart(id,strProductAdded) {
    this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
      this.obj = JSON.stringify(jsonResponse);
      console.log("Sent productsList response " + this.obj);
      console.log("Sent productsList id " + id);
      this.showToastOnAddProductSingle(strProductAdded);
    });

    // this.showToastOnAddProductSingle(strProductAdded);
}

  ngOnInit() {
    this.viewCartApi();
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'ProductcategorydetailPage') {
          if (nav.canGoBack()){                  
              this.navCtrl.setRoot(ProductcategoryPage);
          } else {
          }
      }  
  }); 
    this.showLoadingControllerLaunch();
    this.callProductCategoryDetail()
  } 
  
  callProductCategoryDetail() {
    this.httpClient.get('http://busybanda.com/sterling-tools/api/get_category_by_id?' +  'id=' +this.dynamicTermId)
    .subscribe((jsonResponse) => {
      
       this.productCategoryInformation = jsonResponse['result'];
       this.obj = JSON.stringify(jsonResponse);
       console.log('Particular product details json ' + this.obj.result );
  
       if (this.productCategoryInformation && this.productCategoryInformation.length) {
        console.log('Particular product details available ' );
          
       }  
      else 
      {
        this.strData = 'No data available';
        console.log('Particular product empty ' + jsonResponse['result']);
      }
     
      for (const entry of this.productCategoryInformation) {
        this.strProductCategoryName = 'Name: ' + entry.name;
        this.strProductMake = entry.attribute.pa_make;
        console.log(entry.attribute.pa_make);
      }

      for (const entry of this.productCategoryInformation) {
         console.log(entry.name); // val1 and etc...
      }
    });
  }


  showLoadingControllerLaunch() {
    let loading = this.loadingController.create({
      content: 'Please wait!'
    });
  
    loading.present();
    // this.callRegisterApi();
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  // showToastOnAddProductSingle(strProductAdded) {
  //   const toast = this.toastController.create({
  //     // message: this.testStr,
  //     message: 'Product Added in Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
  //     duration: 3000,
  //     position: "bottom",
  //   });   
  //   toast.present();  
  // }

  showToastOnAddProductSingle(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'In Process',
      duration: 1500,
      position: "bottom",
    });     
    toast.present();  
  }
          
  wishlistPage() {
    this.navCtrl.push(WishlistupdatedPage); 
  }

  async viewCartApi() {            
    try {
      const service = this.apiProvider.getCartDetails();  
      service.subscribe(async (data) => {
        if (data) {
          const resultado = data;
          this.viewCartList = resultado;     
          this.obj = JSON.stringify(data);
          console.log('All Json Response' + this.obj);
           // this.strData = 'No Products in Cart';  
           if(this.viewCartList.length>=1) {
            console.log('Cart Filled ');
            this.countProducts = this.viewCartList.length;
             this.buttonIcon = "cart";
           }
  
           else{
            console.log('Cart Empty ');
           this.countProducts = 'Empty';
           }
        } else {
        }
  
      });
    } catch (error) {}
  }

  sortDropDownValue() {
    console.log("Selected sortDropDownValue");
    this.showToastOnSortingCategory();
    this.productCategoryInformation.sort((a, b) => (a.name > b.name) ? 1 : -1)
    console.log('Sorted:   ' + this.productCategoryInformation);
 
    var points = [5.0, 3.7, 1.0, 2.9, 3.4, 4.5];
    var output :any  = [];
    for (let i = 0; i < points.length; i++) {
      	points.sort(function (a, b) {
		    return b - a   
	  });
	  output += points[i] + "<br>";
}
    console.log(output);
  }
  

  showToastOnSortingCategory() {
    let loading = this.loadingController.create({
      content: 'Please wait...'
    });
  
    loading.present();
    
    setTimeout(() => {
      loading.dismiss();
    }, 700)

}




}
