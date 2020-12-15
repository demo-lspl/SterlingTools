import { WishlistupdatedPage } from './../wishlistupdated/wishlistupdated';
import { HomePage } from './../home/home';
import { ViewcartPage } from './../viewcart/viewcart';
import { ApiProvider } from './../../providers/api/api';
import { VieworderdetailsPage } from './../vieworderdetails/vieworderdetails';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, Platform, App, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';


  

@Component({
  selector: 'page-myorder_2 ',
  templateUrl: 'myorder_2.html'
})
export class Myorder_2Page implements OnInit {

  obj;
  countProducts:number|any;
  strData: string;
  buttonIcon: string ;
  viewOrdersList: any = [];
  viewCartList:any = [];
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle; 
  countProductsCart:number|any|string;
  countProductsCartLocal:number|any|string;
  countProductsCartLocalUpdated:number | any= 0;
  countProductsWishlistLocalUpdated:number | any= 0;
  countProductsWishList:number =0;
  strResponse:string;
  strDataServer:string;

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              public apiProvider: ApiProvider,
              public platform: Platform,
              public app: App,
              public alertController: AlertController,
              public loadingController: LoadingController,
              public toastController: ToastController,
              public httpClient: HttpClient) {
  
  }

  ngOnInit() {
    this.checkNetwork();
    this.viewCartApi();
    this.viewOrdersApi();
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'Myorder_2Page') {
          if (nav.canGoBack()){
          } else {
              this.navCtrl.setRoot(HomePage);
          }
      }
  });
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
}   
  
     cartPage() {
    this.navCtrl.setRoot(ViewcartPage);
  }
  
     searchPage() {
 
  }


  doRefresh(event) {
    console.log('Begin async operation');
    this.viewOrdersApi();
    this.viewCartApi();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      //  event.target.complete();
      event.complete();
    
    }, 500);
  }

  


  async viewOrdersApi() {
    const loader = await this.loadingController.create({
      content: 'Please wait fetching orders!',
    });

    await loader.present();
    loader.present().then(() => {      
      // const service = this.apiProvider.getOrders();   
      // service.subscribe((jsonResponse) => {      
       this.httpClient.get('http://busybanda.com/sterling-tools/api/get_shop_order/').subscribe(jsonResponse => {
      if(jsonResponse){
        this.viewOrdersList = jsonResponse['result'];
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

  
  wishlistPage() {
    this.navCtrl.push(WishlistupdatedPage);
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
  
            
           
          // if(this.viewCartList.length>=1) {
          //   console.log('Cart Filled ');
          //   this.countProductsCart = this.viewCartList.length;
          //    this.buttonIcon = "cart";
          //  }
  
          //  else{
          //   console.log('Cart Empty ');
          //  this.countProductsCart = 'Empty';
  
          //  }
  
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

  showLoaderPageLoad() {
    let loading = this.loadingController.create({
      content: 'Please wait loading Orders!'
    });
  
    loading.present();
  
  
    setTimeout(() => {
      loading.dismiss();
    }, 1700);
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
        this.showLoaderPageLoad();
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
