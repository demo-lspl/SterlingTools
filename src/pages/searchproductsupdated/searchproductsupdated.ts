import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  App,
  IonicPage,
  LoadingController,
  NavController,
  NavParams,
  Platform,
  ToastController,
} from "ionic-angular";
import { Plugins, NetworkStatus, PluginListenerHandle } from "@capacitor/core";
import { HomePage } from "../home/home";
import { HttpClient } from "@angular/common/http";
import { WishlistupdatedPage } from "../wishlistupdated/wishlistupdated";
import { ViewcartPage } from "../viewcart/viewcart";
import { ApiProvider } from "../../providers/api/api";
import { ItemdetailPage } from "../itemdetail/itemdetail";
import { Itemdetaillistpage1Page } from "../itemdetaillistpage1/itemdetaillistpage1";

@IonicPage()
@Component({
  selector: "page-searchproductsupdated",
  templateUrl: "searchproductsupdated.html",
})
export class SearchproductsupdatedPage implements OnInit {
  obj;
  strMake: string;
  strModel: string;
  strEngine: string;
  strYear: string;
  strData: string;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  strDataServer: string;
  countProductsCart: number | any | string;
  countProductsWishList: number = 0;
  countProductsCartLocal: number = 0;
  countProductsCartLocalUpdated: number | any = 0;
  countProductsWishlistLocalUpdated: number | any = 0;
  viewCartList: any = [];
  strInputtedValue: string;
  productsListInformation: any = [];
  strProductName: string;
  strProductMake: string;
  strProductModel: string;
  strProductSubModel: string;

  strProductYearEnd: string;
  strProductYearStart: string;
  strProductRegularPrice: string;
  strProductRegularPriceRevised: string;
  strProductDescription: string;
  currentNumber: any = 1;
  strProductSalePrice: string;
  strStock: string;
  strTaxonomyProductBrandTag: string;
  strImage: string;
  apiService: any;
  resultado: any;
  amount: number;
  pridePriceValueWithOutBrackets: any;
  newSearch: any;
  loading;
  showDataboolean = false;
  strResponse: string;
  vartoday: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public platform: Platform,
    public alertController: AlertController,
    public httpClient: HttpClient,
    public apiProvider: ApiProvider,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {
    this.strInputtedValue = navParams.get("input");

    console.log("received searchProductName" + this.strInputtedValue);
  }

  ngOnInit() {
    this.vartoday = new Date();
    var dd = String(this.vartoday.getDate()).padStart(2, "0");
    var mm = String(this.vartoday.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = this.vartoday.getFullYear();
    this.vartoday = mm + "/" + dd + "/" + yyyy;
    console.log("Today date " + this.vartoday);

    this.checkNetwork();

    if (this.countProductsWishlistLocalUpdated === 0) {
      this.countProductsWishlistLocalUpdated = "";
      console.log("Entered");
    }

    if (this.countProductsCartLocalUpdated === 0) {
      this.countProductsCartLocalUpdated = "";
      console.log("Entered..");
    }

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
      if (activeView.name === "SearchproductsupdatedPage") {
        if (nav.canGoBack()) {
          this.navCtrl.setRoot(HomePage);
          console.log("test***");
        } else {
          console.log("test1*****");
        }
      }
    });

    this.getProductsBySearch();
  }

  productDetailPage(
    id,
    name,
    image,
    regular_price,
    description,
    make,
    model,
    yearStart,
    yearEnd
  ) {
    this.navCtrl.push(Itemdetaillistpage1Page, {
      id: id,
      name: name,
      image: image,
      regular_price: regular_price,
      description: description,
      make: make,
      model: model,
      yearStart: yearStart,
      yearEnd: yearEnd,
    });
    console.log("Sent product id " + id);
    console.log("Sent product name " + name);
    console.log("Sent product image " + image);
    console.log("Sent product regular_price " + regular_price);
    console.log("Sent product description " + description);
    console.log("Sent product make " + make);
    console.log("Sent product model " + model);
    console.log("Sent product year start" + yearStart);
    console.log("Sent product year end" + yearEnd);
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

  wishlistPage() {
    console.log("wishlistPage");
    this.navCtrl.push(WishlistupdatedPage);
  }

  cartPage() {
    this.navCtrl.push(ViewcartPage);
  }

  async getProductsBySearch() {
    const loader = await this.loadingController.create({
      content: "Loading...",
    });

    await loader.present();
    loader.present().then(() => {
      this.httpClient
        .get(
          "http://busybanda.com/sterling-tools/api/get_products_by_search?" +
            "searchby=" +
            this.strInputtedValue
        )
        .subscribe(
          (jsonResponse) => {
            if (jsonResponse) {
              this.productsListInformation = jsonResponse["result"];
              this.obj = JSON.stringify(jsonResponse);
              console.log("details available " + this.obj);
              loader.dismiss();
            }

            const myURL_body = jsonResponse["result"];
            this.strResponse = myURL_body;

            if ((this.strResponse = "null")) {
              console.log("details available obj empty ");
              this.strDataServer = "No data";
            } else {
              console.log("details not available ");
            }
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

  doRefresh(event) {
    console.log("Begin async operation");

    this.getProductsBySearch();

    setTimeout(() => {
      console.log("Async operation has ended");
      event.complete();
    }, 500);
  }

  addToWishList(id, name, image, description, regular_price, x) {
    //  this.visible = !this.visible;
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
    //  this.buttonIcon = "home";
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
  showToastOnAddProductWishlist(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: "Product Added in Wishlist : \n " + strProductAdded + "\n",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
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
      //this.showLoaderPageLoad();
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
            // resolve('cancel');
          },
        },
      ],
    });

    alert.present();
  }

  showLoaderPageLoad() {
    let loading = this.loadingController.create({
      content: "Please wait loading data!",
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1700);
  }
}
