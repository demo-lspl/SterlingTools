/**
 * Generated class for the SearchproductsPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, App, IonicPage, LoadingController, NavController, NavParams, Platform, Toast, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ViewcartPage } from '../viewcart/viewcart';
import { WishlistupdatedPage } from '../wishlistupdated/wishlistupdated';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { HomePage } from '../home/home';
import { MakeresponsePage } from '../makeresponse/makeresponse';




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
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle; 
  strDataServer:string;
  countProductsCart:number|any|string;
  countProductsWishList:number =0;
  countProductsCartLocal:number = 0;
  countProductsCartLocalUpdated:number|any = 0;
  countProductsWishlistLocalUpdated:number | any = 0;
  strResponse:string;

  
    
 

 

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClient: HttpClient,
              public apiProvider: ApiProvider,
              public toastController: ToastController,
              public loadingController: LoadingController,
              public app: App,
              public platform: Platform,
              public alertController: AlertController) {

    this.strMake = navParams.get("make");
    this.strModel = navParams.get("model");
     this.strEngine = navParams.get("engine1");
    this.strYear = navParams.get("year");

    // if(this.strEngine = ''){
    //   console.log('ionViewDidLoad SearchproductsPage strEngine empty' );
    // }

    // else {
    //   console.log('ionViewDidLoad SearchproductsPage strEngine filled' + this.strEngine);
    // }

    if(this.strEngine){
      this.strEngine = navParams.get("engine1");

    }

    else  if(this.strEngine = ''){
         console.log('ionViewDidLoad SearchproductsPage strEngine empty' );
       }

    console.log('received make SearchproductsPage' + this.strMake);
    console.log('received model SearchproductsPage' + this.strModel);
    console.log('received engine SearchproductsPage' + this.strEngine);
    console.log('received year SearchproductsPage' + this.strYear);



    console.log("Received product make " + this.strMake);
    
  }    
   

  ngOnInit(){

    this.getProductsSearchApi();

    if(this.countProductsWishlistLocalUpdated===0){
      this.countProductsWishlistLocalUpdated = '';
      console.log('Entered');
    }

     if(this.countProductsCartLocalUpdated===0){
      this.countProductsCartLocalUpdated = '';
      console.log('Entered..');
    }

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
     
      // const service = this.apiProvider.getSearchData(this.strMake,this.strModel,this.strEngine,this.strYear);
      // service.subscribe((jsonResponse) => {
  
      //   const resultado = jsonResponse;
      //   this.featuredProductsList = resultado;
      //   this.obj = JSON.stringify(jsonResponse);
      //     if(resultado === null){
      //       this.showToastOnEmptyFeaturedProducts();
      //       console.log('data not available');
      //       this.strData = 'data not available';
      //     }
      //     else {
      //       // console.log('data available');
      //     }
      //   }); 
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

  moreInformationDetail(id, name,image,description,regular_price,make,model,year) {
    this.navCtrl.push(MakeresponsePage, {
      id: id,
      name: name,
      image:image,
      description:description,
      regular_price:regular_price,
      make:make,
      model:model,
      year:year,
    });
    console.log("Sent product id " + id);
    console.log("Sent product name " + name); 
    console.log("Sent product name " + regular_price);
    
  }

  async getProductsSearchApi() {
    const loader = await this.loadingController.create({
      content: 'Please wait fetching data!',
    });

    await loader.present();
    loader.present().then(() => {      
      // const service = this.apiProvider.getOrders();   
      // service.subscribe((jsonResponse) => {      
        this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_mmey_search?make=' + this.strMake + '&model=' + this.strModel + '&engine=' + this.strEngine  + '&year=' + this.strYear).subscribe(jsonResponse => {
      if(jsonResponse){
        this.featuredProductsList = jsonResponse['result'];
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
          // this.showToastOnProductError(error);
        });
    });
  }
}
