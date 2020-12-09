import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, App, IonicPage, LoadingController, NavController, NavParams, Platform, Toast, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ViewcartPage } from '../viewcart/viewcart';
import { WishlistupdatedPage } from '../wishlistupdated/wishlistupdated';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { HomePage } from '../home/home';

/**
 * Generated class for the SearchdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({ 
  selector: 'page-searchdata',
  templateUrl: 'searchdata.html',
})
export class SearchdataPage implements OnInit{

  obj;
  strMake: string;  
  strModel: string;  
  strEngine: string;  
  strYear: string;  
  strProductId:string;
  strProductMake:string;
  strProductModel:string;
  strProductYear:string;
  strProductStock:string;

  strProductName:string;
  strProductImage:string;
  strProductSalePrice:string;
  strProductRegularPrice:string;
  strProductDescription:string;
  
  featuredProductsList: any = [];  
  strData: string;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle; 
  strDataServer:string;
  countProductsCart:number|any|string;
  countProductsWishList:number =0;
  countProductsCartLocal:number = 0;
  countProductsCartLocalUpdated:number = 0;
  countProductsWishlistLocalUpdated:number = 0;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient,
    public apiProvider: ApiProvider,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public app: App,
    public platform: Platform,
    public alertController: AlertController) {

      this.strProductId = navParams.get("id");  
      this.strProductName = navParams.get('name');  
      this.strProductImage = navParams.get('image');
      this.strProductRegularPrice = navParams.get('regular_price');
      this.strProductDescription = navParams.get('description');
      this.strProductMake = navParams.get('make');
      this.strProductModel = navParams.get('model');
      this.strProductYear = navParams.get('year');
      this.strProductStock = navParams.get('stock');
  }

  ngOnInit(){

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

  this.strDataServer = 'No Data';

  this.checkNetwork();

  this.platform.registerBackButtonAction(() => {
    // Catches the active view
    let nav = this.app.getActiveNavs()[0];
    let activeView = nav.getActive();                
    // Checks if can go back before show up the alert
    if(activeView.name === 'SearchproductsPage') {
        if (nav.canGoBack()){  
            this.navCtrl.setRoot(HomePage);
        } else {
        }
    }
}); 

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

addToWishList(id, name,image,description,regular_price) {
  // this.countClick++;

  //   if(this.countClick>1){
  //     console.log('Clicked More than one');
  //     this.showToastOnWishlist();
  //   }
  //   else {
  //   }
  
  let productsWishlist = [];
  if (localStorage.getItem('productsWishlist')) {
    productsWishlist = JSON.parse(localStorage.getItem('productsWishlist')); // get product list 
  } 
  console.log("Sent productsList id " + id);
  console.log("Sent productsList name " + name);
  productsWishlist.push({'ProductId' : id , 'ProductName' : name , 'ProductQuantity': '1' ,'ProductImage' : image ,'ProductDescription':description , 'ProductRegularPrice' : regular_price} ); 
  localStorage.setItem('productsWishlist', JSON.stringify(productsWishlist)); 
  ///this.buttonIcon = "home";
  this.showToastOnAddProductWishlist(name);
  this.countProductsWishlistLocalUpdated++;
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log('Code for localStorage/sessionStorage.')
  } else {
    // Sorry! No Web Storage support..
    console.log('Sorry! No Web Storage support..')
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


showToastOnAddProductWishlist(strProductAdded) {
  const toast = this.toastController.create({
    // message: this.testStr,
    message: 'Product Added in Wishlist : \n ' + strProductAdded + '\n' ,
    duration: 1000,
    position: "bottom",
  });   
  toast.present();  
} 

}
