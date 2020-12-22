/**
 * Generated class for the WishlistupdatedPage page.
 */

import { ApiProvider } from "./../../providers/api/api";
import { ViewcartPage } from "./../viewcart/viewcart";
import { HomePage } from "./../home/home";
import { HttpClient } from "@angular/common/http";
import {
  AlertController,
  LoadingController,
  Platform,
  App,
} from "ionic-angular";
import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
} from "ionic-angular";
import { Plugins, NetworkStatus, PluginListenerHandle } from "@capacitor/core";

@IonicPage()
@Component({
  selector: "page-wishlistupdated",
  templateUrl: "wishlistupdated.html",
})
export class WishlistupdatedPage implements OnInit {
  productsLocalCart: any = [];
  productsLocalWishList: any = [];
  viewCartList: any = [];
  strProductQuantity: number;
  strProductRegularPriceRevised1: number | any;
  obj;
  strProductRegularPrice: any;
  strProductDescription: string;
  strProductRegularPriceRevised: string;
  productTotalPrice: number;
  strData: string;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  localSearchProduct;
  strProductAdded: string;
  strProductName: string;
  countProducts: number | any;
  letclickCount = 0;
  clickedButtonWishlist: boolean;
  count: string | any;
  buttonIcon: string;
  countProductsCart: number | any | string;
  countProductsCartLocal: number | any | string;
  countProductsCartLocalUpdated: number | any = 0;
  countProductsWishlistLocalUpdated: number | any = 0;
  countProductsWishList: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastController: ToastController,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public httpClient: HttpClient,
    public platform: Platform,
    public app: App,
    public apiProvider: ApiProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad WishlistupdatedPage");
  }

  ngOnInit() {
    if (this.countProductsWishlistLocalUpdated === 0) {
      this.countProductsWishlistLocalUpdated = "";
      console.log("Entered");
    }

    if (this.countProductsCartLocalUpdated === 0) {
      this.countProductsCartLocalUpdated = "";
      console.log("Entered..");
    }

    /*
          Local Wishlist
      */
    var productsWishlistarrayFromStorage = JSON.parse(
      localStorage.getItem("productsWishlist")
    );
    if (
      productsWishlistarrayFromStorage != null &&
      productsWishlistarrayFromStorage.length > 0
    ) {
      var arrayLength = productsWishlistarrayFromStorage.length;
      this.countProductsWishList = arrayLength;
      this.countProductsWishlistLocalUpdated = this.countProductsWishList;
      console.log(
        "Local Wishlist filled " + this.countProductsWishlistLocalUpdated
      );
    } else {
      console.log("Local Wishlist empty ");
    }
    /*
         Local Cart
     */
    var productsCartarrayFromStorage = JSON.parse(
      localStorage.getItem("products")
    );
    if (
      productsCartarrayFromStorage != null &&
      productsCartarrayFromStorage.length > 0
    ) {
      var arrayLength1 = productsCartarrayFromStorage.length;
      this.countProductsCart = arrayLength1;
      this.countProductsCartLocalUpdated = this.countProductsCart;
      console.log("Local Cart filled " + this.countProductsCartLocalUpdated);
    } else {
      console.log("Local Cart empty ");
    }
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if (activeView.name === "WishlistupdatedPage") {
        if (nav.canGoBack()) {
          this.navCtrl.setRoot(HomePage);
        } else {
          // this.navCtrl.setRoot(HomePage);
        }
      }
    });
    this.viewCartApi();
    if (localStorage.getItem("productsWishlist")) {
      this.productsLocalCart = JSON.parse(
        localStorage.getItem("productsWishlist")
      ); // get product list
      console.log(
        "****** filled-----" + localStorage.getItem("productsWishlist")
      );
      this.strData = "Wishlist is Empty.Please add items!";
    } else {
      console.log("****** empty" + localStorage.getItem("productsWishlist"));
      this.showToastOnEmptyCart();
    }

    this.obj = JSON.stringify(this.productsLocalCart);
    for (let i = 0; i < this.productsLocalCart.length; i++) {
      if (
        this.productsLocalCart[i].ProductQuantity &&
        this.productsLocalCart[i].ProductRegularPrice &&
        this.productsLocalCart[i].ProductDescription &&
        this.productsLocalCart[i].ProductId
      ) {
        this.strProductQuantity = this.productsLocalCart[i].ProductQuantity;
        this.strProductRegularPrice = this.productsLocalCart[
          i
        ].ProductRegularPrice;
        this.strProductDescription = this.productsLocalCart[
          i
        ].ProductDescription;
        this.strProductName = this.productsLocalCart[i].ProductName;

        this.strProductRegularPriceRevised1 = this.strProductRegularPriceRevised;
        this.productTotalPrice = this.productsLocalCart[i].ProductRegularPrice;
        var sum = 0,
          nums = ["100", "300", "400", "60", "40"];
        for (i = 0; i < nums.length; i++) {
          sum += +nums[i];
          // console.log('All  TotalPrice ' + sum);
        }

        this.productsLocalCart = JSON.parse(
          localStorage.getItem("productsWishlist")
        );
      } else {
        console.log("Product quantity not available");
        this.showToastOnProductsQuantityCartLocally();
      }
    }
  
    this.showLoadingControllerLaunch();
  }

  //   addToCart(id,strProductAdded) {
  //     this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
  //       this.obj = JSON.stringify(jsonResponse);
  //       console.log("Sent productsList response " + this.obj);
  //       console.log("Sent productsList id " + id);
  //       this.showToastOnAddProductSingle(strProductAdded);
  //     });
  // }
 
  addToCart(index, id, name, image, description, regular_price) {
    console.log("Test" + id);

    let products = [];
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products")); // get product list
    }
    console.log("Sent productsList id " + id);
    console.log("Sent productsList name " + name);
    products.push({
      ProductId: id,
      ProductName: name,
      ProductQuantity: "1",
      ProductImage: image,
      ProductDescription: description,
      ProductRegularPrice: regular_price,
    });
    localStorage.setItem("products", JSON.stringify(products));
    this.productsLocalCart.splice(index, 1);
    localStorage.setItem(
      "productsWishlist",
      JSON.stringify(this.productsLocalCart)
    );

    this.showToastOnAddProductLocal(name);
    if (typeof Storage !== "undefined") {
      // Code for localStorage/sessionStorage.
      console.log("Code for localStorage/sessionStorage.");
    } else {
      // Sorry! No Web Storage support..
      console.log("Sorry! No Web Storage support..");
    }
  }
  
  facebookPage() {
    window.open(
      "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttp%253A%252F%252Fbusybanda.com%252Fsterling-tools%252Fwishlist%252F17FD81%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
    ,"_self");
  }

  twitterPage(){
    window.open(
      "https://twitter.com/share?url=http%3A%2F%2Fbusybanda.com%2Fsterling-tools%2Fwishlist%2F17FD81%2F"
    ,"_self");
  }
  
  pInterestPage(){
    window.open("https://www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fbusybanda.com%2Fsterling-tools%2Fwishlist%2F17FD81%2F&media=http%3A%2F%2Fbusybanda.com%2Fsterling-tools%2Fwp-content%2Fuploads%2F2020%2F11%2Fall-car-oil-air-filters.png","_self");
  }

  whatsUpPage(){
    window.open("https://api.whatsapp.com/send?text=http%3A%2F%2Fbusybanda.com%2Fsterling-tools%2Fwishlist%2F17FD81%2F","_self");
  }
  copyPage(){
    window.open();
  }
 
  emailPage(){
    navigator.clipboard.writeText(this.strProductName).then().catch(e => console.error(e));
  }


  

  showToastOnAddProductLocal(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message:
        "Product Added in Local Cart : \n " +
        strProductAdded +
        "\n" +
        "\nProduct Quantity:  1",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  cartPage() {
    this.navCtrl.push(ViewcartPage);
  }

  wishlistPage() {
    console.log("wishlistPage");
    this.navCtrl.push(WishlistupdatedPage);
  }

  doRefresh(event) {
    console.log("Begin async operation");

    this.productsLocalCart = JSON.parse(localStorage.getItem("products"));
    setTimeout(() => {
      console.log("Async operation has ended");
      event.complete();
    }, 500);
  }

  // removeItem(item,id){
  //   console.log(id);
  //   this.showCartWishlistRemovalAlert(item);
  // }
  removeProductLocally(index, item, name) {
    this.showCartRemovalAlert2(index, item, name);
  }

  private async showCartRemovalAlert2(index, item, name): Promise<void> {
    // omitted;
    const alert1 = this.alertController.create({
      title: "Remove Item! " + name,
      message: "Do you want to remove item from wishlist locally!",
      enableBackdropDismiss: false,

      buttons: [
        {
          cssClass: "my-custom-class",
          text: "Ok",
          handler: (ok) => {
            console.log("Confirm Ok");
            console.log("Remove Product: " + item);

            this.productsLocalCart.splice(index, 1);
            localStorage.setItem(
              "productsWishlist",
              JSON.stringify(this.productsLocalCart)
            );
          },
        },
        {
          text: "Cancel",
          handler: (data) => {
            let navTransition = alert1.dismiss();
            //  navTransition.then(() => {
            //    this.navCtrl.pop();
            //  });
            return false;
          },
        },
      ],
    });

    alert1.present();
  }
  removeProduct() {
    this.showCartWishlistRemovalAlert(this.strProductAdded);
  }

  removeProduct1() {
    console.log(this.strProductAdded);
  }

  // clearWishlist(){
  //   this.showCartWishlistRemovalAlert1();
  // }

  async viewCartApi() {
    try {
      const service = this.apiProvider.getCartDetails();
      service.subscribe(async (data) => {
        if (data) {
          const resultado = data;
          this.viewCartList = resultado;
          this.obj = JSON.stringify(data);
          console.log("All Json Response" + this.obj);
          this.strData = "Wishlist empty!";

          //  if(this.viewCartList.length>=1) {
          //   console.log('Cart Filled ');
          //   this.countProductsCart = this.viewCartList.length;
          //    this.buttonIcon = "cart";
          //  }

          //  else{
          //   console.log('Cart Empty ');
          //  this.countProductsCart = 'Empty';

          //  }

          if (this.viewCartList) {
            this.countProductsCartLocalUpdated = this.viewCartList.length;
          } else {
            this.countProductsCartLocalUpdated = this.countProductsCart;
          }

          // for(var j=0; j < this.viewCartList.length; j++){
          //   console.log('Price ' + this.viewCartList[j].price);
          //   console.log('Product Id ' + this.viewCartList[j].product_id);
          //   console.log('Quantity' + this.viewCartList[j].quantity);
          //  }
          // const resultado1 = data;
          // console.log(resultado1);
        } else {
        }
      });
    } catch (error) {}
  }

  async showToastOnEmptyCart() {
    const toast = await this.toastController.create({
      message: "WishList is empty.Please add items!",
      duration: 7000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnProductsQuantityCartLocally() {
    const toast = await this.toastController.create({
      message: "Product Quantity not available from cart",
      duration: 4000,
      position: "bottom",
    });
    toast.present();
  }

  async showLoadingControllerLaunch() {
    const { Network } = Plugins;
    this.networkListener = Network.addListener(
      "networkStatusChange",
      (status) => {
        console.log("Network status HomePage here", status);
        this.networkStatus = status;
      }
    );

    if ((await Network.getStatus()).connectionType === "none") {
      this.showNetworkAlert();
      console.log("Network status not available", this.networkStatus);
    } else {
      this.networkStatus = await Network.getStatus();
      // this.showAlert();
      console.log("Network status available", this.networkStatus);
      // this.router.navigate(['/transactions']);
      this.presentLoadingDefault();
      this.showToastOnPageLoad();
    }
  }

  presentLoadingDefault() {
    let loading = this.loadingController.create({
      content: "Please wait Viewing Wishlist...",
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 500);
  }

  private async showNetworkAlert(): Promise<void> {
    // omitted;
    const alert = await this.alertController.create({
      title: "Network Issues!",
      message: "There are issues in network connectivity",

      buttons: [
        {
          text: "Ok",
          handler: (ok) => {
            console.log("Confirm Ok");
            // resolve('ok');
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (cancel) => {
            console.log("Confirm Cancel");
            alert.dismiss();
            // resolve('cancel');
          },
        },
      ],
    });

    alert.present();
  }

  async showToastOnPageLoad() {
    const toast = await this.toastController.create({
      message: localStorage.getItem("Product Title"),
      duration: 6000,
      position: "bottom",
    });
    toast.present();
  }

  showToastOnAddProductSingle(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message:
        "Product Added in Cart : \n " +
        strProductAdded +
        "\n" +
        "\nProduct Quantity:  1",
      duration: 6000,
      position: "bottom",
    });
    toast.present();
  }

  private async showCartWishlistRemovalAlert(item): Promise<void> {
    // omitted;
    const alert1 = this.alertController.create({
      title: "Remove Item!",
      message: "Do you want to remove item from wishlist! ",
      enableBackdropDismiss: false,

      buttons: [
        {
          text: "Ok",
          handler: (ok) => {
            console.log("Confirm Ok");

            for (let i = 0; i < this.productsLocalCart.length; i++) {
              if (this.productsLocalCart[i] == item) {
                this.productsLocalCart.splice(i, 1);

                this.productsLocalCart[i] = [];
              }
            }

            // this.showToastOnDeletingWishlist();

            // this.productsLocalCart = [];
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",

          handler: (cancel) => {
            console.log("Confirm Cancel");
            alert1.dismiss();
            // resolve('cancel');
          },
        },
      ],
    });

    alert1.present();
  }

  private async showCartWishlistRemovalAlert1(): Promise<void> {
    // omitted;
    const alert1 = this.alertController.create({
      title: "Clear Wishlist !",
      message: "Do you want to clear wishlist locally? ",
      enableBackdropDismiss: false,

      buttons: [
        {
          text: "Ok",
          handler: (ok) => {
            console.log("Confirm Ok");

            this.showToastOnDeletingWishlist1();

            this.productsLocalCart = [];
            localStorage.removeItem("products");
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",

          handler: (cancel) => {
            console.log("Confirm Cancel");
            alert1.dismiss();
            // resolve('cancel');
          },
        },
      ],
    });

    alert1.present();
  }

  async showToastOnDeletingWishlist() {
    const toast = await this.toastController.create({
      message: "Product Deleted from  wishlist " + this.strProductAdded,
      duration: 1500,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnDeletingWishlist1() {
    const toast = await this.toastController.create({
      message: "Wishlist Cleared",
      duration: 1500,
      position: "bottom",
    });
    toast.present();
  }
}
