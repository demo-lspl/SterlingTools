webpackJsonp([24],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_demo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/*
    Signup Screen Lasting Erp 21/10/2020
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let RegisterPage = class RegisterPage {
    constructor(navCtrl, navParams, platform, alertController, toastController, loadingController, httpClient, app, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.httpClient = httpClient;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.emailAddress = '';
        this.userName = '';
        this.emailPattern = "[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}";
        this.emailValidatorRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // this.platform.registerBackButtonAction(() => {
        //   // disabled back button   
        //   this.showToastOnBackSignUp();
        //   console.log('ngOnInit register back was called!');
        //     });
    }
    // ionViewDidLoad() {
    //    console.log('ionViewDidLoad Register Page');
    //   if (localStorage.length === 0) {
    //     // this.router.navigate(['/demo']);
    //      // this.navCtrl.push(DemoPage);
    //   } else {
    //     // this.showToastOnAlreadyLoggedIn();
    //       this.navCtrl.push(HomePage);
    //   }
    // }  
    backBtnClick() {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__demo_demo__["a" /* DemoPage */]);
    }
    registerBtnClick() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Register Button clicked.');
            // Empty Email Validation
            if (this.emailAddress === '') {
                this.showToastOnEmptyEmail();
            }
            // Empty Password Validation
            else if (this.userName === '') {
                this.showToastOnEmptyName();
            }
            // Invalid Email Validation
            else if (!this.emailValidatorRegex.test(this.emailAddress)) {
                this.showToastOnInvalidEmailAddress();
            }
            //  else if ((await Network.getStatus()).connectionType === 'none') {
            //   this.showNetworkAlert();
            //   console.log('Network status not available', this.networkStatus);
            // } 
            // Credentials filled 
            else {
                this.showLoadingControllerLaunch();
                console.log('Value saved locally.');
            }
        });
    }
    ngOnInit() {
        this.showLoadingControllerLaunch1();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'RegisterPage') {
                if (nav.canGoBack()) {
                    //nav.pop();
                    console.log('Tushar');
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__demo_demo__["a" /* DemoPage */]);
                }
            }
        });
    }
    callRegisterApi() {
        console.log('callRegisterApi api called');
        const postParams = { email: this.emailAddress, name: this.userName };
        this.httpClient.post('http://busybanda.com/sterling-tools/api/user_register', JSON.stringify(postParams)).subscribe((jsonResponse) => {
            console.log('test' + jsonResponse);
            this.obj = JSON.stringify(jsonResponse);
            const parsedData = JSON.parse(this.obj);
            status = parsedData.Status;
            console.log('status' + this.obj);
            if (this.obj.includes('User Register Successfully')) {
                console.log('Json Response success ' + this.obj);
                const toast = this.toastController.create({ message: 'User Registered successfully', duration: 900 });
                toast.present();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__demo_demo__["a" /* DemoPage */]);
            }
            else {
                const toast = this.toastController.create({ message: 'Email already registered', duration: 1200 });
                toast.present();
                console.log('Json Response Failure ' + this.obj);
            }
        });
    }
    showToastOnEmptyEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Email ',
                duration: 10000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyName() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Name ',
                duration: 10000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnInvalidEmailAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Invalid email address',
                duration: 10000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnPageLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Please wait! ',
                duration: 400,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showNetworkAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert = yield this.alertController.create({
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
        });
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: 'Please wait!'
        });
        loading.present();
        this.callRegisterApi();
        setTimeout(() => {
            loading.dismiss();
        }, 1000);
    }
    showLoadingControllerLaunch1() {
        let loading = this.loadingController.create({
            content: 'Please wait!'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 700);
    }
    showToastOnBackSignUp() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Disabled Back Button',
                duration: 10000,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\register\register.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n      <ion-col>\n        <img src="assets/imgs/sterlinglogo.png"/>\n        <br/>\n        <h4>Sterling Tools</h4>\n      </ion-col>\n    </ion-row>\n  \n    <div >\n      <ion-list >\n          <div class="login-box">\n            \n                <ion-row>\n                  <ion-col>\n                    <ion-list inset>\n                      \n                     \n\n                      <div class="input-container">\n                        <ion-icon name="mail"  item-left ></ion-icon>\n                        <input class="input-field" placeholder="Enter Email Address" type="name" [(ngModel)]="emailAddress" >\n                      </div>\n\n                      <div class="input-container">\n                        <ion-icon name="person"  item-left ></ion-icon>\n                        <input class="input-field"  placeholder="Enter Name"  type="name"  [(ngModel)]="userName">\n                      </div>\n                      \n                    </ion-list>\n                  </ion-col>\n                </ion-row>\n                \n                <ion-row>  \n                  <ion-col class="signup-col">\n                    <button ion-button class="submit-btn" full type="submit" style="text-transform: none;" class="bg-thime btn-round btn-text" (click)="registerBtnClick()">Signup</button>\n                    <button ion-button class="submit-btn" full type="submit" style="text-transform: none;" class="bg-thime btn-round btn-text" (click)="backBtnClick()" >Back</button>\n\n                  </ion-col>\n                </ion-row>\n                \n             \n            </div>\n      </ion-list>\n    \n      \n    </div>\n</ion-content>'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductcategorydetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productcategory_productcategory__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







/**
 * Generated class for the ProductcategorydetailPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ProductcategorydetailPage = class ProductcategorydetailPage {
    constructor(navCtrl, navParams, modalCtrl, httpClient, loadingController, platform, app, toastController, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.platform = platform;
        this.app = app;
        this.toastController = toastController;
        this.apiProvider = apiProvider;
        this.productCategoryInformation = [];
        this.viewCartList = [];
        this.strId = navParams.get('catId');
        this.dynamicTermId = this.strId;
        // console.log('Received productsList id ' + this.strId);
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ProductcategorydetailPage');
    }
    searchPage() {
        // let modal = this.modalCtrl.create(SearchPage);
        // modal.present();
    }
    cartPage() {
        // let modal = this.modalCtrl.create(CartPage);
        // modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewcart_viewcart__["a" /* ViewcartPage */]);
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
    sortPopular() {
        this.showLoadingControllerLaunch();
    }
    addToCart(id, strProductAdded) {
        // this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
        //   this.obj = JSON.stringify(jsonResponse);
        //   console.log("Sent productsList response " + this.obj);
        //   console.log("Sent productsList id " + id);
        //   this.showToastOnAddProductSingle(strProductAdded);
        // });
        this.showToastOnAddProductSingle(strProductAdded);
    }
    ngOnInit() {
        this.viewCartApi();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'ProductcategorydetailPage') {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__productcategory_productcategory__["a" /* ProductcategoryPage */]);
                }
                else {
                }
            }
        });
        this.showLoadingControllerLaunch();
        this.callProductCategoryDetail();
    }
    callProductCategoryDetail() {
        this.httpClient.get('http://busybanda.com/sterling-tools/api/get_category_by_id?' + 'id=' + this.dynamicTermId)
            .subscribe((jsonResponse) => {
            this.productCategoryInformation = jsonResponse['result'];
            this.obj = JSON.stringify(jsonResponse);
            console.log('Particular product details json ' + this.obj.result);
            if (this.productCategoryInformation && this.productCategoryInformation.length) {
                console.log('Particular product details available ');
            }
            else {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getTest1();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        // this.strData = 'No Products in Cart';  
                        if (this.viewCartList.length >= 1) {
                            console.log('Cart Filled ');
                            this.countProducts = this.viewCartList.length;
                            this.buttonIcon = "cart";
                        }
                        else {
                            console.log('Cart Empty ');
                            this.countProducts = 'Empty';
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
    }
};
ProductcategorydetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-productcategorydetail',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\productcategorydetail\productcategorydetail.html"*/'\n\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle style="display: block !important">\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n  </button>\n\n    <!-- <ion-icon name="md-arrow-back"></ion-icon>\n    <ion-icon name="md-search" class="text-light icon"></ion-icon> -->\n\n\n      <ion-title>Categories Details\n          <!-- <span float-right> \n            <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n            <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n          </span> -->\n          <span float-right>\n            <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n            <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n            <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon>\n          </span>\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="chevron-down-circle-outline"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing Product Categories Details."\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngIf="strData;else other_content">\n\n    <ion-card-header >\n      <ion-item lines="none">\n        <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{strData}}</ion-label>\n      </ion-item> \n  \n          \n    </ion-card-header>\n  </ion-card>\n\n  \n\n\n  <ng-template #other_content>\n\n  \n  \n    \n    <ion-grid class="product-grid">\n      <ion-row class="rowgrid" text-center>\n        <ion-col col-6\n          class="columngrid"\n          *ngFor="let productCategory of productCategoryInformation"\n         >\n          <ion-card>\n            <ion-card-header style="justify-content: left">\n              <div\n                class="img-box"\n              >\n                <img  [src]="productCategory.image"  style="width:200px;height:80px ;">\n\n              </div>\n              <!-- <ion-icon name="md-heart" class="text-light icon"></ion-icon> -->\n            </ion-card-header>\n            <ion-card-content>\n          \n             \n\n\n           \n\n              <ion-item >\n                <h5 style="font-size: 11px;text-align: -webkit-center;"> {{productCategory.name}}</h5> \n              </ion-item>\n  \n              <div>\n                <div *ngIf="productCategory.regular_price">     <!--If "product" exists-->\n                  <h5 style="font-size: 12px;text-align: center;"  > <span class="priceicon">Price : </span>  <span class="priceicon">$</span> {{productCategory.regular_price}} </h5>  \n\n                  <!-- <h5 style="font-size: 12px;text-align: center;color: red;"  > <span class="priceicon">Price : </span> {{productCategory.regular_price}}  <span class="priceicon">$</span></h5>   -->\n                  <!-- <div class="rating" style="text-align: -webkit-center;margin-top: 8px;">\n                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\n                  </div> -->\n\n               <h5 style="font-size: 12px;text-align: center;color: red;"  > <span class="priceicon">Price : </span> {{productCategory.name}}  <span class="priceicon">$</span></h5>   \n\n      \n                  <div class="rateing">\n                    <div class="card-btn">\n                      <p class="" float-left>\n                        <button\n                          ion-button\n                          full\n                          class="bg-thime btn-round btn-text"\n                          style="margin-top: 3px; width: 125px;text-align: center;"\n                          (click)="addToCart(productCategory.id,productCategory.name)">\n                          Read More\n                        </button>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n            \n                <div *ngIf="!productCategory.regular_price">     <!--If "product" not exists-->\n                  <!-- <h5 style="font-size: 12px;text-align: center"  >  <span class="priceicon">$</span>Price Not Available</h5>   -->\n                  <h5 style="font-size: 12px;text-align: center"> Price Not Available</h5>  \n                  <div class="rating" style="text-align: -webkit-center;margin-top: 11px;">\n                    <!-- <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span> -->\n                    <h5 style="font-size: 12px;text-align: center;color: black;"  >Make :{{strProductMake}}  </h5>   \n\n                  </div>\n                  <div class="rateing">\n                    <div class="card-btn">\n                      <p class="" float-left>\n                        <button\n                          ion-button\n                          full\n                          class="bg-thime btn-round btn-text"\n                          style="margin-top: 3px; width: 125px;text-align: center;"\n                          (click)="addToCart(productCategory.id,productCategory.name)" >\n                       Read More\n                        </button>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n            </div>\n\n\n            \n\n\n\n\n\n\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    \n  </ng-template>\n\n\n\n\n\n\n\n\n\n\n  <!-- <ng-template #other_content1>\n\n    <ion-card *ngFor="let productCategory of productCategoryInformation">\n\n      <ion-card-header >\n        <ion-item lines="none">\n          <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{productCategory.name}}</ion-label>\n        </ion-item> \n    \n            \n      </ion-card-header>\n    </ion-card>\n\n  </ng-template> -->\n\n\n \n\n</ion-content>\n  '/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\productcategorydetail\productcategorydetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */]])
], ProductcategorydetailPage);

//# sourceMappingURL=productcategorydetail.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PaymentPage = class PaymentPage {
    constructor(navCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.emailAddress = '104402:BEo8VfAJvOT7Rf0h';
        this.password = '';
        this.emailAddressencoded = 'testing';
        this.enstring = '104402:BEo8VfAJvOT7Rf0h';
    }
    ngOnInit() {
        this.loginCredentialsCheck1();
        // Retrieve the object from storage
    }
    loginCredentialsCheck1() {
        //     let filePath: string = '104402:BEo8VfAJvOT7Rf0h';
        // this.base64.encodeFile(filePath).then((base64File: string) => {
        //   console.log('encoded pass '+base64File);
        // }, (err) => {
        //   console.log(err);  
        // });
        // Define the string
        // Encode the String
        var encodedString = btoa(this.enstring);
        console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"
        // // Decode the String
        // var decodedString = atob(encodedString);
        // console.log(decodedString); // Outputs: "Hello World!"
        // var settings = {
        //   "url": "https://demo.paymarkclick.co.nz/api/webpayments/paymentservice/rest/WPRequest",
        //   "method": "POST",
        //   "timeout": 0,
        //   "mode": 'no-cors',
        //   "dataType": "text",
        //   "headers": {
        //     "Content-Type": "application/x-www-form-urlencoded",
        //   },
        //   "data": {
        //     "account_id": "625835",
        //     "username": "104402",
        //     "password": "BEo8VfAJvOT7Rf0h",
        //     "cmd": "_xclick",
        //     "amount": "1.00",
        //     "return_url": "https://demo.paymarkclick.co.nz/guides/test"
        //   }
        // };
        // $.ajax(settings).done(function (response) {
        //   console.log("Ajax response"+response);
        //   console.log("Ajax response  "+response.replace(/<\/?[^>]+>/gi, ""));
        // });
        //fetch method
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Cookie", "ASP.NET_SessionId=cgydxj1s0320hgw0f5udwoh1; AWSELB=C99F59C51651FA01D4CDD5A64A04F21C64855D8A0792B4BF2570A997B2A9F532677F47FCCE580B41D0156EDE6538E87105E9B5B40ADB39EC1FFBEBBBAF86F902187CC34F8A; AWSELBCORS=C99F59C51651FA01D4CDD5A64A04F21C64855D8A0792B4BF2570A997B2A9F532677F47FCCE580B41D0156EDE6538E87105E9B5B40ADB39EC1FFBEBBBAF86F902187CC34F8A; TS01ea8473=01bec82efc8fe8f35bcdc2a3780ccc780d98d2ebd25ccdb4d1c13d630287e253bfa2a5e1b02a916c4a8fb482006e8406c92df561b5b915ab86c2e7ec2d288b4da518bf90c1965312dcc601882be8be4678b7855d7a6ab61d6d6b5783f73217a2851e84003f");
        var urlencoded = new URLSearchParams();
        urlencoded.append("account_id", "625835");
        urlencoded.append("username", "104402");
        urlencoded.append("password", "BEo8VfAJvOT7Rf0h");
        urlencoded.append("cmd", "_xclick");
        // localStorage.setItem("Total Amount", this.strSubTotalAmount);
        this.retrievedObject = JSON.parse(localStorage.getItem('name'));
        console.log('this.strTest ' + this.retrievedObject);
        urlencoded.append("amount", this.retrievedObject);
        // urlencoded.append("amount", "1.00");
        urlencoded.append("return_url", "https://demo.paymarkclick.co.nz/guides/test");
        let requestParam = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/', targetUrl = 'https://demo.paymarkclick.co.nz/api/webpayments/paymentservice/rest/WPRequest';
        fetch(proxyUrl + targetUrl, requestParam)
            .then(response => response.text())
            .then(result => window.open(result.replace(/<\/?[^>]+>/gi, "")));
        // .then(result => window.location.replace(result.replace(/<\/?[^>]+>/gi, "")))
        //.catch(error => console.log('error', error));
        // window.open("https://www.w3schools.com");
    }
    placedPage() {
        // this.navCtrl.push(PlacedPage);
    }
};
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-payment ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\payment\payment.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Pay now</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content radio-group class="bg-light">\n\n    <ion-row text-center class="status">\n\n        <ion-col class="complate">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>Signin</span></ion-col>\n\n        <ion-col class="processing">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>Shipping</span></ion-col>\n\n        <ion-col class="panding">\n\n            <ion-icon name="md-radio-button-off"></ion-icon><span>Payment</span></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card>\n\n        <p class="heading">Payment Method</p>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>Credit Card</ion-label>\n\n                <ion-radio checked="true" value="card"></ion-radio>\n\n            </ion-item>\n\n            <div class="form">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <ion-label>Card Type</ion-label>\n\n                        <ion-select  interface="action-sheet">\n\n                            <ion-option selected value="visa">{{"visa_exp" | translate}}</ion-option>\n\n                            <ion-option value="debit">{{"debit" | translate}}</ion-option>\n\n                            <ion-option value="master">{{"master" | translate}}</ion-option>\n\n                            <ion-option value="credit">{{"credit" | translate}} </ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>Card Number</ion-label>\n\n                        <ion-input type="text" text-right value="1234-1234-1234-5678"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>Card Name</ion-label>\n\n                        <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col col-8 class="">\n\n                          <div class="d-flex mr-5">\n\n                            <ion-item>\n\n                              <ion-label>Expiry Date</ion-label>\n\n                              <ion-input type="text" text-right value="11/20"></ion-input>\n\n                            </ion-item>\n\n                            <ion-icon name="md-calendar" class="text-light calendar-icon"></ion-icon>\n\n                          </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                          <ion-item>\n\n                            <ion-label>CVV Number.</ion-label>\n\n                            <ion-input type="text" text-right value="244"></ion-input>\n\n                          </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n\n\n                    <!-- <ion-row>\n\n                        <ion-col>\n\n                          <ion-list inset>\n\n                            \n\n                           \n\n                            <ion-item >\n\n                              <ion-icon name="mail"  item-left ></ion-icon>\n\n                              <input class="input-field" placeholder="Username" type="name" [(ngModel)]="emailAddress" >\n\n                            </ion-item>\n\n      \n\n                           \n\n                            \n\n                          </ion-list>\n\n                        </ion-col>\n\n                      </ion-row> -->\n\n\n\n                    <ion-item>\n\n                        <ion-label text-right>Save Card Details</ion-label>\n\n                        <ion-toggle color="secondary" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>Cash On Delivery</ion-label>\n\n                <ion-radio value="cod"></ion-radio>\n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>Net Banking\n\n                    \n\n                </ion-label>\n\n                <ion-radio value="net_banking"></ion-radio>\n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <div class="spacebar"></div>\n\n    <div class="btn-padding btn-fisx-bottom">\n\n        <button \n\n        ion-button\n\n        full\n\n        class="bg-thime btn-round btn-text"\n\n        style="max-width: 390px; float: none; height: 40px"\n\n            (click)="placedPage()">Pay <img src="assets/imgs/rupee-white.png">\n\n            100$ \n\n        </button>\n\n\n\n        <!-- <button\n\n          ion-button\n\n          full\n\n          class="bg-thime btn-round btn-text"\n\n          style="max-width: 390px; float: none; height: 40px"\n\n          (click)="checkOutPage()">\n\n\n\n        \n\n          Proceed to Checkout\n\n        </button> -->\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\payment\payment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let TestcartPage = class TestcartPage {
    constructor(navCtrl, navParams, httpClient, loadingController, alertController, toastController, apiProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.apiProvider = apiProvider;
        this.storage = storage;
        this.eventCartNumber = 127890;
        this.viewCartList = [];
    }
    ngOnInit() {
        this.viewCartApi();
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            this.presentLoading();
            try {
                const service = this.apiProvider.getTest1();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        // console.log(resultado);   
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        // console.log('View Cart Api Response ' + this.obj);
                        this.strData = 'No Products in Cart';
                        var total = 0;
                        var totalprice = 0;
                        for (const entry of this.viewCartList) {
                            console.log(entry.product_id);
                            this.strDynamicId = entry.product_id;
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
    }
    productcategoryDetailPage(product_id, name) {
        // this.navCtrl.push(ProductcategorydetailPage, {
        //   catId: catId,
        //   name:name
        // });
        console.log('Product Id--' + product_id);
        console.log('Product Name--' + name);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.viewCartApi();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.complete();
        }, 500);
    }
    incrementValue1(index, strDynamicId) {
        if (this.viewCartList[index].product_id === this.eventCartNumber) {
            console.log('success even');
            this.viewCartList[index].quantity += 2;
            this.valueQuantity = this.viewCartList[index].quantity;
            this.buttonDisabled = false;
        }
        else {
            console.log('success odd');
            this.viewCartList[index].quantity++;
            this.valueQuantity = this.viewCartList[index].quantity;
            this.buttonDisabled = false;
        }
    }
    decrementValue1(index, strDynamicId) {
        if (this.viewCartList[index].quantity <= 1) {
            console.log('failure');
            this.showToastOnCart();
        }
        else {
            if (this.viewCartList[index].product_id === this.eventCartNumber && this.viewCartList[index].quantity <= 2) {
                console.log('no decrement ');
            }
            else if (this.viewCartList[index].product_id === this.eventCartNumber) {
                this.viewCartList[index].quantity -= 2;
                this.valueQuantity = this.viewCartList[index].quantity;
                this.buttonDisabled = false;
            }
            else {
                console.log('success odd');
                this.viewCartList[index].quantity--;
                this.valueQuantity = this.viewCartList[index].quantity;
                this.buttonDisabled = false;
            }
        }
    }
    updateShoppingCart(strDynamicId) {
        console.log('Update Product Id ' + strDynamicId);
        console.log('Update Product Quantity ' + this.strDynamicId1);
        // product_id: 162207
        // product_id: 162174
    }
    removeProduct(strDynamicId) {
        console.log('Remove Product: ' + strDynamicId);
        this.httpClient.get('http://busybanda.com/sterling-tools/api/remove_cart_item?' + 'product_id=' + this.strDynamicId).subscribe((jsonResponse) => {
            this.obj = JSON.stringify(jsonResponse);
            console.log('Data' + this.obj);
            this.viewCartApi();
        });
    }
    presentLoadingDefault() {
        let loading = this.loadingController.create({
            content: 'Please wait Viewing Cart...'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 300);
    }
    showToastOnCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Minimum product quantity cannot be less than 1 ',
                duration: 1500,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnAddingCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Product quantity Updated in cart ',
                duration: 1300,
                position: 'bottom',
            });
            toast.present();
        });
    }
    presentLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: "Please wait fetching data !",
                duration: 400,
            });
            return yield loading.present();
        });
    }
};
TestcartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-testcart',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\testcart\testcart.html"*/'\n<ion-header class="bg-thime">\n  <ion-navbar>\n  <button ion-button menuToggle style="display: block !important">\n    <ion-icon class="menu-icon"\n      ><img src="assets/imgs/ic_menu.png"\n    /></ion-icon>\n  </button>\n    <ion-title style="text-align: center"\n      >View Cart\n        \n    </ion-title>\n  </ion-navbar>\n  <div class="custom-id">\n   \n    <ion-searchbar placeholder="Search any part here" ></ion-searchbar>\n  </div>\n \n</ion-header>\n   \n<ion-content class="bg-light">\n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="chevron-down-circle-outline"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing Cart."\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-item *ngIf="!viewCartList.length;else other_content">\n    <h5 style="font-size: 12px;">{{strData}}</h5> \n   \n  </ion-item>\n\n\n  <ng-template #other_content>\n\n    <div class="pincod bg-white shadow-bottom cart-box"  style=" padding: 16px 16px 16px 16px;"\n    >\n      <ion-row style="margin-top: 8px" *ngFor="let viewCart of viewCartList;let i = index" \n      (click)="productcategoryDetailPage(viewCart.product_id,viewCart.name)">\n        <ion-col col-4>\n          <ion-list>\n            <ion-item>\n              <img  [src]="viewCart.product_thumbnail"  style="width:200px;height:80px ;">\n            </ion-item>\n          </ion-list>\n        </ion-col>\n        <ion-col col-8>\n          \n          <div class="row"  >\n            <div class="block">{{viewCart.name}}</div>\n            <ion-icon\n            name="md-close"\n            style="margin-left: 10%; margin-top: 2%"\n            (click)="removeProduct(viewCart.product_id)">\n          </ion-icon> \n            \n          </div>      \n  \n         \n          <div   style="margin-top: 6% ">\n             <!-- <ion-input  type="number"   [(ngModel)]="valueQuantity" id="myText" placeholder = "Input New Quantity" >{{viewCart.quantity}}  </ion-input> \n             <input value="{{viewCart.quantity}}" class="form-control" style="text-align:center;" id="textbox" type="number">  -->\n             <!-- <ion-input type="number" min="1"  [(ngModel)]="valueQuantity">{{viewCart.quantity}}</ion-input> -->\n             <!-- <input value="{{viewCart.quantity}}" class="form-control" style="text-align:center;" id="textbox" type="number"> -->\n          </div>\n\n \n         \n\n          <div style="margin-top: 6% " >\n            QTY          \n            <span class="icon"\n              >\n              <ion-icon\n                name="md-remove-circle"\n                style="margin-left: 10%; margin-top: 2%"\n                (click)="decrementValue1(i,strDynamicId)">\n              </ion-icon>\n          </span>\n            <span  text-center style="margin-left: 10%;color: red;">{{viewCart.quantity}}</span>\n            <!-- <span  text-center style="margin-left: 10%;color: red;">{{strDynamicProductQuantity}}</span> -->\n\n            <span class="icon" text-right\n              ><ion-icon\n                name="md-add-circle"\n                (click)="incrementValue1(i,strDynamicId)"\n                style="margin-left: 10%"\n              ></ion-icon\n            ></span>\n          </div>\n\n        \n          <div style="margin-top: 6%">\n            <label > <span class="priceicon">Product Regular Price   </span>{{viewCart.price}} <span class="priceicon">$</span></label>\n        \n          </div>\n        </ion-col>\n      </ion-row>\n    \n    </div>\n\n    <div  >\n      <div class="reating-review bg-white" padding style="margin-bottom: 15px" > \n        <div class="reating" >\n          <div class="select-section shadow-bottom" style="text-align: center"\n           >\n            <ion-row\n              class="ion-justify-content-center"\n              style="justify-content: center"\n             >\n              <button\n                ion-button\n                full\n                class="bg-thime btn-round btn-text"\n                style="max-width: 390px"\n                (click)="updateShoppingCart(strDynamicId)">\n                Update Shopping Cart\n              </button>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div style="margin-top: 10%;">\n\n      {{obj}}\n    </div>\n\n\n       <!-- <div >\n        <div class="reating-review bg-white" padding style="margin-bottom: 15px" > \n          <div class="reating" >\n            <div class="select-section shadow-bottom" style="text-align: center"\n             >\n              <ion-row\n                class="ion-justify-content-center"\n                style="justify-content: center"\n               >\n                <button\n                  ion-button\n                  full\n                  class="bg-thime btn-round btn-text"\n                  style="max-width: 390px"\n                  (click)="updateShoppingCart(strDynamicId)">\n                  Update Shopping Cart\n                </button>\n              </ion-row>\n            </div>\n          </div>\n    </div>\n       </div > -->\n\n\n      \n        \n\n\n       \n  \n \n\n  </ng-template>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\testcart\testcart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], TestcartPage);

//# sourceMappingURL=testcart.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterdataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the FilterdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let FilterdataPage = class FilterdataPage {
    constructor() {
    }
    ngOnInit() {
    }
};
FilterdataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filterdata',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\filterdata\filterdata.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n\n  \n</ion-content>\n\n\n\n    <ion-grid style="margin-top: 10px;">\n      <ion-row>\n        <ion-col col-6>\n\n        \n       \n          <img src="assets/imgs/productimage.jpg" style="width: 130px;margin-top: 10px" />\n          <!-- <h1>Chris Griffith</h1>\n          <p>6W 3D 2L</p> -->\n          <ion-item>\n            <h1>Test Product</h1>\n          \n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <div style="color: black;">Hiiii</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\filterdata\filterdata.html"*/,
    }),
    __metadata("design:paramtypes", [])
], FilterdataPage);

//# sourceMappingURL=filterdata.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewallcategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__itemdetail_itemdetail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ViewallcategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ViewallcategoriesPage = class ViewallcategoriesPage {
    constructor(navCtrl, navParams, modalCtrl, apiProvider, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.categoryList = [];
        this.featuredProductsList = [];
        this.slides = [
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-12.jpg",
            },
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-13.jpg",
            },
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-12.jpg",
            }
        ];
    }
    ngOnInit() {
        // this.getAllCategories();
        this.showLoadingControllerLaunch();
        this.getAllFeaturedProducts();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ViewallcategoriesPage');
    }
    categoryPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__category_category__["a" /* CategoryPage */]);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__["a" /* WishlistPage */]);
    }
    searchPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    }
    cartPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
        modal.present();
    }
    getAllCategories() {
        const service = this.apiProvider.getProductCategories();
        service.subscribe((data) => {
            const resultado = data;
            const resultado1 = data;
            this.categoryList = resultado;
            // this.taxaNomyMakeList = resultado1;
        });
    }
    getAllFeaturedProducts() {
        const service = this.apiProvider.getFeaturedProducts();
        service.subscribe((data) => {
            const resultado = data;
            const resultado1 = data;
            this.featuredProductsList = resultado;
        });
    }
    itemdetailPage(id, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
            id: id,
            title: title,
        });
        var JSON_Obj = { "one": 1, "two": 2, "three": 3, "four": 4, "five": 5 };
        // Read key
        for (var key in JSON_Obj) {
            //console.log(key1);
            console.log(JSON_Obj[key]);
        }
        console.log('Sent productsList id ' + id);
        console.log('Sent productsList title ' + title);
        // console.log('Sent productsList url ' + url);
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: 'Please wait !'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 600);
    }
};
ViewallcategoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-viewallcategories',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\viewallcategories\viewallcategories.html"*/'<ion-header class="bg-thime">\n  <ion-navbar>\n    <!-- <button ion-button menuToggle style="display: block !important;">\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n    </button> -->\n    <ion-title >All Categories\n      <span float-right>\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n      </span>\n    </ion-title>\n    <!-- <ion-title>{{\'AUTO PARTS\' | translate}}</ion-title>\n    <span float-right>\n      <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="30px" height="30px"></ion-icon>\n      <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n    </span> -->\n  </ion-navbar>\n  <!-- <ion-searchbar  placeholder="Search Categories" (click)="searchPage()"></ion-searchbar> -->\n  <!-- <ion-list>\n    <ion-item > </ion-item>\n  </ion-list> -->\n  <!-- <div class="tab-row">\n    <ion-row>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/first.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/second.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/third.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/fourth.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">  \n        <div class="img-box" text-center>\n          <img src="assets/imgs/fifth.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n    \n    </ion-row>\n  </div> -->\n</ion-header>\n\n\n<ion-content class="bg-light">\n  <!-- <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image" />\n      <div class="banner-text">\n        <p [innerHTML]="slide.description"></p>\n        <small [innerHTML]="slide.smalltext"></small>\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      </div>\n    </ion-slide>\n  </ion-slides> -->\n\n  \n\n  <!-- <p >Featured Items \n    <small class="bg-thime btn-round text-white" float-right>\n      View All\n    </small>\n  </p> -->  \n \n\n  <!-- (click)="itemdetailPage(products.id,products.title,products.url,products.status,products.date,products.modified)" -->\n\n \n\n  <ion-grid>\n    <ion-row  >   \n      <ion-col *ngFor="let featuredProducts of featuredProductsList">\n        <ion-card >\n            <ion-card-header >\n                <div class="img-box" (click)="itemdetailPage(featuredProducts.ID,featuredProducts.post_title)">\n                    <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n                </div>\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n            </ion-card-header>\n            <ion-card-content >\n              <ion-item >\n                <ion-label>{{featuredProducts.post_title}}</ion-label>\n              </ion-item>  \n                <!-- <h5>Unique For Men Black Formal Slim Fit Shirt</h5> -->\n  \n                <!-- <h5>{{products.status}}</h5> -->\n                <div class="rateing">\n                    <div class="card-btn">\n                        <p class="" float-left>\n                          <span style="margin-left: 9px;">4.2 </span>\n                            <!-- <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span> -->\n                            <!-- <span class="text-light bold"> (125)</span> -->\n                        </p>\n                        <!-- <div style="display: flex;" float-right>\n                            <div class="price text-light mr-5">\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                            </div>\n                            <div class="price text-sky">\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                            </div>\n                        </div> -->\n                    </div>\n                </div>\n            </ion-card-content>\n        </ion-card>\n      </ion-col>\n       <!-- <ion-col>\n        <ion-card >\n            <ion-card-header >\n                <div class="img-box" (click)="itemdetailPage()">\n                    <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n                </div>\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n            </ion-card-header>\n            <ion-card-content (click)="itemdetailPage()">\n              <ion-item >\n                <ion-label>{{products.title}}</ion-label>\n              </ion-item>  \n  \n                <h5>{{products.status}}</h5>\n                <div class="rateing">\n                    <div class="card-btn">\n                        <p class="" float-left>\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                            <span class="text-light bold"> (125)</span>\n                        </p>\n                        <div style="display: flex;" float-right>\n                            <div class="price text-light mr-5">\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                            </div>\n                            <div class="price text-sky">\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ion-card-content>\n        </ion-card>\n      </ion-col>  -->\n    </ion-row> \n\n\n  </ion-grid>\n \n \n  \n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\viewallcategories\viewallcategories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */]])
], ViewallcategoriesPage);

