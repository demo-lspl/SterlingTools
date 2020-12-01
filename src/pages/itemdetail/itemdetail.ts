/**
 *  Created By Lasting Erp 5/10/2020
 */


import { HomePage } from './../home/home';
import { WishlistupdatedPage } from './../wishlistupdated/wishlistupdated';
import { ApiProvider } from './../../providers/api/api';
import { ViewcartPage } from './../viewcart/viewcart';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NavController, ModalController, NavParams, LoadingController, ToastController, AlertController } from "ionic-angular";
import { App, Platform } from 'ionic-angular';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';




@Component({
  selector: "page-itemdetail ",
  templateUrl: "itemdetail.html",
})
export class ItemdetailPage implements OnInit {
  
  strId: string;  
  strProductName: string;
  strProductName1: any = [];
  strProductRegularPrice: string;
  strProductRegularPriceRevised: string;
  strProductSalePrice:string;
  strProductMake: string;
  strProductModel:string;   
  strProductYear:string;
  strProductDescription: string;
  strProductUrl: string;
  strProductStatus: string;
  strProductCreatedDate: string;
  strProductModifiedDate: string;
  obj;
  dynamicId;
  strStatus: string;
  strTaxaNomyTitle: string;
  productsListInformation: any = [];
  productsListInformation1: any = [];
  taxonomy_product_make: any = [];
  taxonomy_product_brands: any = [];
  taxonomy_product_model: any = [];
  taxonomy_product_tag: any = [];
  taxonomy_product_cat: any = [];
  strTaxonomyProductCatTitle: string;
  strTaxonomyProductBrandTitle: string;
  strTaxonomyProductBrandModel: string;
  strTaxonomyProductBrandTag: string;
  strTaxonomyProductMakeTitle: string;
  strTaxonomyProductYearTitle: string;
  strQuantityValue = '';
  currentNumber :any = 1;
  strImage:string;
  strStock:string;
  currentNumberUpdated :any ;  
  productCount: number = 1; 
  strQuantityValue1: string = '';
  viewCartList:any = [];
  strData: string;
  buttonIcon: string ;
  picToView:string='/assets/imgs/ic_my_cart.png';
  strProductAdded:string;
  countProductsCart:number|any|string;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle; 
  countClickAddToCartTushar: number = 0;
  countProductsCartLocal:number|any|string;
  countProductsCartLocalUpdated:number = 0;
  countProductsWishlistLocalUpdated:number = 0;
  countProductsWishList:number =0;

  

      

  constructor(
    public navCtrl: NavController,  
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public apiProvider: ApiProvider,
    public toastCtrl: ToastController,
    public app: App,
    public platform: Platform,
    public alertController: AlertController

  ) {
    this.strId = navParams.get("id");
    this.strProductUrl = "Product Url " + navParams.get("url");
    this.dynamicId = this.strId;
  }

