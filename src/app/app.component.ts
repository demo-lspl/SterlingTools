
/*
    AppComponent  Lasting Erp 25/12/2020
*/

import { ApiProvider } from "./../providers/api/api";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MyaccountupdatedPage } from "./../pages/myaccountupdated/myaccountupdated";
import { TermsandconditionsPage } from "./../pages/termsandconditions/termsandconditions";
import { PrivacypolicyPage } from "./../pages/privacypolicy/privacypolicy";
import { Home1Page } from "./../pages/home1/home1";
import { ProductcategoryPage } from "./../pages/productcategory/productcategory";
import { DemoPage } from "./../pages/demo/demo";
import { Component, ViewChild, Inject, OnInit } from "@angular/core";
import { Nav,Platform,ToastController,LoadingController } from "ionic-angular";
import { HomePage } from "../pages/home/home";
import { CategoryPage } from "../pages/category/category";
import { WishlistPage } from "../pages/wishlist/wishlist";
import { Myorder_2Page } from "../pages/myorder_2/myorder_2";
import { HelpPage } from "../pages/help/help";
import { CartPage } from "../pages/cart/cart";
import { ReviewPage } from "../pages/review/review";
import { APP_CONFIG, AppConfig } from "./app.config";
import { TranslateService } from "../../node_modules/@ngx-translate/core";
import { Globalization } from "@ionic-native/globalization";
import { WishlistupdatedPage } from "../pages/wishlistupdated/wishlistupdated";
import { AppconstantsPage } from "../pages/appconstants/appconstants";
import { ClsPage } from "../pages/cls/cls";

@Component({
  templateUrl: "app.html",
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = CreateaccountPage;
  rootPage: any = HomePage;
  hideMe: boolean = false;
  isSignedIn: boolean = false;
  viewCartList: any = [];
  obj;
  checkStatus: boolean;
  checkStatus1: boolean;

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private globalization: Globalization,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public translate: TranslateService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public apiProvider: ApiProvider
  ) {
    this.initializeApp();
    this.checkStatus = this.localStorageItem();
    this.checkStatus1 = this.localStorageItem();
  }

  ngOnInit() {}

  public localStorageItem(): boolean {
    if (localStorage.getItem("isSigned") === "true") {
      console.log("isSigned true");
      return true;
    } else {
      console.log("isSigned false");
      return false;
    }
  }

  initializeApp() {
    this.checkLocalStorage();
    this.viewCartApi();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  selectItem(menuItem: any) {
    console.log(menuItem);
  }

  getSideOfCurLang() {
    return this.platform.dir() === "rtl" ? "right" : "left";
  }

  getSuitableLanguage(language) {
    language = language.substring(0, 2).toLowerCase();
    console.log("check for: " + language);
    return this.config.availableLanguages.some((x) => x.code == language)
      ? language
      : "en";
  }

 

  myorder_2Page() {
    this.nav.setRoot(Myorder_2Page);
  }

  testPage() {
    this.nav.setRoot(Home1Page);
    // this.nav.setRoot(AppconstantsPage);
  }

  testPage2() {
    this.nav.setRoot(ClsPage);
  }

  testPage1() {
    this.nav.setRoot(AppconstantsPage);
  }

  my_accountPage() {
    this.nav.setRoot(MyaccountupdatedPage);
  }

  categoryPage() {
    this.nav.setRoot(ProductcategoryPage);
  }

  categoryPage1() {
    this.nav.setRoot(CategoryPage);
  }

  homePage() {
    this.nav.setRoot(HomePage);
  }

  reviewPage() {
    this.nav.setRoot(ReviewPage);
  }

  wishlistPage() {
    this.nav.setRoot(WishlistPage);
  }

  wishlistPage1() {
    this.nav.setRoot(WishlistupdatedPage);
  }

  cartPage() {
    this.nav.setRoot(CartPage);
  }

  helpPage() {
    this.nav.setRoot(HelpPage);
  }

  // phonenumberPage() {
  //   this.showLoaderOnSigningOut();
  //   //localStorage.clear();
  // // this.nav.setRoot(DemoPage);
  // }

  loginPage() {
    this.nav.setRoot(DemoPage);
  }

  logoutPage() {
    this.showLoaderOnSigningOut();
    this.nav.setRoot(DemoPage);
    localStorage.removeItem("isSigned");
    localStorage.removeItem("products");
    localStorage.removeItem("productsWishlist");

    localStorage.removeItem("Userid value");
    localStorage.removeItem("name");
  }

  checkLocalStorage() {
    if (localStorage.getItem("Userid value") === null) {
      console.log("User not signed in");
    } else {
      console.log("User signed in");
    }
  }

  testPageTushar() {
    // this.nav.setRoot(TestingPage);
    this.nav.setRoot(AppconstantsPage);
  }

  privacyPolicyPage() {
    this.nav.setRoot(PrivacypolicyPage);
  }

  termsConditionsPage() {
    this.nav.setRoot(TermsandconditionsPage);
  }

  async showToastOnSigningOut() {
    const toast = await this.toastController.create({
      message: "Please wait Signing out! ",
      duration: 400,
      position: "bottom",
    });
    toast.present();
  }

  showLoaderOnSigningOut() {
    let loading = this.loadingController.create({
      content: "Please wait Signing out!",
    });

    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 400);
  }

  async viewCartApi() {
    try {
      const service = this.apiProvider.getCartDetails();
      service.subscribe(async (data) => {
        if (data) {
          const resultado = data;
          this.viewCartList = resultado;
          this.obj = JSON.stringify(data);
          console.log("All Json Response" + this.obj);

          console.log("All Json Response" + resultado);
          // console.log('Length of cart ' + this.viewCartList.length);

          if (this.viewCartList.length >= 1) {
            console.log("Cart Filled ");
          } else {
            console.log("Cart Empty ");
          }
        } else {
        }
      });
    } catch (error) {}
  }
}
