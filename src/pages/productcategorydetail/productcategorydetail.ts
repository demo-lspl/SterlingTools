import { ApiProvider } from './../../providers/api/api';
import { WishlistupdatedPage } from './../wishlistupdated/wishlistupdated';
import { ProductcategoryPage } from './../productcategory/productcategory';
import { ViewcartPage } from './../viewcart/viewcart';
import { HttpClient } from '@angular/common/http';
import { CartPage } from './../cart/cart';
import { SearchPage } from './../search/search';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, IonicPage, LoadingController, Platform, App, ToastController, AlertController } from 'ionic-angular';
import { ProductcategorydetaillistPage } from '../productcategorydetaillist/productcategorydetaillist';
import { ReadmorePage } from '../readmore/readmore';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';


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
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public httpClient: HttpClient,
              public loadingController: LoadingController,
              public platform: Platform,
              public app: App,
              public toastController: ToastController,
              public apiProvider: ApiProvider,
              public alertController: AlertController) {

      this.strId = navParams.get('catId');
      this.dynamicTermId = this.strId;  
   
      // console.log('Received productsList id ' + this.strId);
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
}      
 
readMore(id) {
  // this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
  //   this.obj = JSON.stringify(jsonResponse);
  //   console.log("Sent productsList response " + this.obj);
  //   console.log("Sent productsList id " + id);
  //   this.showToastOnAddProductSingle(strProductAdded);
  // });  

  this.navCtrl.push(ReadmorePage, {
    id: id,
    
  });
  console.log("Read More Sent product id " + id);
 
}
  

productDetailPage(id, name,image,regular_price,description) {
  this.navCtrl.push(ProductcategorydetaillistPage, {
    id: id,
    name: name,
    image:image,
    regular_price:regular_price,
    description:description
  });
  console.log("Sent product id " + id);
  console.log("Sent product name " + name);
  console.log("Sent product image " + image);
  console.log("Sent product regular_price " + regular_price);

}


  ngOnInit() {
    this.checkNetwork();
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