//# sourceMappingURL=viewallcategories.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payment_payment__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
/**
 *  Created By Lasting Erp
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let TestingPage = class TestingPage {
    constructor(apiService, loadingController, platform, navCtrl, httpClient, toastController, app) {
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.app = app;
        this.firstname = '';
        this.lastName = '';
        this.companyName = '';
        this.country = '';
        this.streetAddress = '';
        this.town = '';
        this.region = '';
        this.postcode = '';
        // tslint:disable-next-line: no-unused-expression
    }
    ngOnInit() {
        this.presentLoading();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'TestingPage') {
                if (nav.canGoBack()) {
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                }
            }
        });
    }
    checkoutBtnClick() {
        if (this.firstname === '') {
            this.showToastOnEmptyFirstName();
        }
        else if (this.lastName === '') {
            this.showToastOnEmptyLastName();
        }
        else if (this.companyName = '') {
            this.showToastOnEmptyCompanyName();
        }
        else if (this.country = '') {
            this.showToastOnEmptyCountry();
        }
        else if (this.streetAddress = '') {
            this.showToastOnEmptyStreetAddress();
        }
        else if (this.town = '') {
            this.showToastOnEmptyCompanyName();
        }
        else if (this.region = '') {
            this.showToastOnEmptyCountry();
        }
        else if (this.postcode = '') {
            this.showToastOnEmptyPostCode();
        }
        else {
            this.showToastOnFormSuccess();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__payment_payment__["a" /* PaymentPage */]);
            console.log('All Result ' + this.firstname);
        }
    }
    showToastOnFormSuccess() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Success ',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyFirstName() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter First Name ',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyLastName() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Last Name ',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyCompanyName() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Company Name ',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Country ',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyStreetAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Street Address ',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyTown() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Town ',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyRegion() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Region ',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyPostCode() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Post Code ',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    presentLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: "Please wait  !",
                duration: 900,
            });
            return yield loading.present();
        });
    }
};
TestingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: "page-testing",template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\testing\testing.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle style="display: block !important">\n      <ion-icon class="menu-icon"\n        ><img src="assets/imgs/ic_menu.png"\n      /></ion-icon>\n    </button>\n    <ion-title\n      >Checkout Details\n      <span float-right>\n        <ion-icon class="icon" \n          ><img src="assets/imgs/ic_my_wishlist.png" width="100%;"\n        /></ion-icon>\n        <ion-icon class="icon"  class="fa fa-thumbs-up"\n          ><img src="assets/imgs/ic_my_cart.png" width="100%;"\n        /></ion-icon>\n      </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header> \n\n\n\n\n\n<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col>\n      <img src="assets/imgs/sterlinglogo.png" />\n      <br />\n      <h4>Sterling Tools</h4>\n    </ion-col>\n  </ion-row>\n\n  <div>\n    <ion-list>\n      <div class="login-box">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              <div class="input-container">\n                <!-- <ion-icon name="mail" item-left></ion-icon> -->\n                <input class="input-field" placeholder="First Name" type="name" [(ngModel)]="firstname" style="width: 100%; \n                box-sizing: border-box;\n                -webkit-box-sizing:border-box;\n                -moz-box-sizing: border-box;height: 35px;"/>\n              </div>\n\n              <div style="margin-top: 10px;">\n                <input class="input-field" placeholder="Last Name" type="name" [(ngModel)]="lastName" style="width: 100%; \n                box-sizing: border-box;\n                -webkit-box-sizing:border-box;\n                -moz-box-sizing: border-box;height: 35px;"/>\n              </div>\n\n              <div style="margin-top: 10px;">\n                <input class="input-field" placeholder="Company Name" type="name" [(ngModel)]="companyName" style="width: 100%; \n                box-sizing: border-box;\n                -webkit-box-sizing:border-box;\n                -moz-box-sizing: border-box;height: 35px;"/>\n              </div>\n\n              <div style="margin-top: 14px;">\n                <h4 style="font-size: 15px;">Country/Region</h4>\n              </div>\n\n              <div style="margin-top: 10px;">\n                <input class="input-field" placeholder="Street Address" type="name" [(ngModel)]="streetAddress" style="width: 100%; \n                box-sizing: border-box;\n                -webkit-box-sizing:border-box;\n                -moz-box-sizing: border-box;height: 35px;"/>\n              </div>\n\n              <div style="margin-top: 10px;">\n                <input class="input-field" placeholder="Town/City" type="name" [(ngModel)]="town" style="width: 100%; \n                box-sizing: border-box;\n                -webkit-box-sizing:border-box;\n                -moz-box-sizing: border-box;height: 35px;"/>\n              </div>\n\n              <div style="margin-top: 10px;">\n                <input class="input-field" placeholder="Region/Optional" type="name" [(ngModel)]="region" style="width: 100%; \n                box-sizing: border-box;\n                -webkit-box-sizing:border-box;\n                -moz-box-sizing: border-box;height: 35px;"/>\n              </div>\n\n              <div style="margin-top: 10px;">\n                <input class="input-field" placeholder="Postcode" type="number" [(ngModel)]="postcode" style="width: 100%; \n                box-sizing: border-box;\n                -webkit-box-sizing:border-box;\n                -moz-box-sizing: border-box;height: 35px;"/>\n              </div>\n\n              <div style="margin-top: 10px;">\n                <input class="input-field" placeholder="Email Address" type="email" style="width: 100%; \n                box-sizing: border-box;\n                -webkit-box-sizing:border-box;\n                -moz-box-sizing: border-box;height: 35px;"/>\n              </div>\n\n\n\n             \n              \n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="signup-col">\n            <button\n              ion-button\n              class="submit-btn"\n              full\n              type="submit"\n              style="text-transform: none"\n              class="bg-thime btn-round btn-text"\n              (click)="checkoutBtnClick()">\n              Checkout\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\testing\testing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */]])
], TestingPage);

//# sourceMappingURL=testing.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__itemdetail_itemdetail__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let Home1Page = class Home1Page {
    constructor(navCtrl, modalCtrl, toastController, apiProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.apiProvider = apiProvider;
        this.driverDetailsList = [];
        this.productsList = [];
        this.slides = [
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-12.jpg",
            },
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-13.jpg",
            },
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-12.jpg",
            }
        ];
    }
    categoryPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */]);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__["a" /* WishlistPage */]);
    }
    searchPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
        modal.present();
    }
    cartPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
        modal.present();
    }
    itemdetailPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__itemdetail_itemdetail__["a" /* ItemdetailPage */]);
    }
    ngOnInit() {
        console.log('****');
        this.getAllProducts();
        // this.platform.backButton.subscribeWithPriority(-1, () => {
        //   if (!this.routerOutlet.canGoBack()) {
        //     App.exitApp();
        //   }
        // });
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter');
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter called****');
    }
    getAllProducts() {
        console.log('getAllProducts called    ');
        const service = this.apiProvider.getProducts();
        service.subscribe((data) => {
            const resultado = data;
            console.log('Get response: ' + resultado);
            this.productsList = resultado;
            // tslint:disable-next-line: one-variable-per-declaration
            let size = 0, key;
            for (key in this.productsList) {
                if (this.productsList.hasOwnProperty(key)) {
                    size++;
                    const strTitle = this.productsList[key].title;
                    this.productsList[key].title = strTitle;
                }
            }
            // this.newSearch = resultado;
        });
    }
    showToastOnAlreadyLoggedIn() {
        const toast = this.toastController.create({
            message: 'User already logged in!',
            duration: 1000,
            position: 'bottom',
        });
        toast.present();
    }
};
Home1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home1',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\home1\home1.html"*/'<ion-header class="bg-thime">\n  <ion-navbar>\n    <button ion-button menuToggle style="display: block !important;">\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n    </button>\n    <ion-title text-uppercase>AUTO PARTS\n      <span float-right>\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n      </span>\n    </ion-title>\n    <!-- <ion-title>{{\'AUTO PARTS\' | translate}}</ion-title>\n    <span float-right>\n      <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="30px" height="30px"></ion-icon>\n      <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n    </span> -->\n  </ion-navbar>\n  <ion-searchbar  placeholder="Search" (click)="searchPage()"></ion-searchbar>\n  <ion-list>\n    <ion-item   >\n      \n    </ion-item>    \n  </ion-list>  \n  <div class="tab-row">\n    <ion-row>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/first.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/second.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/third.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/fourth.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">  \n        <div class="img-box" text-center>\n          <img src="assets/imgs/fifth.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n      <!-- <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/more.png">\n          <small class="text-white">More</small>\n        </div>\n      </ion-col> -->\n    </ion-row>\n  </div>\n</ion-header>\n\n\n<ion-content class="bg-light">\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image" />\n      <div class="banner-text">\n        <p [innerHTML]="slide.description"></p>\n        <small [innerHTML]="slide.smalltext"></small>\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  \n\n  <p> Featured Item\n    <small class="bg-thime btn-round text-white" float-right>View All</small>\n  </p>\n  <ion-row>\n    <ion-col>\n      <ion-card >\n        <ion-card-header>\n          <div class="img-box" (click)="itemdetailPage()">\n              <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n          </div>\n          <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n        </ion-card-header>\n        <ion-card-content (click)="itemdetailPage()" >\n          <h5>hi</h5>\n          <div class="rateing">\n            <div class="card-btn">\n              <p class="" float-left>\n                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                <span class="text-light bold"> (125)</span>\n              </p>\n              <div style="display: flex;" float-right>\n                <div class="price text-light mr-5">\n                  <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                </div>\n                <div class="price text-sky">\n                  <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card>\n        <ion-card-header>\n            <div class="img-box" (click)="itemdetailPage()">\n                <img src="assets/imgs/productimagenew.jpg" style="width: 130px;">\n            </div>\n            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n        </ion-card-header>\n        <ion-card-content (click)="itemdetailPage()">\n            <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n            <div class="rateing">\n                <div class="card-btn">\n                    <p class="" float-left>\n                        <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                        <span class="text-light bold"> (125)</span>\n                    </p>\n                    <div style="display: flex;" float-right>\n                        <div class="price text-light mr-5">\n                            <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                        </div>\n                        <div class="price text-sky">\n                            <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>  \n  </ion-row>  \n\n <ion-row>   \n    <ion-col>\n      <ion-card>\n          <ion-card-header>\n              <div class="img-box" (click)="itemdetailPage()">\n                  <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n              </div>\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n          </ion-card-header>\n          <ion-card-content (click)="itemdetailPage()">\n              <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n              <div class="rateing">\n                  <div class="card-btn">\n                      <p class="" float-left>\n                          <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                          <span class="text-light bold"> (125)</span>\n                      </p>\n                      <div style="display: flex;" float-right>\n                          <div class="price text-light mr-5">\n                              <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                          </div>\n                          <div class="price text-sky">\n                              <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card>\n          <ion-card-header>\n              <div class="img-box" (click)="itemdetailPage()">\n                  <img src="assets/imgs/productimagenew.jpg" style="width: 130px;">\n              </div>\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n          </ion-card-header>\n          <ion-card-content (click)="itemdetailPage()">\n              <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n              <div class="rateing">\n                  <div class="card-btn">\n                      <p class="" float-left>\n                          <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                          <span class="text-light bold"> (125)</span>\n                      </p>\n                      <div style="display: flex;" float-right>\n                          <div class="price text-light mr-5">\n                              <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                          </div>\n                          <div class="price text-sky">\n                              <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row> \n\n  <ion-row>   \n    <ion-col>\n      <ion-card >\n          <ion-card-header >\n              <div class="img-box" (click)="itemdetailPage()">\n                  <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n              </div>\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n          </ion-card-header>\n          <ion-card-content (click)="itemdetailPage()">\n            <ion-item >\n              <ion-label>Hiii value</ion-label>\n            </ion-item>  \n              <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n              <div class="rateing">\n                  <div class="card-btn">\n                      <p class="" float-left>\n                          <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                          <span class="text-light bold"> (125)</span>\n                      </p>\n                      <div style="display: flex;" float-right>\n                          <div class="price text-light mr-5">\n                              <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                          </div>\n                          <div class="price text-sky">\n                              <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card>\n          <ion-card-header>\n              <div class="img-box" (click)="itemdetailPage()">\n                  <img src="assets/imgs/productimagenew.jpg" style="width: 130px;">\n              </div>\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n          </ion-card-header>\n          <ion-card-content (click)="itemdetailPage()">\n              <h5>Unique For Men Black Formal Slim Fit Shirt.</h5>\n              <div class="rateing">\n                  <div class="card-btn">\n                      <p class="" float-left>\n                          <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                          <span class="text-light bold"> (125)</span>\n                      </p>\n                      <div style="display: flex;" float-right>\n                          <div class="price text-light mr-5">\n                              <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                          </div>\n                          <div class="price text-sky">\n                              <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row> \n \n  \n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\home1\home1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */]])
], Home1Page);

//# sourceMappingURL=home1.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountupdatedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






/**
 * Generated class for the MyaccountupdatedPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


let MyaccountupdatedPage = class MyaccountupdatedPage {
    constructor(navCtrl, navParams, loadingController, httpClient, platform, toastController, apiProvider, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.httpClient = httpClient;
        this.platform = platform;
        this.toastController = toastController;
        this.apiProvider = apiProvider;
        this.app = app;
        this.account = "profile";
        this.viewCartList = [];
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad MyaccountupdatedPage');
    }
    ngOnInit() {
        this.viewCartApi();
        this.showLoaderPageLoad();
        this.httpClient.get('http://busybanda.com/sterling-tools/api/get_current_user_data?' + 'id=' + localStorage.getItem('Userid value'))
            .subscribe((jsonResponse) => {
            this.obj = JSON.stringify(jsonResponse);
            const parsedData = JSON.parse(this.obj);
            status = parsedData.Status;
            if (localStorage.getItem("Userid value") === null) {
                console.log('Issue');
            }
            else {
                console.log('Success');
            }
            this.strDataUserLogin = parsedData.result.data.user_login;
            this.strDataUserEmail = parsedData.result.data.user_email;
            this.strDataUserRegistered = parsedData.result.data.user_registered;
            this.strDisplayName = parsedData.result.data.display_name;
        });
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'MyaccountupdatedPage') {
                if (nav.canGoBack()) {
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
            }
        });
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getTest1();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
                        if (this.viewCartList.length >= 1) {
                            console.log('Cart Filled ');
                            this.countProducts = this.viewCartList.length;
                            this.buttonIcon = "cart";
                        }
                        else {
                            console.log('Cart Empty ');
                            this.countProducts = 'Empty';
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    showLoaderPageLoad() {
        let loading = this.loadingController.create({
            content: 'Please wait loading profile!'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 1700);
    }
    showToastBackPress() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Back press account page',
                duration: 5000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    update() {
        console.log("invoking notification");
        this.toggleState = true;
    }
};
MyaccountupdatedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
        selector: 'page-myaccountupdated',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\myaccountupdated\myaccountupdated.html"*/'<ion-header class="bg-thime ">\n  <ion-navbar>\n  <button ion-button menuToggle>\n    <ion-icon class="menu-icon">\n      <img src="assets/imgs/ic_menu.png">\n    </ion-icon>\n  </button>\n    <ion-title>My Account\n      <!-- <span float-right> \n        <ion-icon padding-right name="ios-search-outline" width="100%;" ></ion-icon>\n        <ion-icon name="ios-cart-outline" width="100%;"></ion-icon>              \n      </span> -->\n      <span float-right>\n        <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n        <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon>\n      </span>\n    </ion-title>\n  </ion-navbar>\n  <ion-list padding-left class="tab-bar main-tools">\n    <ion-item padding-left padding-right style="background: red;">\n      <ion-avatar item-start>\n        <img src="assets/imgs/profile_pix.png">\n      </ion-avatar>\n      <h2 class="">{{strDataUserLogin}}\n        <small class="" style="float: right;"> Edit Profile</small>\n      </h2>\n      <p class="text-dark" style="color: black;">+91 908 765 4321\n      </p>\n    </ion-item>\n  </ion-list>\n  <ion-toolbar no-border-top class="tab-bar menu-bar">\n    <ion-segment [(ngModel)]="account">\n      <ion-segment-button value="profile" style="text-transform: none;color: black;">\n        Profile\n      </ion-segment-button>\n      <ion-segment-button value="card" style="text-transform: none;color: black;">\n        My Cards\n      </ion-segment-button>\n      <ion-segment-button value="address" style="text-transform: none;color: black;">\n       My Address\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="account">\n    <div *ngSwitchCase="\'profile\'" class="profile-section">\n      <ion-list>\n        <ion-item>\n          <ion-label floating>Name</ion-label>\n          <ion-input type="text" [(ngModel)]="strDataUserLogin"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="email" [(ngModel)]="strDataUserEmail"></ion-input>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label floating>UserRegistered On</ion-label>\n          <ion-input type="text" [(ngModel)]="strDataUserRegistered"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Phone</ion-label>\n          <ion-input type="text" value="+91 908 765 4321"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Gender</ion-label>\n          <ion-input type="text" value="Male"></ion-input>\n        </ion-item>\n        <!-- <ion-item>\n          <ion-label floating>birthday</ion-label>\n          <ion-input type="text" value="23 Dec, 1990"></ion-input>\n        </ion-item> -->\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase="\'card\'" class="card-section bg-light">\n      <ion-card>\n        <ion-card-content>\n          <div class="card-row">XXXX XXXX XXXX 5887\n            <img src="assets/imgs/visa.png">\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-card-content>\n          <div class="card-row">XXXX XXXX XXXX 5887\n            <img src="assets/imgs/master-card.png">\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <div class="form" padding-left padding-right>\n          <p padding-bottom margin-bottom>\n            <!-- <ion-icon name="ios-add-circle-outline" style="float: left;">\n\n            </ion-icon> -->\n            \n            Add New Card \n          <span style="float: right;">Save</span></p>\n          <ion-list>\n            <ion-item>\n              <ion-label>Card Type</ion-label>\n              <ion-input type="text" text-right value="Visa Express"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Card Number</ion-label>\n              <ion-input type="text" text-right value="1234-1234-1234-1234"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Name on Card</ion-label>\n              <ion-input type="text" text-right value="John Smith"></ion-input>\n            </ion-item>\n            <div class="date-cvc-row">\n              <div class="date">\n                <ion-item>\n                  <ion-label>Expiry Date</ion-label>\n                  <ion-input type="text" text-right value="10/23"></ion-input>\n                </ion-item>\n              </div>\n              <div class="cvc">\n                <ion-item>\n                  <ion-label>CVV</ion-label>\n                  <ion-input type="text" text-right value="234"></ion-input>\n                </ion-item>\n              </div>\n            </div>\n            <ion-item class="border-none">\n              <ion-label text-right style="color: black;">Save Card Details</ion-label>\n              <ion-toggle checked="false"></ion-toggle>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-card>\n    </div>\n\n    <div *ngSwitchCase="\'address\'" class="address-section bg-light">\n      <ion-card>\n        <ion-card-content>\n          <div class="addres-detail">\n            <h3> \n              <ion-icon name="ios-pin-outline" class="icon-position"> </ion-icon>\n              John Smith \n              <span style="float: right;">Change\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n              </span>\n            </h3>\n            <p>DE234 Mapleridge Drive Plano,<br> Texas 743A US.</p>\n            <p>+91 908765432</p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <div class="form" padding-left padding-right>\n          <p padding-bottom margin-bottom>\n            <!-- <ion-icon name="ios-add-circle-outline" >\n            </ion-icon> -->\n            Add New Card\n            <span style="float: right;">Save</span>\n          </p>\n          <ion-list>\n            <ion-item>\n              <ion-label>Pincode</ion-label>\n              <ion-input type="text" text-right value="110092"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Address</ion-label>\n              <ion-input type="text" text-right value="DE234 Map Drive Plano,"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Phone number</ion-label>\n              <ion-input type="text" text-right value="+91 908 765 4321"></ion-input>\n            </ion-item>\n            <div class="date-cvc-row">\n              <div class="city">\n                <ion-item>\n                  <ion-label>City</ion-label>\n                  <ion-input type="text" text-right value="Delhi"></ion-input>\n                </ion-item>\n              </div>\n              <div class="State">\n                <ion-item>\n                  <ion-label>State</ion-label>\n                  <ion-input type="text" text-right value="Delhi"></ion-input>\n                </ion-item>\n              </div>\n            </div>\n            <ion-item class="border-none">\n              <ion-label text-right>Make this my default address</ion-label>\n              <ion-toggle checked="true" (ionChange)="update($event)"></ion-toggle>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\myaccountupdated\myaccountupdated.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */]])
], MyaccountupdatedPage);

//# sourceMappingURL=myaccountupdated.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacypolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PrivacypolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let PrivacypolicyPage = class PrivacypolicyPage {
    constructor(navCtrl, navParams, platform, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.app = app;
    }
    ngOnInit() {
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'PrivacypolicyPage') {
                if (nav.canGoBack()) {
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                }
            }
        });
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PrivacypolicyPage');
    }
};
PrivacypolicyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-privacypolicy',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\privacypolicy\privacypolicy.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n  </button>\n      <ion-title>Privacy Policy\n          <!-- <span float-right> \n            <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n            <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n          </span> -->\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- <h3>Welcome to your first Ionic app!</h3> -->\n\n  <p>\n    Sterling Engineering Limited – T/A Sterling Clutch and Brake understands how important it is to protect the personal information of our customers, business partners and other stakeholders that we interact with. We take care to comply with the Privacy Principles contained in the Privacy Act and provide you with a level of comfort that the information you provide to us will be managed in accordance with law. This Privacy Policy describes how we collect, use and dispose of personal information.\n  </p>\n  <p>\n    1. What personal information do we collect?\nWe may collect information from you which reasonably identifies you as an individual, including your name, email address, telephone number and billing address. If you are a customer, we may also collect your vehicle registration number.\n  </p>\n  <p>\n    2. What type of personal information do we collect?\nWe may collect your personal information when you provide details through our website, contact us by phone, email or in-store or when you complete forms. Our website also uses cookies which stores personal information that you provide to track user traffic patterns and to better serve you when you revisit the website. You can disable cookies in your browser. Your personal information will be securely stored by us. Personal information relating to customers located in New Zealand may also be stored by us and by our selected third party providers in New Zealand.>\n  </p>\n\n  <p>\n    3. Why do we collect your personal information?\nWe may collect your personal information to:\n\nProcess transactions, both in-store and online;\nAnswer your questions, resolve your complaints and conduct investigations;\nMarket and sell our products and promote our brands;\nComply with any legal requirements;\nProcure goods and services;\nConduct research to better understand and serve our customers and for statistical purposes;\nCommunicate with you, including where we need to conduct a product recall;\nPrevent fraud, including services to protect your information; and\nProvide you with marketing offers and information about our brands.\nIf we want to use your personal information for other reasons, we will contact you and ask you for your consent.\n  </p>\n\n  <p>\n    4. When do we disclose your personal information?\nWe may disclose your personal information to people and organisations:\n\nThat provide us with services to promote our products;\nThat carry out, or help us to carry out, our business activities including our agents, contractors and external advisors;\nThat maintain our information technology and payment system infrastructure; and\nTo whom we are authorised or required by law to do so.\nYour personal information may also be disclosed by us to other people and organisations that you have consented to.\n  </p>\n\n  <p>\n    5.What rights do you have in relation to your personal information?\nYou have the right to access your personal information and require us to correct any of your personal information. To access or correct your personal information, please Contact Us. You can also contact us direct at the address below or writing to our Privacy Officer at: Sterling Clutch and Brake, 55 Neilson Street, Cnr Neilson Street and Onehunga Mall, Onehunga, Auckland 1643 , New Zealand. Sterling Clutch and Brake, PO Box PO Box 13101, Onehunga Mall, Onehunga, Auckland 1643, New Zealand\n  </p>\n\n  <p>\n    6.How do you make a complaint?\nIf you would like to make a complaint regarding our use of your personal information, you can Contact Us.\n  </p>\n\n  <p>\n    7. Who do you contact for further information?\nIf you require further information about this Privacy Policy, you can Contact Us.\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\privacypolicy\privacypolicy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
], PrivacypolicyPage);

//# sourceMappingURL=privacypolicy.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsandconditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TermsandconditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let TermsandconditionsPage = class TermsandconditionsPage {
    constructor(navCtrl, navParams, platform, app, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'TermsandconditionsPage') {
                if (nav.canGoBack()) {
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                }
            }
        });
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad TermsandconditionsPage');
    }
};
TermsandconditionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-termsandconditions',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\termsandconditions\termsandconditions.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n  </button>\n      <ion-title>Terms & Conditions\n          <!-- <span float-right> \n            <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n            <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n          </span> -->\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- <h3>Welcome to your first Ionic app!</h3> -->\n\n  <h3>Sterling Engineering Limited Terms & Conditions</h3>\n\n  <p>\n    1. Our Working Hours\nMonday :- 8:00 – 17.30\nTuesday :- 8:00 – 17.30\nWednesday :- 8:00 – 17.30\nThursday :- 8:00 – 17.30\nFriday :- 8:00 – 17.30\nSaturday :- 9:00 – 1.00\nSunday :- Closed\n  </p>\n  <p>\n    2. Our Delivery Service\n    Our Sterling Engineering Limited company Take Max Up to 5-7 business Days for delivery Service.\n    -NZ Courier service – orders up to 5:00pm for next day delivery –\n    </p>\n  <p>\n    3. Information Security\nSterling Engineering Limited accept credit card (MasterCard, Visa, Discover, and American Express) and EFT payments.\nAll credit card payments currently do not incur a merchant fee.\n  </p>\n\n  <h3>Returns Policy</h3>\n\n  <p>At Sterling Clutch and Brake we are committed to genuine customer service. If you are not happy with a product you have purchased as it is incorrect or faulty simply return it within 7 days.</p>\n\n  <p>1. Conditions of return\n    To enable us to process your return or exchange, you will need to present a copy of your receipt or other proof of purchase.\n    Goods can only be returned if they are faulty or you have received the incorrect item. You will need to return your product within 7 days. Your product must be unused, in its original packaging and in a saleable condition. If you are unable to provide proof of purchase, we may still offer a credit or an exchange for a similar product.\n    Unfortunately we are unable to offer a refund, credit or exchange for specially ordered products (unless the product is not fit for purpose or faulty) or products which have been modified or used contrary to the product’s instructions.</p>\n\n\n    <p>2. Assessing your return\n      If your product is faulty, we may need to conduct an assessment to determine the nature and extent of the fault. This may include sending the product to the manufacturer or their repair agent. Products that are likely to require assessment include tools, and specially procured items.\n      We will notify you of the outcome once the assessment has been completed.</p>\n\n      <p>\n        3. International Returns\nUnfortunately we are not able to cover return postage fees on all return types.\nIf we receive your return and it isn’t in the condition outlined in our returns policy the item will be sent back to your original shipping address – we will contact you straight way to advise you of this.\nPlease contact us by phone on 09 6364919 8.00am – 5.00pm Monday – Friday, or contact us via our online chat for further information.\nYou can view our privacy policy and our terms and conditions on line.\n      </p>\n\n      <h3>Cancellation Policy</h3>\n\n      <p>\n        Cancellations of orders is possible only before the order is invoiced for shipment. Once an order is invoiced and packed, it cannot be cancelled To cancel an order, please call our Customer Support Center @ 09 636 4919 and give your order number requesting for a cancellation. If the order hasn’t been invoiced, our team will cancel the order for you and the refund will be posted back via the same method of payment for all pre-paid orders\n      </p>\n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\termsandconditions\termsandconditions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], TermsandconditionsPage);

//# sourceMappingURL=termsandconditions.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(59);
/*
  Created by Lasting Software
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let ApiProvider = class ApiProvider {
    constructor(httpClient, loadingController, events, storage) {
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.events = events;
        this.storage = storage;
        this.httpClientFetch = [];
    }
    getProducts() {
        this.showProductsLoader();
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products/')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getOrders() {
        this.showViewOrderLoader();
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_shop_order/')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getCart() {
        this.showProductCartLoader();
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_cart_items?' + 'custid=' + localStorage.getItem('Userid value'))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getProductCategoriesGrid() {
        this.showProductCategoriesLoader();
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_category_grid')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getProductCategories() {
        this.showProductCategoriesLoader();
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_category')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getProductCart() {
        this.showProductCartLoader();
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_current_cart?id=3');
    }
    getFeaturedProducts() {
        this.showFeaturedProductsLoader();
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_featured_product').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getTest() {
        return this.httpClient.get('http://pridediesel.com/pridediesel/api/getdrivers').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.results));
    }
    getTest1() {
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_cart_items?' + 'custid=' + localStorage.getItem('Userid value')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getTest2() {
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_cart_items?custid=831').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    showProductsLoader() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: 'Please wait fetching products!',
                duration: 600,
            });
            yield loading.present();
        });
    }
    showViewOrderLoader() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: 'Please wait fetching orders!',
                duration: 2000,
            });
            yield loading.present();
        });
    }
    showProductCategoriesLoader() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: 'Please wait fetching Product Categories!',
                duration: 600,
            });
            yield loading.present();
        });
    }
    showProductCartLoader() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: 'Please wait fetching Cart!',
                duration: 600,
            });
            yield loading.present();
        });
    }
    showFeaturedProductsLoader() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: 'Please wait fetching Products!',
                spinner: 'hide',
                duration: 600,
            });
            yield loading.present();
        });
    }
    // set a key/value
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.set(key, value);
                console.log('set string in storage: ' + result);
                return true;
            }
            catch (reason) {
                console.log(reason);
                return false;
            }
        });
    }
    // to get a key/value pair
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get(key);
                console.log('storageGET: ' + key + ': ' + result);
                if (result != null) {
                    return result;
                }
                return null;
            }
            catch (reason) {
                console.log(reason);
                return null;
            }
        });
    }
    // set a key/value object
    setObject(key, object) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.set(key, JSON.stringify(object));
                console.log('set Object in storage: ' + result);
                return true;
            }
            catch (reason) {
                console.log(reason);
                return false;
            }
        });
    }
    // get a key/value object
    getObject(key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get(key);
                if (result != null) {
                    return JSON.parse(result);
                }
                return null;
            }
            catch (reason) {
                console.log(reason);
                return null;
            }
        });
    }
    // remove a single key value:
    remove(key) {
        this.storage.remove(key);
    }
    //  delete all data from your application:
    clear() {
        this.storage.clear();
    }
};
ApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], ApiProvider);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wishlistupdated_wishlistupdated__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productcategorydetail_productcategorydetail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filterdata_filterdata__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewallcategories_viewallcategories__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__itemdetail_itemdetail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser_ngx__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
    Dashboard Screen Lasting Erp 21/10/2020
*/











