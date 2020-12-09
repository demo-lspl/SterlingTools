
/**
 *  Created By Lasting Erp 5/10/2020
 */
 
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { ApiProvider } from './../../providers/api/api';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App, Platform } from 'ionic-angular';
import { ProductcategorydetailPage } from '../productcategorydetail/productcategorydetail';
import { ViewcartPage } from '../viewcart/viewcart';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { WishlistupdatedPage } from './../wishlistupdated/wishlistupdated';



   
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
  constresultado : string;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle; 
  countProductsCart:number|any|string;
  countProductsCartLocal:number|any|string;
  countProductsCartLocalUpdated:number = 0;
  countProductsWishlistLocalUpdated:number = 0;
  countProductsWishList:number =0;
  strResponse:string;
  strDataServer:string;


  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public apiProvider: ApiProvider,
              public modalCtrl: ModalController,
              public app: App,
              public platform: Platform,
              public toastController: ToastController,
              public httpClient: HttpClient,
              public loadingController: LoadingController,
              public alertController: AlertController
              ) {

                
               
  }

  
  ngOnInit() {
    this.checkNetwork();
    this.viewCartApi();
    this.getProductCategoriesApi();  
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

       /*
          Local Wishlist
      */
     var productsWishlistarrayFromStorage = JSON.parse(localStorage.getItem('productsWishlist'));
     if (productsWishlistarrayFromStorage != null && productsWishlistarrayFromStorage.length > 0) {
       var arrayLength = productsWishlistarrayFromStorage.length;
       this.countProductsWishList = arrayLength;
       this.countProductsWishlistLocalUpdated = this.countProductsWishList;
       console.log('Local Wishlist filled ' + this.countProductsWishlistLocalUpdated);
 
     }        
  
     else {
       console.log('Local Wishlist empty ' );
     }
     /*
         Local Cart
     */
    var productsCartarrayFromStorage = JSON.parse(localStorage.getItem('products'));
    if (productsCartarrayFromStorage != null && productsCartarrayFromStorage.length > 0) {
      var arrayLength1 = productsCartarrayFromStorage.length;
      this.countProductsCart = arrayLength1;
      this.countProductsCartLocalUpdated = this.countProductsCart;
      console.log('Local Cart filled ' + this.countProductsCartLocalUpdated);
    }

    else {
      console.log('Local Cart empty ' );
    }

  }
      
  
  cartPage() {
    this.navCtrl.push(ViewcartPage);
  }

  sortDropDownValue() {
    console.log("Selected sortDropDownValue");
    this.showToastOnSortingCategory();
    this.productCategoryGridList.sort((a, b) => (a.name > b.name) ? 1 : -1)
    console.log('Sorted:   ' + this.productCategoryGridList);
 
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

searchPage() {  
  }

  wishlistPage() {
    this.navCtrl.push(WishlistupdatedPage);
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
    this.showToastOnAddProductLocal(name);
    this.countProductsCartLocalUpdated++;

  
    
  }  
  
  else { 
    this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
          this.obj = JSON.stringify(jsonResponse);
          console.log("Sent productsList response " + this.obj);
          console.log("Sent productsList id " + id);
          this.showToastOnAddProductServer(name);
          this.countProductsCart++;
        });
  }   
}  


  doRefresh(event) {
    console.log('Begin async operation');
    this.getProductCategoriesApi();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 500);
  }




  // getProductCategoriesApi1(){
  //   const service = this.apiProvider.getProductCategoriesGrid();
  //   service.subscribe((data) => {
  //       this.constresultado = data;
  //       this.productCategoryGridList = this.constresultado;
  //       this.productTitle = data.title;
       
  //   });
  // }
  async getProductCategoriesApi() {
    const loader = await this.loadingController.create({
      content: 'Please wait fetching product categories!',
    });

    await loader.present();
    loader.present().then(() => {      
      // const service = this.apiProvider.getOrders();   
      // service.subscribe((jsonResponse) => {      
       this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_category_grid').subscribe(jsonResponse => {
      if(jsonResponse){
        this.productCategoryGridList = jsonResponse['result'];
        this.obj = JSON.stringify(jsonResponse);
        console.log('details available '+ this.obj );
        loader.dismiss(); 
      }

      const myURL_body = jsonResponse['result'];
      this.strResponse = myURL_body;

     if(this.strResponse = 'null'){
      console.log('details available obj empty ' );
      this.strDataServer = 'No data';
     }
      else { 
        console.log('details not available ' );
      }
      },
        error => { 
          console.log(error);
          this.showToastOnProductError(error);
        });
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
      const service = this.apiProvider.getCartDetails();  
      service.subscribe(async (data) => {
        if (data) {
          const resultado = data;
          this.viewCartList = resultado;     
          this.obj = JSON.stringify(data);
          console.log('All Json Response' + this.obj);
           this.strData = 'No Products in Cart';  
    
               
          // console.log('Length of cart ' + this.viewCartList.length);
  
            
           
       
          if(this.viewCartList){
            this.countProductsCartLocalUpdated = this.viewCartList.length;
  
          }
  
          else {
            this.countProductsCartLocalUpdated = this.countProductsCart;
  
          }
  
  
  
         
                                
       
        } else {
        }
  
      });
    } catch (error) {}
  }
  showToastOnProductError(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'Error' + strProductAdded,
      duration: 3000,
      position: "bottom",
    });   
    toast.present();  
  }
  showToastOnAddProductLocal(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'Product Added in Local Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
      duration: 3000,
      position: "bottom",
    });   
    toast.present();  
  }  
  

  showToastOnAddProductServer(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'Product Added in Server : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
      duration: 1000,
      position: "bottom",
    });   
    toast.present();   
  }  

  showToastOnAddProductSingle(strProductAdded) {
    const toast = this.toastController.create({
      message: 'Product Added in Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
      duration: 3000,
      position: "bottom",
    });   
    toast.present();  
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

public async checkNetwork() {
  const { Network } = Plugins;
    this.networkListener = Network.addListener(
      'networkStatusChange',
      (status) => {
        console.log('Network status HomePage here', status);
        this.networkStatus = status;
      }
    );

    if ((await Network.getStatus()).connectionType === 'none') {
      this.showNetworkAlert();
      console.log('Network status not available', this.networkStatus);
    } else {
      this.networkStatus = await Network.getStatus();
      // this.showAlert();
      console.log('Network status available', this.networkStatus);
      //this.router.navigate(['/invoices']);
     // this.router.navigate(['/managecard']);
    }
  
}


private async showNetworkAlert(): Promise<void> {
  // omitted;
  const alert = await this.alertController.create({
    title: 'Network Issues!',
    message: 'There are issues in network connectivity',

    buttons: [
      {
        text: 'Ok',
        handler: (ok) => {
          console.log('Confirm Ok');
          // resolve('ok');
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (cancel) => {
          console.log('Confirm Cancel');
          alert.dismiss();
          // resolve('cancel');
        },
      },
    ],
  });

  alert.present();
}

}



