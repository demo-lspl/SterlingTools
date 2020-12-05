import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';


/**
 * Generated class for the CategorydetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorydetail',
  templateUrl: 'categorydetail.html',
})
export class CategorydetailPage implements OnInit{

  strId: string;  
  strImage:string;
  strProductDescription:string;
  strProductRegularPrice:string;
  strProductMake:string;
  strProductModel:string;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle; 
  currentNumber :any = 1;
  countProductsCartLocal:number|any|string;
  countProductsCartLocalUpdated:number = 0;
  countProductsWishlistLocalUpdated:number = 0;
  countProductsWishList:number =0;
  countProductsCart:number|any|string;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertController: AlertController,
              public toastController: ToastController) {

    this.strId = navParams.get("id");
    this.strProductDescription = 'Product Description: ' + navParams.get("description");
    this.strImage = navParams.get("image");
    this.strProductRegularPrice = 'Product Regular Price: ' +navParams.get("regular_price");
    this.strProductMake = 'Product Make: ' +navParams.get("make");
    this.strProductModel = 'Product Model: ' +navParams.get("model");



    console.log("Received Product Id " + this.strId);
    console.log("Received Product description " + this.strProductDescription);
    console.log("Received Product image " + this.strImage);


  }




  ngOnInit(){
    this.checkNetwork();
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


  incrementValue () {
    this.currentNumber++;
  }
  
  decrementValue () {
    if(this.currentNumber <= 1){
      console.log('Issue in cart ');
      this.showToastOnCart();
    }
    else {
      console.log('success in cart ');
      this.currentNumber--;
    }
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

  async showToastOnCart()
  {
   const toast = await this.toastController.create({
     message: 'Minimum product quantity cannot be less than 1 ',
     duration: 400,
     position: 'bottom',
   });
   toast.present();
 } 

}