let HomePage = class HomePage {
    constructor(navCtrl, modalCtrl, toastController, apiProvider, httpClient, loadingController, rendererVehicle, rendererCategories, _elRef, inAppBrowser, platform, app) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.apiProvider = apiProvider;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.rendererVehicle = rendererVehicle;
        this.rendererCategories = rendererCategories;
        this._elRef = _elRef;
        this.inAppBrowser = inAppBrowser;
        this.platform = platform;
        this.app = app;
        this.productsLocalCart = [];
        this.viewCartList = [];
        this.accordionExpandedVehicle = false;
        this.accordionExpandedCategory = false;
        this.hideMe = false;
        this.icon = "arrow-forward";
        this.icon1 = "arrow-forward";
        this.elements = document.getElementsByClassName("columngrid");
        this.featuredProductsList = [];
        // featuredProductsList1: any = [];
        this.featuredCategoryList = [];
        this.featuredProductCategoryList = [];
        this.testStr = 'Hello, World,\nand all you beautiful people in it!';
        this.buttonIcon = "home";
        this.letclickCount = 0;
        this.myimage = 'https://aws1.discourse-cdn.com/ionicframework/original/3X/c/f/cf7af661f0bae7cca915258f2b8d6b3937fccda4.png';
        this.countClick = 0;
        this.slides = [
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-12.jpg",
            },
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-13.jpg",
            },
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-12.jpg",
            },
        ];
        // this.storage.get('myStore').then((data) => {
        //   this.items = data;
        //   console.log(data);
        // });
    }
    ngOnInit() {
        if (this.countClick > 1) {
            console.log('Clicked More than one');
            this.showToastOnWishlist();
        }
        else {
            console.log('Clicked one');
        }
        this.rendererVehicle.setElementStyle(this._elRef.nativeElement, "webkitTransition", "max-height 500px, padding 500ms");
        this.rendererCategories.setElementStyle(this._elRef.nativeElement, "webkitTransition", "max-height 500px, padding 1200ms");
        this.getAllFeaturedProducts();
        this.getAllFeaturedProductsCategories();
        this.getCategoriesApi();
        this.viewCartApi();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'HomePage') {
                if (nav.canGoBack()) {
                    this.platform.exitApp();
                }
                else {
                    this.platform.exitApp();
                }
            }
        });
    }
    addEvent() {
        if (this.myimage == 'https://aws1.discourse-cdn.com/ionicframework/original/3X/c/f/cf7af661f0bae7cca915258f2b8d6b3937fccda4.png') {
            this.myimage = 'https://aws1.discourse-cdn.com/ionicframework/original/3X/e/5/e5001dfda25e215c0304eb79a9637d7fbd53ca73.png';
        }
        else {
            this.myimage = 'https://aws1.discourse-cdn.com/ionicframework/original/3X/c/f/cf7af661f0bae7cca915258f2b8d6b3937fccda4.png';
        }
    }
    toggleIcon() {
        if (this.buttonIcon === 'star') {
            this.buttonIcon = "home";
        }
        else if (this.buttonIcon === 'home') {
            this.buttonIcon = "star";
        }
    }
    //  addToCart(id,strProductAdded) {
    //   this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
    //     this.obj = JSON.stringify(jsonResponse);
    //     console.log("Sent productsList response " + this.obj);
    //     console.log("Sent productsList id " + id);
    //     this.showToastOnAddProductSingle(strProductAdded);
    //   });
    // }
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
            this.showToastOnAddProduct(name);
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
    changeView() {
        this.buttonIcon = "star";
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getAllFeaturedProducts();
        this.getAllFeaturedProductsCategories();
        this.viewCartApi();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.complete();
        }, 500);
    }
    hide() {
        if (this.hideMe) {
            console.log('Current State' + this.hideMe);
            this.hideMe = false;
        }
        else {
            console.log('Current State..' + this.hideMe);
            this.hideMe = true;
        }
    }
    toggleMenu() {
        console.log('toggleMenu called here');
        //  this.showLoadingControllerFilter();
        this.featuredProductsList = this.featuredProductsList || [];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__filterdata_filterdata__["a" /* FilterdataPage */]);
    }
    listView() {
        this.showLoadingControllerListView();
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].style.width = "100%";
        }
    }
    gridView() {
        this.showLoadingControllerGridView();
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].style.width = "50%";
        }
    }
    viewAllCategories() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewallcategories_viewallcategories__["a" /* ViewallcategoriesPage */]);
    }
    productDetailPage(id, name, regular_price) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
            id: id,
            name: name,
            regular_price: regular_price
        });
        console.log("Sent product id " + id);
        console.log("Sent product name " + name);
        console.log("Sent product name " + regular_price);
        console.log('data added ' + this.val);
    }
    productcategoryDetailPage(catId, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__productcategorydetail_productcategorydetail__["a" /* ProductcategorydetailPage */], {
            catId: catId,
            name: name
        });
    }
    toggleAccordionVehicle() {
        if (this.accordionExpandedVehicle) {
            this.rendererVehicle.setElementStyle(this.cardContentVehicle.nativeElement, "max-height", "0px");
            this.rendererVehicle.setElementStyle(this.cardContentVehicle.nativeElement, "padding", "0px 16px");
        }
        else {
            this.rendererVehicle.setElementStyle(this.cardContentVehicle.nativeElement, "max-height", "500px");
            this.rendererVehicle.setElementStyle(this.cardContentVehicle.nativeElement, "padding", "13px 16px");
        }
        this.accordionExpandedVehicle = !this.accordionExpandedVehicle;
        this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
    }
    toggleAccordionCategory() {
        if (this.accordionExpandedCategory) {
            this.rendererCategories.setElementStyle(this.cardContentCategory.nativeElement, "max-height", "0px");
            this.rendererCategories.setElementStyle(this.cardContentCategory.nativeElement, "padding", "0px 16px");
        }
        else {
            this.rendererCategories.setElementStyle(this.cardContentCategory.nativeElement, "max-height", "1200px");
            this.rendererCategories.setElementStyle(this.cardContentCategory.nativeElement, "padding", "13px 16px");
        }
        this.accordionExpandedCategory = !this.accordionExpandedCategory;
        this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
    }
    getAllFeaturedProducts() {
        const service = this.apiProvider.getFeaturedProducts();
        service.subscribe((jsonResponse) => {
            const resultado = jsonResponse;
            this.featuredProductsList = resultado;
            this.obj = JSON.stringify(jsonResponse);
            // this.httpClient.get('http://busybanda.com/sterling-tools/api/get_featured_product').subscribe(res => console.log(res.status), err => console.log('error', err.status))
            if (resultado === null) {
                this.showToastOnEmptyFeaturedProducts();
                console.log('data not available');
                this.strData = 'data not available';
            }
            else {
                // console.log('data available');
            }
        });
    }
    getAllFeaturedProductsCategories() {
        const service = this.apiProvider.getProductCategoriesGrid();
        service.subscribe((jsonResponse) => {
            const resultado = jsonResponse;
            this.featuredProductCategoryList = resultado;
            this.obj = JSON.stringify(jsonResponse);
            this.strData = 'No data available';
            if (resultado === null) {
                this.showToastOnEmptyFeaturedProducts();
            }
            else {
                //console.log('data available');
            }
        });
    }
    getCategoriesApi() {
        console.log('getProductCategoriesApi called    ');
        const service = this.apiProvider.getProductCategories();
        service.subscribe((data) => {
            const resultado = data;
            this.featuredCategoryList = resultado;
            this.productTitle = data.title;
        });
    }
    addToWishList(id, name, image, description, regular_price) {
        this.countClick++;
        if (this.countClick > 1) {
            console.log('Clicked More than one');
            this.showToastOnWishlist();
        }
        else {
            console.log('Clicked one');
            let products = [];
            if (localStorage.getItem('products')) {
                products = JSON.parse(localStorage.getItem('products')); // get product list 
            }
            console.log("Sent productsList id " + id);
            console.log("Sent productsList name " + name);
            products.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price });
            localStorage.setItem('products', JSON.stringify(products));
            this.buttonIcon = "home";
            this.showToastOnAddProductWishlist(name);
            if (typeof (Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
                console.log('Code for localStorage/sessionStorage.');
            }
            else {
                // Sorry! No Web Storage support..
                console.log('Sorry! No Web Storage support..');
            }
        }
    }
    readMoreLocal(id, name, image, description, regular_price) {
        this.showToastOnPriceEmptyProducts();
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getTest1();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
                        console.log('All Json Response' + resultado);
                        // console.log('Length of cart ' + this.viewCartList.length);
                        if (this.viewCartList.length >= 1) {
                            console.log('Cart Filled ');
                            this.countProducts = this.viewCartList.length;
                            this.buttonIcon = "cart";
                        }
                        else {
                            console.log('Cart Empty ');
                            this.countProducts = 'Empty';
                        }
                        // for(var j=0; j < this.viewCartList.length; j++){
                        //   console.log('Price ' + this.viewCartList[j].price);
                        //   console.log('Product Id ' + this.viewCartList[j].product_id);
                        //   console.log('Quantity' + this.viewCartList[j].quantity);
                        //  }
                        // const resultado1 = data;
                        // console.log(resultado1);
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
    }
    showToastOnAlreadyLoggedIn() {
        const toast = this.toastController.create({
            message: "User already logged in!",
            duration: 1000,
            position: "bottom",
        });
        toast.present();
    }
    showToastOnEmptyFeaturedProducts() {
        const toast = this.toastController.create({
            message: "Products not available!",
            duration: 1000,
            position: "bottom",
        });
        toast.present();
    }
    showToastOnPriceEmptyProducts() {
        const toast = this.toastController.create({
            message: "Products detail not available!",
            duration: 1000,
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
    showLoadingControllerListView() {
        let loading = this.loadingController.create({
            content: "Please wait displaying data in list!",
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 300);
    }
    showLoadingControllerGridView() {
        let loading = this.loadingController.create({
            content: "Please wait displaying data in grid!",
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 300);
    }
    showLoadingControllerFilter() {
        let loading = this.loadingController.create({
            content: "Please wait!",
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 300);
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
    showToastOnAddProductWishlist(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Cart : \n ' + strProductAdded + '\n',
            duration: 3000,
            position: "bottom",
        });
        toast.present();
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
    showToastOnUserIdNull() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Please Login in the application',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnWishlist() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Product already added in wishlist',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_11" /* ViewChild */])("cc"),
    __metadata("design:type", Object)
], HomePage.prototype, "cardContentVehicle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_11" /* ViewChild */])("cc1"),
    __metadata("design:type", Object)
], HomePage.prototype, "cardContentCategory", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["E" /* Input */])("title"),
    __metadata("design:type", String)
], HomePage.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["E" /* Input */])("title"),
    __metadata("design:type", String)
], HomePage.prototype, "Elem", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
        selector: "page-home",template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\home\home.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n  \n\n    <ion-title >Products\n\n      <span float-right>\n\n        <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n\n        <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon>\n\n      </span>\n\n     \n\n    </ion-title>\n\n\n\n    <!-- <ion-title >\n\n      <span float-right>\n\n        <div style="font-size: 10px;color: black;text-align: end;">{{countProducts}}</div>\n\n      </span>\n\n    </ion-title> -->\n\n  </ion-navbar>\n\n  <div class="custom-id">\n\n    <ion-item class="custom">\n\n      <ion-select\n\n        placeholder="All"\n\n        value="MAKE"\n\n        okText="Ok"\n\n        cancelText="Cancel"\n\n        style="margin-left: 1px"\n\n      >\n\n        <ion-option value="MAKE" style="max-width: 60px">MAKE</ion-option>\n\n        <ion-option value="MODEL">MODEL</ion-option>\n\n        <ion-option value="YEAR">YEAR</ion-option>\n\n      </ion-select>\n\n\n\n      <ion-icon name="md-search" class="text-light icon"></ion-icon>\n\n    </ion-item>\n\n    <ion-searchbar\n\n      placeholder="Search Products"\n\n      [(ngModel)]="localSearchProduct"\n\n      \n\n    ></ion-searchbar>\n\n\n\n      \n\n    <!-- <input class="form-control" type="text" name="search" [(ngModel)]="searchText" placeholder="&#61442;  Search Products"> -->\n\n\n\n  </div>  \n\n  <!-- <ion-list>\n\n    <ion-item > </ion-item>\n\n  </ion-list> -->\n\n  <!-- <div class="tab-row">\n\n    <ion-row>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/first.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/second.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/third.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/fourth.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col (click)="categoryPage()">  \n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/fifth.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n    \n\n    </ion-row>\n\n  </div> -->\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="chevron-down-circle-outline"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing Products."\n\n    >\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <div class="banner-text">\n\n        <p [innerHTML]="slide.description"></p>\n\n        <small [innerHTML]="slide.smalltext"></small>\n\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <p (click)="viewAllCategories()">\n\n    Featured Items\n\n    <small class="bg-thime btn-round text-white" float-right> View All </small>\n\n  </p>\n\n\n\n  <div class="card-main">\n\n    <ion-card>\n\n      <ion-card-header (click)="toggleAccordionVehicle()">\n\n        <ion-list>\n\n          <ion-item>\n\n            <button ion-button clear small icon-only item-right>\n\n              <ion-icon color="light" [name]="icon"></ion-icon>\n\n            </button>\n\n\n\n            <h6>SHOP BY VEHICLE</h6>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-header>\n\n      <ion-card-content #cc>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select\n\n                    placeholder="MAKE"\n\n                    value="sortpopular"\n\n                    okText="Ok"\n\n                    cancelText="Cancel"\n\n                  >\n\n                    <ion-option value="sortpopular">popularity</ion-option>\n\n                    <ion-option value="sortaveragerating">rating</ion-option>\n\n                    <ion-option value="sortlatest">latest</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select\n\n                    placeholder="MODEL"\n\n                    value="sortpopular"\n\n                    okText="Ok"\n\n                    cancelText="Cancel"\n\n                  >\n\n                    <ion-option value="sortpopular">popularity</ion-option>\n\n                    <ion-option value="sortaveragerating">rating</ion-option>\n\n                    <ion-option value="sortlatest">latest</ion-option>\n\n                    <ion-option value="sortpricelowhigh" style="max-width: 100%"\n\n                      >low to high</ion-option\n\n                    >\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select\n\n                    placeholder="YEAR"\n\n                    value="sortpopular"\n\n                    okText="Ok"\n\n                    cancelText="Cancel"\n\n                  >\n\n                    <ion-option value="sortpopular">popularity</ion-option>\n\n                    <ion-option value="sortaveragerating">rating</ion-option>\n\n                    <ion-option value="sortlatest">latest</ion-option>\n\n                    <ion-option value="sortpricelowhigh" style="max-width: 100%"\n\n                      >low to high</ion-option\n\n                    >\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row\n\n            class="ion-justify-content-center"\n\n            style="2px 10px !important;"\n\n          >\n\n            <button ion-button full class="bg-thime btn-round btn-text">\n\n              Shop Now\n\n            </button>\n\n          </ion-row>\n\n        </div>  \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n\n\n  <div class="card-main">\n\n    <ion-card>\n\n      <ion-card-header (click)="toggleAccordionCategory()">\n\n        <ion-list>\n\n          <ion-item>\n\n            <button ion-button clear small icon-only item-right>\n\n              <ion-icon color="light" [name]="icon"></ion-icon>\n\n            </button>\n\n\n\n            <h6>SHOP BY CATEGORY</h6>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-header>\n\n      <ion-card-content #cc1>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center;background: white;">\n\n\n\n                <ion-grid class="product-grid" style="margin-top: 40px;">\n\n                  <ion-row class="rowgrid">\n\n                    <ion-col\n\n                      class="columngrid"\n\n                      *ngFor="let featuredProductCategories of featuredProductCategoryList"\n\n                      (click)="productcategoryDetailPage(featuredProductCategories.catId,featuredProductCategories.url)"\n\n                      style="box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);">\n\n              \n\n                     \n\n                      <ion-card >\n\n                        \n\n              \n\n                        <ion-card-header style="justify-content: left">\n\n                          <div \n\n                            class="img-box"\n\n                           \n\n                           >\n\n\n\n                            <!-- <img src="assets/imgs/categoryfirst.png"  style="width:200px;height:80px ;"> -->\n\n\n\n                            <img  [src]="featuredProductCategories.thumbnail"  style="width:200px;height:80px;margin-top: 13px">\n\n\n\n                         \n\n                              \n\n                          </div>\n\n                        </ion-card-header>\n\n                        <ion-card-content>\n\n                      \n\n                          <ion-item >\n\n                            <h5 style="font-size: 14px;text-align: -webkit-center;margin-top: 7px;">{{featuredProductCategories.name}}</h5> \n\n                          </ion-item>\n\n                          <div>\n\n                            <div *ngIf="featuredProductCategories.regular_price">     <!--If "product" exists-->\n\n                              <h5 style="font-size: 12px;text-align: center;"  > <span class="priceicon">Price : </span>  <span class="priceicon">$</span> {{featuredProductCategories.regular_price}} </h5>  \n\n                              <!-- <div class="rateing">\n\n                                <div class="card-btn">  \n\n                                  <p class="" float-left>\n\n                                    <button\n\n                                      ion-button\n\n                                      full\n\n                                      class="bg-thime btn-round btn-text"\n\n                                      style="margin-top: 3px; width: 150px;text-align: center;"\n\n                                    >\n\n                                      Add To Cart\n\n                                    </button>\n\n                                  </p>\n\n                                </div>\n\n                              </div> -->\n\n                            </div>\n\n\n\n\n\n                             <!--If "product" not exists-->\n\n                        \n\n                            <div *ngIf="!featuredProductCategories.regular_price" style="text-align: -webkit-center;">    \n\n                              <!-- <span >☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span> -->\n\n                              <div class="rateing">\n\n                                <div class="card-btn">\n\n                                   <p class="" float-left>\n\n                                    <!-- <button\n\n                                      ion-button\n\n                                      full\n\n                                      class="bg-thime btn-round btn-text"\n\n                                      style="margin-top: 3px; width: 150px;text-align: center;"\n\n                                    >\n\n                                       More Info--\n\n                                    </button> -->\n\n                                    \n\n                                  </p> \n\n                                  <!-- <p style="font-size: 11px;text-align: -webkit-center;">{{featuredProductCategories.name}}</p> -->\n\n                                  <!-- <ion-item >\n\n                                    <h5 style="font-size: 11px;text-align: -webkit-center;">{{featuredProductCategories.name}}</h5> \n\n                                  </ion-item> -->\n\n                                </div>\n\n                              </div>\n\n                            </div> \n\n                        </div>\n\n              \n\n                        \n\n              \n\n                         \n\n                        </ion-card-content>\n\n                      </ion-card>\n\n                    </ion-col>\n\n              \n\n                \n\n                  </ion-row>\n\n                </ion-grid>\n\n              \n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n     \n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row\n\n            class="ion-justify-content-center"\n\n           \n\n          >\n\n            <button ion-button full class="bg-thime btn-round btn-text">\n\n              Shop Now\n\n            </button>\n\n          </ion-row>\n\n        </div>  \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \n\n\n\n  <div class="shorting-bar">\n\n    <ion-item>\n\n      <div class="one">\n\n         <div class="one1">\n\n            <ion-icon name="code-working" style="margin-top: 10px;"></ion-icon>\n\n            <!-- SORT BY -->\n\n             <ion-item class="custom short">\n\n              <ion-select\n\n                placeholder="SORT BY"\n\n                value="MAKE"\n\n                okText="Ok"\n\n                cancelText="Cancel"\n\n                style="color: red;"\n\n                class="ion-select"\n\n              >\n\n                <ion-option value="POSITION" >POSITION</ion-option>\n\n                <ion-option value="NAME">MODEL</ion-option>\n\n                <ion-option value="PRICE">PRICE</ion-option>\n\n                <ion-option value="BRAND">BRAND</ion-option>\n\n              </ion-select>\n\n        \n\n              <ion-icon name="md-search" class="text-light icon"></ion-icon>\n\n            </ion-item> \n\n\n\n           \n\n             \n\n\n\n             \n\n           \n\n              \n\n           \n\n            \n\n             </div>   \n\n\n\n        \n\n        <div class="two2" (click)="hide()">\n\n          <ion-icon\n\n            ios="ios-funnel"\n\n            md="md-funnel"\n\n            role="img"\n\n            class="icon icon-ios ion-ios-funnel item-icon"\n\n            aria-label="funnel"  \n\n            ng-reflect-ios="ios-funnel"\n\n            ng-reflect-md="md-funnel"\n\n          ></ion-icon\n\n          >FILTER \n\n        </div>\n\n        \n\n      </div>\n\n\n\n      <div class="two">\n\n        <ion-icon ios="ios-grid" md="md-grid" (click)="gridView()"></ion-icon>\n\n        <ion-icon\n\n          ios="ios-list-box"\n\n          md="md-list-box"\n\n          (click)="listView()"\n\n        ></ion-icon>\n\n      </div>\n\n    </ion-item>\n\n  </div>\n\n\n\n\n\n\n\n  <!-- <div *ngIf="hideMe" style="text-align: center"></div> -->\n\n\n\n  <div class="select-section shadow-bottom" *ngIf="hideMe">\n\n    <ion-row class="filter-bar">\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select  interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n           \n\n          </ion-select>\n\n            \n\n            \n\n          </ion-item>  \n\n         \n\n        </div>\n\n        \n\n        \n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n            </ion-select>\n\n            \n\n            \n\n          </ion-item>  \n\n         \n\n        </div>\n\n        \n\n        \n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n            </ion-select>\n\n            \n\n            \n\n          </ion-item>  \n\n         \n\n        </div>\n\n        \n\n        \n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n            </ion-select>\n\n            \n\n            \n\n          </ion-item>  \n\n         \n\n        </div>\n\n        \n\n        \n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <!-- <span *ngIf="searchText">\n\n    <div *ngIf="searchText.length === 0">No records found</div>\n\n </span> -->\n\n\n\n\n\n   <div *ngIf="featuredProductsList; else elseStatement" class="checkFeaturedProducts"> \n\n    <!-- when condition is true.  -->\n\n</div> \n\n<ng-template #elseStatement style="margin-top: 10px;"> \n\n    No Product Available\n\n</ng-template> \n\n\n\n<ng-container *ngIf="( featuredProductsList | filter : localSearchProduct) as result">\n\n\n\n  \n\n  \n\n  <p *ngIf="result.length === 0">No matching Result found</p>  \n\n</ng-container>\n\n\n\n  <ion-grid class="product-grid" style="margin-top: 40px;">\n\n    <ion-row class="rowgrid">\n\n      <ion-col\n\n        class="columngrid"\n\n        *ngFor="let featuredProducts of featuredProductsList | filter:localSearchProduct">\n\n\n\n       \n\n        <ion-card >\n\n          \n\n\n\n          <ion-card-header style="justify-content: left">\n\n            <div \n\n              class="img-box"\n\n              (click)="productDetailPage(featuredProducts.id,featuredProducts.name,featuredProducts.regular_price)">\n\n              <img  [src]="featuredProducts.image"  style="width:200px;height:80px ;">\n\n            </div>\n\n            <ion-icon    name="md-heart" class="text-light icon" (click)="addToWishList(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)"></ion-icon>\n\n         \n\n            <!-- <img src="{{myimage}}" name="md-heart" (click)="addEvent();" style="width: 20px;height: 20px;" class="text-light icon"> -->\n\n\n\n            <!-- <ion-img class="map" [src]="buttonIcon" (click)="changeView()"></ion-img> -->\n\n\n\n           \n\n          </ion-card-header>\n\n          <ion-card-content>\n\n\n\n           \n\n        \n\n            <ion-item >\n\n              <h5 style="font-size: 11px;text-align: -webkit-center;">{{featuredProducts.name}}</h5> \n\n            </ion-item>\n\n            <div>\n\n              <div *ngIf="featuredProducts.regular_price">     <!--If "product" exists-->\n\n                <h5 style="font-size: 12px;text-align: center;color: red;"  > <span class="priceicon" style="color: red;">Price : </span> <span class="priceicon">$</span> {{featuredProducts.regular_price}}  </h5>  \n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p class="" float-left>\n\n                      <button\n\n                        ion-button\n\n                        full\n\n                        class="bg-thime btn-round btn-text"\n\n                        style="margin-top: 3px; width: 150px;text-align: center;"\n\n                        \n\n                        (click)="addToCart(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)"\n\n\n\n                      >\n\n                        Add To Cart\n\n                      </button>\n\n                    </p>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n\n\n              <!-- (click)="addToCart(featuredProducts.id,featuredProducts.name)" -->\n\n\n\n\n\n              <!-- <ion-item>\n\n                <button #myButton ion-button icon-only (click)="toggleIcon()">\n\n                  <ion-icon [name]="buttonIcon"></ion-icon>\n\n              </button>\n\n              </ion-item> -->\n\n          \n\n              <div *ngIf="!featuredProducts.regular_price">     <!--If "product" not exists-->\n\n                <!-- <h5 style="font-size: 12px;text-align: center"  >  <span class="priceicon">$</span>Price Not Available</h5>   -->\n\n                <h5 style="font-size: 12px;text-align: center"> Price Not Available</h5>  \n\n\n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p class="" float-left>\n\n                      <button\n\n                        ion-button\n\n                        full\n\n                        class="bg-thime btn-round btn-text"\n\n                        style="margin-top: 3px; width: 150px;text-align: center;"\n\n                        (click)="readMoreLocal(featuredProducts.id,featuredProducts.name,featuredProducts.regular_price)"\n\n                      >\n\n                        Read More\n\n                      </button>\n\n                    </p>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n          </div>\n\n\n\n          \n\n\n\n            <!-- <div class="rateing">\n\n              <div class="card-btn">\n\n                <p class="" float-left>\n\n                  <button\n\n                    ion-button\n\n                    full\n\n                    class="bg-thime btn-round btn-text"\n\n                    style="margin-top: 3px; width: 150px;text-align: center;"\n\n                    (click)="addToCartLocal()"\n\n                  >\n\n                    Add To Cart\n\n                  </button>\n\n                </p>\n\n              </div>\n\n            </div> -->\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n  \n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <!-- <div *ngIf="!searchText">\n\n    No data found!!!\n\n   </div> -->\n\n \n\n  <!-- <ion-nav #mycontent [root]="rootPage"></ion-nav> -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__angular_core__["X" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_6__angular_core__["X" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* App */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
		751,
		2
	],
	"../pages/accordiantest/accordiantest.module": [
		752,
		23
	],
	"../pages/categoryupdated/categoryupdated.module": [
		753,
		22
	],
	"../pages/demo/demo.module": [
		755,
		21
	],
	"../pages/filterdata/filterdata.module": [
		754,
		20
	],
	"../pages/home1/home1.module": [
		757,
		19
	],
	"../pages/login/login.module": [
		756,
		1
	],
	"../pages/myaccountupdated/myaccountupdated.module": [
		758,
		18
	],
	"../pages/paymentpage/paymentpage.module": [
		759,
		17
	],
	"../pages/privacypolicy/privacypolicy.module": [
		760,
		16
	],
	"../pages/product-category-detail-grid/product-category-detail-grid.module": [
		761,
		15
	],
	"../pages/productcategory/productcategory.module": [
		763,
		14
	],
	"../pages/productcategorydetail/productcategorydetail.module": [
		762,
		13
	],
	"../pages/register/register.module": [
		764,
		12
	],
	"../pages/termsandconditions/termsandconditions.module": [
		765,
		11
	],
	"../pages/test1/test1.module": [
		766,
		10
	],
	"../pages/testcart/testcart.module": [
		767,
		9
	],
	"../pages/testing/testing.module": [
		768,
		8
	],
	"../pages/testingproducts/testingproducts.module": [
		771,
		7
	],
	"../pages/viewallcategories/viewallcategories.module": [
		770,
		6
	],
	"../pages/viewallcategoriesupdated/viewallcategoriesupdated.module": [
		769,
		0
	],
	"../pages/viewcart/viewcart.module": [
		773,
		5
	],
	"../pages/vieworder/vieworder.module": [
		772,
		4
	],
	"../pages/wishlistupdated/wishlistupdated.module": [
		774,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_demo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testing_testing__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__capacitor_core__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;










let ViewcartPage = class ViewcartPage {
    constructor(navCtrl, navParams, httpClient, loadingController, alertController, toastController, renderer, apiProvider, storage, platform, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.renderer = renderer;
        this.apiProvider = apiProvider;
        this.storage = storage;
        this.platform = platform;
        this.app = app;
        this.accordionExpanded = false;
        this.accordionExpanded1 = false;
        this.icon = "arrow-forward";
        this.elements = document.getElementsByClassName("columngrid");
        this.viewCartList = [];
        this.productsLocalCart = [];
        this.cart = [];
        this.itemsInCart = [];
        this.productsListInformation = [];
        this.strDynamicProductQuantity1 = '';
        this.sum = 0;
        this.upperNames = [];
        this.elements1 = document.getElementsByClassName("value");
        this.valueQuantity1 = [];
        this.dropdown1 = "Local Pickup";
        this.total = 0;
        this.buttonIcon = "home";
        this.buttonIcon1 = "home";
        this.eventCartNumber = 127890;
        this.finalData = [];
        this.testArray1 = [];
        this.testArray2 = [];
    }
    ngOnInit() {
        this.buttonDisabled = true;
        this.dropdown1 = 'Test';
        // this.strData = 'No Products in Cart';
        this.viewCartApi();
        this.showLoadingControllerLaunch();
        if (localStorage.getItem('products')) {
            this.productsLocalCart = JSON.parse(localStorage.getItem('products')); // get product list 
            console.log('****** filled' + localStorage.getItem('products'));
            //this.showToastOnFilledCart();
            this.showToastOnEmptyCart();
            this.strDataLocal = 'Cart is Empty.Please add items!';
        }
        else if (!Array.isArray(this.productsLocalCart) || !this.productsLocalCart.length) {
            this.showToastOnEmptyCart();
        }
        else {
            console.log('****** empty' + localStorage.getItem('products'));
            this.strDataLocal = 'Cart is Empty.Please add items!';
            //this.showToastOnEmptyCart();
        }
        this.obj = JSON.stringify(this.productsLocalCart);
        for (let i = 0; i < this.productsLocalCart.length; i++) {
            if (this.productsLocalCart[i].ProductQuantity && this.productsLocalCart[i].ProductRegularPrice && this.productsLocalCart[i].ProductDescription && this.productsLocalCart[i].ProductId) {
                // this.strProductQuantity;
                this.strProductQuantity = this.productsLocalCart[i].ProductQuantity;
                this.strProductRegularPrice = this.productsLocalCart[i].ProductRegularPrice;
                this.strProductDescription = this.productsLocalCart[i].ProductDescription;
                this.strProductName = this.productsLocalCart[i].ProductName;
                this.strProductRegularPriceRevised1 = this.strProductRegularPriceRevised;
                // this.strproductpriceTushar = 'Product Price: ' + this.strProductRegularPrice * this.strProductQuantity;
                console.log('All Product Price ' + this.productsLocalCart[i].ProductRegularPrice);
                console.log('All Product Quantity ' + this.productsLocalCart[i].ProductQuantity);
                this.productTotalPrice = this.productsLocalCart[i].ProductRegularPrice;
                var sum = 0, nums = ['100', '300', '400', '60', '40'];
                for (i = 0; i < nums.length; i++) {
                    sum += +nums[i];
                    //  console.log('All  TotalPrice ' + sum);
                }
                this.productsLocalCart = JSON.parse(localStorage.getItem('products'));
                // console.log('All  TotalPrice--- ' +  localStorage.getItem('products'));
                //tempJSON.name is SomeName
            }
            else {
                console.log('Product quantity not available');
                this.showToastOnProductsQuantityCartLocally();
            }
        }
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'ViewcartPage') {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                }
            }
        });
    }
    toggleIcon() {
        if (this.buttonIcon === 'star') {
            this.buttonIcon = "home";
        }
        else if (this.buttonIcon === 'home') {
            this.buttonIcon = "star";
        }
    }
    toggleIcon1() {
        if (this.buttonIcon1 === 'cart') {
            this.buttonIcon1 = "home";
        }
        else if (this.buttonIcon1 === 'home') {
            this.buttonIcon1 = "cart";
        }
    }
    checkOutPage() {
        // this.navCtrl.setRoot(TestingPage);
        if (localStorage.getItem("Userid value") === null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__demo_demo__["a" /* DemoPage */]);
            this.strUserId = localStorage.getItem("Userid value");
            this.showToastOnUserIdNull();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__testing_testing__["a" /* TestingPage */]);
        }
    }
    clickOptionFlatRate() {
        this.loaderFlatRate();
        this.strSubTotalAmountFlatRate = '$' + this.strSubTotalAmount + 5;
        console.log("hello you clicked Flat rate" + this.strSubTotalAmountFlatRate);
        this.numberResult = this.strSubTotalAmount + 5;
        this.strSubTotalAmount = this.numberResult;
        console.log("Updated Flat Rate " + 'NZD ' + '$' + this.numberResult);
    }
    clickOptionLocal() {
        this.strSubTotalAmount = this.total;
        console.log("hello you clicked local" + this.strSubTotalAmount);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.viewCartApi();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.complete();
        }, 500);
    }
    productcategoryDetailPage(product_id, name) {
        console.log('Product Id--' + product_id);
        console.log('Product Name--' + name);
        this.strTestProductId = product_id;
    }
    removeProductServer(product_id) {
        //   const postParams = {product_id: product_id};
        //   this.httpClient.post('http://busybanda.com/sterling-tools/api/remove_cart_item?', JSON.stringify(postParams)).subscribe(async (response: Response) => {
        //     this.obj = JSON.stringify(response); 
        //     console.log('Data' + this.obj);
        //     this.showToastOnDeletingCart();
        //     this.viewCartApi();
        // });
        //  this.showCartRemovalAlert1(product_id);
        this.httpClient.get('http://busybanda.com/sterling-tools/api/remove_cart_item?' + 'product_id=' + product_id).subscribe((jsonResponse) => {
            this.obj = JSON.stringify(jsonResponse);
            console.log('Data' + this.obj);
            this.showToastOnDeletingCart();
            this.viewCartApi();
        });
        //     var myHeaders = new Headers();
        // myHeaders.append("Cookie", "wordpress_logged_in_66e0d731c7e497fda9051521dcb76862=wholeSale_user%7C1606220071%7Ct0WSLY3SVfJul0TkKibGMFAw460kawgLfU2aFvSNuav%7C05fcc3581c326b8157dcbb0d9fb0d5230b1e43e18c35d3d5fe535375849a5815; PHPSESSID=cec73fae9cec5a5ae0186876e8e52fe5");
        // var requestOptions = {  
        //   method: 'POST',
        //   headers: myHeaders,   
        //   redirect: 'follow'
        // };
        // fetch("http://busybanda.com/sterling-tools/api/remove_cart_item?product_id=161558", requestOptions)
        //   .then(response => response.text())
        //   .then(result => console.log(result))
        //   .catch(error => console.log('error', error));
    }
    toggleAccordion() {
        if (this.accordionExpanded) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
        }
        this.accordionExpanded = !this.accordionExpanded;
        this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
    }
    toggleAccordion1() {
        if (this.accordionExpanded1) {
            this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardContent1.nativeElement, "padding", "0px 16px");
        }
        else {
            this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.cardContent1.nativeElement, "padding", "13px 16px");
        }
        this.accordionExpanded1 = !this.accordionExpanded1;
        this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
    }
    // 11th Nov 2020  
    incrementValue(index) {
        if (this.productsLocalCart) {
            console.log('Tushar called');
            if (this.viewCartList[index].product_id === this.eventCartNumber) {
                console.log('success even');
                this.viewCartList[index].quantity += 2;
                this.testTushar = this.viewCartList[index].quantity;
                this.buttonDisabled = false;
                console.log('testTushar incrementValue even ' + this.testTushar);
            }
            else {
                console.log('success odd');
                this.viewCartList[index].quantity++;
                this.testTushar = this.viewCartList[index].quantity;
                console.log('tushar' + this.viewCartList[index].quantity);
                this.testArray1 = this.viewCartList[index].quantity;
                this.testArray2 = this.testTushar;
                console.log('Tushar here' + this.testArray1);
                console.log('Tushar here' + this.testArray2);
                console.log('Increased Quantity odd' + this.viewCartList[index].quantity);
                console.log('Increased ProductId odd' + this.viewCartList[index].product_id);
                this.buttonDisabled = false;
                console.log('testTushar incrementValue odd ' + this.testTushar);
            }
        }
        else {
            if (this.viewCartList[index].product_id === this.eventCartNumber) {
                console.log('success even');
                this.viewCartList[index].quantity += 2;
                this.testTushar = this.viewCartList[index].quantity;
                this.buttonDisabled = false;
                console.log('testTushar incrementValue even ' + this.testTushar);
            }
            else {
                console.log('success odd');
                this.viewCartList[index].quantity++;
                this.testTushar = this.viewCartList[index].quantity;
                console.log('tushar' + this.viewCartList[index].product_id);
                this.testArray1 = this.viewCartList[index].product_id;
                this.testArray2 = this.testTushar;
                console.log('Tushar here' + this.testArray1);
                console.log('Tushar here' + this.testArray2);
                //console.log('Increased Quantity odd' +  this.viewCartList[index].quantity);
                // console.log('Increased ProductId odd' +  this.viewCartList[index].product_id);
                this.buttonDisabled = false;
                console.log('testTushar incrementValue odd ' + this.testTushar);
            }
        }
    }
    incrementValueLocal(index, item) {
        // console.log('Local removed' + item);
        // this.strValue = item++;
        // console.log('Local removed' + this.strValue);
        if (this.productsLocalCart[index].ProductId === this.eventCartNumber) {
            console.log('success even');
            this.productsLocalCart[index].ProductQuantity += 2;
            this.testTushar = this.productsLocalCart[index].ProductQuantity;
            this.buttonDisabled = false;
            console.log('testTushar incrementValue even ' + this.testTushar);
        }
        else {
            console.log('success odd');
            this.productsLocalCart[index].ProductQuantity++;
            this.testTushar = this.productsLocalCart[index].ProductQuantity;
            console.log('tushar' + this.productsLocalCart[index].ProductQuantity);
            this.testArray1 = this.productsLocalCart[index].ProductQuantity;
            this.testArray2 = this.testTushar;
            console.log('Tushar here' + this.testArray1);
            console.log('Tushar here' + this.testArray2);
            console.log('Increased Quantity odd' + this.productsLocalCart[index].ProductQuantity);
            console.log('Increased ProductId odd' + this.productsLocalCart[index].ProductId);
            this.buttonDisabled = false;
            console.log('testTushar incrementValue odd ' + this.testTushar);
        }
    }
    decrementValueLocal(index, item) {
        if (this.productsLocalCart[index].ProductQuantity <= 1) {
            console.log('failure');
            this.showToastOnCart();
        }
        else if (this.productsLocalCart[index].ProductId === this.eventCartNumber) {
            console.log('success even');
            this.productsLocalCart[index].ProductQuantity -= 2;
            this.testTushar = this.productsLocalCart[index].ProductQuantity;
            this.buttonDisabled = false;
            console.log('testTushar incrementValue even ' + this.testTushar);
        }
        else {
            console.log('success odd');
            this.productsLocalCart[index].ProductQuantity--;
            this.testTushar = this.productsLocalCart[index].ProductQuantity;
            console.log('tushar' + this.productsLocalCart[index].ProductQuantity);
            this.testArray1 = this.productsLocalCart[index].ProductQuantity;
            this.testArray2 = this.testTushar;
            console.log('Tushar here' + this.testArray1);
            console.log('Tushar here' + this.testArray2);
            console.log('Increased Quantity odd' + this.productsLocalCart[index].ProductQuantity);
            console.log('Increased ProductId odd' + this.productsLocalCart[index].ProductId);
            this.buttonDisabled = false;
            console.log('testTushar incrementValue odd ' + this.testTushar);
        }
    }
    // incrementValue(index: number) {  
    //   if(this.productsLocalCart[index].ProductId === this.eventCartNumber) {
    //     console.log('success even');
    //      this.productsLocalCart[index].ProductQuantity += 2;  
    // this.testTushar =  this.productsLocalCart[index].ProductQuantity;
    // this.buttonDisabled = false;
    // console.log('testTushar incrementValue even ' + this.testTushar);
    //   }
    //   else {
    //     console.log('success odd');
    //     this.productsLocalCart[index].ProductQuantity ++;  
    // this.testTushar =  this.productsLocalCart[index].ProductQuantity;
    // console.log('tushar' + this.productsLocalCart[index].ProductId);
    // this.testArray1 = this.productsLocalCart[index].ProductId;
    // this.testArray2 = this.testTushar;
    // console.log('Tushar here' + this.testArray1 );
    // console.log('Tushar here' + this.testArray2 );
    // //console.log('Increased Quantity odd' +  this.viewCartList[index].quantity);
    // // console.log('Increased ProductId odd' +  this.viewCartList[index].product_id);
    // this.buttonDisabled = false;
    // console.log('testTushar incrementValue odd ' + this.testTushar);
    //   }
    // }
    decrementValue(index, strDynamicId) {
        if (this.viewCartList[index].quantity <= 1) {
            console.log('failure');
            this.showToastOnCart();
        }
        else {
            if (this.viewCartList[index].product_id === this.eventCartNumber && this.viewCartList[index].quantity <= 2) {
                console.log('no decrement ');
            }
            else if (this.viewCartList[index].product_id === this.eventCartNumber) {
                this.viewCartList[index].quantity -= 2;
                this.testTushar = this.viewCartList[index].quantity;
                //console.log('Decreased Quantity even ' +  this.viewCartList[index].quantity );
                //console.log('Decreased ProductId even ' +  this.viewCartList[index].product_id);
                this.buttonDisabled = false;
                console.log('testTushar decrementValue even ' + this.testTushar);
            }
            else {
                console.log('success odd');
                this.viewCartList[index].quantity--;
                this.testTushar = this.viewCartList[index].quantity;
                //console.log('Decreased Quantity odd' +  this.viewCartList[index].quantity);
                //console.log('Decreased ProductId odd' +  this.viewCartList[index].product_id);
                this.buttonDisabled = false;
                console.log('testTushar decrementValue odd ' + this.testTushar);
            }
        }
    }
    updateShoppingCart() {
        // elValue are the property values
        // for (let elValue of this.viewCartList) {
        //   console.log(elValue.product_id);
        //   this.strDynamicId1 += elValue.product_id;
        // }
        // for (leti = 0; i <= (n-1); i++) {
        //   var list = names[i];
        //   var myList = document.getElementById("list");
        //   myList.innerHTML += "<li class='list-group-item' id='listItem'>"+ list + "</li>" + "<br />";
        // }
        // const ele = document.getElementById("searchTxt") as HTMLInputElement;
        // ele.checked = false;
        // console.log("Sent productsList response " + ele);
        // this.valueQuantity1 = [{}];  
        // console.log('Increased Quantity even ' +  this.viewCartList[index].quantity );
        // this.testTushar = this.viewCartList[this.index].quantity;
        // this.testTushar =  this.viewCartList.quantity;
        console.log('Updated  Product Quantity ' + this.testTushar);
        console.log('Updated  Product Id ' + this.strDynamicId);
        this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + this.strTestProductId + '&quantity=' + this.testTushar).subscribe((jsonResponse) => {
            this.obj = JSON.stringify(jsonResponse);
            // console.log("Sent productsList response " + this.obj);
            // console.log("Sent productsList id " + strDynamicId);
            // console.log("Update productsList Quantity " + this.strDynamicProductQuantity);
            this.showToastOnAddingCart();
            this.viewCartApi();
        });
    }
    removeProductLocally(index, item, name) {
        //   console.log('Local removed' + item);
        //   for(let i = 0; i < this.productsLocalCart.length; i++) {
        //     if(this.productsLocalCart[i] == item){
        //       this.productsLocalCart.splice(i, 1);
        //      localStorage.removeItem(this.productsLocalCart.splice(i, 1))
        //      this.productsLocalCart.splice(index, 1);
        // localStorage.setItem('questions', JSON.stringify(this.productsLocalCart));
        this.showCartRemovalAlert2(index, item, name);
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            this.presentLoading();
            try {
                const service = this.apiProvider.getTest1();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        console.log(resultado);
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strDataServer = 'Cart is Empty.Please add items!';
                        var result = [];
                        console.log('Tushar' + this.viewCartList[0].product_id);
                        for (var i = 0; i < this.viewCartList.length; i++) {
                            var arr = []; // create array
                            var ii = i;
                            this.total += parseInt(this.viewCartList[i].price);
                            this.strDynamicId = this.viewCartList[i].product_id;
                            this.strDynamicProductQuantity = this.viewCartList[i].quantity;
                        }
                        // tslint:disable-next-line: no-duplicate-variable
                        for (var i = 0; i < this.viewCartList.length; i++) {
                            result.push(this.strDynamicId);
                        }
                        console.log(result);
                        //  console.log('Total Price of Products ' + this.total);
                        this.strSubTotalAmount = this.total;
                        this.strQuantityUpdated = this.total1 * 2;
                        localStorage.setItem('name', this.strSubTotalAmount);
                        // tslint:disable-next-line: one-variable-per-declaration
                        let size = 0, keyPrice, keyProductId;
                        for (keyPrice in this.viewCartList) {
                            if (this.viewCartList.hasOwnProperty(keyPrice)) {
                                size++;
                                const priceValue = this.viewCartList[keyPrice].price;
                                this.viewCartList[keyPrice].price = priceValue;
                                if (priceValue === "") {
                                    this.viewCartList[keyPrice].price = "No price Defined";
                                }
                                else {
                                    this.strPriceValue = priceValue;
                                    this.strNumber = priceValue.concat('price');
                                }
                            }
                        }
                        for (keyProductId in this.viewCartList) {
                            if (this.viewCartList.hasOwnProperty(keyProductId)) {
                                size++;
                                const productIdValue = this.viewCartList[keyProductId].product_id;
                                this.viewCartList[keyProductId].product_id = productIdValue;
                                if (productIdValue === "") {
                                    //this.viewCartList[keyPrice].price = "No Product Id Defined";
                                }
                                else {
                                    this.strProductIdValue = productIdValue;
                                    //this.strNumber = priceValue.concat('price');
                                    console.log('Value got ' + productIdValue);
                                }
                            }
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
    }
    productcategoryDetailPage1(product_id, name) {
        console.log('Product Id----' + product_id);
        console.log('Product Name-----' + name);
        this.strTestProductId = product_id;
    }
    showLoadingControllerLaunch() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_8__capacitor_core__["a" /* Plugins */];
            this.networkListener = Network.addListener('networkStatusChange', (status) => {
                console.log('Network status HomePage here', status);
                this.networkStatus = status;
            });
            if ((yield Network.getStatus()).connectionType === 'none') {
                this.showNetworkAlert();
                console.log('Network status not available', this.networkStatus);
            }
            else {
                this.networkStatus = yield Network.getStatus();
                console.log('Network status available', this.networkStatus);
                this.presentLoadingDefault();
            }
        });
    }
    showNetworkAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert = yield this.alertController.create({
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
        });
    }
    showCartRemovalAlert(dynamicId) {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert1 = this.alertController.create({
                title: 'Remove Item!',
                message: 'Do you want to remove items from cart!',
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        handler: (ok) => {
                            console.log('Confirm Ok');
                            this.httpClient.get('http://busybanda.com/sterling-tools/api/remove_cart_item?' + 'product_id=' + dynamicId).subscribe((jsonResponse) => {
                                this.obj = JSON.stringify(jsonResponse);
                                console.log("Delete productsList response " + this.obj);
                                console.log("Delete productsList id " + dynamicId);
                                this.showToastOnDeletingCart();
                                this.viewCartApi();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {
                            console.log('Confirm Cancel');
                            alert1.dismiss();
                            // resolve('cancel');
                        },
                    },
                ],
            });
            alert1.present();
        });
    }
    showCartRemovalAlert1(product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert1 = this.alertController.create({
                title: 'Remove Item! ' + product_id,
                message: 'Do you want to remove items from cart!',
                enableBackdropDismiss: false,
                buttons: [
                    {
                        cssClass: 'my-custom-class',
                        text: 'Ok',
                        handler: (ok) => {
                            console.log('Confirm Ok');
                            // this.strTestProductId = product_id;
                            console.log('Remove Product: ' + product_id);
                            if (localStorage.getItem('isSigned')) {
                                console.log('isSigned status: ' + 'isSigned true');
                                this.httpClient.get('http://busybanda.com/sterling-tools/api/remove_cart_item?' + 'product_id=' + product_id).subscribe((jsonResponse) => {
                                    this.obj = JSON.stringify(jsonResponse);
                                    console.log('Data' + this.obj);
                                    this.showToastOnDeletingCart();
                                    this.viewCartApi();
                                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                                });
                            }
                            else {
                                console.log('isSigned status: ' + 'isSigned false');
                            }
                            // this.showCartRemovalAlert(strTestProductId);
                        },
                    },
                    {
                        text: 'Cancel',
                        handler: data => {
                            let navTransition = alert1.dismiss();
                            //  navTransition.then(() => {
                            //    this.navCtrl.pop();
                            //  });
                            return false;
                        }
                    },
                ],
            });
            alert1.present();
        });
    }
    showCartRemovalAlert2(index, item, name) {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert1 = this.alertController.create({
                title: 'Remove Item! ' + name,
                message: 'Do you want to remove item from cart locally!',
                enableBackdropDismiss: false,
                buttons: [
                    {
                        cssClass: 'my-custom-class',
                        text: 'Ok',
                        handler: (ok) => {
                            console.log('Confirm Ok');
                            console.log('Remove Product: ' + item);
                            for (let i = 0; i < this.productsLocalCart.length; i++) {
                                if (this.productsLocalCart[i] == item) {
                                    this.productsLocalCart.splice(i, 1);
                                    localStorage.setItem('products', JSON.stringify(this.productsLocalCart));
                                }
                            }
                        },
                    },
                    {
                        text: 'Cancel',
                        handler: data => {
                            let navTransition = alert1.dismiss();
                            //  navTransition.then(() => {
                            //    this.navCtrl.pop();
                            //  });
                            return false;
                        }
                    },
                ],
            });
            alert1.present();
        });
    }
    presentLoadingDefault() {
        let loading = this.loadingController.create({
            content: 'Please wait Viewing Cart...'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 300);
    }
    showToastOnPageLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.strContent = this.strContent.replace(/\n/g, "<br />");
            const toast = yield this.toastController.create({
                message: localStorage.getItem('Product Title'),
                duration: 6000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyCart() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.strContent = this.strContent.replace(/\n/g, "<br />");
            const toast = yield this.toastController.create({
                message: 'Cart is empty.Please add items!',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnFilledCart() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.strContent = this.strContent.replace(/\n/g, "<br />");
            const toast = yield this.toastController.create({
                message: 'Cart is filled.Please wait, loading items!',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Minimum product quantity cannot be less than 1 ',
                duration: 400,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnProductsRemovedCartLocally() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Product removed from cart' + this.strProductTitle,
                duration: 1400,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnProductsQuantityCartLocally() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Product Quantity not available from cart',
                duration: 4000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnAddingEmptyCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Please add quantity of product',
                duration: 300,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnUserIdNull() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Please Login in the application',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnAddingCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Product quantity Updated in cart ',
                duration: 1300,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnDeletingCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Product Deleted in cart ' + this.obj,
                duration: 1500,
                position: 'bottom',
            });
            toast.present();
        });
    }
    presentLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: "Please wait fetching data !",
                duration: 400,
            });
            return yield loading.present();
        });
    }
    loaderFlatRate() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: "Please wait updating rate !",
                duration: 600,
            });
            return yield loading.present();
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_11" /* ViewChild */])("cc"),
    __metadata("design:type", Object)
], ViewcartPage.prototype, "cardContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_11" /* ViewChild */])("cc1"),
    __metadata("design:type", Object)
], ViewcartPage.prototype, "cardContent1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_11" /* ViewChild */])('nativeElement', { read: Element }),
    __metadata("design:type", typeof (_a = typeof Element !== "undefined" && Element) === "function" ? _a : Object)
], ViewcartPage.prototype, "alert", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_11" /* ViewChild */])('nativeElement', { read: Element }),
    __metadata("design:type", typeof (_b = typeof Element !== "undefined" && Element) === "function" ? _b : Object)
], ViewcartPage.prototype, "alert1", void 0);
ViewcartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-viewcart',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\viewcart\viewcart.html"*/'\n<ion-header class="bg-thime">\n  <ion-navbar>\n  <button ion-button menuToggle style="display: block !important">\n    <ion-icon class="menu-icon"\n      ><img src="assets/imgs/ic_menu.png"\n    /></ion-icon>\n  </button>\n    <ion-title style="text-align: center"\n      >View Cart\n        \n    </ion-title>\n  </ion-navbar>\n  <div class="custom-id">\n   \n    <ion-searchbar placeholder="Search any part here" ></ion-searchbar>\n  </div>\n   \n</ion-header>\n   \n<ion-content class="bg-light"> \n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="chevron-down-circle-outline"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing Cart."\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <!-- <ion-item *ngIf="!viewCartList.length && !productsLocalCart.length;else other_content">\n    <h5 style="font-size: 12px;">{{strData}}</h5> \n  </ion-item> -->\n\n  <ion-item *ngIf="!viewCartList.length;else other_content" lines="none">\n    <h5 style="font-size: 12px;">{{strDataServer}}</h5> \n  </ion-item>\n\n  <ion-item *ngIf="!productsLocalCart.length ;else other_content1" lines="none">\n    <h5 style="font-size: 12px;">{{strDataLocal}}</h5> \n  </ion-item>\n\n\n\n  <ng-template #other_content>\n\n\n  \n\n    <div class="pincod bg-white shadow-bottom cart-box"  style=" padding: 16px 16px 16px 16px;"\n    >\n      <ion-row style="margin-top: 8px" *ngFor="let viewCart of viewCartList;let i = index"  \n      (click)="productcategoryDetailPage(viewCart.product_id,viewCart.name)" >\n    \n        <ion-col col-4>\n          <ion-list>\n            <ion-item lines="none">\n              <img  [src]="viewCart.product_thumbnail"  style="width:200px;height:80px ;">\n            </ion-item>\n          </ion-list>\n        </ion-col>\n        <ion-col col-8>\n          \n          <div class="row"  >\n            <div class="block">{{viewCart.name}}</div>\n            <ion-icon\n            name="md-close"\n            style="margin-left: 10%; margin-top: 2%"\n            (click)="removeProductServer(viewCart.product_id)">\n          </ion-icon> \n            \n          </div>\n  \n     \n\n          <div   style="margin-top: 6% ">\n            <!-- <input   [value]="viewCart.quantity" [(ngModel)]="valueQuantity" id="myText" placeholder = "Input New Quantity"> -->\n            <!-- <ion-input  type="number"   [(ngModel)]="valueQuantity" id="myText" placeholder = "Input New Quantity" >{{viewCart.quantity}}  </ion-input> -->\n            <!-- <input value="{{viewCart.quantity}}" class="form-control" style="text-align:center;" id="textbox" type="number"> -->\n            <!-- <button (click)="decreament(viewCart.product_id)"  type="button" >-</button>\n              <button (click)="increament(viewCart.product_id)"  type="button" >+</button> -->\n          </div>\n\n\n       \n\n          <div style="margin-top: 6% " >\n            QTY          \n            <span class="icon"\n              >\n              <ion-icon\n                name="md-remove-circle"\n                style="margin-left: 10%; margin-top: 2%"\n                (click)="decrementValue(i,strDynamicId)">\n              </ion-icon>\n          </span>\n            <span  text-center style="margin-left: 10%;color: red;">{{viewCart.quantity}}</span>\n            <!-- <span  text-center style="margin-left: 10%;color: red;">{{strDynamicProductQuantity}}</span> -->\n\n            <span class="icon" text-right\n              ><ion-icon\n                name="md-add-circle"\n                (click)="incrementValue(i,viewCart.product_id)"\n                style="margin-left: 10%"\n              ></ion-icon\n            ></span>\n          </div>\n\n        \n          <div style="margin-top: 6%">\n            <label > <span class="priceicon">Product Regular Price   </span>{{viewCart.price}} <span class="priceicon">$</span></label>\n            <!-- <div class="block">Price: {{viewCart.name}} $ </div> -->\n        \n          </div>\n        </ion-col>\n      </ion-row>\n    \n    </div>\n  \n    <div class="reating-review bg-white" padding style="margin-bottom: 15px" > \n      <div class="reating">\n        <div class="select-section shadow-bottom" style="text-align: center"\n        >\n          <ion-row\n            class="ion-justify-content-center"\n            style="justify-content: center"\n           >\n            <button\n              ion-button\n              full\n              class="bg-thime btn-round btn-text"\n              style="max-width: 390px"\n              (click)="updateShoppingCart(strTestProductId)"\n              [disabled]="buttonDisabled">\n              Update Cart\n            </button>\n  \n            <button\n              ion-button\n              full\n              class="bg-thime btn-round btn-text"\n              style="max-width: 390px"\n            >\n              Clear Cart\n            </button>\n          </ion-row>\n        </div>\n      </div>\n      \n  \n      <div class="card-main">\n        <ion-card >\n          <ion-card-header (click)="toggleAccordion()">\n            <ion-list>\n              <ion-item lines="none">\n                <button ion-button clear small icon-only item-right>\n                  <ion-icon color="light" [name]="icon"></ion-icon>\n                </button>\n  \n                <h6 style="color: white; text-align: center;">Discount Codes</h6>\n              </ion-item>\n            </ion-list>  \n          </ion-card-header>\n          <ion-card-content #cc>\n            <div class="select-section shadow-bottom">\n              <ion-row class="ion-justify-content-center">\n                <ion-col size="12" offset="4">\n                  <div class="size" style="justify-content: center">\n                    <div\n                      class="size"\n                      style="justify-content: left; padding-right: 30px"\n                    >\n                 \n                      Enter your coupon code if you have one\n                    </div>\n                 \n                    <p padding-top>\n                      <span class="left-side">\n                        <ion-input placeholder="Enter Coupon Code"></ion-input>\n                      </span>\n                   \n                    </p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n  \n            <div class="select-section shadow-bottom">\n              <ion-row class="ion-justify-content-center">\n                <button\n                  ion-button\n                  full\n                  class="bg-thime btn-round btn-text"\n                  style="max-width: 420px"\n                >\n                  Check\n                </button>\n              </ion-row>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n  \n      <div class="card-main" style="margin-top: 10px">\n        <ion-card>\n          <ion-card-header (click)="toggleAccordion1()">\n            <ion-list>\n              <ion-item lines="none">\n                <button ion-button clear small icon-only item-right>\n                  <ion-icon color="light" [name]="icon"></ion-icon>\n                </button>\n  \n                <h6 style="color: white; text-align: center">\n                  Estimate Shipping Charges\n                </h6>\n              </ion-item>\n            </ion-list>\n          </ion-card-header>\n          <ion-card-content #cc1>\n            <div class="select-section shadow-bottom">\n              <ion-row class="ion-justify-content-center">\n                <ion-col size="12" offset="4">\n                  <div class="size" style="justify-content: center">\n                    <div\n                      class="size"\n                      style="justify-content: left; padding-right: 30px"\n                    >\n                      <!-- <h6 style="color: black">\n                        Enter your coupon code if you have one\n                      </h6> -->\n                      Enter your destination to get your shipping estimate\n                    </div>\n                    <!-- <div class="size" style="justify-content: center">\n                      <ion-input placeholder="Enter Coupon Code" style="width: 150px;margin-top: 9px;"></ion-input>\n                    </div>\n                    <div class="size" style="justify-content: center">\n                      <button ion-button  class="bg-sky btn-round btn-text" style="width: 100px;">Check</button>\n                    </div> -->\n  \n                    <p padding-top>\n                      <span class="left-side">\n                        <!-- <ion-badge class="badges bg-green text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>   -->\n                        <!-- <span class="bold">Discount Codes</span> -->\n                        <ion-input placeholder="Enter Destination"></ion-input>\n                      </span>\n                      <!-- <span class="right-side">\n                        <span class="text-light">16 May, 2017</span> -->\n                      <!-- <ion-icon name="md-star"></ion-icon> -->\n                      <!-- <button ion-button  class="bg-sky btn-round btn-text" style="width: 100px;">Check</button> \n                      </span>-->\n  \n                      <!-- <button ion-button  class="bg-sky btn-round btn-text" style="width: 190px;justify-content: center;">Get Quote</button>   -->\n                    </p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n  \n            <div class="select-section shadow-bottom">\n              <ion-row class="ion-justify-content-center">\n                <button\n                  ion-button\n                  full\n                  class="bg-thime btn-round btn-text"\n                  style="max-width: 420px"\n                  (click)="checkOutPage1()">\n                  Get Quote\n                </button>\n              </ion-row>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n  \n      <div class="lick">\n        <p padding-top>\n          <span class="left-side">\n            <!-- <ion-badge class="badges bg-green text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>   -->\n            <span class="bold">Read All Reviews</span>\n          </span>\n          <span class="right-side">\n            <!-- <span class="text-light">16 May, 2017</span> -->\n            <ion-icon name="md-star"></ion-icon>\n          </span>\n        </p>\n  \n        <!-- <h5>Must awaited product.Value for Money.</h5> -->\n        <!-- <label class="circle">Value for Money</label> -->\n  \n        <!-- <p class="border-bottom name-like" padding-bottom>\n          <span class="left-side"> Test User. </span>\n          <span class="right-side icon-box">\n            <ion-icon name="md-thumbs-up" text-right class="icon-lick"></ion-icon\n            ><small>2</small>\n            <ion-icon\n              name="md-thumbs-down"\n              text-right\n              class="icon-lick"\n            ></ion-icon\n            ><small>2</small>\n          </span>\n        </p> -->\n      </div>\n  \n      \n  \n      <ion-item>\n        <ion-label style="float: left; font-size: 14px">Subtotal</ion-label>\n        <ion-label style="float: right; color: red"> Rs 251.00</ion-label>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label style="float: left; font-size: 14px"\n          >Discount (Flat 10% Off)</ion-label\n        >\n        <ion-label style="float: right; color: red">-Rs25.10</ion-label>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label style="float: left; font-size: 14px">Grand Total</ion-label>\n        <ion-label style="float: right; color: red"> $ NZD {{strSubTotalAmount}}</ion-label>\n      </ion-item>\n\n   \n\n      <!-- <ion-item>\n        <ion-label style="color: black;">Shipping</ion-label>\n        <ion-select ([ngModel])="dropdown1"  placeholder="Local Pickup" >\n          <ion-option value="brown" style="color: black" (ionSelect)="clickOptionLocal()">Local Pickup</ion-option>\n          <ion-option value="blonde" style="float: right; color: black" (ionSelect)="clickOptionFlatRate()">Flat Rate: $5.00</ion-option>\n         \n        </ion-select>\n      </ion-item> -->\n\n      <div style="margin-top: 1px;">\n        <ion-grid>\n          <ion-row>\n            <ion-col size="12" offset="4">\n                <ion-item>\n                  <ion-label style="color: black;float: left">Shipping Charges</ion-label>\n                  <ion-select okText="Ok" cancelText="Cancel">\n                      <ion-option selected value="brown" style="color: black" (ionSelect)="clickOptionLocal()">Local Pickup</ion-option>\n                      <ion-option value="blonde" style="float: right; color: black" (ionSelect)="clickOptionFlatRate()">Flat Rate: $5.00</ion-option>\n                  </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n  \n      <ion-item>\n        <button\n          ion-button\n          full\n          class="bg-thime btn-round btn-text"\n          style="max-width: 390px; float: none; height: 40px"\n          (click)="checkOutPage()">\n\n        \n         Checkout\n        </button>\n      </ion-item>\n  \n      <!-- <ion-item>\n        <button #myButton ion-button icon-only (click)="toggleIcon()">\n          <ion-icon [name]="buttonIcon"></ion-icon>\n      </button>\n      </ion-item> -->\n\n\n     <!-- <ion-item>\n        <button #myButton ion-button icon-only (click)="toggleIcon1()">\n          <ion-icon [name]="buttonIcon1"></ion-icon>\n      </button>\n      </ion-item> -->\n        \n   \n  \n    </div>\n\n  </ng-template>\n\n  <ng-template #other_content1 >\n    <div class="pincod bg-white shadow-bottom cart-box"  style=" padding: 16px 16px 16px 16px;"\n    >\n      <ion-row style="margin-top: 8px" *ngFor="let productsLocal of productsLocalCart;let i = index"  \n      (click)="productcategoryDetailPage(productsLocal.ProductId,productsLocal.ProductName)" >\n    \n        <ion-col col-4>\n          <ion-list>\n            <ion-item>\n              <img  [src]="productsLocal.ProductImage"  style="width:200px;height:80px ;">\n            </ion-item>\n          </ion-list>\n        </ion-col>\n        <ion-col col-8>\n          \n          <div class="row"  >\n            <div class="block">{{productsLocal.ProductName}}</div>\n            <ion-icon\n            name="md-close"\n            style="margin-left: 10%; margin-top: 2%"\n            (click)="removeProductLocally(i,productsLocal,productsLocal.ProductName)">\n          </ion-icon> \n            \n          </div>\n  \n     \n\n       \n\n\n       \n\n          <div style="margin-top: 6% " >\n            QTY          \n            <span class="icon"\n              >\n              <ion-icon\n                name="md-remove-circle"\n                style="margin-left: 10%; margin-top: 2%"\n                (click)="decrementValueLocal(i,productsLocal.ProductId)">\n              </ion-icon>\n          </span>\n            <span  text-center style="margin-left: 10%;color: red;">{{productsLocal.ProductQuantity}}</span>\n            <!-- <span  text-center style="margin-left: 10%;color: red;">{{strValue}}</span> -->\n\n            <span class="icon" text-right><ion-icon\n                name="md-add-circle"\n                (click)="incrementValueLocal(i,productsLocal.ProductId)"\n                style="margin-left: 10%"\n              ></ion-icon\n            ></span>\n          </div>\n\n        \n          <div style="margin-top: 6%">\n            <label > <span class="priceicon">Product Price   </span>{{productsLocal.ProductRegularPrice}} <span class="priceicon">$</span></label>\n        \n          </div>\n        </ion-col>\n      </ion-row>\n    \n    </div>\n\n    <div class="reating-review bg-white" padding style="margin-bottom: 15px" > \n      <div class="reating">\n        <div class="select-section shadow-bottom" style="text-align: center"\n        >\n          <ion-row\n            class="ion-justify-content-center"\n            style="justify-content: center"\n           >\n            <button\n              ion-button\n              full\n              class="bg-thime btn-round btn-text"\n              style="max-width: 390px"\n              (click)="updateShoppingCart(strTestProductId)"\n              [disabled]="buttonDisabled">\n              Update Cart\n            </button>\n  \n            <button\n              ion-button\n              full\n              class="bg-thime btn-round btn-text"\n              style="max-width: 390px"\n            >\n              Clear Cart\n            </button>\n          </ion-row>\n        </div>\n      </div>\n      \n  \n      <div class="card-main">\n        <ion-card >\n          <ion-card-header (click)="toggleAccordion()">\n            <ion-list>\n              <ion-item>\n                <button ion-button clear small icon-only item-right>\n                  <ion-icon color="light" [name]="icon"></ion-icon>\n                </button>\n  \n                <h6 style="color: white; text-align: center;">Discount Codes</h6>\n              </ion-item>\n            </ion-list>  \n          </ion-card-header>\n          <ion-card-content #cc>\n            <div class="select-section shadow-bottom">\n              <ion-row class="ion-justify-content-center">\n                <ion-col size="12" offset="4">\n                  <div class="size" style="justify-content: center">\n                    <div\n                      class="size"\n                      style="justify-content: left; padding-right: 30px"\n                    >\n                 \n                      Enter your coupon code if you have one\n                    </div>\n                 \n                    <p padding-top>\n                      <span class="left-side">\n                        <ion-input placeholder="Enter Coupon Code"></ion-input>\n                      </span>\n                   \n                    </p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n  \n            <div class="select-section shadow-bottom">\n              <ion-row class="ion-justify-content-center">\n                <button\n                  ion-button\n                  full\n                  class="bg-thime btn-round btn-text"\n                  style="max-width: 420px"\n                >\n                  Check\n                </button>\n              </ion-row>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n  \n      <div class="card-main" style="margin-top: 10px">\n        <ion-card>\n          <ion-card-header (click)="toggleAccordion1()">\n            <ion-list>\n              <ion-item>\n                <button ion-button clear small icon-only item-right>\n                  <ion-icon color="light" [name]="icon"></ion-icon>\n                </button>\n  \n                <h6 style="color: white; text-align: center">\n                  Estimate Shipping Charges\n                </h6>\n              </ion-item>\n            </ion-list>\n          </ion-card-header>\n          <ion-card-content #cc1>\n            <div class="select-section shadow-bottom">\n              <ion-row class="ion-justify-content-center">\n                <ion-col size="12" offset="4">\n                  <div class="size" style="justify-content: center">\n                    <div\n                      class="size"\n                      style="justify-content: left; padding-right: 30px"\n                    >\n                      <!-- <h6 style="color: black">\n                        Enter your coupon code if you have one\n                      </h6> -->\n                      Enter your destination to get your shipping estimate\n                    </div>\n                    <!-- <div class="size" style="justify-content: center">\n                      <ion-input placeholder="Enter Coupon Code" style="width: 150px;margin-top: 9px;"></ion-input>\n                    </div>\n                    <div class="size" style="justify-content: center">\n                      <button ion-button  class="bg-sky btn-round btn-text" style="width: 100px;">Check</button>\n                    </div> -->\n  \n                    <p padding-top>\n                      <span class="left-side">\n                        <!-- <ion-badge class="badges bg-green text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>   -->\n                        <!-- <span class="bold">Discount Codes</span> -->\n                        <ion-input placeholder="Enter Destination"></ion-input>\n                      </span>\n                      <!-- <span class="right-side">\n                        <span class="text-light">16 May, 2017</span> -->\n                      <!-- <ion-icon name="md-star"></ion-icon> -->\n                      <!-- <button ion-button  class="bg-sky btn-round btn-text" style="width: 100px;">Check</button> \n                      </span>-->\n  \n                      <!-- <button ion-button  class="bg-sky btn-round btn-text" style="width: 190px;justify-content: center;">Get Quote</button>   -->\n                    </p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n  \n            <div class="select-section shadow-bottom">\n              <ion-row class="ion-justify-content-center">\n                <button\n                  ion-button\n                  full\n                  class="bg-thime btn-round btn-text"\n                  style="max-width: 420px"\n                  (click)="checkOutPage()">\n                  Get Quote\n                </button>\n              </ion-row>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n  \n      <div class="lick">\n        <p padding-top>\n          <span class="left-side">\n            <!-- <ion-badge class="badges bg-green text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>   -->\n            <span class="bold">Read All Reviews</span>\n          </span>\n          <span class="right-side">\n            <!-- <span class="text-light">16 May, 2017</span> -->\n            <ion-icon name="md-star"></ion-icon>\n          </span>\n        </p>\n  \n        <!-- <h5>Must awaited product.Value for Money.</h5> -->\n        <!-- <label class="circle">Value for Money</label> -->\n  \n        <!-- <p class="border-bottom name-like" padding-bottom>\n          <span class="left-side"> Test User. </span>\n          <span class="right-side icon-box">\n            <ion-icon name="md-thumbs-up" text-right class="icon-lick"></ion-icon\n            ><small>2</small>\n            <ion-icon\n              name="md-thumbs-down"\n              text-right\n              class="icon-lick"\n            ></ion-icon\n            ><small>2</small>\n          </span>\n        </p> -->\n      </div>\n  \n      \n  \n      <ion-item>\n        <ion-label style="float: left; font-size: 14px">Subtotal</ion-label>\n        <ion-label style="float: right; color: red"> Rs 251.00</ion-label>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label style="float: left; font-size: 14px"\n          >Discount (Flat 10% Off)</ion-label\n        >\n        <ion-label style="float: right; color: red">-Rs25.10</ion-label>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label style="float: left; font-size: 14px">Grand Total</ion-label>\n        <ion-label style="float: right; color: red"> $ NZD {{strSubTotalAmount}}</ion-label>\n      </ion-item>\n\n   \n\n      <!-- <ion-item>\n        <ion-label style="color: black;">Shipping</ion-label>\n        <ion-select ([ngModel])="dropdown1"  placeholder="Local Pickup" >\n          <ion-option value="brown" style="color: black" (ionSelect)="clickOptionLocal()">Local Pickup</ion-option>\n          <ion-option value="blonde" style="float: right; color: black" (ionSelect)="clickOptionFlatRate()">Flat Rate: $5.00</ion-option>\n         \n        </ion-select>\n      </ion-item> -->\n\n\n      <div *ngIf="viewCartList;else templateName">\n          View cart empty\n      </div>\n\n        <ng-template #templateName>\n          View cart filled\n\n        </ng-template>\n\n\n      <div style="margin-top: 1px;">\n        <ion-grid>\n          <ion-row  >\n            <ion-col size="12" offset="4">\n                <ion-item>\n                  <ion-label style="color: black;float: left">Shipping Charges</ion-label>\n                  <ion-select okText="Ok" cancelText="Cancel">\n                      <ion-option selected value="brown" style="color: black" (ionSelect)="clickOptionLocal()">Local Pickup</ion-option>\n                      <ion-option value="blonde" style="float: right; color: black" (ionSelect)="clickOptionFlatRate()">Flat Rate: $5.00</ion-option>\n                  </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n  \n      <ion-item>\n        <button\n          ion-button\n          full\n          class="bg-thime btn-round btn-text"\n          style="max-width: 390px; float: none; height: 40px"\n          (click)="checkOutPage()">\n\n        \n          Checkout\n        </button>\n      </ion-item>\n  \n      <!-- <ion-item>\n        <button #myButton ion-button icon-only (click)="toggleIcon()">\n          <ion-icon [name]="buttonIcon"></ion-icon>\n      </button>\n      </ion-item> -->\n\n\n     <!-- <ion-item>\n        <button #myButton ion-button icon-only (click)="toggleIcon1()">\n          <ion-icon [name]="buttonIcon1"></ion-icon>\n      </button>\n      </ion-item> -->\n        \n   \n  \n    </div>\n\n\n  </ng-template>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\viewcart\viewcart.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavParams */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* LoadingController */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["n" /* ToastController */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__angular_core__["X" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_core__["X" /* Renderer */]) === "function" ? _j : Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]) === "function" ? _k : Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" ? _l : Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* Platform */]) === "function" ? _m : Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* App */]) === "function" ? _o : Object])
], ViewcartPage);

