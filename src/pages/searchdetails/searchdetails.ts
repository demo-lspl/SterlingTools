import { Component, OnInit } from '@angular/core';
import { AlertController, App, IonicPage, LoadingController, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';




@IonicPage()
@Component({
  selector: 'page-searchdetails',
  templateUrl: 'searchdetails.html',
})
export class SearchdetailsPage implements OnInit{


  strId: string;  
  strImage:string;
  strProductDescription:string;
  strProductRegularPrice:string;
  strProductName:string;
  strProductSize:string;
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
  obj;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertController: AlertController,
              public platform: Platform,
              public app: App,
              public toastController: ToastController,
              public httpClient: HttpClient,
              public loadingController: LoadingController)
   
  {
    this.strId = navParams.get("id");
    this.strProductDescription = 'Product Description: ' + navParams.get("description");

    this.strProductName = 'Product Name: ' + navParams.get("name");
    this.strProductSize = 'Product Size: ' + navParams.get("size");

    this.strImage = navParams.get("image");
    this.strProductRegularPrice = 'Product Regular Price: ' +navParams.get("regular_price");
    this.strProductMake = 'Product Make: ' +navParams.get("make");
    this.strProductModel = 'Product Model: ' +navParams.get("model");
  }

ngOnInit(){

  this.checkNetwork();
  this.platform.registerBackButtonAction(() => {
    // Catches the active view
    let nav = this.app.getActiveNavs()[0];
    let activeView = nav.getActive();                
    // Checks if can go back before show up the alert
    if(activeView.name === 'SearchdetailsPage') {
        if (nav.canGoBack()){  
            this.navCtrl.setRoot(HomePage);
        } else {
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

addToWishList(id, name,image,description,regular_price,x) {

  // this.visible = !this.visible;
  // this.countClick++;

  //   if(this.countClick>1){
  //     console.log('Clicked More than one');
  //     this.showToastOnWishlist();
  //   }
  //   else {
  //   }

  //x.classList.toggle("fa-thumbs-down");

 // document.getElementById("myDIV").classList.add("mystyle");
 
  
  let productsWishlist = [];
  if (localStorage.getItem('productsWishlist')) {
    productsWishlist = JSON.parse(localStorage.getItem('productsWishlist')); // get product list 
  } 
  console.log("Sent productsList id " + id);
  console.log("Sent productsList name " + name);
  productsWishlist.push({'ProductId' : id , 'ProductName' : name , 'ProductQuantity': '1' ,'ProductImage' : image ,'ProductDescription':description , 'ProductRegularPrice' : regular_price} ); 
  localStorage.setItem('productsWishlist', JSON.stringify(productsWishlist)); 
 // this.buttonIcon = "home";
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

showToastOnAddProductWishlist(strProductAdded) {
  const toast = this.toastController.create({
    // message: this.testStr,
    message: 'Product Added in Wishlist : \n ' + strProductAdded + '\n' ,
    duration: 1000,
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

async showToastOnCart()
    {
     const toast = await this.toastController.create({
       message: 'Minimum product quantity cannot be less than 1 ',
       duration: 400,
       position: 'bottom',
     });
     toast.present();
   } 

   showLoaderPageLoad() {
    let loading = this.loadingController.create({
      content: 'Please wait loading details!'
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
        },
      },
    ],
  });

  alert.present();
}

}
