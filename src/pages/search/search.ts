import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  Alert,
  AlertController,
  App,
  LoadingController,
  NavController,
  NavParams,
  Platform,
  ToastController,
  ViewController,
} from "ionic-angular";
import { Plugins, NetworkStatus, PluginListenerHandle } from "@capacitor/core";
import { WishlistupdatedPage } from "../wishlistupdated/wishlistupdated";
import { ViewcartPage } from "../viewcart/viewcart";
import { HomePage } from "../home/home";
import { SearchdetailsPage } from "../searchdetails/searchdetails";

@Component({
  selector: "page-search ",
  templateUrl: "search.html",
})
export class SearchPage implements OnInit {
  obj;
  dynamicId;
  strId: string;
  productCategoryInformation: any = [];
  strData: string;
  strProductMake: string;
  strProductCategoryName: string;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  countClick: number = 0;
  countProductsCart: number | any | string;
  countProductsWishList: number = 0;
  countProductsCartLocal: number = 0;
  countProductsCartLocalUpdated: number | any = 0;
  countProductsWishlistLocalUpdated: number | any = 0;
  strResponse: string;
  vartoday: any;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    public platform: Platform,
    public app: App
  ) {
    this.strId = navParams.get("catId");
    this.dynamicId = this.strId;

    console.log("Received catId" + this.dynamicId);
  }

  ngOnInit() {
    this.vartoday = new Date();
    var dd = String(this.vartoday.getDate()).padStart(2, "0");
    var mm = String(this.vartoday.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = this.vartoday.getFullYear();
    this.vartoday = mm + "/" + dd + "/" + yyyy;
    console.log("Today date " + this.vartoday);

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

    this.checkNetwork();
    this.showLoadingControllerLaunch();
    // this.callProductCategoryDetail();

    this.getProductsCategoryBySearch();
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if (activeView.name === "SearchPage") {
        if (nav.canGoBack()) {
          this.navCtrl.setRoot(HomePage);
          console.log("test***");
        } else {
          console.log("test1*****");
        }
      }
    });
  }

  wishlistPage() {
    this.navCtrl.push(WishlistupdatedPage);
  }

  cartPage() {
    this.navCtrl.push(ViewcartPage);
  }

  callProductCategoryDetail() {
    this.httpClient
      .get(
        "http://busybanda.com/sterling-tools/api/get_category_by_id?" +
          "id=" +
          this.dynamicId
      )
      .subscribe((jsonResponse) => {
        this.productCategoryInformation = jsonResponse["result"];
        this.obj = JSON.stringify(jsonResponse);
        console.log("Particular product details json " + this.obj.result);

        if (
          this.productCategoryInformation &&
          this.productCategoryInformation.length
        ) {
          console.log("Particular product details available ");
        } else {
          this.strData = "No data available";
          console.log("Particular product empty " + jsonResponse["result"]);
        }

        // for (const entry of this.productCategoryInformation) {
        //   this.strProductCategoryName = 'Name: ' + entry.name;
        //   this.strProductMake = entry.attribute.pa_make;
        //   console.log(entry.attribute.pa_make);
        // }

        // for (const entry of this.productCategoryInformation) {
        //    console.log(entry.name); // val1 and etc...
        // }
      });
  }

  addToCart(id, name, image, description, regular_price) {
    if (localStorage.getItem("Userid value") === null) {
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
      this.showToastOnAddProductLocal(name);
      this.countProductsCartLocalUpdated++;
    } else {
      this.httpClient
        .get(
          "http://busybanda.com/sterling-tools/api/set_cart_items?" +
            "user_id=" +
            localStorage.getItem("Userid value") +
            "&product_id=" +
            id
        )
        .subscribe((jsonResponse) => {
          this.obj = JSON.stringify(jsonResponse);
          console.log("Sent productsList response " + this.obj);
          console.log("Sent productsList id " + id);
          this.showToastOnAddProductServer(name);
          this.countProductsCart++;
        });
    }
  }

  addToWishList(id, name, image, description, regular_price) {
    // this.countClick++;

    //   if(this.countClick>1){
    //     console.log('Clicked More than one');
    //     this.showToastOnWishlist();
    //   }
    //   else {
    //   }

    let productsWishlist = [];
    if (localStorage.getItem("productsWishlist")) {
      productsWishlist = JSON.parse(localStorage.getItem("productsWishlist")); // get product list
    }
    console.log("Sent productsList id " + id);
    console.log("Sent productsList name " + name);
    productsWishlist.push({
      ProductId: id,
      ProductName: name,
      ProductQuantity: "1",
      ProductImage: image,
      ProductDescription: description,
      ProductRegularPrice: regular_price,
      ProductDateCreated: this.vartoday,
    });
    localStorage.setItem("productsWishlist", JSON.stringify(productsWishlist));
    // this.buttonIcon = "home";
    this.showToastOnAddProductWishlist(name);
    this.countProductsWishlistLocalUpdated++;
    if (typeof Storage !== "undefined") {
      // Code for localStorage/sessionStorage.
      console.log("Code for localStorage/sessionStorage.");
    } else {
      // Sorry! No Web Storage support..
      console.log("Sorry! No Web Storage support..");
    }
  }

  productDetailPage(
    id,
    name,
    image,
    description,
    regular_price,
    make,
    model,
    size
  ) {
    this.navCtrl.push(SearchdetailsPage, {
      id: id,
      name: name,
      image: image,
      regular_price: regular_price,
      description: description,
      make: make,
      model: model,
      size: size,
    });
    console.log("Sent product id " + id);
    console.log("Sent product name " + name);
    console.log("Sent product name " + regular_price);
  }

  showToastOnAddProduct(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: "Product Added in Cart : \n " + strProductAdded + "\n",
      duration: 3000,
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
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  showLoadingControllerLaunch() {
    let loading = this.loadingController.create({
      content: "Please wait !",
    });

    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 600);
  }

  public async checkNetwork() {
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
    }
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
          },
        },
      ],
    });

    alert.present();
  }
  async showToastOnWishlist() {
    const toast = await this.toastController.create({
      message: "Product already added in wishlist",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  showToastOnAddProductWishlist(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: "Product Added in Wishlist : \n " + strProductAdded + "\n",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  showToastOnAddProductLocal(strProductAdded) {
    const toast = this.toastController.create({
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

  showToastOnAddProductServer(strProductAdded) {
    const toast = this.toastController.create({
      message:
        "Product Added in Server : \n " +
        strProductAdded +
        "\n" +
        "\nProduct Quantity:  1",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }
  async getProductsCategoryBySearch() {
    const loader = await this.loadingController.create({
      content: "Please wait. Loading data!",
    });

    await loader.present();
    loader.present().then(() => {
      // this.httpClient.get("http://busybanda.com/sterling-tools/api/get_products_by_search?" +"searchby=" +this.strInputtedValue).subscribe(jsonResponse => {
      this.httpClient
        .get(
          "http://busybanda.com/sterling-tools/api/get_category_by_id?" +
            "id=" +
            this.dynamicId
        )
        .subscribe(
          (jsonResponse) => {
            if (jsonResponse) {
              this.productCategoryInformation = jsonResponse["result"];
              this.obj = JSON.stringify(jsonResponse);
              console.log("details available " + this.obj);
              loader.dismiss();
            }

            const myURL_body = jsonResponse["result"];
            this.strResponse = myURL_body;

            //  if(this.strResponse = 'null'){
            //   console.log('details available obj empty ' );
            //   this.strData = 'No data';
            //  }
            //   else {
            //     console.log('details not available ' );
            //   }
          },
          (error) => {
            console.log(error);
            //this.showToastOnProductError(error);
          }
        );
    });
  }
  showToastOnProductError(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: "Error " + strProductAdded,
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }
}