//# sourceMappingURL=viewcart.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VieworderdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the VieworderdetailsPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */





let VieworderdetailsPage = class VieworderdetailsPage {
    constructor(navCtrl, modalCtrl, navParams, httpClient, loadingController) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.productCategoryInformation = [];
        this.strDynamicId = navParams.get('ID');
        console.log('Received productsList id ' + this.strDynamicId);
    }
    ngOnInit() {
        this.showLoadingControllerLaunch();
        this.callOrderDetailsApi();
        this.httpClient.get('http://busybanda.com/sterling-tools/api/get_shop_order_by_id?' + 'id=' + this.strDynamicId)
            .subscribe((jsonResponse) => {
            this.productCategoryInformation = jsonResponse['result'];
            this.obj = JSON.stringify(jsonResponse);
            if (this.productCategoryInformation && this.productCategoryInformation.length) {
                console.log('Particular product details available ');
            }
            else {
                this.strData = 'No data available';
                console.log('Particular product empty ' + this.obj);
            }
            for (const entry of this.productCategoryInformation) {
                const strReplacedValue = entry.post_status.replace("wc-", "");
                ;
                console.log('strReplacedValue ' + strReplacedValue);
                this.strOrderTitle = 'Order Title: ' + entry.post_title;
                this.strOrderStatus = 'Order Status: ' + strReplacedValue;
                this.strCommentStatus = 'Comment Status: ' + entry.comment_status;
                this.strPingStatus = 'Ping Status: ' + entry.ping_status;
                // this.strProductCategoryTitle = 'Product Category Title: ' + entry.post_title;
                // this.strProductGuid = 'Product Guid: ' + entry.guid;
                // post_title,guid
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
        }, 8000);
    }
    searchPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    }
    cartPage() {
        // let modal = this.modalCtrl.create(CartPage);
        // modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    callOrderDetailsApi() {
        this.httpClient.get('http://busybanda.com/sterling-tools/api/get_current_user_data/')
            .subscribe((jsonResponse) => {
            this.productCategoryInformation = jsonResponse['result'];
            this.obj = JSON.stringify(jsonResponse);
            //  console.log('Particular product details ' + this.obj);
            if (this.productCategoryInformation && this.productCategoryInformation.length) {
                console.log('Particular product details available ');
            }
            else {
                this.strData = 'No data available';
                console.log('Particular product empty ' + this.obj);
            }
            //  for (const entry of this.productCategoryInformation) {
            //   const strReplacedValue = entry.post_status.replace("wc-", "");;
            //   console.log('strReplacedValue ' + strReplacedValue);
            //   this.strOrderTitle = 'Order Title: ' + entry.post_title;
            //   this.strOrderStatus = 'Order Status: ' + strReplacedValue;
            //   this.strCommentStatus = 'Comment Status: ' + entry.comment_status;
            //   this.strPingStatus = 'Ping Status: ' + entry.ping_status;
            // }
        });
    }
};
VieworderdetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-vieworderdetails',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\vieworderdetails\vieworderdetails.html"*/'<!--\n  Generated template for the VieworderdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle style="display: block !important">\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n  </button>\n      <ion-title>MyOrders\n          <span float-right> \n            <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n            <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n          </span>\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  \n\n\n  <ion-card class="card" *ngIf="productCategoryInformation.length==0;else other_content" >\n    <ion-card-header>\n      <ion-item lines="none">\n        <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{strData}}</ion-label>\n      </ion-item> \n  \n          \n    </ion-card-header>\n  </ion-card>\n\n\n  <ng-template #other_content>\n    <ion-card class="card" >\n      <ion-card-header>\n       \n  \n       \n    \n        <ion-item lines="none">\n          <ion-label style="color: black;margin-right: 8px;font-size: 11px">{{strOrderTitle}}</ion-label>\n        </ion-item> \n  \n        <ion-item lines="none">\n          <ion-label style="color: black;margin-right: 8px;font-size: 11px">{{strOrderStatus}}</ion-label>\n        </ion-item> \n  \n        <ion-item lines="none">\n          <ion-label style="color: black;margin-right: 8px;font-size: 11px">{{strCommentStatus}}</ion-label>\n        </ion-item> \n  \n        <ion-item lines="none">\n          <ion-label style="color: black;margin-right: 8px;font-size: 11px">{{strPingStatus}}</ion-label>\n        </ion-item> \n  \n  \n      </ion-card-header>\n    </ion-card>\n   </ng-template>\n\n\n \n\n\n\n \n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\vieworderdetails\vieworderdetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], VieworderdetailsPage);

