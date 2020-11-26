

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, App, IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { ProductcategorydetailPage } from '../productcategorydetail/productcategorydetail';
import { ApiProvider } from '../../providers/api/api';




@IonicPage()
@Component({
  selector: 'page-productcategorydetaillist',
  templateUrl: 'productcategorydetaillist.html',
})
export class ProductcategorydetaillistPage implements OnInit{


  
  obj;
  strProductId:string;
  strProductName:string;
  strProductImage:string;
  strProductRegularPrice:string;
  strProductDescription:string;
  currentNumber :any = 1;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle; 
  countProductsCart:number|any|string;
  viewCartList:any = [];
  strData: string;
  buttonIcon: string ;







  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastController: ToastController,
              public httpClient: HttpClient,
              public alertController: AlertController,
              public platform: Platform,
              public app: App,
              public apiProvider: ApiProvider) {

    this.strProductId = navParams.get("id");  
    this.strProductName = navParams.get('name');
    this.strProductImage = navParams.get('image');
    this.strProductRegularPrice = navParams.get('regular_price');
    this.strProductDescription = navParams.get('description');


    

    

    
    console.log('Id received' + this.strProductId);
    console.log('Name received' + this.strProductName);
    console.log('Image received' + this.strProductName);


  }

  ngOnInit() {

    

    this.checkNetwork();
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'ProductcategorydetaillistPage') {
          if (nav.canGoBack()){                  
              this.navCtrl.setRoot(ProductcategorydetailPage);
          } else {
          }
      }  
  }); 

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


  async showToastOnCart()
  {
   const toast = await this.toastController.create({
     message: 'Minimum product quantity cannot be less than 1 ',
     duration: 400,
     position: 'bottom',
   });
   toast.present();
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
          this.showToastOnAddProductSingle(this.strProductName);
        });
  }
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
    
         if(this.viewCartList.length>=1) {
          console.log('Cart Filled ');
          this.countProductsCart = this.viewCartList.length;
           this.buttonIcon = "cart";
         }

         else{
          console.log('Cart Empty ');
         this.countProductsCart = 'Empty';

         }
  
            
         
     
       



       
                              
       
      } else {
      }

    });
  } catch (error) {}
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
