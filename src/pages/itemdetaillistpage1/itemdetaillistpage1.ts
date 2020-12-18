import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, App, IonicPage, LoadingController, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { ProductcategorydetailPage } from '../productcategorydetail/productcategorydetail';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../home/home';
import { SearchproductsupdatedPage } from '../searchproductsupdated/searchproductsupdated';



@IonicPage()
@Component({
  selector: 'page-itemdetaillistpage1',
  templateUrl: 'itemdetaillistpage1.html',
})
export class Itemdetaillistpage1Page {

  obj;
  strProductId: string;
  strProductMake: string;
  strProductModel: string;
  strProductYearStart: string;
  strProductYearEnd: string;

  strProductStock: string;

  strProductName: string;
  strProductImage: string;
  strProductSalePrice: string;
  strProductRegularPrice: string;
  strProductDescription: string;
  currentNumber: any = 1;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  viewCartList: any = [];
  strData: string;
  buttonIcon: string;
  countProductsCart: number | any | string;
  countProductsWishList: number = 0;
  countProductsCartLocal: number = 0;
  countProductsCartLocalUpdated: number | any = 0;
  countProductsWishlistLocalUpdated: number  | any = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastController: ToastController,
    public httpClient: HttpClient,
    public alertController: AlertController,
    public platform: Platform,
    public app: App,
    public apiProvider: ApiProvider,
    public loadingController: LoadingController) {

    this.strProductId = navParams.get("id");
    this.strProductName = navParams.get('name');
    this.strProductImage = navParams.get('image');
    this.strProductRegularPrice = navParams.get('regular_price');
    this.strProductDescription = navParams.get('description');
    this.strProductMake = navParams.get('make');
    this.strProductModel = navParams.get('model');
    this.strProductYearStart = navParams.get('yearStart');
    this.strProductYearEnd = navParams.get('yearEnd');
    this.strProductStock = navParams.get('stock');





    if (this.strProductName === '') {
      this.strProductName = 'No Product Name   ';
    }

    else {
      this.strProductName = 'Product Name: ' + this.strProductName;
    }



    if (this.strProductDescription === '') {
      this.strProductDescription = 'No Product Description   ';
    }

    else {
      this.strProductDescription = 'Product Description: ' + this.strProductDescription;
    }

    if (this.strProductRegularPrice === '') {
      this.strProductRegularPrice = 'No Regular Price   ';
    }

    else {
      this.strProductRegularPrice = 'Regular Price: ' + this.strProductRegularPrice;
    }

    if (this.strProductMake === '') {
      this.strProductMake = 'No Product Make   ';
    } 

    else {
      this.strProductMake = 'Product Make: ' + this.strProductMake;
    }

    if (this.strProductModel === '') {
      this.strProductModel = 'No Product Model   ';
    }

    else {
      this.strProductModel = 'Product Model: ' + this.strProductModel;
    }
    if (this.strProductYearStart === '') {
      this.strProductYearStart = 'No Product Year Start  ';
    }

    else {
      this.strProductYearStart = 'Product Year Start: ' + this.strProductYearStart;
    }

    if (this.strProductYearEnd === '') {
      this.strProductYearEnd = 'No Product Year from   ';
    }

    else {
      this.strProductYearEnd = 'Product Year End: ' + this.strProductYearEnd;
    }

    // if(this.strProductStock === ''){
    //   this.strProductStock = 'No Product Stock   ';
    // }

    // else {
    //   this.strProductStock = 'Product Stock: ' + this.strProductStock;
    // }








    console.log('Id received' + this.strProductId);
    console.log('Name received' + this.strProductName);
    console.log('Image received' + this.strProductName);


  }

  ngOnInit() {
    this.checkNetwork();

    

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
      console.log('Local Wishlist empty ');
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
      console.log('Local Cart empty ');
    }



    this.checkNetwork();
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if (activeView.name === 'Itemdetaillistpage1Page') {
        if (nav.canGoBack()) {
          //  this.navCtrl.setRoot(SearchproductsupdatedPage);
          this.navCtrl.setRoot(HomePage);
          console.log('Test');
        } else {
          console.log('Test1');
        }
      }
    });

  }

  incrementValue() {
    this.currentNumber++;
  }

  decrementValue() {
    if (this.currentNumber <= 1) {
      console.log('Issue in cart ');
      this.showToastOnCart();
    }
    else {
      console.log('success in cart ');
      this.currentNumber--;
    }
  }


  addToCart(id, name, image, description, regular_price) {
    if (localStorage.getItem("Userid value") === null) {
      let products = [];
      if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products')); // get product list 
      }
      console.log("Sent productsList id " + id);
      console.log("Sent productsList name " + name);
      products.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price });
      localStorage.setItem('products', JSON.stringify(products));
      this.showToastOnAddProductLocal(name);
      this.countProductsCartLocalUpdated++;



    }

    else {
      this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + this.strProductId).subscribe((jsonResponse) => {
        this.obj = JSON.stringify(jsonResponse);
        console.log("Sent productsList response " + this.obj);
        console.log("Sent productsList id " + id);
        this.showToastOnAddProductServer(name);
        this.countProductsCart++;
      });
    }
  }
  






  async showToastOnCart() {
    const toast = await this.toastController.create({
      message: 'Minimum product quantity cannot be less than 1 ',
      duration: 400,
      position: 'bottom',
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
          console.log('View cart length ' + this.viewCartList.length);
        


          if(this.viewCartList){
            this.countProductsCartLocalUpdated = this.viewCartList.length;
  
          }
  
          else {
            this.countProductsCartLocalUpdated = this.countProductsCart;
  
          }









        } else {
        }

      });
    } catch (error) { }
  }

  showToastOnAddProduct(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'Product Added in Cart : \n ' + strProductAdded + '\n',
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

      console.log('Network status available', this.networkStatus);

      this.showLoadingControllerLaunch();
      this.viewCartApi();

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

  showLoadingControllerLaunch() {
    let loading = this.loadingController.create({
      content: 'Please wait!'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 800);
  }

  showToastOnAddProductLocal(strProductAdded) {
    const toast = this.toastController.create({
      message: 'Product Added in Local Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }
  showToastOnAddProductServer(strProductAdded) {
    const toast = this.toastController.create({
      message: 'Product Added in Server : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }



}