//# sourceMappingURL=vieworderdetails.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SearchPage = class SearchPage {
    constructor(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
};
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\search\search.html"*/'<ion-content class="bg-light">\n\n  <div class="d-flex searchbar-section">\n\n    <ion-searchbar  placeholder="Search Brand of product"></ion-searchbar>\n\n    <!-- <ion-list>\n\n      <ion-item *ngFor="let item of items">\n\n        {{ item }}\n\n      </ion-item>\n\n    </ion-list> -->\n\n    <ion-icon name="md-close" class="close-icon" (click)="dismiss()"></ion-icon>\n\n  </div>\n\n\n\n  <div class="recent-search">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{"recent_search" | translate}}\n\n        <span text-right class="right">{{"clear_history" | translate}}</span>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <p>\n\n          <ion-icon name="ios-time-outline"></ion-icon>Iphone7 in <strong class="text-sky">Mobile</strong>\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-time-outline"></ion-icon>Shirt in <strong class="text-sky">Me,s Wear</strong>\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n\n\n  \n\n  <div class="trending-search">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{"search_trend" | translate}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Sleevless kurti\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Shoes\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Watches\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Tshirt\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Headphones\n\n        </p>\n\n        <p>\n\n          <ion-icon name="ios-trending-up-outline"></ion-icon>Pendrive\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\search\search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CartPage = class CartPage {
    constructor() { }
    ngOnInit() {
        if (localStorage.getItem('cart')) {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        }
    }
    removeFromCart(index) {
        this.cart.slice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
};
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\cart\cart.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <!--\n\n      <button ion-button menuToggle>\n\n            <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n          </button>\n\n      -->\n\n    <ion-title>{{"cart" | translate}}\n\n      <span float-right>\n\n        <ion-icon class="icon" ><img src="assets/imgs/ic_cross.png" width="100%;"></ion-icon>           \n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content>\n\n    <div class="main">\n\n        <ion-card class="example-card" *ngFor="let item of cart; let i= index">\n\n        \n\n          <img mat-card-image [src]="item.imgUrl" alt="Photo of a Shiba Inu">\n\n          <ion-card-content>\n\n            <h2>{{item.name}}</h2>\n\n            <h3>${{item.price}}</h3>\n\n          </ion-card-content>\n\n          \n\n        \n\n            <button mat-button (click)="removeFromCart(i)">\n\n              Remove \n\n        \n\n              <ion-icon class="example-icon" aria-hidden="false" aria-label="Example heart icon">delete_forever</ion-icon>\n\n            </button>\n\n        </ion-card>\n\n        </div>\n\n    \n\n</ion-content>'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\cart\cart.html"*/
    }),
    __metadata("design:paramtypes", [])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wishlistupdated_wishlistupdated__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let Myorder_2Page = class Myorder_2Page {
    constructor(navCtrl, modalCtrl, apiProvider, platform, app) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.platform = platform;
        this.app = app;
        this.viewOrdersList = [];
        this.viewCartList = [];
    }
    ngOnInit() {
        this.viewCartApi();
        this.viewOrdersApi();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'Myorder_2Page') {
                if (nav.canGoBack()) {
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                }
            }
        });
    }
    cartPage() {
        // let modal = this.modalCtrl.create(CartPage);
        // modal.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    searchPage() {
        // let modal = this.modalCtrl.create(SearchPage);
        // modal.present();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.viewOrdersApi();
        this.viewCartApi();
        setTimeout(() => {
            console.log('Async operation has ended');
            //  event.target.complete();
            event.complete();
        }, 500);
    }
    viewOrdersApi() {
        console.log('viewOrdersApi called    ');
        const service = this.apiProvider.getOrders();
        service.subscribe((data) => {
            const resultado = data;
            console.log('Get response: ' + resultado);
            this.viewOrdersList = resultado;
        });
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getTest1();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
                        // console.log('Length of cart ' + this.viewCartList.length);
                        if (this.viewCartList.length > 1) {
                            console.log('Cart Filled ');
                            this.countProducts = this.viewCartList.length;
                            this.buttonIcon = "cart";
                        }
                        else {
                            console.log('Cart Empty ');
                            //  this.buttonIcon = "cart";
                            this.countProducts = 'Empty';
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
    }
};
Myorder_2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-myorder_2 ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\myorder_2\myorder_2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>My Order\n\n            <!-- <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n\n            </span> -->\n\n            <span float-right>\n\n                <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n\n\n\n                <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n\n                <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon>\n\n              </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card *ngFor="let vieworders of viewOrdersList" >\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n                        <!-- <img src="assets/imgs/productimage.jpg"> -->\n\n                         <img src="assets/imgs/productimage.jpg" style="width: 130px;float: left;" /> \n\n\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <!-- <h4>Unique For Men Black Formal Slim Fit Shirt</h4> -->\n\n                    <!-- <h4>{{vieworders.post_title}}</h4> -->\n\n                    <div >\n\n                      \n\n                        <p style="color: black;">Order Id: {{vieworders.orderId}}</p>\n\n                        <!-- <p style="color: black;">Order Status {{vieworders.orderStatus}}</p> -->\n\n                    </div>\n\n                    <div   padding-top>\n\n                        <!-- <small class="text-sky ">Cancel Order</small> -->\n\n                        <!-- <small class="text-white bg-green green-shadow">Track Order</small> -->\n\n                        <p style="color: black;">Date: {{vieworders.created.date}}</p>\n\n                    </div>\n\n                    <div class="card-btn"  padding-top>\n\n                        <!-- <small class="text-sky ">Cancel Order</small> -->\n\n                        <!-- <small class="text-white bg-green green-shadow">Track Order</small> -->\n\n                        <p style="color: black;">Status: {{vieworders.orderStatus}}</p>\n\n                    </div>\n\n                    <div class="card-btn"  padding-top>\n\n                        <!-- <small class="text-sky ">Cancel Order</small> -->\n\n                        <!-- <small class="text-white bg-green green-shadow">Track Order</small> -->\n\n                        <p style="color: black;">Total: {{vieworders.total}}</p>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <!-- <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>Delivered on 12-March-2017</p> <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">Return Item</small>\n\n                        <small class="text-white bg-thime sky-shadow">Rate Now</small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Multicolor Dil Men\'s Watch</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>{{"deliver_on" | translate}} 12-March-017</p>\n\n                        <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">Share Product</small>\n\n                        <small class="text-white bg-gray gray-shadow">Rated 4\n\n                         <ion-icon name="md-star"></ion-icon>\n\n                        </small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card> -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\myorder_2\myorder_2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */]])
], Myorder_2Page);

//# sourceMappingURL=myorder_2.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wishlist_wishlist__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let HelpPage = class HelpPage {
    constructor(navCtrl, modalCtrl, platform, app, _alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.app = app;
        this._alertCtrl = _alertCtrl;
    }
    ngOnInit() {
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'HelpPage') {
                if (nav.canGoBack()) {
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                }
            }
        });
    }
    //   ionViewCanLeave(): Promise<boolean> {
    //     return new Promise(resolve => {
    //         this._alertCtrl.create({
    //             title: 'Confirm leaving',
    //             message: 'There is unsave work, do you like to continue leaving?',
    //             buttons: [{
    //                 text: 'Leave',
    //                 handler: () => {
    //                     resolve(true);
    //                 }
    //             }, {
    //                 text: 'Stay',
    //                 handler: () => {
    //                     resolve(false);
    //                 }
    //             }]
    //         }).present();
    //     });
    // }
    cartPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        modal.present();
    }
    searchPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wishlist_wishlist__["a" /* WishlistPage */]);
    }
};
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-help ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\help\help.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n        </button>\n\n        <ion-title>Help Center</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <h6 style="text-align: left;">Frequently Asked Questions</h6>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Track Order\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Order Track Help Text\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Refund\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Refund help text\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n             cancel help\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            cancel help text\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Seller help\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Seller help text\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Payments\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Payments help text\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\help\help.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ReviewPage = class ReviewPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
};
ReviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-review ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\review\review.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"add_review" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-header style="padding-bottom: 0;">\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n\n\n        <ion-card-content>\n\n            <div class="form">\n\n                <ion-list>\n\n                    <ion-item class="write-reveiw">\n\n                        <ion-textarea type="text" placeholder="{{\'write_review\' | translate}}"></ion-textarea>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-input type="text" placeholder="{{\'heading_review\' | translate}}"></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n            <button ion-button full class="bg-green btn-round btn-text">{{"submit_now" | translate}}</button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <h5>{{"previous_orders" | translate}}</h5>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/bag.jpg"> -->\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/wach.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Multicolor Dil Men\'s Watch</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\review\review.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ReviewPage);

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

let APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]("app.config");
const BaseAppConfig = {
    apiBase: "http://opuslabs.in:9067/wp-json/",
    perPage: "5",
    consumerKey: "ck_bd34fc373c15b8092269895d9f24fdafd75901bc",
    consumerSecret: "cs_a3424b5ca1754293e4c8668b614f1768c0e859ab",
    adminUsername: "prashant",
    adminPassword: "prashant243",
    oneSignalAppiId: "c26a7c6d-25a1-451d-9eea-f790790b11b9",
    oneSignalGpId: "968366107124",
    homeSliderPostsTagId: "95",
    availableLanguages: [{
            code: 'en',
            name: 'English'
        }, {
            code: 'ar',
            name: 'Arabic'
        }, {
            code: 'es',
            name: 'Spanish'
        }, {
            code: 'pt',
            name: 'Portuguese'
        }, {
            code: 'ru',
            name: 'Russian'
        }, {
            code: 'fr',
            name: 'French'
        }],
    firebaseConfig: {
        webApplicationId: "511052243603-tti40jbrr3ukb2t3abebcesl510ql099.apps.googleusercontent.com",
        apiKey: "AIzaSyBg3aFpqNbi0kp3maAanCXeWXXF_PGEXuI",
        authDomain: "mobimall-f924b.firebaseapp.com",
        databaseURL: "https://mobimall-f924b.firebaseio.com",
        projectId: "mobimall-f924b",
        storageBucket: "mobimall-f924b.appspot.com",
        messagingSenderId: "511052243603"
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = BaseAppConfig;

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PasswordPage = class PasswordPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    verificationPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verification_verification__["a" /* VerificationPage */]);
    }
};
PasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-password ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\password\password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"login_box2" | translate}} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center>{{"forgot_password_text" | translate}}</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"login_box2" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="______"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="verificationPage()">{{"continue" | translate}}</button>\n\n    <p text-center class="text-sky">{{"forgot_password" | translate}}</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\password\password.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], PasswordPage);

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let VerificationPage = class VerificationPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    createaccountPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__["a" /* CreateaccountPage */]);
    }
};
VerificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-verification ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\verification\verification.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"verify_code" | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center>{{"verify_label" | translate}} <br>{{"verify_label1" | translate}} +91 903 335 6708</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"verify_code" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="______"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="createaccountPage()">{{"verify" | translate}}</button>\n\n    <p text-center>\n\n      <span float-left class="text-sky">{{"resend" | translate}}</span>\n\n      <span float-right>1:32 {{"min_left" | translate}}</span>\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\verification\verification.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], VerificationPage);

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CreateaccountPage = class CreateaccountPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    homePage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    }
};
CreateaccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-createaccount',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\createaccount\createaccount.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <!-- <ion-title>{{"create_account" | translate}}</ion-title> -->\n\n\n\n    <!-- <ion-img class="logo-img"\n\n    style="align-items: center;"\n\n    src="assets/sterlinglogo.png"\n\n  ></ion-img> -->\n\n\n\n  <img src="assets/imgs/sterlinglogo.png" >\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center padding-bottom margin-bottom>{{"sign_up_label" | translate}}</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"phone" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="+91 903 335 6708"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"full_name" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"email" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="jhonsmith8994@gmail.com"></ion-input>\n\n      </ion-item>\n\n      <div class="d-flex">\n\n        <ion-item>\n\n          <ion-label>{{"login_box2" | translate}}</ion-label>\n\n          <ion-input type="text" text-right value="******"></ion-input>\n\n        </ion-item>\n\n        <ion-icon name="ios-eye-outline" class="text-light eye-icon"></ion-icon>\n\n      </div>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="homePage()">{{"continue" | translate}}</button>\n\n    <p text-center>\n\n      <small>\n\n        {{"tnc_prelabel" | translate}} \n\n        <span class="text-sky"> {{"tnc" | translate}} </span>\n\n      </small>\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\createaccount\createaccount.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], CreateaccountPage);

//# sourceMappingURL=createaccount.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ShortPage = class ShortPage {
    constructor(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
};
ShortPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-short',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\short\short.html"*/'<ion-content (click)="dismiss()">\n\n  <div class="group">\n\n    <ion-list radio-group>\n\n      <ion-list-header class="d-flex" text-uppercase>\n\n        {{"sort_by" | translate}}\n\n        <ion-icon name="ios-arrow-down"></ion-icon>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by1" | translate}}</ion-label>\n\n        <ion-radio checked="true" value="popularity"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by2" | translate}}</ion-label>\n\n        <ion-radio value="price_h_l"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by3" | translate}}</ion-label>\n\n        <ion-radio value="price_l_h"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by4" | translate}}</ion-label>\n\n        <ion-radio value="newest"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\short\short.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], ShortPage);

//# sourceMappingURL=short.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let FilterPage = class FilterPage {
    constructor(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
};
FilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\filter\filter.html"*/'<ion-content>\n\n  <div class="group">\n\n    <div class="size-filter">\n\n      <div class="slid-container">\n\n        <span>2XS</span>\n\n        <span>XS</span>\n\n        <span class="active">S</span>\n\n        <span>M</span>\n\n        <span class="active">L</span>\n\n        <span>XL</span>\n\n        <span>XX</span>\n\n        <span>XXX</span>\n\n      </div>\n\n    </div>\n\n    <div class="type-filter">\n\n      <div class="slid-container">\n\n        <span>{{"brand" | translate}}</span>\n\n        <span class="active">{{"size" | translate}}</span>\n\n        <span>{{"color" | translate}}</span>\n\n        <span>{{"wear" | translate}}</span>\n\n        <span>{{"outfit" | translate}}</span>\n\n      </div>\n\n    </div>\n\n    <ion-row text-center class="action">\n\n      <ion-col col-5>\n\n        <p>{{"reset" | translate}}</p>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <p><ion-icon name="ios-close-outline" (click)="dismiss()"></ion-icon></p>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <p class="active">{{"apply" | translate}}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\filter\filter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], FilterPage);

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordiantestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AccordiantestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let AccordiantestPage = class AccordiantestPage {
    constructor(renderer, platform) {
        this.renderer = renderer;
        this.platform = platform;
        this.accordionExapanded = false;
        this.icon = "arrow-forward";
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__["a" /* ViewcartPage */];
    }
    ngOnInit() {
        console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
    }
    toggleAccordion() {
        if (this.accordionExapanded) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
        }
        this.accordionExapanded = !this.accordionExapanded;
        this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
    }
    getSideOfCurLang() {
        return this.platform.dir() === 'rtl' ? "right" : "left";
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])("cc"),
    __metadata("design:type", Object)
], AccordiantestPage.prototype, "cardContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('title'),
    __metadata("design:type", String)
], AccordiantestPage.prototype, "title", void 0);
AccordiantestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-accordiantest',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\accordiantest\accordiantest.html"*/'<!--\n  Generated template for the AccordiantestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-menu [content]="content" [side]="getSideOfCurLang()">\n  <ion-header>\n  \n    <div style="background: #a8171e; height: 170px;" padding text-center>\n      <ion-item text-center>\n        <img src="assets/imgs/sterlinglogo.png" class="img" />\n\n        <h2 style="color: white; justify-content: center;">STERLING</h2>\n\n        <ion-row style="margin-top: 4%;">\n          <p style="color: white; margin-left: 14%; text-align: center;">\n            sterlingtools@gmail.com\n          </p>\n          <ion-icon\n            name="arrow-forward"\n            style="margin-left: 7%; width: 30px; height: 30px;"\n          >\n          </ion-icon>\n        </ion-row>  \n      </ion-item>\n    </div>\n\n    <div class="menu-tabs" padding text-center>\n      <ion-row>\n        <img src="assets/imgs/ic_my_orders.png" style="width: 40px;" />\n        <p\n          style="\n            font-size: 10px;\n            color: white;\n            margin-left: 4%;\n            font-size: 12px;\n          "\n        >\n          My Orders\n        </p>\n\n        <img\n          src="assets/imgs/ic_my_addresses.png"\n          style="margin-left: 7%; width: 40px;"\n        />\n        <p\n          style="\n            font-size: 10px;\n            color: white;\n            margin-left: 4%;\n            font-size: 12px;\n          "\n        >\n          My Addresses\n        </p>\n      </ion-row>\n    </div>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-card >\n    <ion-card-header (click)="toggleAccordion()" > \n      <ion-list>\n        \n        <ion-item color="primary">\n          \n          <button ion-button clear small icon-only item-right>\n            <ion-icon color="light" [name]="icon"></ion-icon>\n          </button>\n\n          <h6>SHOP BY VEHICLE </h6>\n        \n        </ion-item>\n      </ion-list>\n    </ion-card-header>\n    <ion-card-content #cc>\n      <div class="select-section shadow-bottom">\n        <ion-row class="ion-justify-content-center">\n            <ion-col size="12" offset="4" >\n                <div class="size" style="justify-content: center;" >\n                \n                 \n                  <ion-item >\n                    <ion-select placeholder="Sort"  value="sortpopular" okText="Ok" cancelText="Cancel" >\n                      <ion-option value="sortpopular" >popularity</ion-option>\n                      <ion-option value="sortaveragerating">rating</ion-option>\n                      <ion-option value="sortlatest">latest</ion-option>\n                      <ion-option value="sortpricelowhigh" style="max-width: 100%;">low to high</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n            </ion-col>\n         \n        </ion-row>\n      </div>\n      <div class="select-section shadow-bottom">\n        <ion-row class="ion-justify-content-center">\n            <ion-col size="12" offset="4" >\n                <div class="size" style="justify-content: center;" >\n                \n                 \n                  <ion-item >\n                    <ion-select placeholder="Sort"  value="sortpopular" okText="Ok" cancelText="Cancel" >\n                      <ion-option value="sortpopular" >popularity</ion-option>\n                      <ion-option value="sortaveragerating">rating</ion-option>\n                      <ion-option value="sortlatest">latest</ion-option>\n                      <ion-option value="sortpricelowhigh" style="max-width: 100%;">low to high</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n            </ion-col>\n         \n        </ion-row>\n      </div>\n\n      <div class="select-section shadow-bottom">\n        <ion-row class="ion-justify-content-center">\n            <ion-col size="12" offset="4" >\n                <div class="size" style="justify-content: center;" >\n                \n                 \n                  <ion-item >\n                    <ion-select placeholder="Sort"  value="sortpopular" okText="Ok" cancelText="Cancel" >\n                      <ion-option value="sortpopular" >popularity</ion-option>\n                      <ion-option value="sortaveragerating">rating</ion-option>\n                      <ion-option value="sortlatest">latest</ion-option>\n                      <ion-option value="sortpricelowhigh" style="max-width: 100%;">low to high</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n            </ion-col>\n         \n        </ion-row>\n      </div>\n\n      <div class="select-section shadow-bottom">\n        <ion-row class="ion-justify-content-center" style="padding: 2px 7px;">\n            <button ion-button full class="bg-thime btn-round btn-text"   >Shop Now</button>\n    </ion-row>\n      </div>\n    </ion-card-content>\n\n    \n  </ion-card>\n</ion-content>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav\n  [root]="rootPage"\n \n  #content\n  swipeBackEnabled="false "\n  type="overlay"\n></ion-nav>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\accordiantest\accordiantest.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["X" /* Renderer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
], AccordiantestPage);

//# sourceMappingURL=accordiantest.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryupdatedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__itemdetail_itemdetail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wishlist_wishlist__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_category__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CategoryupdatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let CategoryupdatedPage = class CategoryupdatedPage {
    constructor(navCtrl, navParams, modalCtrl, loadingController, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.apiProvider = apiProvider;
        this.productsList = [];
        this.taxaNomyMakeList = [];
        this.slides = [
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-12.jpg",
            },
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-13.jpg",
            },
            {
                // title: "Under Rs. 699",
                title: "",
                description: "",
                smalltext: "",
                image: "assets/imgs/slider-12.jpg",
            }
        ];
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CategoryupdatedPage');
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__wishlist_wishlist__["a" /* WishlistPage */]);
    }
    searchPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    }
    cartPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
        modal.present();
    }
    categoryPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__category_category__["a" /* CategoryPage */]);
    }
    itemdetailPage(id, title, url, status, date, modified) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
            id: id,
            title: title,
            url: url,
            status: status,
            date: date,
            modified: modified
        });
        var JSON_Obj = { "one": 1, "two": 2, "three": 3, "four": 4, "five": 5 };
        // Read key
        for (var key in JSON_Obj) {
            //console.log(key1);
            console.log(JSON_Obj[key]);
        }
        console.log('Sent productsList id ' + id);
        console.log('Sent productsList title ' + title);
        console.log('Sent productsList url ' + url);
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: 'Please wait !'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 600);
    }
    getAllProducts() {
        // console.log('getAllProducts called    ');
        const service = this.apiProvider.getProducts();
        service.subscribe((data) => {
            const resultado = data;
            const resultado1 = data;
            // console.log('Get response: ' + resultado);
            this.productsList = resultado;
            this.taxaNomyMakeList = resultado1;
        });
    }
};
CategoryupdatedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-categoryupdated',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\categoryupdated\categoryupdated.html"*/'<ion-header class="bg-thime">\n  <ion-navbar>\n    <button ion-button menuToggle style="display: block !important;">\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n    </button>\n    <ion-title text-uppercase>Categories\n      <span float-right>\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n      </span>\n    </ion-title>\n    <!-- <ion-title>{{\'AUTO PARTS\' | translate}}</ion-title>\n    <span float-right>\n      <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="30px" height="30px"></ion-icon>\n      <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n    </span> -->\n  </ion-navbar>\n  <ion-searchbar  placeholder="Search Products" (click)="searchPage()"></ion-searchbar>\n  <!-- <ion-list>\n    <ion-item > </ion-item>\n  </ion-list> -->\n  <div class="tab-row">\n    <ion-row>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/first.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/second.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/third.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n      <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/fourth.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">  \n        <div class="img-box" text-center>\n          <img src="assets/imgs/fifth.png">\n          <small class="text-white">LORUM</small>\n        </div>\n      </ion-col>\n      <!-- <ion-col (click)="categoryPage()">\n        <div class="img-box" text-center>\n          <img src="assets/imgs/more.png">\n          <small class="text-white">More</small>\n        </div>\n      </ion-col> -->\n    </ion-row>\n  </div>\n</ion-header>\n\n\n<ion-content class="bg-light">\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image" />\n      <div class="banner-text">\n        <p [innerHTML]="slide.description"></p>\n        <small [innerHTML]="slide.smalltext"></small>\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  \n\n  <p>Featured Items\n    <small class="bg-thime btn-round text-white" float-right>View All</small>\n  </p>\n  <!-- <ion-row>\n    <ion-col>\n      <ion-card >\n        <ion-card-header>\n          <div class="img-box" (click)="itemdetailPage()">\n              <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n          </div>\n          <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n        </ion-card-header>\n        <ion-card-content (click)="itemdetailPage()" >\n          <h5>hi</h5>\n          <div class="rateing">\n            <div class="card-btn">\n              <p class="" float-left>\n                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                <span class="text-light bold"> (125)</span>\n              </p>\n              <div style="display: flex;" float-right>\n                <div class="price text-light mr-5">\n                  <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                </div>\n                <div class="price text-sky">\n                  <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card>\n        <ion-card-header>\n            <div class="img-box" (click)="itemdetailPage()">\n                <img src="assets/imgs/productimagenew.jpg" style="width: 130px;">\n            </div>\n            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n        </ion-card-header>\n        <ion-card-content (click)="itemdetailPage()">\n            <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n            <div class="rateing">\n                <div class="card-btn">\n                    <p class="" float-left>\n                        <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                        <span class="text-light bold"> (125)</span>\n                    </p>\n                    <div style="display: flex;" float-right>\n                        <div class="price text-light mr-5">\n                            <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                        </div>\n                        <div class="price text-sky">\n                            <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>  \n  </ion-row>   -->\n\n <!-- <ion-row>   \n    <ion-col>\n      <ion-card>\n          <ion-card-header>\n              <div class="img-box" (click)="itemdetailPage()">\n                  <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n              </div>\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n          </ion-card-header>\n          <ion-card-content (click)="itemdetailPage()">\n              <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n              <div class="rateing">\n                  <div class="card-btn">\n                      <p class="" float-left>\n                          <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                          <span class="text-light bold"> (125)</span>\n                      </p>\n                      <div style="display: flex;" float-right>\n                          <div class="price text-light mr-5">\n                              <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                          </div>\n                          <div class="price text-sky">\n                              <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card>\n          <ion-card-header>\n              <div class="img-box" (click)="itemdetailPage()">\n                  <img src="assets/imgs/productimagenew.jpg" style="width: 130px;">\n              </div>\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n          </ion-card-header>\n          <ion-card-content (click)="itemdetailPage()">\n              <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n              <div class="rateing">\n                  <div class="card-btn">\n                      <p class="" float-left>\n                          <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                          <span class="text-light bold"> (125)</span>\n                      </p>\n                      <div style="display: flex;" float-right>\n                          <div class="price text-light mr-5">\n                              <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                          </div>\n                          <div class="price text-sky">\n                              <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>  -->\n\n  <ion-grid>\n    <ion-row  >   \n      <ion-col *ngFor="let products of productsList">\n        <ion-card >\n            <ion-card-header >\n                <div class="img-box" (click)="itemdetailPage(products.id,products.title,products.url,products.status,products.date,products.modified)">\n                    <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n                </div>\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n            </ion-card-header>\n            <ion-card-content (click)="itemdetailPage(products.id,products.title)">\n              <ion-item >\n                <ion-label>{{products.title}}</ion-label>\n              </ion-item>  \n                <!-- <h5>Unique For Men Black Formal Slim Fit Shirt</h5> -->\n  \n                <h5>{{products.status}}</h5>\n                <div class="rateing">\n                    <div class="card-btn">\n                        <p class="" float-left>\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                            <span class="text-light bold"> (125)</span>\n                        </p>\n                        <div style="display: flex;" float-right>\n                            <div class="price text-light mr-5">\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                            </div>\n                            <div class="price text-sky">\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ion-card-content>\n        </ion-card>\n      </ion-col>\n       <!-- <ion-col>\n        <ion-card >\n            <ion-card-header >\n                <div class="img-box" (click)="itemdetailPage()">\n                    <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n                </div>\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n            </ion-card-header>\n            <ion-card-content (click)="itemdetailPage()">\n              <ion-item >\n                <ion-label>{{products.title}}</ion-label>\n              </ion-item>  \n  \n                <h5>{{products.status}}</h5>\n                <div class="rateing">\n                    <div class="card-btn">\n                        <p class="" float-left>\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                            <span class="text-light bold"> (125)</span>\n                        </p>\n                        <div style="display: flex;" float-right>\n                            <div class="price text-light mr-5">\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                            </div>\n                            <div class="price text-sky">\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ion-card-content>\n        </ion-card>\n      </ion-col>  -->\n    </ion-row> \n\n\n  </ion-grid>\n\n \n \n  \n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\categoryupdated\categoryupdated.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */]])
], CategoryupdatedPage);

