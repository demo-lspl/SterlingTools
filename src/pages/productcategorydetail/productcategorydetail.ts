/**
 * Generated class for the ProductcategorydetailPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { ApiProvider } from './../../providers/api/api';
import { WishlistupdatedPage } from './../wishlistupdated/wishlistupdated';
import { ProductcategoryPage } from './../productcategory/productcategory';
import { ViewcartPage } from './../viewcart/viewcart';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, IonicPage, LoadingController, Platform, App, ToastController, AlertController } from 'ionic-angular';
import { ProductcategorydetaillistPage } from '../productcategorydetaillist/productcategorydetaillist';
import { ReadmorePage } from '../readmore/readmore';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';




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
  countProductsCart:number|any|string;
  countProductsCartLocal:number|any|string;
  countProductsCartLocalUpdated:number | any = 0;
  countProductsWishlistLocalUpdated:number  | any= 0;
  countProductsWishList:number =0;


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
    this.buttonIcon = "home";
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

  showToastOnAddProductWishlist(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'Product Added in Wishlist : \n ' + strProductAdded + '\n' ,
      duration: 1000,
      position: "bottom",
    });   
    toast.present();  
  }  
  
//   addToCart(id,strProductAdded) {
//     this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
//       this.obj = JSON.stringify(jsonResponse);
//       console.log("Sent productsList response " + this.obj);
//       console.log("Sent productsList id " + id);
//       this.showToastOnAddProductSingle(strProductAdded);
//       this.countProductsCartLocalUpdated++;
//     }); 
// } 
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
          // this.countProductsCart++;
          this.countProductsCartLocalUpdated++;
        });
  }
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
    

productDetailPage(id, name,image,regular_price,description,make,model,year) {
  this.navCtrl.push(ProductcategorydetaillistPage, {
    id: id,
    name: name,
    image:image,  
    regular_price:regular_price,
    description:description,
    make:make,
    model:model,
    year:year,
   
  });
  console.log("Sent product id " + id);
  console.log("Sent product name " + name);
  console.log("Sent product image " + image);
  console.log("Sent product regular_price " + regular_price);
  console.log("Sent product description " + description);
  console.log("Sent product make " + make);
  console.log("Sent product model " + model);
  console.log("Sent product year " + year);


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
               console.log('test');

          } else {  
             this.navCtrl.setRoot(ProductcategoryPage);
            console.log('test!!!');
          }
      }    
  }); 
    // this.showLoadingControllerLaunch();
    this.callProductCategoryDetail();

         /*
          Local Wishlist
      */

     if(this.countProductsWishlistLocalUpdated===0){
      this.countProductsWishlistLocalUpdated = '';
      console.log('Entered');
    }

     if(this.countProductsCartLocalUpdated===0){
      this.countProductsCartLocalUpdated = '';
      console.log('Entered..');
    }


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
  
  async callProductCategoryDetail() {
        const loader = await this.loadingController.create({
      content: 'Please wait loading products detail!',
    });
    await loader.present();
    loader.present().then(() => { 
      this.httpClient.get('http://busybanda.com/sterling-tools/api/get_category_by_id?' +  'id=' +this.dynamicTermId)
      .subscribe((jsonResponse) => {
        
         this.productCategoryInformation = jsonResponse['result'];
         this.obj = JSON.stringify(jsonResponse);
         console.log('Particular product details json ' + this.obj.result );
    
         if (this.productCategoryInformation && this.productCategoryInformation.length) {
          console.log('Particular product details available ' );
          loader.dismiss(); 
             
         }     
        else 
        {
          this.strData = 'No data available';
          console.log('Particular product empty ' + jsonResponse['result']);
          loader.dismiss(); 
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
    });
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
          //  if(this.viewCartList.length>=1) {
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



}
