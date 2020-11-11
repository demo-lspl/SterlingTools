import { TestcartPage } from './../pages/testcart/testcart';
import { Test1Page } from './../pages/test1/test1';
import { TestingPage } from './../pages/testing/testing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TestingproductsPage } from './../pages/testingproducts/testingproducts';
import { MyaccountupdatedPage } from './../pages/myaccountupdated/myaccountupdated';
import { AccordiantestingComponent } from './../components/accordiantesting/accordiantesting';
import { AccordiantestPage } from './../pages/accordiantest/accordiantest';
import { TermsandconditionsPage } from './../pages/termsandconditions/termsandconditions';
import { PrivacypolicyPage } from './../pages/privacypolicy/privacypolicy';
import { AboutusPage } from './../pages/aboutus/aboutus';
import { Home1Page } from './../pages/home1/home1';
import { ProductcategoryPage } from './../pages/productcategory/productcategory';
import { VieworderPage } from './../pages/vieworder/vieworder';
import { DemoPage } from './../pages/demo/demo';
import { Component, ViewChild,Inject } from '@angular/core';
import { Nav, Platform, ToastController, LoadingController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { My_accountPage } from '../pages/my_account/my_account';
import { Myorder_1Page } from '../pages/myorder_1/myorder_1';
import { Myorder_2Page } from '../pages/myorder_2/myorder_2';
import { HelpPage } from '../pages/help/help';
import { CartPage } from '../pages/cart/cart';
import { ReviewPage } from '../pages/review/review'; 
import { APP_CONFIG, AppConfig } from './app.config';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';
import { WishlistupdatedPage } from '../pages/wishlistupdated/wishlistupdated';

  
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

 // rootPage: any = CreateaccountPage;
  // rootPage: any = DemoPage;
  rootPage: any = HomePage;
    


  constructor(@Inject(APP_CONFIG) private config: AppConfig, private globalization: Globalization,
    public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public translate:TranslateService,
    public toastController: ToastController,
    public loadingController: LoadingController) {
    this.initializeApp();
  }

 

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleLightContent();
  //     this.splashScreen.hide();
      
  //   });
  // } 


  initializeApp() {
    // if (localStorage.getItem('isSigned') === 'true') {
    //   this.router.navigate(['/home1']);
    // } else {
    //   //this.showToastOnAlreadyLoggedIn();
    //   this.router.navigate(['/home']);
    // }
    console.log('initalizeapp component ts called...');
    this.platform.ready().then(() => {
     // this.splashScreen.hide();
     
    });
  }
  selectItem(menuItem: any) {
    console.log(menuItem);
    
  } 



  getSideOfCurLang() {
    return this.platform.dir() === 'rtl' ? "right" : "left";
  }

  getSuitableLanguage(language) {
    language = language.substring(0, 2).toLowerCase();
    console.log('check for: ' + language);
    return this.config.availableLanguages.some(x => x.code == language) ? language : 'en';
  }
  
  
  myorder_2Page() {
     this.nav.setRoot(Myorder_2Page);
  }  

  testPage() {
    this.nav.setRoot(Home1Page);
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
  
  phonenumberPage() {
    this.showLoaderOnSigningOut();
    localStorage.clear();
   this.nav.setRoot(DemoPage);
  }
  
  testPageTushar() {
  // this.nav.setRoot(TestingPage);
   this.nav.setRoot(TestcartPage);
 }         
 
 privacyPolicyPage() {
    this.nav.setRoot(PrivacypolicyPage);
   }

   termsConditionsPage() {
    this.nav.setRoot(TermsandconditionsPage);
   }

   async showToastOnSigningOut()
   {
    const toast = await this.toastController.create({
      message: 'Please wait Signing out! ',
      duration: 400,
      position: 'bottom',
    });
    toast.present();
  } 

  showLoaderOnSigningOut() {
    let loading = this.loadingController.create({
      content: 'Please wait Signing out!'
    });
  
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 400);
  }

}
