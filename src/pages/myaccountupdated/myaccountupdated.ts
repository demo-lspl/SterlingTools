/**
 *  Created By Lasting Erp
 */


import { ViewcartPage } from './../viewcart/viewcart';
import { WishlistupdatedPage } from './../wishlistupdated/wishlistupdated';
import { HomePage } from './../home/home';
import { ApiProvider } from './../../providers/api/api';
import { HttpClient } from '@angular/common/http';
import { LoadingController, Platform, ToastController, App, AlertController } from 'ionic-angular';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';


  

@IonicPage()
@Component({
  selector: 'page-myaccountupdated',
  templateUrl: 'myaccountupdated.html',
})
export class MyaccountupdatedPage implements OnInit {
  account: string = "profile";
  emailAddress;
  userRegistered;
  obj;
  strDataUserLogin:string;
  strDataUserEmail:string;
  strDataUserRegistered: string;
  strDataUserTest:string;
  strDataUserTest1:string;
  strDisplayName:string;
  strResult:string;
  strStatus:string;
  toggleState:boolean;  
  viewCartList: any = [];
  strData: string;
  countProducts:number|any;
  buttonIcon: string ;
  strAddress: string; 
  strCity:string
  strState:string;
  strPostalCode:string;  
  strPhone:string;
  strAddressUpdated= '';  
  strCityUpdated='';
  strStateUpdated='';
  strPostalCodeUpdated='';
  strPhoneNoUpdated='';  
  strResponseCode: string; 
  userDataValue:number| string;
  strUserData: string;
  strId: string;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle; 
  countProductsCartLocal:number|any|string;
  countProductsCartLocalUpdated:number = 0;
  countProductsWishlistLocalUpdated:number = 0;
  countProductsWishList:number =0;
  countProductsCart:number|any|string;






  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public loadingController: LoadingController,
              public httpClient: HttpClient,
              public platform: Platform,
              public toastController: ToastController,
              public apiProvider: ApiProvider,
              public app: App,
              public alertController: AlertController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaccountupdatedPage');
  }

  ngOnInit(){ 

    this.viewCartApi();
    this.showLoaderPageLoad();
    this.getProfileApi();  
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
                        


  // getProfileApi(){
  //   this.httpClient.get('http://busybanda.com/sterling-tools/api/get_user_details?' +  'user_id=' + localStorage.getItem('Userid value')).subscribe((jsonResponse) => {
  //         this.obj = JSON.stringify(jsonResponse);
  //         const parsedData = JSON.parse(this.obj);
  //         status = parsedData.Status;
  //         if (localStorage.getItem("Userid value") === null) {
  //           console.log('Issue');
  //         }  
 
  //         else {
  //           console.log('Success' +this.obj);
  //         }
  //         this.strAddress = parsedData.result.address;
  //         this.strCity = parsedData.result.city;
  //         this.strState = parsedData.result.state;
  //         this.strPostalCode = parsedData.result.postalcode;
  //         this.strPhone = parsedData.result.phone;

  //         console.log('Fetched address' + this.strAddress);
  //       });
  //       this.platform.registerBackButtonAction(() => {
  //         // Catches the active view
  //         let nav = this.app.getActiveNavs()[0];
  //         let activeView = nav.getActive();                
  //         // Checks if can go back before show up the alert
  //         if(activeView.name === 'MyaccountupdatedPage') {
  //             if (nav.canGoBack()){
  //             } else {
  //                 this.navCtrl.setRoot(HomePage);
  //             }
  //         }
  //     });
  // }


  async getProfileApi() {
    const loader = await this.loadingController.create({
      content: 'Please wait loading profile!',
    });

    await loader.present();
    loader.present().then(() => {      
      // const service = this.apiProvider.getOrders();   
      // service.subscribe((jsonResponse) => {      
        this.httpClient.get('http://busybanda.com/sterling-tools/api/get_user_details?' +  'user_id=' + localStorage.getItem('Userid value')).subscribe((jsonResponse) => {
      if(jsonResponse){
        this.obj = JSON.stringify(jsonResponse);
          const parsedData = JSON.parse(this.obj);
          status = parsedData.Status;
          if (localStorage.getItem("Userid value") === null) {
            console.log('Issue');
          }  
 
          else {
            console.log('Success' +this.obj);
          }
          this.strAddress = parsedData.result.address;
          this.strCity = parsedData.result.city;
          this.strState = parsedData.result.state;
          this.strPostalCode = parsedData.result.postalcode;
          this.strPhone = parsedData.result.phone;

          console.log('Fetched address' + this.strAddress);
        loader.dismiss(); 
      }

      // const myURL_body = jsonResponse['result'];
      // this.strResponse = myURL_body;

    //  if(this.strResponse = 'null'){
    //   console.log('details available obj empty ' );
    //   this.strDataServer = 'No data';
    //  }
    //   else { 
    //     console.log('details not available ' );
    //   }
      },
        error => { 
          console.log(error);
          this.showToastOnProductError(error);
        });
    });
  }

  async loginBtnClick() {
    console.log('Login Button clicked.');   
  
     if(this.strAddress=== '')
    {
        this.showToastOnEmptyAddress();
    }
    else if(this.strCity=== '')
    {
      this.showToastOnEmptyCity();
    }  

    else if(this.strState=== '')
    {
      this.showToastOnEmptyState();
    }  
    else if(this.strPostalCode=== '')
    {
      this.showToastOnEmptyPostalCode();
    }  
    else if(this.strPhone=== '')
    {
      this.showToastOnEmptyPhone();
    }  
   

    // else if ((await Network.getStatus()).connectionType === 'none') {
    //   this.showNetworkAlert();
    //   console.log('Network status not available', this.networkStatus);
    // } 

    
    // Credentials filled 
    else 
     {
      this.showLoadingControllerLaunch();
     
     }
  } 

  showLoadingControllerLaunch() {
    let loading = this.loadingController.create({
      content: 'Please wait!'
    });
  
    loading.present();
    this.callUpdateProfileApi();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1000); 
  }

  public callUpdateProfileApi() {

     this.strAddressUpdated = this.strAddress;
     this.strCityUpdated = this.strCity;
     this.strStateUpdated = this.strState;
     this.strPostalCodeUpdated = this.strPostalCode;
     this.strPhoneNoUpdated = this.strPhone;

     
    console.log('callUpdateProfileApi called' + this.strAddress);
     
    this.httpClient.get('http://busybanda.com/sterling-tools/api/set_user_details?' +  'user_id=' + localStorage.getItem('Userid value')+  '&address=' + this.strAddress + '&city=' + this.strCity +  '&state=' + this.strState +  '&postalcode=' + this.strPostalCode +  '&phone=' + this.strPhone).subscribe((response) => {
    
    this.obj = JSON.stringify(response);
    const parsedData = JSON.parse(this.obj);
    status = parsedData.Status;
    this.strResponseCode = parsedData.RespCode;

    console.log('Updated profile' + this.obj)

    this.getProfileApi();
    
 
      






    


   
    if(this.obj.includes('Updated'))
    {
      console.log('Json Response success ' + this.obj)
      console.log('Json Response status ' + this.obj.status)
      this.navCtrl.setRoot(HomePage);
    }

    else
     {
      this.showLoadingControllerFailure();
      console.log('Json Response Failure ' + this.obj)
    }
     });
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
          //  if(this.viewCartList.length>=1) {
          //   console.log('Cart Filled ');
          //   this.countProducts = this.viewCartList.length;
          //    this.buttonIcon = "cart";
          //  }
  
          //  else{
          //   console.log('Cart Empty ');
          //  this.countProducts = 'Empty';
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


  
  wishlistPage() {
    this.navCtrl.push(WishlistupdatedPage);
  }

  cartPage() {
    this.navCtrl.push(ViewcartPage);
  }
                                                     


  showLoaderPageLoad() {
    let loading = this.loadingController.create({
      content: 'Please wait loading profile!'
    });
  
    loading.present();
  
  
    setTimeout(() => {
      loading.dismiss();
    }, 1700);
  }


 async showToastBackPress() {
  const toast = await this.toastController.create({
    message: 'Back press account page',
    duration: 5000,
    position: 'bottom',
  });
  toast.present();
  
  
   
  }

  update(){
    console.log("invoking notification");
    this.toggleState = true;
   }

   async showToastOnEmptyAddress()
     {
      const toast = await this.toastController.create({
        message: 'Enter Address ',
        duration: 3000,
        position: 'bottom',
      });
      toast.present();
    }

    async showToastOnEmptyCity()
    {
     const toast = await this.toastController.create({
       message: 'Enter City ',
       duration: 3000,
       position: 'bottom',
     });
     toast.present();
   }

   async showToastOnEmptyState()
   {
    const toast = await this.toastController.create({
      message: 'Enter State ',
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  async showToastOnEmptyPostalCode()
  {
   const toast = await this.toastController.create({
     message: 'Enter Postal Code ',
     duration: 3000,
     position: 'bottom',
   });
   toast.present();
 }

 async showToastOnEmptyPhone()
 {
  const toast = await this.toastController.create({
    message: 'Enter Phone ',
    duration: 3000,
    position: 'bottom',
  });
  toast.present();
}

async showLoadingControllerFailure() 
{
  const toast = await this.toastController.create({
    message: 'Invalid username or password',
    duration: 6000,
    position: 'bottom',
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

showToastOnProductError(strProductAdded) {
  const toast = this.toastController.create({
    // message: this.testStr,
    message: 'Error' + strProductAdded,
    duration: 3000,
    position: "bottom",
  });   
  toast.present();  
}

 

}