  ngOnInit() {

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

    this.checkNetwork();  
    this.viewCartApi();
    this.showLoadingControllerLaunch();
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'ItemdetailPage') {
          if (nav.canGoBack()){  
              this.navCtrl.setRoot(HomePage);
          } else {
          }
      }
  }); 

    if (this.strQuantityValue1) {
       //deal with value'
       console.log('available ' );
  }

  else {
    console.log('not available ' );
  }
             

  
    
    this.httpClient
      .get(
        "http://busybanda.com/sterling-tools/api/get_products_by_id?" +
          "id=" +
          this.dynamicId
      )
      .subscribe((jsonResponse) => { 
      
        this.productsListInformation = jsonResponse['result'];
        this.productsListInformation1 = jsonResponse['result'].attribute;
      this.obj = JSON.stringify(jsonResponse);
         
       if (this.productsListInformation && this.productsListInformation.length) {
        console.log('Particular product details available ' );
          
       } 
      else     
      {     
        console.log('Particular product empty ' + this.obj);
      } 

      for (const entry of this.productsListInformation) {
        this.strProductName =  'Product Name: ' + entry.name;
        this.strProductRegularPrice = '' + entry.regular_price;
        this.strProductRegularPriceRevised = 'Product Regular Price: '+  this.strProductRegularPrice.replace('Product Regular Price:','' + '$');
        this.strImage = entry.image;
        console.log('Image Path ' + entry.image);
         if(this.strProductMake){
          this.strProductMake = 'Make Empty: '; 
         }

         else {
          this.strProductMake = 'Make: ' + entry.attribute.pa_make; 
         }

         if(this.strProductModel){
          this.strProductModel = 'Model Empty: '; 
         }

         else {
          this.strProductModel = 'Model: ' + entry.attribute.pa_model; 
         }

        //  if(this.strProductYear){
        //   this.strProductYear = 'Year Empty: '; 
        //  }

        //  else {
        //   this.strProductYear = 'Year: ' + entry.attribute.pa_year; 
        //  }


         if (entry.attribute.pa_year === '') {
          this.strProductYear = 'No Year  ';
        }
 
        else {                 
          this.strProductYear = 'Year ' + entry.attribute.pa_year;
        }    



        // if(this.strProductSalePrice){
        //   this.strProductSalePrice = 'Product Sale Price: ' + entry.sale_price;
        // }

        // else {
        //   this.strProductSalePrice = 'No Product Sale Price Specified';
        // } 
        
        
        if (entry.sale_price === '') {
          this.strProductSalePrice = 'No Sale Price  ';
        }
 
        else {                 
          this.strProductSalePrice = 'Sale Price ' + entry.sale_price;
        } 


        if (entry.regular_price === '') {
          this.strProductRegularPrice = 'No Regular Price  ';
        }
 
        else {                 
          this.strProductRegularPrice = 'Regular Price: ' + entry.regular_price;
        } 


        
          
  
        if (entry.description === '') {
          this.strProductDescription = 'No Product Description:  ';
        }
 
        else {                 
          this.strProductDescription = 'Product Description: ' + entry.description;
        }     

        if (entry.description === '') {
          this.strProductDescription = 'No Product Description:  ';
        }
 
        else {
          this.strProductDescription = 'Product Description: ' + entry.description;
        } 
        
        if (entry.stock === null) {
          this.strStock = 'No Product Stock  ';
        }
 
        else {
          this.strStock = 'Product strStock: ' + entry.stock;
        } 
  
  
        // if(this.strStock){
        //   this.strStock = 'Stock Empty: '; 
        //  }

        //  else {
        //   this.strStock = 'Stock: ' + entry.stock; 
        //  }

        console.log(this.strProductRegularPrice);
      }

      for (const entry of this.productsListInformation) {
      // console.log('Product Regular Price test' + entry.attribute);
      }


        const myArray = this.productsListInformation;
       myArray.forEach((attribute, index, array) => {
          console.log('Status response: ' + attribute.pa_make); // 100, 200, 300
         console.log(array);
          if (attribute.pa_make &&attribute.pa_make.length
          ) {
             console.log("Success..." + attribute.pa_make[0].title);
          } else {
            console.log("Success...!!!!!!!!");
            this.strTaxonomyProductBrandTag = "No Tag Available";
          }


          if (attribute.pa_make &&attribute.pa_make.length
            ) {
               console.log("Success..." + attribute.pa_model[0].title);
            } else {
              console.log("Success...!!!!!!!!");
              
            }
            
         
       });
      });
  }

  itemdetailPage(id,title) {
    this.navCtrl.push(ItemdetailPage, {
      id: id,
      title: title,
    });
    console.log('Sent productsList id ' + id);
    console.log('Sent productsList title ' + title);
  }

  wishlistPage() {
    this.navCtrl.push(WishlistupdatedPage);
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
  
  searchPage() {
    this.navCtrl.push(WishlistupdatedPage);
  }



  cartPage() {
     this.navCtrl.push(ViewcartPage);
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
        this.countProductsCartLocal++;

      }
      
      else { 
        this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
              this.obj = JSON.stringify(jsonResponse);
              console.log("Sent productsList response " + this.obj);
              console.log("Sent productsList id " + id);
              this.showToastOnAddProductSingle(this.strProductAdded);
            });
      }
    }
  
    showLoadingControllerCart() {
      let loading = this.loadingController.create({
        content: 'Please wait!'
      });
    
      loading.present();
      setTimeout(() => {
        loading.dismiss();
      }, 500);
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


   async showToastOnAddingCart()
   {
    const toast = await this.toastController.create({
      message: 'Product added in cart ' + this.strProductName + ' ' + 'with Quantity' + this.currentNumber,
      duration: 1300,
      position: 'bottom',
    });
    toast.present();
  } 

  async showToastOnAddingEmptyCart()
   {
    const toast = await this.toastController.create({
      message: 'Please add quantity of product',
      duration: 300,
      position: 'bottom',
    });
    toast.present();
  } 

  showLoadingControllerLaunch() {
    let loading = this.loadingController.create({
      content: 'Please wait loading product details!'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    },600);
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
 