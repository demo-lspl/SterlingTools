import { TestcartPage } from './../pages/testcart/testcart';
import { PaymentpagePage } from './../pages/paymentpage/paymentpage';
import { Test1Page } from './../pages/test1/test1';
import { TestingPage } from './../pages/testing/testing';
import { WishlistupdatedPage } from './../pages/wishlistupdated/wishlistupdated';
import { ProductCategoryDetailGridPage } from './../pages/product-category-detail-grid/product-category-detail-grid';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TestingproductsPage } from './../pages/testingproducts/testingproducts';
import { MyaccountupdatedPage } from './../pages/myaccountupdated/myaccountupdated';
import { AccordiantestingComponent } from './../components/accordiantesting/accordiantesting';
import { FilterdataPage } from './../pages/filterdata/filterdata';
import { AccordiantestPage } from './../pages/accordiantest/accordiantest';
import { ViewcartPage } from './../pages/viewcart/viewcart';
import { ViewallcategoriesPage } from './../pages/viewallcategories/viewallcategories';
import { CategoryupdatedPage } from './../pages/categoryupdated/categoryupdated';
import { TermsandconditionsPage } from './../pages/termsandconditions/termsandconditions';
import { PrivacypolicyPage } from './../pages/privacypolicy/privacypolicy';
import { ProductcategorydetailPage } from './../pages/productcategorydetail/productcategorydetail';
import { Home1Page } from './../pages/home1/home1';
import { ProductcategoryPage } from './../pages/productcategory/productcategory';
import { RegisterPage } from './../pages/register/register';
import { VieworderdetailsPage } from './../pages/vieworderdetails/vieworderdetails';
import { VieworderPage } from './../pages/vieworder/vieworder';
import { DemoPage } from './../pages/demo/demo';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PhonenumberPage } from '../pages/phonenumber/phonenumber';
import { PasswordPage } from '../pages/password/password';
import { VerificationPage } from '../pages/verification/verification';
import { CreateaccountPage } from '../pages/createaccount/createaccount';
import { CategoryPage } from '../pages/category/category';
import { ShirtsPage } from '../pages/shirts/shirts';
import { ItemdetailPage } from '../pages/itemdetail/itemdetail';
import { ShippiningPage } from '../pages/shippining/shippining';
import { PaymentPage } from '../pages/payment/payment';
import { PlacedPage } from '../pages/placed/placed';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { My_accountPage } from '../pages/my_account/my_account';
import { Myorder_1Page } from '../pages/myorder_1/myorder_1';
import { Myorder_2Page } from '../pages/myorder_2/myorder_2';
import { HelpPage } from '../pages/help/help';
import { CartPage } from '../pages/cart/cart';
import { ReviewPage } from '../pages/review/review';
import { ShortPage } from '../pages/short/short';
import { SearchPage } from '../pages/search/search';  
import { FilterPage } from '../pages/filter/filter';


import { Globalization } from '@ionic-native/globalization';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { APP_CONFIG, BaseAppConfig } from "./app.config";
import { ApiProvider } from '../providers/api/api';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { RouterModule, Routes } from '@angular/router';




  


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhonenumberPage,
    PasswordPage,
    VerificationPage,
    CreateaccountPage,
    CategoryPage,
    ShirtsPage,
    ItemdetailPage,
    ShippiningPage,
    PaymentPage,
    PlacedPage,
    WishlistPage,
    My_accountPage,
    Myorder_1Page,
    Myorder_2Page,
    HelpPage,
    CartPage,
    ReviewPage,
    ShortPage,
    SearchPage,
    FilterPage,  
    DemoPage,
    VieworderPage,
    VieworderdetailsPage,
    RegisterPage,
    ProductcategoryPage,
    Home1Page,
    ProductcategorydetailPage,
    PrivacypolicyPage,
    TermsandconditionsPage,
    CategoryupdatedPage,
    ViewallcategoriesPage,
    ViewcartPage,
    AccordiantestPage,
    FilterdataPage,
    AccordiantestingComponent,
    MyaccountupdatedPage,
    TestingproductsPage,
    ProductCategoryDetailGridPage,
    WishlistupdatedPage,
    TestingPage,
    Test1Page,
    PaymentpagePage,
    TestcartPage
  ],
  imports: [  
   
    IonicStorageModule.forRoot(),
    RouterModule.forRoot([]),


    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),   
  
    TranslateModule.forRoot({  
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PhonenumberPage,
    PasswordPage,
    VerificationPage,
    CreateaccountPage,
    CategoryPage,
    ShirtsPage,
    ItemdetailPage,
    ShippiningPage,
    PaymentPage,
    PlacedPage,
    WishlistPage,
    My_accountPage,
    Myorder_1Page,
    Myorder_2Page,
    HelpPage,
    CartPage,
    ReviewPage,
    ShortPage,
    SearchPage,
    FilterPage, 
    DemoPage,
    VieworderPage,
    VieworderdetailsPage,
    RegisterPage,
    ProductcategoryPage,
    Home1Page,
    ProductcategorydetailPage,
    PrivacypolicyPage,
    TermsandconditionsPage,
    CategoryupdatedPage,
    ViewallcategoriesPage,
    ViewcartPage,
    AccordiantestPage,
    FilterdataPage,
    AccordiantestingComponent,
    MyaccountupdatedPage,
    TestingproductsPage,
    ProductCategoryDetailGridPage,
    WishlistupdatedPage,
    TestingPage,
    Test1Page,
    PaymentpagePage,
    TestcartPage
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    Globalization,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    
  ]
})
export class AppModule {}