//# sourceMappingURL=categoryupdated.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






/**
 * Generated class for the PaymentpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let PaymentpagePage = class PaymentpagePage {
    constructor(navController, navParams, platform, alertController, toastController, loadingController, httpClient, navCtrl, app) {
        this.navController = navController;
        this.navParams = navParams;
        this.platform = platform;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
        this.app = app;
        this.emailAddress = '';
        this.password = '';
        this.emailPattern = "[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}";
        this.emailValidatorRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.loginModel = {
            username: '',
            password: '',
        };
    }
    loginBtnClick() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Login Button clicked.');
            // Empty Email Validation
            if (this.emailAddress === '') {
                this.showToastOnEmptyEmail();
            }
            // Empty Password Validation
            else if (this.password === '') {
                this.showToastOnEmptyPassword();
            }
            // Invalid Email Validation
            else if (!this.emailValidatorRegex.test(this.emailAddress)) {
                this.showToastOnInvalidEmailAddress();
            }
            // else if ((await Network.getStatus()).connectionType === 'none') {
            //   this.showNetworkAlert();
            //   console.log('Network status not available', this.networkStatus);
            // } 
            // Credentials filled 
            else {
                this.showLoadingControllerLaunch();
                console.log('Value saved locally.');
            }
        });
    }
    registerBtnClick() {
        this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_0__register_register__["a" /* RegisterPage */]);
    }
    ngOnInit() {
        this.showLoadingControllerLaunch1();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'DemoPage') {
                if (nav.canGoBack()) {
                }
                else {
                    const alert = this.alertController.create({
                        title: 'Exit App',
                        message: 'Are you sure?',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => {
                                    this.navCtrl.setRoot('DemoPage');
                                }
                            }, {
                                text: 'Yes',
                                handler: () => {
                                    // this.logout();
                                    this.platform.exitApp();
                                }
                            }]
                    });
                    alert.present();
                }
            }
        });
    }
    callLoginApi() {
        console.log('callLoginApi api called');
        const postParams = { email: this.emailAddress, password: this.password };
        this.httpClient.post('http://busybanda.com/sterling-tools/api/login', JSON.stringify(postParams)).subscribe((response) => __awaiter(this, void 0, void 0, function* () {
            this.obj = JSON.stringify(response);
            const parsedData = JSON.parse(this.obj);
            status = parsedData.Status;
            this.strResponseCode = parsedData.RespCode;
            this.strUserData = parsedData.userdata.user_email;
            this.strId = parsedData.userdata.id;
            // localStorage.setItem('Email', this.emailAddress);
            // localStorage.setItem('Password', this.password);   
            localStorage.setItem('isSigned', 'true');
            // localStorage.setItem('alljson', this.obj);
            localStorage.setItem('Userid value', this.strId);
            this.userDataValue = response.status;
            // localStorage.setItem('alljsonvalue', this.userDataValue);
            console.log('status value' + this.userDataValue);
            console.log('RespCode value' + this.strResponseCode);
            console.log('user_email value' + this.strUserData);
            console.log('id value' + this.strId);
            // alert(response.status);  
            // alert(response.Message);  
            if (this.obj.includes('Login Successfully')) {
                // this.showLoadingControllerSuccess();
                console.log('Json Response success ' + this.obj);
                console.log('Json Response status ' + this.obj.status);
                this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                // this.navController.setRoot(CategoryupdatedPage);
            }
            else {
                this.showLoadingControllerFailure();
                console.log('Json Response Failure ' + this.obj);
            }
        }));
    }
    showToastOnEmptyEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Email ',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Password ',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnInvalidEmailAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Invalid email address',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showLoadingControllerFailure() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Invalid username or password',
                duration: 1200,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showLoadingControllerSuccess() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.loadingController.create({
                content: 'Logged in successfully',
                duration: 300,
            });
            toast.present();
        });
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: 'Please wait!'
        });
        loading.present();
        this.callLoginApi();
        setTimeout(() => {
            loading.dismiss();
        }, 1000);
    }
    showLoadingControllerLaunch1() {
        let loading = this.loadingController.create({
            content: 'Please wait!'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 700);
    }
    exitAppAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert = yield this.alertController.create({
                title: 'Exit Application!',
                message: 'Are you sure to exit from application ?',
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
        });
    }
    showToastBackPress() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.loadingController.create({
                content: 'Back Press successfully',
                duration: 5300,
            });
            toast.present();
        });
    }
};
PaymentpagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-paymentpage',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\paymentpage\paymentpage.html"*/'<ion-content class="login-content" padding >\n  <ion-row class="logo-row">\n      <ion-col>\n        <img src="assets/imgs/sterlinglogo.png"/>\n        <br/>\n        <h4>Sterling Tools</h4>\n      </ion-col>\n    </ion-row>\n  \n    <div >\n      <ion-list >\n          <div class="login-box">\n            \n                <ion-row>\n                  <ion-col>\n                    <ion-list inset>\n                      \n                     \n                      <div class="input-container">\n                        <ion-icon name="mail"  item-left ></ion-icon>\n                        <input class="input-field" placeholder="Username" type="name" [(ngModel)]="emailAddress" >\n                      </div>\n\n                      <div class="input-container">\n                        <ion-icon name="lock"  item-left ></ion-icon>\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n                      </div>\n                      <div class="input-container">\n                        <ion-icon name="lock"  item-left ></ion-icon>\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n                      </div>\n                      <div class="input-container">\n                        <ion-icon name="lock"  item-left ></ion-icon>\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n                      </div>\n                      <div class="input-container">\n                        <ion-icon name="lock"  item-left ></ion-icon>\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n                      </div>\n                      <div class="input-container">\n                        <ion-icon name="lock"  item-left ></ion-icon>\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n                      </div>\n                      <div class="input-container">\n                        <ion-icon name="lock"  item-left ></ion-icon>\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n                      </div>\n                      <div class="input-container">\n                        <ion-icon name="lock"  item-left ></ion-icon>\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n                      </div>\n                      <div class="input-container">\n                        <ion-icon name="lock"  item-left ></ion-icon>\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n                      </div>\n                      <div class="input-container">\n                        <ion-icon name="lock"  item-left ></ion-icon>\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n                      </div>\n                      \n                    </ion-list>\n                  </ion-col>\n                </ion-row>\n                \n                <ion-row>  \n                  <ion-col class="signup-col">\n                    <button ion-button class="submit-btn" full type="submit" style="text-transform: none;" class="bg-thime btn-round btn-text" (click)="loginBtnClick()">Checkout</button>\n\n                  </ion-col>\n                </ion-row>\n                \n             \n            </div>\n      </ion-list>\n    \n      \n    </div>\n</ion-content>'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\paymentpage\paymentpage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */]])
], PaymentpagePage);

//# sourceMappingURL=paymentpage.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCategoryDetailGridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProductCategoryDetailGridPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ProductCategoryDetailGridPage = class ProductCategoryDetailGridPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.strProductCategoryGridId = navParams.get("catId");
        this.strProductCategoryGridURL = navParams.get("url");
        console.log('Received Id ' + this.strProductCategoryGridId);
        console.log('Received URL ' + this.strProductCategoryGridURL);
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ProductCategoryDetailGridPage');
    }
};
ProductCategoryDetailGridPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-category-detail-grid',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\product-category-detail-grid\product-category-detail-grid.html"*/'\n\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle style="display: block !important">\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n  </button>\n\n    <!-- <ion-icon name="md-arrow-back"></ion-icon>\n    <ion-icon name="md-search" class="text-light icon"></ion-icon> -->\n\n\n      <ion-title>Categories Details\n          <span float-right> \n            <ion-icon class="icon" ><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n            <ion-icon class="icon" ><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n          </span>\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n\n  <ion-refresher slot="fixed" >\n    <ion-refresher-content\n      pullingIcon="chevron-down-circle-outline"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing Product Categories Details."\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngIf="strData;else other_content">\n\n    <ion-card-header >\n      <ion-item lines="none">\n        <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{strData}}</ion-label>\n      </ion-item> \n  \n          \n    </ion-card-header>\n  </ion-card>\n\n  \n\n\n  <ng-template #other_content>\n\n    <div class="select-section shadow-bottom">\n      <ion-row>\n          <ion-col col-12 >\n              <div class="size">\n                <ion-item>\n                  <ion-label>Sort</ion-label>\n                  <ion-select placeholder="Please select" value="sortpopular" okText="Ok" cancelText="Cancel">\n                    <ion-option value="sortpopular" style="max-width: 100%;width: 100%;" (ionSelect)="sortPopular()">Sort By popularity</ion-option>\n                    <ion-option value="sortaveragerating">Sort By average rating</ion-option>\n                    <ion-option value="sortlatest">Sort By latest</ion-option>\n                    <ion-option value="sortpricelowhigh">Sort By price: low to high</ion-option>\n                    <ion-option value="sortpricehighlow">Sort By price: high to low</ion-option>\n                  </ion-select>\n                </ion-item>\n              </div>\n          </ion-col>\n       \n      </ion-row>\n  </div>\n  \n    \n    <ion-grid class="product-grid">\n      <ion-row class="rowgrid" text-center>\n        <ion-col col-6\n          class="columngrid"\n          *ngFor="let productCategory of productCategoryInformation"\n         >\n          <ion-card>\n            <ion-card-header style="justify-content: left">\n              <div\n                class="img-box"\n              >\n                <!-- <img src="assets/imgs/productimage.jpg" style="width: 130px;float: left;" /> -->\n                <img  [src]="productCategory.image"  style="width:200px;height:80px ;">\n\n              </div>\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n            </ion-card-header>\n            <ion-card-content>\n          \n             \n\n\n              <!-- <div >\n                <h5 style="font-size: 10px;text-align: -webkit-center;"> <span class="priceicon">Name : </span> {{productCategory.name}}</h5> \n              </div>\n              <div >\n                <h5 style="font-size: 10px;text-align: -webkit-center;margin-top: 8px;"> <span class="priceicon">Price : </span> {{productCategory.regular_price}} $</h5> \n              </div>\n\n              <div class="rating" style="text-align: -webkit-center;margin-top: 8px;">\n                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\n              </div>\n  \n              <div class="rateing">\n                <div class="card-btn">\n                </div>\n              </div> -->\n\n              <ion-item >\n                <h5 style="font-size: 11px;text-align: -webkit-center;"> {{productCategory.name}}</h5> \n              </ion-item>\n  \n              <div>\n                <div *ngIf="productCategory.regular_price">     <!--If "product" exists-->\n                  <h5 style="font-size: 12px;text-align: center;"  > <span class="priceicon">Price : </span> {{productCategory.regular_price}}  <span class="priceicon">$</span></h5>  \n                  <div class="rating" style="text-align: -webkit-center;margin-top: 8px;">\n                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\n                  </div>\n      \n                  <!-- <div class="rateing">\n                    <div class="card-btn">\n                      <p class="" float-left>\n                        <button\n                          ion-button\n                          full\n                          class="bg-thime btn-round btn-text"\n                          style="margin-top: 3px; width: 150px;text-align: center;"\n                        >\n                          Add To Cart\n                        </button>\n                      </p>\n                    </div>\n                  </div> -->\n                </div>\n            \n                <div *ngIf="!productCategory.regular_price">     <!--If "product" not exists-->\n                  <!-- <h5 style="font-size: 12px;text-align: center"  >  <span class="priceicon">$</span>Price Not Available</h5>   -->\n                  <h5 style="font-size: 12px;text-align: center"> Price Not Available</h5>  \n                  <div class="rating" style="text-align: -webkit-center;margin-top: 8px;">\n                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\n                  </div>\n                  <!-- <div class="rateing">\n                    <div class="card-btn">\n                      <p class="" float-left>\n                        <button\n                          ion-button\n                          full\n                          class="bg-thime btn-round btn-text"\n                          style="margin-top: 3px; width: 150px;text-align: center;"\n                        >\n                          Read More\n                        </button>\n                      </p>\n                    </div>\n                  </div> -->\n                </div>\n            </div>\n\n\n            \n\n\n\n\n\n\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    \n  </ng-template>\n\n\n\n\n\n\n\n\n\n\n  <!-- <ng-template #other_content1>\n\n    <ion-card *ngFor="let productCategory of productCategoryInformation">\n\n      <ion-card-header >\n        <ion-item lines="none">\n          <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{productCategory.name}}</ion-label>\n        </ion-item> \n    \n            \n      </ion-card-header>\n    </ion-card>\n\n  </ng-template> -->\n\n\n \n\n</ion-content>\n  '/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\product-category-detail-grid\product-category-detail-grid.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ProductCategoryDetailGridPage);

//# sourceMappingURL=product-category-detail-grid.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let Test1Page = class Test1Page {
    constructor(navCtrl, navParams, apiProvider, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.httpClient = httpClient;
        this.viewCartList = [];
        this.productsListInformation = [];
        this.productsListInformationTemp = [];
        this.strProductNameCart = '';
        this.strProductNameCart1 = '';
        this.dynamicId = '';
        this.strPName = '';
        this.strPName1 = '';
    }
    ngOnInit() {
        this.viewCartApi();
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getTest1();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    const resultado = data;
                    this.viewCartList = resultado;
                    console.log(this.viewCartList);
                    for (let i = 0; i < this.viewCartList.length; i++) {
                        console.log(this.viewCartList.length);
                        console.log(this.viewCartList[i].product_id);
                        this.dynamicId = this.viewCartList[i].product_id;
                        this.getProductsInCart(this.dynamicId);
                    }
                }));
            }
            catch (error) {
            }
        });
    }
    getProductsInCart(dynamicId) {
        this.httpClient.get("http://busybanda.com/sterling-tools/api/get_products_by_id?" + "id=" + dynamicId).subscribe((jsonResponse) => {
            // console.log('Dynamic Product Id ' + dynamicId);
            this.productsListInformation = jsonResponse['result'];
            this.objProductsViewCart = JSON.stringify(jsonResponse);
            var list = new Array();
            this.productsListInformation.forEach((number, index, array) => {
                // console.log(array);
                for (var key in array) {
                    var value = array[key];
                    console.log('***' + key, value);
                }
            });
            //  Object.keys(this.productsListInformation).forEach(key => {
            //   //console.log(key);        // the name of the current key.
            //   //console.log('Hey  ' +this.productsListInformation[key].name); // the value of the current key.
            //   // this.strProductNameCart = this.productsListInformation[key].name;
            // });
            // for (let [key, value] of Object.entries(this.productsListInformation)) {
            // }
            //   var p = {
            //     "p1": "value1",
            //     "p2": "value2",
            //     "p3": "value3"
            // };
            //   for (var key of Object.keys(p)) {
            //     console.log(key + " : " + p[key])
            //  }
            const productListData = JSON.parse(JSON.stringify(this.productsListInformation));
            if (productListData === null) {
                console.log('Product details Not Found in Cart');
            }
            else {
                // productListData.forEach(function(productListData){
                //   console.log(task);
                // });
                productListData.forEach((attribute, index, array) => {
                    if (attribute.name && attribute.name.length) {
                        // this.strProductNameCart = this.strProductNameCart +"," + attribute.name;
                        // this.strPName = this.strProductNameCart;
                        console.log("!!!!!!!! " + attribute.name);
                        console.log('Product details Found in Cart');
                        this.productsListInformationTemp = attribute.name;
                        this.strPName1 = this.productsListInformationTemp;
                        this.productsListInformation.push(this.productsListInformationTemp);
                    }
                    else {
                    }
                });
            }
            console.log('strPName ' + this.strPName);
        });
        // for (let i =0;i<this.productsListInformation.length;i++){
        //   console.log(this.productsListInformation[i].name);
        //   //  this.strProductNameCart = this.productsListInformation[i].name;
        //    if (this.productsListInformation && this.productsListInformation.length) {    
        //     // not empty  
        //     // alert('not empty')
        //     this.strProductNameCart == 'Test';
        //     alert('not empty' + this.strProductNameCart);
        //  } else { 
        //     // empty 
        //     alert('empty')
        //  } 
        //  }
        //  console.log(JSON.stringify(this.productsListInformation));
        // var keys = Object.keys(this.productsListInformation);
        //   for (var i = 0; i < keys.length; i++) {
        //     var value = this.productsListInformation[name];
        //  }
        //  this.productsListInformation.forEach((attribute, index, array) => {
        //   if (attribute.name &&attribute.name.length  
        //     ) {
        //        console.log("Success..." + attribute.name + '---' + this.productsListInformation.length);
        //        this.strProductNameCart = attribute.name[0];
        //        // this.strProductNameCart = attribute.name[1];
        //     } else {
        //       console.log("Success!!!!!!!!");
        //     }
        // }); 
        // for (let i =0;i<this.productsListInformation.length;i++){
        //   alert( 'Name ' + this.productsListInformation[i].name );
        //   this.strProductNameCart = this.productsListInformation[i].name;
        // }
        //   for(var i=0; i < this.productsListInformation.length; i++){
        //     // console.log(i);
        //    //  console.log(this.productsListInformation[i]);
        //     this.strProductNameCart1 += this.productsListInformation[i].name;
        // }   
        //     var newObj = [ { id : "1", name: "one" }, { id : "2", name: "two" }, { id : "3", name: "three" } ]
        // for(var i1=0; i1<newObj.length; i1++){
        //   console.log(newObj[i1].id + ': ' + newObj[i1].name);
        //   this.strProductNameCart = newObj[i1].name;
        // }
    }
};
Test1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-test1',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\test1\test1.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>test1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n \n  <ion-card class="card" *ngFor="let viewCart of viewCartList" style="margin-top: 10%;">\n    <ion-card-header>\n      <ion-item lines="none" >\n        <ion-label style="color: black;font-size: 8px;">{{viewCart.product_id }}</ion-label>\n        <ion-label style="color: black;font-size: 8px;">{{viewCart.quantity }}</ion-label>\n        <ion-label style="color: black;font-size: 8px;">{{strPName }}</ion-label>\n      </ion-item> \n    </ion-card-header>\n  </ion-card>\n\n  <ion-card class="card"  style="margin-top: 10%;"   >\n    <ion-card-header>  \n      <ion-item lines="none"  >\n        <!-- <ion-label style="color: red;font-size: 7px;" ngDefaultControl [(ngModel)] = "strProductNameCart"></ion-label> -->\n        <ion-label style="color: red;font-size: 7px;">{{strProductNameCart}}</ion-label>\n\n      </ion-item>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card class="card"  style="margin-top: 10%;"  *ngFor="let product of productsListInformationTemp"  >\n    <ion-card-header>  \n      <ion-item lines="none"  >\n        <!-- <ion-label style="color: red;font-size: 7px;" ngDefaultControl [(ngModel)] = "strProductNameCart"></ion-label> -->\n        <ion-label style="color: blue;font-size: 7px;">{{strPName1}}</ion-label>\n\n      </ion-item>\n    </ion-card-header>\n  </ion-card>\n\n</ion-content>\n\n '/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\test1\test1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], Test1Page);

//# sourceMappingURL=test1.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingproductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TestingproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let TestingproductsPage = class TestingproductsPage {
    constructor(navCtrl, navParams, cartService, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.productCount = 1;
        if (this.navParams.get("product")) {
            window.localStorage.setItem('selectedProduct', JSON.stringify(this.navParams.get("product")));
        }
    }
    ionViewDidEnter() {
        this.getSingleProduct();
    }
    getSingleProduct() {
        if (window.localStorage.getItem('selectedProduct') != 'undefined') {
            this.selectProduct = JSON.parse(window.localStorage.getItem('selectedProduct'));
            console.log('Ionic Storage ' + this.selectProduct);
        }
    }
    ionViewDidLoad() {
        this.selectProduct = this.navParams.get("product");
        // this.cartService.getCartItems().then((val) => {
        //   this.cartItems = val;
        // })
    }
    decreaseProductCount() {
        if (this.productCount > 1) {
            this.productCount--;
        }
    }
    incrementProductCount() {
        this.storage.set('stuff', 'My stuff')
            .then(() => this.storage.get('stuff'))
            .then((stuff) => console.log(stuff));
        localStorage.setItem('selectedProduct', JSON.stringify(this.navParams.get("product")));
        this.productCount++;
    }
    addToCart(product) {
        var productPrice = this.productCount * parseInt(product.price);
        let cartProduct = {
            product_id: product.id,
            name: product.name,
            thumb: product.thumb,
            count: this.productCount,
            totalPrice: productPrice
        };
        // this.cartService.addToCart(cartProduct).then((val) => {
        //   this.presentToast(cartProduct.name);
        // });
    }
    presentToast(name) {
        let toast = this.toastCtrl.create({
            message: `${name} has been added to cart`,
            showCloseButton: true,
            closeButtonText: 'View Cart'
        });
        toast.onDidDismiss(() => {
            this.navCtrl.push('CartPage');
        });
        toast.present();
    }
};
TestingproductsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-testingproducts',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\testingproducts\testingproducts.html"*/'<ion-header class="bg-thime">\n  <ion-navbar>\n      <ion-title>Men\'s Shirts\n          <span float-right>\n          <ion-icon class="icon" ><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n            <ion-icon class="icon" ><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n          </span>\n      </ion-title>\n  </ion-navbar>\n \n</ion-header>\n\n\n<ion-content class="bg-light">\n\n\n\n    \n\n  <div class="card product-detail">\n    <ion-slides pager="true" slidesperview="1">\n          <ion-slide>\n            <img alt="" src="{{selectProduct?.thumb}}">\n          </ion-slide>\n          <ion-slide ngfor="let prodImg of selectProduct?.images">\n            <img alt="" src="{{prodImg}}">\n          </ion-slide>\n        </ion-slides>\n     \n        <ion-row class="action-btn-wrap" no-padding="">\n          <ion-col text-right="">\n        <button class="wish-list-btn card" click="" color="light" icon-only="" ion-button="" item="" togglewishlist="">\n              <ion-icon color="gray" name="md-heart"></ion-icon>\n            </button>\n     \n            <button class="wish-list-btn card" click="" color="light" icon-only="" ion-button="" item="" togglewishlist="">\n              <ion-icon color="gray" name="share"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n         \n     \n    <div class="border-bottom" margin-top="" padding="" text-center="">\n    <h2><span>\n    {{selectProduct?.name}}</span></h2>\n    {{ selectProduct?.short_description }}\n     \n    <h3 class="price" color="danger" margin-top="">\n    {{ selectProduct?.price | currency:\'USD\':true\n              }}</h3>\n    </div>\n    <ion-row padding-="">\n            <ion-col>\n              </ion-col></ion-row>\n     \n    <h4>\n                  Quantity\n              </h4>\n    <ion-col class="qty" text-right="">\n                <button    (click)="decreaseProductCount()" color="light" decreaseproductcount="" ion-button="" small="">\n                  -\n                </button>\n                <button clear="" color="dark" ion-button="" small="">\n                  {{productCount}}\n                </button>\n                <button (click)="incrementProductCount()" color="light" incrementproductcount="" ion-button="" small="">\n                  +\n                </button>\n              </ion-col>\n           \n      </div>\n\n      <ion-footer class="single-footer">\n     \n        <ion-grid>\n          <ion-row>\n             <ion-col addtocart="" class="addCart" click="" selectproduct="">\n               <button color="secondary" full="" ion-button="">\n                 ADD TO CART\n               </button>          \n       \n            </ion-col>\n          </ion-row>\n        </ion-grid>\n         \n      </ion-footer>\n    \n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\testingproducts\testingproducts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], TestingproductsPage);

//# sourceMappingURL=testingproducts.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistupdatedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__capacitor_core__ = __webpack_require__(240);
/**
 * Generated class for the WishlistupdatedPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;








let WishlistupdatedPage = class WishlistupdatedPage {
    constructor(navCtrl, navParams, toastController, alertController, loadingController, httpClient, platform, app, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.httpClient = httpClient;
        this.platform = platform;
        this.app = app;
        this.apiProvider = apiProvider;
        this.productsLocalCart = [];
        this.letclickCount = 0;
        this.viewCartList = [];
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad WishlistupdatedPage');
    }
    ngOnInit() {
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'WishlistupdatedPage') {
                if (nav.canGoBack()) {
                    console.log('Tushar');
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    console.log('Tushar11');
                }
            }
        });
        this.viewCartApi();
        if (localStorage.getItem('products')) {
            this.productsLocalCart = JSON.parse(localStorage.getItem('products')); // get product list 
            console.log('****** filled' + localStorage.getItem('products'));
            this.strData = 'Wishlist is Empty.Please add items!';
        }
        else {
            console.log('****** empty' + localStorage.getItem('products'));
            // this.strData = 'Wishlist is Empty.Please add items!';
            this.showToastOnEmptyCart();
        }
        this.obj = JSON.stringify(this.productsLocalCart);
        for (let i = 0; i < this.productsLocalCart.length; i++) {
            if (this.productsLocalCart[i].ProductQuantity && this.productsLocalCart[i].ProductRegularPrice && this.productsLocalCart[i].ProductDescription && this.productsLocalCart[i].ProductId) {
                // this.strProductQuantity;
                this.strProductQuantity = this.productsLocalCart[i].ProductQuantity;
                this.strProductRegularPrice = this.productsLocalCart[i].ProductRegularPrice;
                this.strProductDescription = this.productsLocalCart[i].ProductDescription;
                this.strProductName = this.productsLocalCart[i].ProductName;
                this.strProductRegularPriceRevised1 = this.strProductRegularPriceRevised;
                // this.strproductpriceTushar = 'Product Price: ' + this.strProductRegularPrice * this.strProductQuantity;
                console.log('All Product Price ' + this.productsLocalCart[i].ProductRegularPrice);
                console.log('All Product Quantity ' + this.productsLocalCart[i].ProductQuantity);
                this.productTotalPrice = this.productsLocalCart[i].ProductRegularPrice;
                var sum = 0, nums = ['100', '300', '400', '60', '40'];
                for (i = 0; i < nums.length; i++) {
                    sum += +nums[i];
                    console.log('All  TotalPrice ' + sum);
                }
                this.productsLocalCart = JSON.parse(localStorage.getItem('products'));
                // console.log('All  TotalPrice--- ' +  localStorage.getItem('products'));
                //tempJSON.name is SomeName
            }
            else {
                console.log('Product quantity not available');
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
    addToCartLocal(id, name, image, description, regular_price) {
        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products')); // get product list 
        }
        console.log("Sent productsList id " + id);
        console.log("Sent productsList name " + name);
        products.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price });
        localStorage.setItem('products', JSON.stringify(products));
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            console.log('Code for localStorage/sessionStorage.');
        }
        else {
            // Sorry! No Web Storage support..
            console.log('Sorry! No Web Storage support..');
        }
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.productsLocalCart = JSON.parse(localStorage.getItem('products'));
        setTimeout(() => {
            console.log('Async operation has ended');
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
    showCartRemovalAlert2(index, item, name) {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert1 = this.alertController.create({
                title: 'Remove Item! ' + name,
                message: 'Do you want to remove item from wishlist locally!',
                enableBackdropDismiss: false,
                buttons: [
                    {
                        cssClass: 'my-custom-class',
                        text: 'Ok',
                        handler: (ok) => {
                            console.log('Confirm Ok');
                            console.log('Remove Product: ' + item);
                            for (let i = 0; i < this.productsLocalCart.length; i++) {
                                if (this.productsLocalCart[i] == item) {
                                    this.productsLocalCart.splice(i, 1);
                                    localStorage.setItem('products', JSON.stringify(this.productsLocalCart));
                                }
                            }
                        },
                    },
                    {
                        text: 'Cancel',
                        handler: data => {
                            let navTransition = alert1.dismiss();
                            //  navTransition.then(() => {
                            //    this.navCtrl.pop();
                            //  });
                            return false;
                        }
                    },
                ],
            });
            alert1.present();
        });
    }
    removeProduct() {
        this.showCartWishlistRemovalAlert(this.strProductAdded);
    }
    removeProduct1() {
        console.log(this.strProductAdded);
    }
    clearWishlist() {
        this.showCartWishlistRemovalAlert1();
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getTest1();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'Wishlist empty!';
                        // console.log('Length of cart ' + this.viewCartList.length);
                        if (this.viewCartList.length >= 1) {
                            console.log('Cart Filled ');
                            this.countProducts = this.viewCartList.length;
                            this.buttonIcon = "cart";
                        }
                        else {
                            console.log('Cart Empty ');
                            //  this.buttonIcon = "cart";
                            this.countProducts = 'Empty';
                        }
                        // for(var j=0; j < this.viewCartList.length; j++){
                        //   console.log('Price ' + this.viewCartList[j].price);
                        //   console.log('Product Id ' + this.viewCartList[j].product_id);
                        //   console.log('Quantity' + this.viewCartList[j].quantity);
                        //  }
                        // const resultado1 = data;
                        // console.log(resultado1);
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
    }
    showToastOnEmptyCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'WishList is empty.Please add items!',
                duration: 7000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnProductsQuantityCartLocally() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Product Quantity not available from cart',
                duration: 4000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showLoadingControllerLaunch() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_6__capacitor_core__["a" /* Plugins */];
            this.networkListener = Network.addListener('networkStatusChange', (status) => {
                console.log('Network status HomePage here', status);
                this.networkStatus = status;
            });
            if ((yield Network.getStatus()).connectionType === 'none') {
                this.showNetworkAlert();
                console.log('Network status not available', this.networkStatus);
            }
            else {
                this.networkStatus = yield Network.getStatus();
                // this.showAlert();
                console.log('Network status available', this.networkStatus);
                // this.router.navigate(['/transactions']);
                this.presentLoadingDefault();
                this.showToastOnPageLoad();
            }
        });
    }
    presentLoadingDefault() {
        let loading = this.loadingController.create({
            content: 'Please wait Viewing Wishlist...'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 1500);
    }
    showNetworkAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert = yield this.alertController.create({
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
        });
    }
    showToastOnPageLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: localStorage.getItem('Product Title'),
                duration: 6000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnAddProductSingle(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
            duration: 6000,
            position: "bottom",
        });
        toast.present();
    }
    showCartWishlistRemovalAlert(item) {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert1 = this.alertController.create({
                title: 'Remove Item!',
                message: 'Do you want to remove item from wishlist! ',
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        handler: (ok) => {
                            console.log('Confirm Ok');
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
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {
                            console.log('Confirm Cancel');
                            alert1.dismiss();
                            // resolve('cancel');
                        },
                    },
                ],
            });
            alert1.present();
        });
    }
    showCartWishlistRemovalAlert1() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert1 = this.alertController.create({
                title: 'Clear Wishlist !',
                message: 'Do you want to clear wishlist locally? ',
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        handler: (ok) => {
                            console.log('Confirm Ok');
                            this.showToastOnDeletingWishlist1();
                            this.productsLocalCart = [];
                            localStorage.removeItem('products');
                        },
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {
                            console.log('Confirm Cancel');
                            alert1.dismiss();
                            // resolve('cancel');
                        },
                    },
                ],
            });
            alert1.present();
        });
    }
    showToastOnDeletingWishlist() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Product Deleted from  wishlist ' + this.strProductAdded,
                duration: 1500,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnDeletingWishlist1() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Wishlist Cleared',
                duration: 1500,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
WishlistupdatedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-wishlistupdated',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\wishlistupdated\wishlistupdated.html"*/'\n<ion-header class="bg-thime">\n  <ion-navbar>\n  <button ion-button menuToggle style="display: block !important">\n    <ion-icon class="menu-icon"\n      ><img src="assets/imgs/ic_menu.png"\n    /></ion-icon>\n  </button>\n    <ion-title style="text-align: left">My Wishlist\n      <span float-right>\n        <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n\n        <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon>\n        <!-- <ion-img class="map" [src]="picToView" (click)="changeView()"></ion-img> -->\n\n      </span>\n    </ion-title>\n  </ion-navbar>\n  <div class="custom-id">\n    <ion-searchbar placeholder="Search any part here" ></ion-searchbar>\n  </div>\n \n</ion-header>\n\n<ion-content class="bg-light">\n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="chevron-down-circle-outline"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing Cart."\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-item *ngIf=" !productsLocalCart.length;else other_content">\n    <h5 style="font-size: 12px;">{{strData}}</h5> \n  </ion-item>\n\n \n\n\n  <ng-template #other_content>\n\n    <!-- <div class="reating-review bg-white" padding style="margin-top: 5px" > \n      <div class="reating">\n        <div class="select-section shadow-bottom" style="text-align: center"\n        >\n          <ion-row\n            class="ion-justify-content-center"\n            style="justify-content: center"\n           >\n           \n  \n            <button\n              ion-button\n              full\n              class="bg-thime btn-round btn-text"\n              style="max-width: 390px"\n              (click)="clearWishlist()">\n              Clear Wishlist\n            </button>\n          </ion-row>\n        </div>\n      </div>\n    </div> -->\n    \n\n    <div class="pincod bg-white shadow-bottom cart-box"  style=" padding: 16px 16px 16px 16px;"\n    >\n      <ion-row style="margin-top: 8px" *ngFor="let productsLocal of productsLocalCart;let i = index" >\n        <ion-col col-4>\n          <ion-list>\n            <ion-item>\n              <img  [src]="productsLocal.ProductImage"  style="width:200px;height:75px ;">\n            </ion-item>\n          </ion-list>\n        </ion-col>\n        <ion-col col-8>\n\n       \n          \n          <div class="row"  >\n            <div class="block">Name: {{productsLocal.ProductName}}</div>\n            <span class="icon" text-right>\n              <ion-icon\n                name="md-close"\n                style="margin-left: 10%;margin-top: 5px;"\n                \n                \n                (click)="removeProductLocally(i,productsLocal,productsLocal.ProductName)">\n              </ion-icon>\n            </span>\n            \n            \n          </div>\n  \n        \n\n        \n          <div style="margin-top: 6%">\n            <label > Price:  {{productsLocal.ProductRegularPrice}} <span class="priceicon">$</span></label>\n          </div>\n\n          <div style="margin-top: 6%">\n            <label style="color: black;">Description:  {{productsLocal.ProductDescription}} </label>\n          </div>\n\n          <!-- <div style="margin-top: 10%">\n            <button\n          ion-button\n          full\n          class="bg-thime btn-round btn-text"\n          style="margin-top: 3px; width: 150px;text-align: center;"\n         \n\n          (click)="addToCartLocal(products.id,products.name,products.image,products.description,products.regular_price)"\n\n        >\n          Add To Cart\n        </button>\n          </div> -->\n\n          <!-- (click)="addToCart(products.ProductId)" -->\n        \n        \n        </ion-col>\n      </ion-row>\n    \n    </div>\n  \n    <!-- <div class="reating-review bg-white" padding style="margin-bottom: 15px">\n      <div class="reating">\n        <div class="select-section shadow-bottom" style="text-align: center">\n          <ion-row\n            class="ion-justify-content-center"\n            style="justify-content: center"\n          >\n            <button\n              ion-button\n              full\n              class="bg-thime btn-round btn-text"\n              style="max-width: 390px"\n            >\n              Update Shopping Cart\n            </button>\n  \n            <button\n              ion-button\n              full\n              class="bg-thime btn-round btn-text"\n              style="max-width: 390px"\n            >\n              Clear Shopping Cart\n            </button>\n          </ion-row>\n        </div>\n      </div>\n      <ion-item>\n        <ion-label style="float: left; font-size: 14px">Subtotal</ion-label>\n        <ion-label style="float: right; color: red"> Rs 251.00</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label style="float: left; font-size: 14px"\n          >Discount (Flat 10% Off)</ion-label\n        >\n        <ion-label style="float: right; color: red">-Rs25.10</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label style="float: left; font-size: 14px">Grand Total</ion-label>\n        <ion-label style="float: right; color: red">Rs 225.90</ion-label>\n      </ion-item>\n      <ion-item>\n        <button\n          ion-button\n          full\n          class="bg-thime btn-round btn-text"\n          style="max-width: 390px; float: none; height: 40px"\n         >\n          Proceed to Checkout\n        </button>\n      </ion-item>\n    </div> -->\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\wishlistupdated\wishlistupdated.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ToastController */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */]) === "function" ? _j : Object])
], WishlistupdatedPage);

//# sourceMappingURL=wishlistupdated.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VieworderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vieworderdetails_vieworderdetails__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VieworderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let VieworderPage = class VieworderPage {
    constructor(navCtrl, navParams, apiProvider, modalCtrl, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.viewOrdersList = [];
        this.items = [];
        // this.showLoadingOrdersFetching();
        this.viewOrdersApi();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad VieworderPage');
        this.viewOrdersApi();
    }
    cartPage() {
        // let modal = this.modalCtrl.create(CartPage);
        // modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    searchPage() {
        // let modal = this.modalCtrl.create(SearchPage);
        // modal.present();
        // this.navCtrl.setRoot(SearchPage);
    }
    ngOnInit() {
        console.log('ngOnInit VieworderPage');
        this.viewOrdersApi();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.viewOrdersApi();
        setTimeout(() => {
            console.log('Async operation has ended');
            //  event.target.complete();
            event.complete();
            // window.location.reload();
            // window.location.reload();
            // location.reload();
        }, 500);
    }
    itemdetailPage(ID, post_title, post_status, comment_status, ping_status, post_type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__vieworderdetails_vieworderdetails__["a" /* VieworderdetailsPage */], {
            ID: ID,
            post_title: post_title,
            post_status: post_status,
            comment_status: comment_status,
            ping_status: ping_status,
            post_type: post_type
        });
        console.log('Sent view orders List id ' + ID);
        console.log('Sent view orders List orderTitle ' + post_title);
        console.log('Sent view orders List post_status ' + post_status);
        console.log('Sent view orders List comment_status ' + comment_status);
        console.log('Sent view orders List ping_status ' + ping_status);
        console.log('Sent view orders List post_type ' + post_type);
    }
    // (click)="viewOrderDetailPage(orders.post_date)"
    viewOrdersApi() {
        console.log('viewOrdersApi called    ');
        const service = this.apiProvider.getOrders();
        service.subscribe((data) => {
            let loader = this.loadingController.create({
                content: "your message"
            });
            loader.present();
            const resultado = data;
            console.log('Get response: ' + resultado);
            this.viewOrdersList = resultado;
            loader.dismiss();
        });
    }
    showLoadingOrdersFetching() {
        let loading = this.loadingController.create({
            content: 'Please wait Fetching Orders!'
        });
        loading.present();
        // this.callRegisterApi();
        setTimeout(() => {
            loading.dismiss();
        }, 8000);
    }
};
VieworderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-vieworder',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\vieworder\vieworder.html"*/'<!--\n  Generated template for the VieworderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>View Orders</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n  </button>\n      <ion-title>MyOrders\n          <span float-right> \n            <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n            <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n          </span>\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="chevron-down-circle-outline"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing Orders..."\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card class="card" *ngFor="let vieworders of viewOrdersList"  >\n    <ion-card-header >\n     \n\n      <!-- <ion-item lines="none">\n        <ion-label style="color: black;max-width: 40%;margin-right: 8px;">Order Id</ion-label>\n        <ion-label style="color: black;max-width: 40%;margin-right: 8px;">{{orders.ID}}</ion-label>\n      </ion-item>   \n\n      <ion-item lines="none">\n        <ion-label style="color: black;max-width: 40%;margin-right: 8px;">Order Title</ion-label>\n        <ion-label style="color: black;max-width: 40%;margin-right: 8px;">{{orders.post_title}}</ion-label>\n      </ion-item>  -->\n\n      <!-- <ion-item lines="none">\n        <ion-label style="color: black;margin-right: 8px;">Order Title</ion-label>\n      </ion-item>  -->\n\n\n      <ion-item lines="none">\n        <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{vieworders.post_title}}</ion-label>\n      </ion-item> \n\n\n    \n    </ion-card-header>\n  </ion-card>\n\n\n \n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\vieworder\vieworder.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */]])
], VieworderPage);

//# sourceMappingURL=vieworder.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(406);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_testcart_testcart__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_paymentpage_paymentpage__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_test1_test1__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_testing_testing__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_wishlistupdated_wishlistupdated__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_product_category_detail_grid_product_category_detail_grid__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_testingproducts_testingproducts__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myaccountupdated_myaccountupdated__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_accordiantesting_accordiantesting__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_filterdata_filterdata__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_accordiantest_accordiantest__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_viewallcategories_viewallcategories__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_categoryupdated_categoryupdated__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_termsandconditions_termsandconditions__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_privacypolicy_privacypolicy__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_productcategorydetail_productcategorydetail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home1_home1__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_productcategory_productcategory__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_vieworderdetails_vieworderdetails__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_vieworder_vieworder__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_demo_demo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_component__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_phonenumber_phonenumber__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_password_password__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_verification_verification__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_createaccount_createaccount__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_category_category__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_shirts_shirts__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_itemdetail_itemdetail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_shippining_shippining__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_payment_payment__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_placed_placed__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_wishlist_wishlist__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_my_account_my_account__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_myorder_1_myorder_1__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_myorder_2_myorder_2__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_help_help__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_review_review__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_short_short__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_search_search__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_filter_filter__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_globalization__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ngx_translate_core__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ngx_translate_http_loader__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__app_config__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ng2_search_filter__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_in_app_browser_ngx__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__angular_router__ = __webpack_require__(750);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_53__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_26__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_29__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_password_password__["a" /* PasswordPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_verification_verification__["a" /* VerificationPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_shirts_shirts__["a" /* ShirtsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_itemdetail_itemdetail__["a" /* ItemdetailPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_shippining_shippining__["a" /* ShippiningPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_placed_placed__["a" /* PlacedPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_wishlist_wishlist__["a" /* WishlistPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_my_account_my_account__["a" /* My_accountPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */],
            __WEBPACK_IMPORTED_MODULE_43__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */],
            __WEBPACK_IMPORTED_MODULE_44__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_review_review__["a" /* ReviewPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_short_short__["a" /* ShortPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_demo_demo__["a" /* DemoPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_vieworder_vieworder__["a" /* VieworderPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_vieworderdetails_vieworderdetails__["a" /* VieworderdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_productcategory_productcategory__["a" /* ProductcategoryPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_home1_home1__["a" /* Home1Page */],
            __WEBPACK_IMPORTED_MODULE_18__pages_productcategorydetail_productcategorydetail__["a" /* ProductcategorydetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_termsandconditions_termsandconditions__["a" /* TermsandconditionsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_categoryupdated_categoryupdated__["a" /* CategoryupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_viewallcategories_viewallcategories__["a" /* ViewallcategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_viewcart_viewcart__["a" /* ViewcartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_accordiantest_accordiantest__["a" /* AccordiantestPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_filterdata_filterdata__["a" /* FilterdataPage */],
            __WEBPACK_IMPORTED_MODULE_10__components_accordiantesting_accordiantesting__["a" /* AccordiantestingComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_myaccountupdated_myaccountupdated__["a" /* MyaccountupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_testingproducts_testingproducts__["a" /* TestingproductsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_product_category_detail_grid_product_category_detail_grid__["a" /* ProductCategoryDetailGridPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_testing_testing__["a" /* TestingPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_test1_test1__["a" /* Test1Page */],
            __WEBPACK_IMPORTED_MODULE_1__pages_paymentpage_paymentpage__["a" /* PaymentpagePage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_testcart_testcart__["a" /* TestcartPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_57__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_59__angular_router__["a" /* RouterModule */].forRoot([]),
            __WEBPACK_IMPORTED_MODULE_56_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_51__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_27_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/accordiantest/accordiantest.module#AccordiantestPageModule', name: 'AccordiantestPage', segment: 'accordiantest', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/categoryupdated/categoryupdated.module#CategoryupdatedPageModule', name: 'CategoryupdatedPage', segment: 'categoryupdated', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/filterdata/filterdata.module#FilterdataPageModule', name: 'FilterdataPage', segment: 'filterdata', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/demo/demo.module#DemoPageModule', name: 'DemoPage', segment: 'demo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home1/home1.module#Home1PageModule', name: 'Home1Page', segment: 'home1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/myaccountupdated/myaccountupdated.module#MyaccountupdatedPageModule', name: 'MyaccountupdatedPage', segment: 'myaccountupdated', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/paymentpage/paymentpage.module#PaymentpagePageModule', name: 'PaymentpagePage', segment: 'paymentpage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/privacypolicy/privacypolicy.module#PrivacypolicyPageModule', name: 'PrivacypolicyPage', segment: 'privacypolicy', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product-category-detail-grid/product-category-detail-grid.module#ProductCategoryDetailGridPageModule', name: 'ProductCategoryDetailGridPage', segment: 'product-category-detail-grid', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productcategorydetail/productcategorydetail.module#ProductcategorydetailPageModule', name: 'ProductcategorydetailPage', segment: 'productcategorydetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productcategory/productcategory.module#ProductcategoryPageModule', name: 'ProductcategoryPage', segment: 'productcategory', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termsandconditions/termsandconditions.module#TermsandconditionsPageModule', name: 'TermsandconditionsPage', segment: 'termsandconditions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/test1/test1.module#Test1PageModule', name: 'Test1Page', segment: 'test1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/testcart/testcart.module#TestcartPageModule', name: 'TestcartPage', segment: 'testcart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/testing/testing.module#TestingPageModule', name: 'TestingPage', segment: 'testing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewallcategoriesupdated/viewallcategoriesupdated.module#ViewallcategoriesupdatedPageModule', name: 'ViewallcategoriesupdatedPage', segment: 'viewallcategoriesupdated', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewallcategories/viewallcategories.module#ViewallcategoriesPageModule', name: 'ViewallcategoriesPage', segment: 'viewallcategories', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/testingproducts/testingproducts.module#TestingproductsPageModule', name: 'TestingproductsPage', segment: 'testingproducts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/vieworder/vieworder.module#VieworderPageModule', name: 'VieworderPage', segment: 'vieworder', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewcart/viewcart.module#ViewcartPageModule', name: 'ViewcartPage', segment: 'viewcart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/wishlistupdated/wishlistupdated.module#WishlistupdatedPageModule', name: 'WishlistupdatedPage', segment: 'wishlistupdated', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_52__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_52__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: createTranslateLoader,
                    deps: [__WEBPACK_IMPORTED_MODULE_51__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_27_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_29__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_password_password__["a" /* PasswordPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_verification_verification__["a" /* VerificationPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_shirts_shirts__["a" /* ShirtsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_itemdetail_itemdetail__["a" /* ItemdetailPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_shippining_shippining__["a" /* ShippiningPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_placed_placed__["a" /* PlacedPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_wishlist_wishlist__["a" /* WishlistPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_my_account_my_account__["a" /* My_accountPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */],
            __WEBPACK_IMPORTED_MODULE_43__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */],
            __WEBPACK_IMPORTED_MODULE_44__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_review_review__["a" /* ReviewPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_short_short__["a" /* ShortPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_demo_demo__["a" /* DemoPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_vieworder_vieworder__["a" /* VieworderPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_vieworderdetails_vieworderdetails__["a" /* VieworderdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_productcategory_productcategory__["a" /* ProductcategoryPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_home1_home1__["a" /* Home1Page */],
            __WEBPACK_IMPORTED_MODULE_18__pages_productcategorydetail_productcategorydetail__["a" /* ProductcategorydetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_termsandconditions_termsandconditions__["a" /* TermsandconditionsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_categoryupdated_categoryupdated__["a" /* CategoryupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_viewallcategories_viewallcategories__["a" /* ViewallcategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_viewcart_viewcart__["a" /* ViewcartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_accordiantest_accordiantest__["a" /* AccordiantestPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_filterdata_filterdata__["a" /* FilterdataPage */],
            __WEBPACK_IMPORTED_MODULE_10__components_accordiantesting_accordiantesting__["a" /* AccordiantestingComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_myaccountupdated_myaccountupdated__["a" /* MyaccountupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_testingproducts_testingproducts__["a" /* TestingproductsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_product_category_detail_grid_product_category_detail_grid__["a" /* ProductCategoryDetailGridPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_testing_testing__["a" /* TestingPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_test1_test1__["a" /* Test1Page */],
            __WEBPACK_IMPORTED_MODULE_1__pages_paymentpage_paymentpage__["a" /* PaymentpagePage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_testcart_testcart__["a" /* TestcartPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_58__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_50__ionic_native_globalization__["a" /* Globalization */],
            { provide: __WEBPACK_IMPORTED_MODULE_54__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_54__app_config__["b" /* BaseAppConfig */] },
            { provide: __WEBPACK_IMPORTED_MODULE_26__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_27_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_55__providers_api_api__["a" /* ApiProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let WishlistPage = class WishlistPage {
    constructor(navController, modalCtrl) {
        this.navController = navController;
        this.modalCtrl = modalCtrl;
    }
    cartPage() {
        // let modal = this.modalCtrl.create(CartPage);
        // modal.present();
        this.navController.push(__WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
};
WishlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-wishlist ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\wishlist\wishlist.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>My Wishlist (3)\n\n            <span float-right>                  \n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique Product for wheel\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>Man\'s shirt </p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/productimagenew.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique Product for wheel space\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>bags & Backpack</p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique Product for wheel test\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>Wrist watch</p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="rateing">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\wishlist\wishlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */]])
], WishlistPage);

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(4);
/**
 *  Created By Lasting Erp 5/10/2020
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ItemdetailPage_1;








let ItemdetailPage = ItemdetailPage_1 = class ItemdetailPage {
    constructor(navCtrl, modalCtrl, navParams, httpClient, loadingController, toastController, apiProvider, cartService, toastCtrl, app, platform) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.apiProvider = apiProvider;
        this.cartService = cartService;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.platform = platform;
        this.strProductName1 = [];
        this.productsListInformation = [];
        this.productsListInformation1 = [];
        this.taxonomy_product_make = [];
        this.taxonomy_product_brands = [];
        this.taxonomy_product_model = [];
        this.taxonomy_product_tag = [];
        this.taxonomy_product_cat = [];
        this.strQuantityValue = '';
        this.currentNumber = 1;
        this.productCount = 1;
        this.strQuantityValue1 = '';
        this.viewCartList = [];
        this.picToView = '/assets/imgs/ic_my_cart.png';
        this.strId = navParams.get("id");
        this.strProductUrl = "Product Url " + navParams.get("url");
        this.dynamicId = this.strId;
    }
    ngOnInit() {
        this.viewCartApi();
        this.showLoadingControllerLaunch();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'ItemdetailPage') {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                }
                else {
                }
            }
        });
        if (this.strQuantityValue1) {
            //deal with value'
            console.log('available ');
        }
        else {
            console.log('not available ');
        }
        this.httpClient
            .get("http://busybanda.com/sterling-tools/api/get_products_by_id?" +
            "id=" +
            this.dynamicId)
            .subscribe((jsonResponse) => {
            this.productsListInformation = jsonResponse['result'];
            this.productsListInformation1 = jsonResponse['result'].attribute;
            this.obj = JSON.stringify(jsonResponse);
            if (this.productsListInformation && this.productsListInformation.length) {
                console.log('Particular product details available ');
            }
            else {
                console.log('Particular product empty ' + this.obj);
            }
            for (const entry of this.productsListInformation) {
                this.strProductName = 'Product Name: ' + entry.name;
                this.strProductRegularPrice = '' + entry.regular_price;
                this.strProductRegularPriceRevised = 'Product Regular Price: ' + this.strProductRegularPrice.replace('Product Regular Price:', '' + '$');
                this.strImage = entry.image;
                console.log('Image Path ' + entry.image);
                if (this.strProductMake) {
                    this.strProductMake = 'Make Empty: ';
                }
                else {
                    this.strProductMake = 'Make: ' + entry.attribute.pa_make;
                }
                if (this.strProductModel) {
                    this.strProductModel = 'Model Empty: ';
                }
                else {
                    this.strProductModel = 'Model: ' + entry.attribute.pa_model;
                }
                if (this.strProductYear) {
                    this.strProductYear = 'Year Empty: ';
                }
                else {
                    this.strProductYear = 'Year: ' + entry.attribute.pa_year;
                }
                if (this.strProductSalePrice) {
                    this.strProductSalePrice = 'Product Sale Price: ' + entry.sale_price;
                }
                else {
                    this.strProductSalePrice = 'No Product Sale Price Specified';
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
                    this.strStock = 'No Product Stock:  ';
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
                if (attribute.pa_make && attribute.pa_make.length) {
                    console.log("Success..." + attribute.pa_make[0].title);
                }
                else {
                    console.log("Success...!!!!!!!!");
                    this.strTaxonomyProductBrandTag = "No Tag Available";
                }
                if (attribute.pa_make && attribute.pa_make.length) {
                    console.log("Success..." + attribute.pa_model[0].title);
                }
                else {
                    console.log("Success...!!!!!!!!");
                }
            });
        });
    }
    itemdetailPage(id, title) {
        this.navCtrl.push(ItemdetailPage_1, {
            id: id,
            title: title,
        });
        console.log('Sent productsList id ' + id);
        console.log('Sent productsList title ' + title);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
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
    searchPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getTest1();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
                        if (this.viewCartList.length >= 1) {
                            console.log('Cart Filled ');
                            this.countProducts = this.viewCartList.length;
                            //this.buttonIcon = "cart";
                            // this.picToView = 'assets/imgs/ic_my_cart_filled.jpg';
                            //  this.picToView = "star";
                            //  this.buttonIcon ="star";
                        }
                        else {
                            console.log('Cart Empty ');
                            //  this.buttonIcon = "cart";
                            this.countProducts = 'Empty';
                            this.picToView = 'assets/imgs/ic_my_cart.png';
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
    }
    // addToCart(dynamicId){
    //     if(this.currentNumber<1)
    //     {
    //         this.showToastOnAddingEmptyCart();
    //     }
    //     else {  
    //       this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + dynamicId + '&quantity=' + this.currentNumber).subscribe((jsonResponse) => {
    //         this.obj = JSON.stringify(jsonResponse);
    //         console.log("Sent productsList response " + this.obj);
    //         console.log("Sent productsList id " + dynamicId);
    //        this.showToastOnAddingCart();
    //       });
    //     }
    //   }
    // addToCart(id, name,image,description,regular_price) {
    //   let products = [];
    //   if (localStorage.getItem('products')) {
    //     products = JSON.parse(localStorage.getItem('products')); // get product list 
    //   } 
    //   console.log("Sent productsList id " + id);
    //   console.log("Sent productsList name " + name);
    //   products.push({'ProductId' : id , 'ProductName' : name , 'ProductQuantity': this.currentNumber ,'ProductImage' : image ,'ProductDescription':description , 'ProductRegularPrice' : regular_price} ); 
    //   localStorage.setItem('products', JSON.stringify(products)); 
    //   this.showToastOnAddProduct(name);
    // }
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
            this.showToastOnAddProduct(name);
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
    showToastOnCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Minimum product quantity cannot be less than 1 ',
                duration: 400,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnAddingCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Product added in cart ' + this.strProductName + ' ' + 'with Quantity' + this.currentNumber,
                duration: 1300,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnAddingEmptyCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Please add quantity of product',
                duration: 300,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: 'Please wait loading product details!'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 600);
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
};
ItemdetailPage = ItemdetailPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: "page-itemdetail ",template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\itemdetail\itemdetail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n    <ion-title\n\n      >Product Detail\n\n      <span float-right>\n\n        <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n\n        <!-- <ion-icon class="icon"  (click)="cartPage()" ><img [src]="picToView" width="100%;" /></ion-icon> -->\n\n        <!-- <ion-img class="map" [src]="picToView" ></ion-img> -->\n\n        <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon>\n\n\n\n        \n\n         \n\n     \n\n\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header> \n\n\n\n<!--<select size & color>-->\n\n<ion-content class="bg-light">\n\n  <div class="img-section shadow-bottom" text-center>\n\n  \n\n  \n\n\n\n    <!-- <img src="assets/imgs/productimage.jpg" /> -->\n\n\n\n    <img  [src]="strImage"  style="width:200px;height:150px;margin-top: 8px;">\n\n\n\n    <div class="tab-btn-box">\n\n      <div class="tab-btn">\n\n        <!-- <img src="assets/imgs/productimage.jpg" /> -->\n\n        <img  [src]="strImage"  style="width:150px;height:40px;"  >\n\n        \n\n      </div>\n\n      <div class="tab-btn">\n\n        <!-- <img src="assets/imgs/productimage.jpg" /> -->\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div>\n\n      <div class="tab-btn">\n\n        <!-- <img src="assets/imgs/productimage.jpg" /> -->\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div>\n\n    </div>\n\n    <div class="d-flex" style="align-items: start">\n\n      <!-- <span>Unique For Men Black Formal Slim Fit Shirt by Mark Tayler</span> -->\n\n      <span>{{strName}}</span>\n\n      <span class="icon">\n\n        <ion-icon name="md-remove" (click)="decrementValue()"></ion-icon\n\n      ></span>\n\n      <span\n\n        class="text-sky small-text"\n\n        style="text-align: center; margin-left: 20%"\n\n      >\n\n        {{currentNumber}}</span\n\n      >\n\n      <span class="icon" style="margin-left: 20%"\n\n        ><ion-icon name="md-add" (click)="incrementValue()"></ion-icon\n\n      ></span>\n\n    </div>\n\n    <div class="card-btn">\n\n      <div class="d-flex" style="padding: 1rem">\n\n        <div class="review-box">\n\n          <!-- <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-add" (click)="decrementValue()"></ion-icon></small> -->\n\n          <span class="text-sky small-text" style="color: black;">Product Quantity</span>\n\n        </div>\n\n        <!-- <div class="price-box">\n\n                    <div class="price text-light" style="margin-right: 1rem;">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                    </div>\n\n                    <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                    </div>\n\n                </div> -->\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <!-- <div class="select-section shadow-bottom">\n\n        <ion-row>\n\n            <ion-col col-6 >\n\n                <div class="size">\n\n                    <ion-item>\n\n                        <ion-label>{{"size" | translate}}</ion-label>\n\n                        <ion-select  interface="action-sheet">\n\n                            <ion-option value="enable">Small</ion-option>\n\n                            <ion-option selected value="mute">Medium</ion-option>\n\n                            <ion-option value="mute_week"> large</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <div class="color">\n\n                    <ion-item>\n\n                        <ion-label>{{"color" | translate}}</ion-label>\n\n                        <ion-select interface="action-sheet">\n\n                            <ion-option selected value="enable">Black</ion-option>\n\n                            <ion-option value="mute">White</ion-option>\n\n                            <ion-option value="mute_week">Red</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div> -->\n\n\n\n  <!-- <div class="select-section shadow-bottom">\n\n      <ion-row>\n\n          <ion-col col-12 >\n\n              <div class="size">\n\n                  <ion-item>\n\n                      <ion-label>{{"size" | translate}}</ion-label>\n\n                      <ion-select  interface="action-sheet">\n\n                          <ion-option value="enable">Small</ion-option>\n\n                          <ion-option selected value="mute">Medium</ion-option>\n\n                          <ion-option value="mute_week"> large</ion-option>\n\n                      </ion-select>\n\n                  </ion-item>\n\n              </div>\n\n          </ion-col>\n\n       \n\n      </ion-row>\n\n  </div> -->\n\n\n\n  <div class="features bg-white shadow-bottom" padding>\n\n    <h6 class="heading">Key Features</h6>\n\n    <p><span class="circle"></span>{{strProductName}}</p>\n\n    <!-- <p><span class="circle"></span>{{strProductRegularPriceRevised}}</p> -->\n\n    <p><span class="circle"></span>{{strProductRegularPrice}} $ </p>\n\n    <!-- <h5 style="font-size: 12px;"  >  <span class="priceicon">$</span> {{featuredProducts.regular_price}}</h5>   -->\n\n\n\n   \n\n    <p><span class="circle"></span>{{strProductDescription}}</p>\n\n    <p><span class="circle"></span>{{strProductSalePrice}}</p>\n\n    <p><span class="circle"></span>{{strProductMake}}</p>  \n\n    <p><span class="circle"></span>{{strProductModel}}</p>\n\n    <p><span class="circle"></span>{{strProductYear}}</p>\n\n    <p><span class="circle"></span>{{strProductYear}}</p>\n\n    <p><span class="circle"></span>{{strStock}}</p>\n\n\n\n    <div>\n\n      <div  *ngIf="strStock=== null;else templateName">    \n\n        *Stock --- \n\n      </div>\n\n\n\n      <ng-template #templateName>\n\n        *Stock  \n\n      </ng-template>\n\n  \n\n      <!-- <div *ngIf="!productsListInformation.stock">     \n\n         *Stock  found\n\n      </div> -->\n\n  </div>\n\n\n\n\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductCatTitle}}</p>\n\n    <p><span class="circle"></span>{{strTaxonomyProductBrandTitle}}</p> -->\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductBrandModel}}</p> -->\n\n\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductMakeTitle}}</p>\n\n    <p><span class="circle"></span>{{strTaxonomyProductYearTitle}}</p> -->\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductBrandTag}}</p> -->\n\n  </div>\n\n\n\n  <div class="reating-review bg-white" padding >\n\n    <div class="reating"></div>\n\n\n\n    <div class="lick" >\n\n      <button\n\n      ion-button\n\n      full\n\n      class="btn-round green-shadow btn-text"\n\n      style="background-color: red; color: white;"\n\n     \n\n      (click)="addToCart(dynamicId,strProductName,strImage,strProductDescription,strProductRegularPrice)"\n\n\n\n      >\n\n\n\n    Add To Cart\n\n      \n\n    </button>\n\n    </div>\n\n\n\n    <!-- (click)="addToCart(dynamicId)" -->\n\n    \n\n\n\n  \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\itemdetail\itemdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */]])
], ItemdetailPage);

//# sourceMappingURL=itemdetail.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__productcategory_productcategory__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewcart_viewcart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let CategoryPage = class CategoryPage {
    constructor(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    searchPage() {
        // let modal = this.modalCtrl.create(SearchPage);
        // modal.present();
    }
    shirtsPage() {
        // let modal = this.modalCtrl.create(ShirtsPage);
        // modal.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__productcategory_productcategory__["a" /* ProductcategoryPage */]);
    }
    cartPage() {
        // let modal = this.modalCtrl.create(CartPage);
        // modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
};
CategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-category ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\category\category.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png" style="width: 100%"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"Categories" | translate}}\n\n            <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>     \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n\n\n\n\n    \n\n\n\n    <div  > \n\n\n\n        <div class="man-fashion img" >\n\n            <ion-row style="height: 250px">\n\n                <ion-col col-5>\n\n                    <img src="assets/imgs/categoryfirst.png" >\n\n                </ion-col>\n\n                <ion-col col-7>\n\n                    <h6 class="text-white">PRODUCTS</h6>\n\n                    <p class="text-white" (click)="shirtsPage()">Car Gear Cover\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Air Brake Bleeder\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Steel Wheel\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Electronics\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <!-- <p class="text-white">Electronics\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p> -->\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    \n\n        <div class="man-fashion img" >\n\n            <ion-row style="height: 270px">\n\n                <ion-col col-5>\n\n                    <img src="assets/imgs/categorysecond.png" >\n\n                </ion-col>\n\n                <ion-col col-7>\n\n                    <h6 class="text-white">CATEGORIES</h6>\n\n                    <p class="text-white" (click)="shirtsPage()">CLUTCH\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">BRAKE\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">HYDRAULIC CYLINDERS\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">HOSES\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">KITS\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    \n\n        <div class="man-fashion img" >\n\n            <ion-row style="height: 250px;">\n\n                <ion-col col-5>\n\n                    <img src="assets/imgs/categorythird.png" >\n\n                </ion-col>\n\n                <ion-col col-7>\n\n                    <h6 class="text-white">ACCESSORIES</h6>\n\n                    <p class="text-white" (click)="shirtsPage()">Tools\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Clutch\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Bulbs\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Break\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                   \n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    \n\n\n\n    </div>\n\n\n\n   \n\n \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\category\category.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */]])
], CategoryPage);

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordiantestingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AccordiantestingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let AccordiantestingComponent = class AccordiantestingComponent {
    constructor(renderer) {
        this.renderer = renderer;
    }
};
AccordiantestingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'accordiantesting',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\components\accordiantesting\accordiantesting.html"*/'<!-- Generated template for the AccordiantestingComponent component -->\n<div>\n  hi\n</div>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\components\accordiantesting\accordiantesting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
], AccordiantestingComponent);

//# sourceMappingURL=accordiantesting.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_testcart_testcart__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_myaccountupdated_myaccountupdated__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_termsandconditions_termsandconditions__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_privacypolicy_privacypolicy__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home1_home1__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_productcategory_productcategory__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_demo_demo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_category_category__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_wishlist_wishlist__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_myorder_2_myorder_2__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_help_help__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_review_review__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_config__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__node_modules_ngx_translate_core__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_globalization__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_wishlistupdated_wishlistupdated__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






















let MyApp = class MyApp {
    constructor(config, globalization, platform, statusBar, splashScreen, translate, toastController, loadingController) {
        this.config = config;
        this.globalization = globalization;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.toastController = toastController;
        this.loadingController = loadingController;
        // rootPage: any = CreateaccountPage;
        // rootPage: any = DemoPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */];
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
    selectItem(menuItem) {
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
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */]);
    }
    testPage() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home1_home1__["a" /* Home1Page */]);
    }
    my_accountPage() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_myaccountupdated_myaccountupdated__["a" /* MyaccountupdatedPage */]);
    }
    categoryPage() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_productcategory_productcategory__["a" /* ProductcategoryPage */]);
    }
    categoryPage1() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_category_category__["a" /* CategoryPage */]);
    }
    homePage() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]);
    }
    reviewPage() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_review_review__["a" /* ReviewPage */]);
    }
    wishlistPage() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_wishlist_wishlist__["a" /* WishlistPage */]);
    }
    wishlistPage1() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_21__pages_wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    cartPage() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__["a" /* CartPage */]);
    }
    helpPage() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_help_help__["a" /* HelpPage */]);
    }
    phonenumberPage() {
        this.showLoaderOnSigningOut();
        localStorage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_demo_demo__["a" /* DemoPage */]);
    }
    testPageTushar() {
        // this.nav.setRoot(TestingPage);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_testcart_testcart__["a" /* TestcartPage */]);
    }
    privacyPolicyPage() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */]);
    }
    termsConditionsPage() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_termsandconditions_termsandconditions__["a" /* TermsandconditionsPage */]);
    }
    showToastOnSigningOut() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Please wait Signing out! ',
                duration: 400,
                position: 'bottom',
            });
            toast.present();
        });
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
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\app\app.html"*/'<ion-menu [content]="content" [side]="getSideOfCurLang()">\n\n  <ion-header>\n\n  \n\n    <div style="background: #a8171e; height: 170px;" padding text-center>\n\n      <ion-item text-center>\n\n        <img src="assets/imgs/sterlinglogo.png" class="img" />\n\n\n\n        <h2 style="color: white; justify-content: center;">STERLING</h2>\n\n\n\n        <ion-row style="margin-top: 4%;">\n\n          <p style="color: white; margin-left: 14%; text-align: center;">\n\n            sterlingtools@gmail.com\n\n          </p>\n\n          <ion-icon\n\n            name="arrow-forward"\n\n            style="margin-left: 88%; width: 30px; height: 30px;margin-top: 40px;color: white;"\n\n          >\n\n          </ion-icon>\n\n        </ion-row>  \n\n      </ion-item>  \n\n    </div>\n\n\n\n\n\n     <!-- style="width: 40px;"  -->\n\n    <div class="menu-tabs" padding text-center>\n\n      <ion-row>\n\n        <img src="assets/imgs/ic_my_orders.png" />\n\n        <p\n\n          style="\n\n            font-size: 10px;\n\n            color: white;\n\n            \n\n            font-size: 12px;\n\n          "\n\n        >\n\n          My Orders\n\n        </p>\n\n\n\n        <img\n\n          src="assets/imgs/ic_my_addresses.png"\n\n          style=" width: 40px;"\n\n        />\n\n        <p\n\n          style="\n\n            font-size: 10px;\n\n            color: white;\n\n           \n\n            font-size: 12px;\n\n          "\n\n        >\n\n          My Addresses\n\n        </p>\n\n      </ion-row>\n\n    </div>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <div class="menu-title">\n\n      <ion-list>\n\n        <button ion-item menuClose (click)="homePage()">\n\n          <img src="assets/imgs/ic_home.png " />\n\n         Home\n\n        </button>\n\n        <!-- <button ion-item menuClose >\n\n          <img src="assets/imgs/ic_categories.png "   />\n\n          {{"categories" | translate}}\n\n         \n\n        </button> -->\n\n        <!-- <div class="drop-down ">\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_electronics.png ">\n\n                        Electronics\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_fashion.png ">\n\n                        Fashion\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_home_decor.png ">\n\n                        Home Decor\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_mobile.png ">\n\n                        Mobile\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_more.png ">\n\n                        More\n\n                </button>\n\n                </div> -->\n\n\n\n                <!-- <button ion-item menuClose (click)="categoryPage()">\n\n                  <img src="assets/imgs/ic_categories.png "/>\n\n                  {{"my_order" | translate}}\n\n                </button> -->\n\n\n\n                <button ion-item menuClose (click)="categoryPage()">\n\n                  <img src="assets/imgs/ic_my_cart.png " />\n\n                  {{"Categories" | translate}}\n\n                </button>\n\n\n\n                <!-- <button ion-item menuClose (click)="categoryPage1()">\n\n                  <img src="assets/imgs/ic_my_cart.png " />\n\n                  Categories1\n\n                </button> -->\n\n        <!-- <button ion-item menuClose (click)="myorder_2Page()">\n\n          <img src="assets/imgs/ic_my_cart.png " />\n\n          {{"my_order" | translate}}\n\n        </button> -->  \n\n\n\n\n\n        <button ion-item menuClose (click)="myorder_2Page()">\n\n          <img src="assets/imgs/ic_my_cart.png " />\n\n          {{"View Orders" | translate}}\n\n        </button>\n\n\n\n       \n\n\n\n\n\n        <!-- <button ion-item menuClose (click)="wishlistPage()">\n\n          <img src="assets/imgs/ic_my_wishlist.png " />\n\n          {{"My wishlist (3)" | translate}}\n\n        </button> -->\n\n\n\n        <button ion-item menuClose (click)="wishlistPage1()">\n\n          <img src="assets/imgs/ic_my_wishlist.png " />\n\n          {{"My wishlist" | translate}}\n\n        </button>\n\n        <button ion-item menuClose (click)="my_accountPage()">\n\n          <img src="assets/imgs/ic_my_account.png " />\n\n          My Account\n\n        </button>\n\n        <button ion-item menuClose (click)="helpPage()">\n\n          <img src="assets/imgs/ic_help.png " />\n\n          Help Center\n\n        </button>\n\n      \n\n        <button ion-item menuClose (click)="privacyPolicyPage()">\n\n          <img src="assets/imgs/ic_logout.png " />\n\n          Privacy Policy\n\n        </button>\n\n\n\n        <button ion-item menuClose (click)="termsConditionsPage()">\n\n          <img src="assets/imgs/ic_logout.png " />\n\n          Terms & Conditions\n\n        </button>\n\n        <button ion-item menuClose (click)="phonenumberPage()">\n\n          <img src="assets/imgs/ic_logout.png " />\n\n          Logout\n\n        </button>\n\n\n\n        <!-- <button ion-item menuClose (click)="testPageTushar()">\n\n          <img src="assets/imgs/ic_logout.png " />\n\n          Test\n\n        </button> -->\n\n        \n\n          \n\n      </ion-list>\n\n    </div>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav\n\n  [root]="rootPage"\n\n \n\n  #content\n\n  swipeBackEnabled="false "\n\n  type="overlay"\n\n></ion-nav>\n\n     '/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\app\app.html"*/
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_18__app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_20__ionic_native_globalization__["a" /* Globalization */],
        __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_19__node_modules_ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["h" /* LoadingController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonenumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_password__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PhonenumberPage = class PhonenumberPage {
    constructor(navCtrl, loadingController) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.showLoadingControllerLaunch();
    }
    homePage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    }
    passwordPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__password_password__["a" /* PasswordPage */]);
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: 'Please wait Signing Out!'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 600);
    }
};
PhonenumberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-phonenumber ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\phonenumber\phonenumber.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-uppercase>{{"app_title" | translate}}\n\n      <span float-end (click)="homePage()" text-capitalize>{{"skip" | translate}}</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <p>Heart</p> -->\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center>{{"phone_text" | translate}}<br>{{"phone_text1" | translate}}</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"phone" | translate}}</ion-label>\n\n        <ion-input type="text" text-end value="+91 9876543210"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="passwordPage()">{{"continue" | translate}}"</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\phonenumber\phonenumber.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], PhonenumberPage);

//# sourceMappingURL=phonenumber.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShirtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__short_short__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let ShirtsPage = class ShirtsPage {
    constructor(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    shortPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__short_short__["a" /* ShortPage */]);
        modal.present();
    }
    filterPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__filter_filter__["a" /* FilterPage */]);
        modal.present();
    }
    searchPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
        modal.present();
    }
    cartPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    }
    itemdetailPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__["a" /* ItemdetailPage */]);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__["a" /* WishlistPage */]);
    }
};
ShirtsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shirts ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\shirts\shirts.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n      <button ion-button menuToggle style="display: block !important">\n\n        <ion-icon class="menu-icon"\n\n          ><img src="assets/imgs/ic_menu.png"\n\n        /></ion-icon>\n\n      </button>  \n\n      <ion-title\n\n        >Products\n\n        <span float-right>\n\n          <ion-icon class="icon" (click)="wishlistPage()"\n\n            ><img src="assets/imgs/ic_my_wishlist.png" width="100%;"\n\n          /></ion-icon>\n\n          <ion-icon class="icon" (click)="cartPage()"\n\n            ><img src="assets/imgs/ic_my_cart.png" width="100%;"\n\n          /></ion-icon>\n\n        </span>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <div class="custom-id">\n\n      <ion-item class="custom">\n\n        <ion-select\n\n          placeholder="All"\n\n          value="MAKE"\n\n          okText="Ok"\n\n          cancelText="Cancel"\n\n          style="margin-left: 1px"\n\n        >\n\n          <ion-option value="MAKE" style="max-width: 60px">MAKE</ion-option>\n\n          <ion-option value="MODEL">MODEL</ion-option>\n\n          <ion-option value="YEAR">YEAR</ion-option>\n\n        </ion-select>\n\n  \n\n        <ion-icon name="md-search" class="text-light icon"></ion-icon>\n\n      </ion-item>\n\n      <ion-searchbar\n\n        placeholder="Search Products"\n\n        (click)="searchPage()"\n\n      ></ion-searchbar>\n\n    </div>\n\n    <!-- <ion-list>\n\n      <ion-item > </ion-item>\n\n    </ion-list> -->\n\n    <!-- <div class="tab-row">\n\n      <ion-row>\n\n        <ion-col (click)="categoryPage()">\n\n          <div class="img-box" text-center>\n\n            <img src="assets/imgs/first.png">\n\n            <small class="text-white">LORUM</small>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col (click)="categoryPage()">\n\n          <div class="img-box" text-center>\n\n            <img src="assets/imgs/second.png">\n\n            <small class="text-white">LORUM</small>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col (click)="categoryPage()">\n\n          <div class="img-box" text-center>\n\n            <img src="assets/imgs/third.png">\n\n            <small class="text-white">LORUM</small>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col (click)="categoryPage()">\n\n          <div class="img-box" text-center>\n\n            <img src="assets/imgs/fourth.png">\n\n            <small class="text-white">LORUM</small>\n\n          </div>\n\n        </ion-col>\n\n  \n\n        <ion-col (click)="categoryPage()">  \n\n          <div class="img-box" text-center>\n\n            <img src="assets/imgs/fifth.png">\n\n            <small class="text-white">LORUM</small>\n\n          </div>\n\n        </ion-col>\n\n      \n\n      </ion-row>\n\n    </div> -->\n\n  </ion-header>\n\n\n\n\n\n<ion-content class="bg-light">\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card (click)="itemdetailPage()">\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/shirt-3.jpg"> -->\n\n                        <img src="assets/imgs/productimagenew.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/shirt-2.jpg"> -->\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/shirt-4.jpg"> -->\n\n                        <img src="assets/imgs/productimagenew.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/shirt-2.jpg"> -->\n\n                        <img src="assets/imgs/productimagenew.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\shirts\shirts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], ShirtsPage);

//# sourceMappingURL=shirts.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippiningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ShippiningPage = class ShippiningPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    paymentPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    }
};
ShippiningPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shippining ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\shippining\shippining.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"confirm_order" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="address-section">\n\n        <ion-row text-center class="status">\n\n          <ion-col class="complate">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>{{"login" | translate}}</span></ion-col>\n\n          <ion-col class="processing">\n\n            <ion-icon name="md-radio-button-off"></ion-icon><span>{{"shipping" | translate}}</span></ion-col>\n\n          <ion-col class="panding">\n\n            <ion-icon name="ion-record"></ion-icon><span>{{"payment" | translate}}</span></ion-col>\n\n        </ion-row>\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>\n\n                    {{"your_dlvr_address" | translate}}<span class="text-sky">{{"change" | translate}}<ion-icon name="ios-arrow-forward" class="icon"></ion-icon></span></p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <div class="addres-detail">\n\n                    <h3>\n\n                        <ion-icon name="ios-pin-outline" class="icon-position"></ion-icon>Jhon Smith\n\n                    </h3>\n\n                    <p>DE234 Mapleridge Drive Plano,<br> Texas 743A US.</p>\n\n                    <p>+91 908765432</p>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="your-items">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>{{"ur_item" | translate}}</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n                            <img src="assets/imgs/productimage.jpg">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-sky  mr-5">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-light">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="">1\n\n                                 <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                        <p class="card-bottom" padding-top>\n\n                            {{"delivery_by" | translate}} Fri,Jun 9: 40\n\n                            <span class="text-sky small" text-right> {{"remove" | translate}}</span>\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="your-items">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>{{"ur_item" | translate}}</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n                            <img src="assets/imgs/productimage.jpg">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-sky  mr-5">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-light">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="">1\n\n                                    <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                        <p class="card-bottom" padding-top>\n\n                            {{"delivery_by" | translate}} Fri,Jun 9: 40\n\n                            <span class="text-sky small" text-right> {{"remove" | translate}}</span>\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="spacebar-bottom"></div>\n\n    <div class="receipt btn-fisx-bottom">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>Item(s) price\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                    380\n\n                    </span>\n\n                </p>\n\n                <p>Delivery Payable\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                   40\n\n                    </span>\n\n                </p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <p>Amount Payable\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                   420\n\n                    </span>\n\n                </p>\n\n                <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="paymentPage()">{{"continue" | translate}}</button>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\shippining\shippining.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ShippiningPage);

//# sourceMappingURL=shippining.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PlacedPage = class PlacedPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    homePage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    }
};
PlacedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-placed ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\placed\placed.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"ordered" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="img-box">\n\n        <img src="assets/imgs/order-placed.jpg">\n\n    </div>\n\n    <h3 class="text-sky" text-center>{{"ordered_text" | translate}}</h3>\n\n    <h4 class="" text-center>{{"ordered_text1" | translate}}<br>{{"ordered_text3" | translate}} <strong>{{"my_order" | translate}}</strong> {{"ordered_text2" | translate}}<br>{{"ordered_text4" | translate}}</h4>\n\n    <div class="btn-padding btn-fisx-bottom ">\n\n        <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="homePage()">{{"continue_shop" | translate}}</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\placed\placed.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], PlacedPage);

//# sourceMappingURL=placed.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_accountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let My_accountPage = class My_accountPage {
    constructor(navCtrl, modalCtrl, httpClient, loadingController) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.account = "profile";
        // console.log('Value' + localStorage.getItem('Email'));
        // console.log('User Id Value' + localStorage.getItem('Userid value'));
        this.emailAddress = localStorage.getItem('Email');
        this.userRegistered = '2020-07-03 07:27:20 ';
    }
    ngOnInit() {
        this.viewCartApi();
        this.showLoadingControllerLaunch1();
        //console.log('Value' + localStorage.getItem('Email'));
        this.emailAddress = localStorage.getItem('Email');
        this.userRegistered = '2020-07-03 07:27:20 ';
        // this.httpClient.get('http://busybanda.com/sterling-tools/api/get_current_user_data/')
        this.httpClient.get('http://busybanda.com/sterling-tools/api/get_current_user_data?' + 'id=' + localStorage.getItem('Userid value'))
            .subscribe((jsonResponse) => {
            this.obj = JSON.stringify(jsonResponse);
            const parsedData = JSON.parse(this.obj);
            status = parsedData.Status;
            this.strDataUserLogin = parsedData.result.data.user_login;
            this.strDataUserEmail = parsedData.result.data.user_email;
            this.strDataUserRegistered = parsedData.result.data.user_registered;
            this.strDisplayName = parsedData.result.data.display_name;
            console.log('Dynamic Profile Response  UserId ' + localStorage.getItem('Userid value'));
            console.log('Dynamic Profile Response user_login  ' + this.strDataUserLogin);
            console.log('Dynamic Profile Response user_email  ' + this.strDataUserEmail);
            console.log('Dynamic Profile Response strDataUserRegistered  ' + this.strDataUserRegistered);
            console.log('Dynamic Profile Response strDisplayName  ' + this.strDisplayName);
        });
    }
    searchPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    }
    cartPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        modal.present();
    }
    viewCartApi() {
        this.httpClient.get('http://busybanda.com/sterling-tools/api/get_current_cart?' + 'id=' + localStorage.getItem('Userid value'))
            .subscribe((jsonResponse) => {
            this.obj = JSON.stringify(jsonResponse);
            const parsedData1 = JSON.parse(this.obj);
            status = parsedData1.status;
            this.strStatus = parsedData1.status;
            console.log('All Json response' + this.obj);
        });
    }
    showLoadingControllerLaunch1() {
        let loading = this.loadingController.create({
            content: 'Please wait loading profile!'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 700);
    }
};
My_accountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-my_account ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\my_account\my_account.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n    <ion-icon class="menu-icon">\n\n      <img src="assets/imgs/ic_menu.png">\n\n    </ion-icon>\n\n  </button>\n\n    <ion-title>My Account\n\n      <!-- <span float-right> \n\n        <ion-icon padding-right name="ios-search-outline" class="icon"></ion-icon>\n\n        <ion-icon name="ios-cart-outline" class="icon"></ion-icon>              \n\n      </span> -->\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-list padding-left>\n\n    <ion-item padding-left padding-right>\n\n      <ion-avatar item-start>\n\n         <img src="assets/imgs/more.png"> \n\n      </ion-avatar>\n\n      <!-- <h2 class="">John Smith\n\n        <small class=""> {{"edit_profile" | translate}}</small>\n\n      </h2> -->\n\n      <p class="text-dark">+91 123456789\n\n      </p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <!-- <ion-toolbar no-border-top class="tab-bar">\n\n    <ion-segment [(ngModel)]="account">\n\n\n\n      <ion-segment-button value="profile">\n\n       Profile\n\n      </ion-segment-button>\n\n\n\n      \n\n    </ion-segment>  \n\n  </ion-toolbar> -->\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="account">\n\n\n\n   \n\n\n\n    <div *ngSwitchCase="\'profile\'" class="profile-section">\n\n      <ion-list>\n\n        \n\n        <ion-item lines="none">\n\n          <ion-label floating style="color: black;text-transform: none;font-size: 14px;">Display Name</ion-label>\n\n          <ion-input disabled type="text"  style="margin-top: 10px;color: black;" [(ngModel)]="strDisplayName"></ion-input>\n\n        </ion-item>\n\n        <ion-item lines="none">\n\n          <ion-label floating style="color: black;text-transform: none;font-size: 14px" >Email</ion-label>\n\n          <ion-input disabled type="email"  style="margin-top: 10px;color: black;" [(ngModel)]="strDataUserEmail"></ion-input>\n\n        </ion-item>\n\n        <ion-item lines="none">\n\n          <ion-label floating style="color: black;text-transform: none;font-size: 14px">User Registered On </ion-label>\n\n          <ion-input disabled type="email" style="margin-top: 10px;color: black;" [(ngModel)]="strDataUserRegistered"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n\n\n\n\n   \n\n\n\n    \n\n\n\n  \n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\my_account\my_account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
], My_accountPage);

//# sourceMappingURL=my_account.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let Myorder_1Page = class Myorder_1Page {
    constructor(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    searchPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    }
    cartPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    }
};
Myorder_1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-myorder_1 ',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\myorder_1\myorder_1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"my_order" | translate}}\n\n            <span float-right> \n\n               <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="border-bottom-none border" style="position: relative;">\n\n        <ion-card-header>\n\n            <p class="left-side">\n\n                <span class="text-light">{{"order_id" | translate}}</span> 2513254112\n\n                <br>\n\n                <span class="text-light">{{"placed_on" | translate}}</span> 17-march-17\n\n            </p>\n\n            <p class="right-side text-sky">\n\n                {{"cancel_order" | translate}}\n\n            </p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <small><span class="text-light">{{"quantity" | translate}}:</span> 1</small>\n\n                    <p>\n\n                        <img src="assets/imgs/rupee-black.png"> 380\n\n                        <small class="text-light">{{"by_cod" | translate}}</small>\n\n                    </p>\n\n                    <small><span class="text-light">{{"track_status" | translate}}</span> 15-March\'17</small>\n\n                    <button ion-button full class="bg-green btn-round  btn-text">{{"reached" | translate}} Hub,US  <ion-icon name="ios-arrow-down-outline"></ion-icon></button>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div class="order-info border-top-none border">\n\n        <div class="order-container">\n\n            <div class="status active">\n\n                <p padding-left padding-right>{{"order" | translate}}<br>{{"placed" | translate}}</p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status active">\n\n                <p>\n\n                    {{"dispatched" | translate}}<br>{{"4m" | translate}} Bangalore\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status active">\n\n                <p>\n\n                    {{"reached" | translate}} Hub <br>New Delhi\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p>12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status">\n\n                <p>\n\n                    {{"out4" | translate}}<br>{{"delivery" | translate}}\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status">\n\n                <p>\n\n                    {{"item" | translate}}<br>{{"delivery" | translate}}\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <p class="left-side">\n\n                <span class="text-light">{{"order_id" | translate}}</span> 2513254112\n\n                <br>\n\n                <span class="text-light">{{"placed_on" | translate}}</span> 17-march-17\n\n            </p>\n\n            <p class="right-side text-sky">\n\n                {{"return_item" | translate}}\n\n            </p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <small><span class="text-light">{{"quantity" | translate}}:</span> 1</small>\n\n                    <p>\n\n                        <img src="assets/imgs/rupee-black.png"> 880\n\n                        <small class="text-light">{{"by_crd" | translate}}</small>\n\n                    </p>\n\n                    <small><span class="text-light">{{"deliver_on" | translate}} </span> 05-May\'17</small>\n\n                    <button ion-button full class="bg-thime btn-round  btn-text">{{"rate_now" | translate}}<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\myorder_1\myorder_1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], Myorder_1Page);

//# sourceMappingURL=myorder_1.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/*
    Created by Lasting Software
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let DemoPage = class DemoPage {
    constructor(navController, navParams, platform, alertController, toastController, loadingController, httpClient, navCtrl, app) {
        this.navController = navController;
        this.navParams = navParams;
        this.platform = platform;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
        this.app = app;
        this.emailAddress = '';
        this.password = '';
        this.emailPattern = "[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}";
        this.emailValidatorRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.showPassword = false;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad DemoPage');
        if (localStorage.length === 0) {
            console.log('ionViewDidLoad DemoPage length 0');
        }
        else {
            //this.navCtrl.push(HomePage);
            console.log('ionViewDidLoad DemoPage length not 0');
        }
    }
    loginBtnClick() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Login Button clicked.');
            // Empty Email Validation 
            if (this.emailAddress === '') {
                this.showToastOnEmptyEmail();
            }
            // Empty Password Validation
            else if (this.password === '') {
                this.showToastOnEmptyPassword();
            }
            // Invalid Email Validation  
            else if (!this.emailValidatorRegex.test(this.emailAddress)) {
                this.showToastOnInvalidEmailAddress();
            }
            // else if ((await Network.getStatus()).connectionType === 'none') {
            //   this.showNetworkAlert();
            //   console.log('Network status not available', this.networkStatus);
            // } 
            // Credentials filled 
            else {
                this.showLoadingControllerLaunch();
                console.log('Value saved locally.');
            }
        });
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    onPasswordToggle() {
        this.showPassword = !this.showPassword;
    }
    clearpassword() {
        this.password = '';
    }
    registerBtnClick() {
        this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_0__register_register__["a" /* RegisterPage */]);
    }
    ngOnInit() {
        this.showLoadingControllerLaunch1();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'DemoPage') {
                if (nav.canGoBack()) {
                }
                else {
                    const alert = this.alertController.create({
                        title: 'Exit App',
                        message: 'Are you sure?',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => {
                                    this.navCtrl.setRoot('DemoPage');
                                }
                            }, {
                                text: 'Yes',
                                handler: () => {
                                    // this.logout();
                                    this.platform.exitApp();
                                }
                            }]
                    });
                    alert.present();
                }
            }
        });
    }
    callLoginApi() {
        console.log('callLoginApi api called');
        const postParams = { email: this.emailAddress, password: this.password };
        this.httpClient.post('http://busybanda.com/sterling-tools/api/login', JSON.stringify(postParams)).subscribe((response) => __awaiter(this, void 0, void 0, function* () {
            this.obj = JSON.stringify(response);
            const parsedData = JSON.parse(this.obj);
            status = parsedData.Status;
            this.strResponseCode = parsedData.RespCode;
            this.strUserData = parsedData.userdata.user_email;
            this.strId = parsedData.userdata.id;
            // localStorage.setItem('Email', this.emailAddress);
            // localStorage.setItem('Password', this.password);   
            localStorage.setItem('isSigned', 'true');
            // localStorage.setItem('alljson', this.obj);
            localStorage.setItem('Userid value', this.strId);
            this.userDataValue = response.status;
            console.log('status value' + this.userDataValue);
            console.log('RespCode value' + this.strResponseCode);
            console.log('user_email value' + this.strUserData);
            console.log('id value' + this.strId);
            if (this.obj.includes('Login Successfully')) {
                console.log('Json Response success ' + this.obj);
                console.log('Json Response status ' + this.obj.status);
                this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
            else {
                this.showLoadingControllerFailure();
                console.log('Json Response Failure ' + this.obj);
            }
        }));
    }
    showToastOnEmptyEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Email ',
                duration: 6000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Password ',
                duration: 6000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnInvalidEmailAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Invalid email address',
                duration: 6000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showLoadingControllerFailure() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Invalid username or password',
                duration: 6000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showLoadingControllerSuccess() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.loadingController.create({
                content: 'Logged in successfully',
                duration: 300,
            });
            toast.present();
        });
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: 'Please wait!'
        });
        loading.present();
        this.callLoginApi();
        setTimeout(() => {
            loading.dismiss();
        }, 1000);
    }
    showLoadingControllerLaunch1() {
        let loading = this.loadingController.create({
            content: 'Please wait!'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 700);
    }
    exitAppAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert = yield this.alertController.create({
                title: 'Exit Application!',
                message: 'Are you sure to exit from application ?',
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
        });
    }
    showPasswordValue() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Show Password',
                duration: 1000,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
DemoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-demo',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\demo\demo.html"*/'<ion-content class="login-content" padding >\n  <ion-row class="logo-row">\n      <ion-col>\n        <img src="assets/imgs/sterlinglogo.png"/>\n        <br/>\n        <h4 style="text-align: center;">Sterling Tools</h4>\n      </ion-col>\n    </ion-row>\n  \n    <div >\n      <ion-list >\n          <div class="login-box">\n            \n                <ion-row>\n                  <ion-col>\n                    <ion-list inset>\n                      \n                     \n                      <div class="input-container">\n                        <ion-icon name="mail"  item-left ></ion-icon>\n                        <input class="input-field" placeholder="Username" type="name" [(ngModel)]="emailAddress" >\n                      </div>\n\n                      <div class="input-container">\n                        <ion-icon name="eye"  item-left ></ion-icon>\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n                      </div>\n                      \n                      \n                    </ion-list>\n                  </ion-col>\n                </ion-row>\n                \n                <ion-row>  \n                  <ion-col class="signup-col">\n                    <button ion-button class="submit-btn" full type="submit" style="text-transform: none;" class="bg-thime btn-round btn-text" (click)="loginBtnClick()">Login</button>\n                    <button ion-button class="submit-btn" full type="submit" style="text-transform: none;" class="bg-thime btn-round btn-text" (click)="registerBtnClick()" >Signup</button>\n\n                  </ion-col>\n                </ion-row>\n                \n             \n            </div>\n      </ion-list>\n    \n      \n    </div>\n</ion-content>'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\demo\demo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */]])
], DemoPage);

//# sourceMappingURL=demo.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductcategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wishlistupdated_wishlistupdated__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__productcategorydetail_productcategorydetail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viewcart_viewcart__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 *  Created By Lasting Erp 5/10/2020
 */








let ProductcategoryPage = class ProductcategoryPage {
    constructor(navCtrl, navParams, apiProvider, modalCtrl, app, platform, toastController, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.platform = platform;
        this.toastController = toastController;
        this.httpClient = httpClient;
        this.productCategoryList = [];
        this.productCategoryGridList = [];
        this.items = [];
        this.viewCartList = [];
        this.getProductCategoriesApi();
        this.getProductCategoriesApi1();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad VieworderPage');
        this.getProductCategoriesApi();
    }
    ngOnInit() {
        console.log('ngOnInit VieworderPage');
        this.viewCartApi();
        this.getProductCategoriesApi();
        this.getProductCategoriesApi1();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'ProductcategoryPage') {
                if (nav.canGoBack()) {
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
            }
        });
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    searchPage() {
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    addToCart(catId, strProductAdded) {
        this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + catId).subscribe((jsonResponse) => {
            this.obj = JSON.stringify(jsonResponse);
            console.log("Sent productsList response " + this.obj);
            console.log("Sent productsList id " + catId);
            this.showToastOnAddProductSingle(strProductAdded);
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getProductCategoriesApi();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.complete();
        }, 500);
    }
    getProductCategoriesApi() {
        console.log('getProductCategoriesApi called    ');
        const service = this.apiProvider.getProductCategories();
        service.subscribe((data) => {
            const resultado = data;
            this.productCategoryList = resultado;
            this.productTitle = data.title;
        });
    }
    getProductCategoriesApi1() {
        console.log('getProductCategoriesApi1 called    ');
        const service = this.apiProvider.getProductCategoriesGrid();
        service.subscribe((data) => {
            const resultado = data;
            this.productCategoryGridList = resultado;
            this.productTitle = data.title;
        });
    }
    itemdetailPage(catId, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__productcategorydetail_productcategorydetail__["a" /* ProductcategorydetailPage */], {
            catId: catId,
            name: name
        });
        console.log('Sent productsList id ' + catId);
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getTest1();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
                        // console.log('Length of cart ' + this.viewCartList.length);
                        if (this.viewCartList.length >= 1) {
                            console.log('Cart Filled ');
                            this.countProducts = this.viewCartList.length;
                            this.buttonIcon = "cart";
                        }
                        else {
                            console.log('Cart Empty ');
                            //  this.buttonIcon = "cart";
                            this.countProducts = 'Empty';
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
    }
    showToastOnAddProductSingle(strProductAdded) {
        const toast = this.toastController.create({
            message: 'Product Added in Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
};
ProductcategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-productcategory',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\productcategory\productcategory.html"*/'<ion-header>  \n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon class="menu-icon"\n        ><img src="assets/imgs/ic_menu.png"\n      /></ion-icon>\n    </button>\n    <ion-title\n      >Product Categories\n      <!-- <span float-right>\n        <ion-icon class="icon" (click)="searchPage()"\n          ><img src="assets/imgs/ic_search.png" width="100%;"\n        /></ion-icon>\n        <ion-icon class="icon" (click)="cartPage()"\n          ><img src="assets/imgs/ic_my_cart.png" width="100%;"\n        /></ion-icon>\n      </span> -->\n\n      <span float-right>\n        <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n        <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon>\n      </span>\n    </ion-title>\n  </ion-navbar>  \n</ion-header>\n\n<ion-content padding>\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="chevron-down-circle-outline"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing Product Categories."\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let productCategory of productCategoryList">\n        <ion-card >\n            <ion-card-header >\n                <div class="img-box" (click)="itemdetailPage(productCategory.term_id,productCategory.name)">\n                    <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n                </div>\n            </ion-card-header>\n            <ion-card-content >\n              <ion-item >\n                <ion-label>{{productCategory.name}}</ion-label>\n              </ion-item>  \n               \n                <div class="rateing">\n                    <div class="card-btn">\n                        <p class="" float-left>\n                            <span style="margin-left: 16px;color: black;"> Testing</span>\n                        </p>\n                        \n                    </div>\n                </div>\n            </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>  -->\n\n\n  <!-- <div class="column">\n    <div class="column" *ngFor="let productCategory of productCategoryList"  (click)="itemdetailPage(productCategory.term_id)" style="float: right;">\n      <img src="assets/imgs/productimage.jpg" style="width:90px;">\n      <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{productCategory.name}}</ion-label>\n    </div>\n  </div> -->\n\n  \n    <!-- <div class="column">\n      <img src="assets/imgs/productimage.jpg" style="width:110px;">\n      <ion-label style="color: black;margin-right: 8px;font-size: 13px;">Test</ion-label>\n    </div> -->  \n    <!-- <div class="column">\n      <img src="assets/imgs/productimage.jpg" style="width:90px;">\n    </div> -->\n    <!-- <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          ion-col\n        </ion-col>\n        <ion-col col-4>\n          ion-col\n        </ion-col>\n        <ion-col col-4>\n          ion-col\n        </ion-col>\n      </ion-row>\n    \n  \n    </ion-grid> -->\n\n    <!-- <ion-grid>\n      <ion-row text-center>\n        <ion-col col-6 *ngFor="let productCategory of productCategoryList" (click)="itemdetailPage(productCategory.term_id)">\n          <img src="assets/imgs/productimage.jpg" style="width:90px;">\n          <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{productCategory.name}}</ion-label>\n        </ion-col>\n      </ion-row>\n   </ion-grid> --> \n  \n   <ion-grid class="product-grid" >\n    <ion-row class="rowgrid" text-center style="height: 300px;">\n      <ion-col col-6\n        class="columngrid"\n        *ngFor="let productCategoryGrid of productCategoryGridList"\n        (click)="itemdetailPage(productCategoryGrid.catId)">\n        <ion-card>  \n          <ion-card-header style="justify-content: left">\n            <div\n              class="img-box"\n            >\n              <!-- <img src="assets/imgs/productimage.jpg" style="width: 130px;float: left;" /> -->\n\n              <img  [src]="productCategoryGrid.thumbnail"  style="width:200px;height:80px ;">\n\n            </div>\n            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n          </ion-card-header>\n          <ion-card-content>\n        \n            <!-- <ion-item>\n              <h5 style="font-size: 12px;">{{productCategory.name}}</h5> \n              <h5 style="font-size: 12px;">{{productCategory.regular_price}}</h5> \n            </ion-item> -->\n            \n            <div >\n              <div > \n                <span style="font-size: 12px;color: black;">{{productCategoryGrid.name}}</span>\n               \n              </div>\n             <!--  <div style="display: flex;"> \n                <span style="margin-top: 4px;">Test</span> \n                <span style="font-size: 12px;color: black;">{{productCategory.regular_price}}</span>\n              </div>-->\n\n              <div class="rating" >\n                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\n              </div>\n  \n            </div> \n\n           \n\n            <!-- <ion-item >\n              <h5 style="font-size: 12px;">{{featuredProducts.regular_price}}</h5> \n            </ion-item> -->\n\n            <!-- <div class="rateing">\n              <div class="card-btn">\n                <p class="" float-left>\n                  <button\n                    ion-button\n                    full\n                    class="bg-thime btn-round btn-text"\n                    style="margin-top: 3px; width: 130px;text-align: center;"\n                    (click)="addToCart(productCategoryGridList.catId,productCategoryGridList.name)"\n                  >\n                    Add To Cart\n                  </button>\n                </p>\n              </div>\n            </div> -->\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n  <!-- <ion-card class="card" *ngFor="let productCategory of productCategoryList"  (click)="itemdetailPage(productCategory.term_id)">\n    <ion-card-header>\n\n\n\n      <div class="img-box" >\n        <img src="assets/imgs/productimage.jpg" style="width:90px;">\n    </div> \n\n\n\n      <ion-item lines="none">\n        <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{productCategory.name}}</ion-label>\n      </ion-item> \n\n\n\n    </ion-card-header>\n  </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\productcategory\productcategory.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ProductcategoryPage);

//# sourceMappingURL=productcategory.js.map

/***/ })

},[401]);
//# sourceMappingURL=main.js.map