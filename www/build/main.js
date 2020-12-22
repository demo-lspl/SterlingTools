webpackJsonp([36],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_demo__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
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
        selector: 'page-register',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\register\register.html"*/'<ion-content class="login-content" padding>\n\n  <ion-row class="logo-row">\n\n      <ion-col>\n\n        <img src="assets/imgs/sterlinglogo.png"/>\n\n        <br/>\n\n        <h4>Sterling Tools</h4>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n    <div >\n\n      <ion-list >\n\n          <div class="login-box">\n\n            \n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-list inset>\n\n                      \n\n                     \n\n\n\n                      <div class="input-container">\n\n                        <ion-icon name="mail"  item-left ></ion-icon>\n\n                        <input class="input-field" placeholder="Enter Email Address" type="name" [(ngModel)]="emailAddress" >\n\n                      </div>\n\n\n\n                      <div class="input-container">\n\n                        <ion-icon name="person"  item-left ></ion-icon>\n\n                        <input class="input-field"  placeholder="Enter Name"  type="name"  [(ngModel)]="userName">\n\n                      </div>\n\n                      \n\n                    </ion-list>\n\n                  </ion-col>\n\n                </ion-row>\n\n                \n\n                <ion-row>  \n\n                  <ion-col class="signup-col">\n\n                    <button ion-button class="submit-btn" full type="submit" style="text-transform: none;" class="bg-thime btn-round btn-text" (click)="registerBtnClick()">Signup</button>\n\n                    <button ion-button class="submit-btn" full type="submit" style="text-transform: none;" class="bg-thime btn-round btn-text" (click)="backBtnClick()" >Back</button>\n\n\n\n                  </ion-col>\n\n                </ion-row>\n\n                \n\n             \n\n            </div>\n\n      </ion-list>\n\n    \n\n      \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchproductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__makeresponse_makeresponse__ = __webpack_require__(187);
/**
 * Generated class for the SearchproductsPage page.
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









let SearchproductsPage = class SearchproductsPage {
    constructor(navCtrl, navParams, httpClient, apiProvider, toastController, loadingController, app, platform, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.apiProvider = apiProvider;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.app = app;
        this.platform = platform;
        this.alertController = alertController;
        this.featuredProductsList = [];
        this.countProductsWishList = 0;
        this.countProductsCartLocal = 0;
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.strMake = navParams.get("make");
        this.strModel = navParams.get("model");
        this.strEngine = navParams.get("engine1");
        this.strYear = navParams.get("year");
        // if(this.strEngine = ''){
        //   console.log('ionViewDidLoad SearchproductsPage strEngine empty' );
        // }
        // else {
        //   console.log('ionViewDidLoad SearchproductsPage strEngine filled' + this.strEngine);
        // }
        if (this.strEngine) {
            this.strEngine = navParams.get("engine1");
        }
        else if (this.strEngine = '') {
            console.log('ionViewDidLoad SearchproductsPage strEngine empty');
        }
        console.log('received make SearchproductsPage' + this.strMake);
        console.log('received model SearchproductsPage' + this.strModel);
        console.log('received engine SearchproductsPage' + this.strEngine);
        console.log('received year SearchproductsPage' + this.strYear);
        console.log("Received product make " + this.strMake);
    }
    ngOnInit() {
        this.getProductsSearchApi();
        if (this.countProductsWishlistLocalUpdated === 0) {
            this.countProductsWishlistLocalUpdated = '';
            console.log('Entered');
        }
        if (this.countProductsCartLocalUpdated === 0) {
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
        this.strDataServer = 'No Data';
        this.checkNetwork();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'SearchproductsPage') {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                }
                else {
                }
            }
        });
        this.showLoadingControllerLaunch();
        // const service = this.apiProvider.getSearchData(this.strMake,this.strModel,this.strEngine,this.strYear);
        // service.subscribe((jsonResponse) => {
        //   const resultado = jsonResponse;
        //   this.featuredProductsList = resultado;
        //   this.obj = JSON.stringify(jsonResponse);
        //     if(resultado === null){
        //       this.showToastOnEmptyFeaturedProducts();
        //       console.log('data not available');
        //       this.strData = 'data not available';
        //     }
        //     else {
        //       // console.log('data available');
        //     }
        //   }); 
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
            this.showToastOnAddProduct(name);
        }
        else {
            this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
                this.obj = JSON.stringify(jsonResponse);
                console.log("Sent productsList response " + this.obj);
                console.log("Sent productsList id " + id);
                this.showToastOnAddProductSingle(this.strMake);
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
        if (localStorage.getItem('productsWishlist')) {
            productsWishlist = JSON.parse(localStorage.getItem('productsWishlist')); // get product list 
        }
        console.log("Sent productsList id " + id);
        console.log("Sent productsList name " + name);
        productsWishlist.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price });
        localStorage.setItem('productsWishlist', JSON.stringify(productsWishlist));
        ///this.buttonIcon = "home";
        this.showToastOnAddProductWishlist(name);
        this.countProductsWishlistLocalUpdated++;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    showToastOnEmptyFeaturedProducts() {
        const toast = this.toastController.create({
            message: "Products not available!",
            duration: 1000,
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
    showToastOnAddProductSingle(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
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
    checkNetwork() {
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
                //this.router.navigate(['/invoices']);
                // this.router.navigate(['/managecard']);
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
    showToastOnAddProductWishlist(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Wishlist : \n ' + strProductAdded + '\n',
            duration: 1000,
            position: "bottom",
        });
        toast.present();
    }
    moreInformationDetail(id, name, image, description, regular_price, make, model, year) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__makeresponse_makeresponse__["a" /* MakeresponsePage */], {
            id: id,
            name: name,
            image: image,
            description: description,
            regular_price: regular_price,
            make: make,
            model: model,
            year: year,
        });
        console.log("Sent product id " + id);
        console.log("Sent product name " + name);
        console.log("Sent product name " + regular_price);
    }
    getProductsSearchApi() {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                content: 'Please wait fetching data!',
            });
            yield loader.present();
            loader.present().then(() => {
                // const service = this.apiProvider.getOrders();   
                // service.subscribe((jsonResponse) => {      
                this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_mmey_search?make=' + this.strMake + '&model=' + this.strModel + '&engine=' + this.strEngine + '&year=' + this.strYear).subscribe(jsonResponse => {
                    if (jsonResponse) {
                        this.featuredProductsList = jsonResponse['result'];
                        this.obj = JSON.stringify(jsonResponse);
                        console.log('details available ' + this.obj);
                        loader.dismiss();
                    }
                    const myURL_body = jsonResponse['result'];
                    this.strResponse = myURL_body;
                    if (this.strResponse = 'null') {
                        console.log('details available obj empty ');
                        this.strDataServer = 'No data';
                    }
                    else {
                        console.log('details not available ');
                    }
                }, error => {
                    console.log(error);
                    // this.showToastOnProductError(error);
                });
            });
        });
    }
};
SearchproductsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-searchproducts',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\searchproducts\searchproducts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png" /></ion-icon>\n\n    </button>\n\n    <ion-title>Search\n\n      <span float-right>\n\n       \n\n\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n\n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n\n\n\n\n\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="search-main">\n\n\n\n\n\n   <ion-grid class="product-grid" style="margin-top: 40px;">\n\n    <ion-row class="rowgrid">\n\n      <ion-col class="columngrid" *ngFor="let featuredProducts of featuredProductsList ">\n\n        <ion-card>\n\n          <ion-card-header style="justify-content: left">\n\n            <div class="img-box">\n\n              <img [src]="featuredProducts.image" style="width:200px;height:80px ;"\n\n                (click)="moreInformationDetail(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)">\n\n            </div>\n\n            <ion-icon name="md-heart" class="text-light icon"\n\n              (click)="addToWishList(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)">\n\n            </ion-icon>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <ion-item>\n\n              <h5 style="font-size: 15px;text-align: -webkit-center;">{{featuredProducts.name}}</h5>\n\n            </ion-item>\n\n            <div>\n\n              <div *ngIf="featuredProducts.regular_price">\n\n                <h5 style="font-size: 13px;text-align: center;color: red;"> <span class="priceicon"\n\n                    style="color: red;">Price : </span> <span class="priceicon">$</span>\n\n                  {{featuredProducts.regular_price}} </h5>\n\n\n\n                <ion-item>\n\n                  <button ion-button full class="bg-thime btn-round btn-text"\n\n                    style="margin-top: 3px; text-align: center;height: 40px;"\n\n                    (click)="addToCart(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)">\n\n                    Add To Cart\n\n                  </button>\n\n                </ion-item>\n\n              </div>\n\n              <ion-item *ngIf="!featuredProducts.regular_price">\n\n                <button ion-button full class="bg-thime btn-round btn-text"\n\n                  style="margin-top: 3px; text-align: center;height: 40px;"\n\n                  (click)="addToCart(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)">\n\n                  Read More\n\n                </button>\n\n              </ion-item>\n\n            </div>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid> \n\n\n\n  <!-- <div *ngIf="!featuredProductsList || featuredProductsList.length === 0;else other_content">\n\n    <p>No data found</p>\n\n  </div>\n\n\n\n<ng-template #other_content>\n\n  \n\n \n\n  <ion-grid class="product-grid">\n\n    <ion-row class="rowgrid" text-center>\n\n      <ion-col col-6 class="columngrid" *ngFor="let featuredProducts of featuredProductsList |filter:searchText | paginate: {itemsPerPage: 10,currentPage: p}">\n\n        <ion-card>\n\n          <ion-card-header style="justify-content: left">\n\n            <div class="img-box">\n\n              <img [src]="featuredProducts.image" style="width:200px;height:80px ;"\n\n              (click)="moreInformationDetail(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)"            </div>\n\n            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n\n\n            <div>\n\n            \n\n              <h5 style="font-size: 10px;text-align: center;;margin-top: 15px;"> {{featuredProducts.name}}</h5>\n\n            </div>\n\n            <div>\n\n\n\n\n\n              <div *ngIf="featuredProducts.regular_price">\n\n                <h5 style="font-size: 10px;text-align: center;color: red;margin-top: 13px;"> <span class="priceicon"\n\n                    style="color: red;">Price : </span> <span class="priceicon">$</span>\n\n                  {{featuredProducts.regular_price}} </h5>\n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p style="width: 100%;font-size: 10px;" float-left>\n\n                      <button ion-button full class="bg-thime btn-round btn-text" \n\n                       style="font-size: 9px;"\n\n                       (click)="addToCart(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)">\n\n                        Add To Cart\n\n                      </button>\n\n                    </p>\n\n                  </div> \n\n                </div>\n\n              </div>\n\n\n\n              <div *ngIf="!featuredProducts.regular_price">\n\n                <h5 style="font-size: 10px;text-align: center;color: red;margin-top: 13px;"> Price Not Available</h5>\n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p style="width: 100%;font-size: 10px;" float-left>\n\n                      <button ion-button full class="bg-thime btn-round btn-text" \n\n                      style="font-size: 9px;"\n\n                      (click)="addToCart(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)">\n\n                        Read More\n\n                      </button>\n\n                    </p>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <pagination-controls (pageChange)="p = $event" previousLabel="Prev" nextLabel="Next"></pagination-controls>\n\n\n\n</ng-template> -->\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\searchproducts\searchproducts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], SearchproductsPage);

//# sourceMappingURL=searchproducts.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SearchType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(67);
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





// My Custom set of data 
var SearchType;
(function (SearchType) {
    SearchType["all"] = "";
    SearchType["movie"] = "movie";
    SearchType["series"] = "series";
    SearchType["episode"] = "episode";
})(SearchType || (SearchType = {}));
let ApiProvider = class ApiProvider {
    constructor(httpClient, loadingController, storage) {
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.storage = storage;
        this.httpClientFetch = [];
        this.urlCountries = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
        this.urlMake = 'http://busybanda.com/sterling-tools/api/mmey_make_search';
        // Storing the url from where I want to fetch the data
        this.url = 'https://www.omdbapi.com/';
        //The api key for it
        this.apiKey = 'ee67e267';
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
    searchMakeCategories() {
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_make_search')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getMakeCategories(make) {
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_model_search?make=' + make)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getEngineCategories(make, model) {
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_engine_search?make=' + make + '&model=' + model)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getYearCategories(make, model, engine) {
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_year_search?make=' + make + '&model=' + model + '&engine=' + engine)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getSearchData(make, model, engine, year) {
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_mmey_search?make=' + make + '&model=' + model + '&engine=' + engine + '&year=' + year)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getFeaturedProducts() {
        this.showFeaturedProductsLoader();
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_featured_product').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getFeaturedProducts1() {
        this.showFeaturedProductsLoader();
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_featured_product').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    getTest() {
        return this.httpClient.get('http://pridediesel.com/pridediesel/api/getdrivers').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.results));
    }
    getCartDetails() {
        return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_cart_items?' + 'custid=' + localStorage.getItem('Userid value')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.result));
    }
    allCountries() {
        return this.httpClient.get(this.urlCountries);
    }
    allMake() {
        return this.httpClient.get(this.urlMake);
    }
    getData1() {
        return this.httpClient.get('https://randomuser.me/api/?results=10').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => this.httpClientFetch = res.results));
        // .map(res => res.json());
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
                duration: 1500,
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
    showMakeLoader() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: 'Please wait fetching Make data!',
                duration: 3600,
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
};
ApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], ApiProvider);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__productcategory_productcategory__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
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
        selector: 'page-category ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\category\category.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png" style="width: 100%"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"Categories" | translate}}\n\n            <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>     \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n\n\n\n\n    \n\n\n\n    <div  > \n\n\n\n        <div class="man-fashion img" >\n\n            <ion-row style="height: 250px">\n\n                <ion-col col-5>\n\n                    <img src="assets/imgs/categoryfirst.png" >\n\n                </ion-col>\n\n                <ion-col col-7>\n\n                    <h6 class="text-white">PRODUCTS</h6>\n\n                    <p class="text-white" (click)="shirtsPage()">Car Gear Cover\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Air Brake Bleeder\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Steel Wheel\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Electronics\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <!-- <p class="text-white">Electronics\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p> -->\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    \n\n        <div class="man-fashion img" >\n\n            <ion-row style="height: 270px">\n\n                <ion-col col-5>\n\n                    <img src="assets/imgs/categorysecond.png" >\n\n                </ion-col>\n\n                <ion-col col-7>\n\n                    <h6 class="text-white">CATEGORIES</h6>\n\n                    <p class="text-white" (click)="shirtsPage()">CLUTCH\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">BRAKE\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">HYDRAULIC CYLINDERS\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">HOSES\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">KITS\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    \n\n        <div class="man-fashion img" >\n\n            <ion-row style="height: 250px;">\n\n                <ion-col col-5>\n\n                    <img src="assets/imgs/categorythird.png" >\n\n                </ion-col>\n\n                <ion-col col-7>\n\n                    <h6 class="text-white">ACCESSORIES</h6>\n\n                    <p class="text-white" (click)="shirtsPage()">Tools\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Clutch\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Bulbs\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                    <p class="text-white">Break\n\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                    </p>\n\n                   \n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    \n\n\n\n    </div>\n\n\n\n   \n\n \n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\category\category.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */]])
], CategoryPage);

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewall_viewall__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productcategorydetail_productcategorydetail__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__itemdetail_itemdetail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser_ngx__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__searchproducts_searchproducts__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__searchproductsupdated_searchproductsupdated__ = __webpack_require__(191);
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














let HomePage = class HomePage {
    constructor(navCtrl, modalCtrl, toastController, apiProvider, httpClient, loadingController, rendererVehicle, rendererCategories, _elRef, inAppBrowser, platform, app, alertController) {
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
        this.alertController = alertController;
        this.productsLocalCart = [];
        this.viewCartList = [];
        this.accordionExpandedVehicle = false;
        this.accordionExpandedCategory = false;
        this.icon = "arrow-forward";
        this.icon1 = "arrow-forward";
        this.elements = document.getElementsByClassName("columngrid");
        this.featuredProductsList = [];
        this.featuredCategoryList = [];
        this.featuredProductCategoryList = [];
        this.testStr = 'Hello, World,\nand all you beautiful people in it!';
        this.buttonIcon = "home";
        this.countProductsWishList = 0;
        this.countProductsCartLocal = 0;
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.tutorialHidden = true;
        this.myimage = 'https://aws1.discourse-cdn.com/ionicframework/original/3X/c/f/cf7af661f0bae7cca915258f2b8d6b3937fccda4.png';
        this.countClick = 0;
        this.countClickAddToCart = 0;
        this.makeList = [];
        this.modelList = [];
        this.modeKeys = [];
        this.httpClientFetch = [];
        this.varoutput = [];
        this.productCategoryList = [];
        this.engineList = [];
        this.yearList = [];
        this.picToView = 'cart';
        this.visible = false;
        this.hide = true;
        this.hide1 = true;
        this.hide2 = true;
        this.hide3 = true;
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
        this.checkStatus = this.localStorageItem();
    }
    ngOnInit() {
        this.vartoday = new Date();
        var dd = String(this.vartoday.getDate()).padStart(2, '0');
        var mm = String(this.vartoday.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = this.vartoday.getFullYear();
        this.vartoday = mm + '/' + dd + '/' + yyyy;
        // document.write(today);
        console.log('Today date ' + this.vartoday);
        this.hide = !this.hide;
        this.hide1 = !this.hide1;
        this.hide2 = !this.hide2;
        this.hide3 = !this.hide3;
        /*
            Local Wishlist
        */
        if (this.countProductsWishlistLocalUpdated === 0) {
            this.countProductsWishlistLocalUpdated = '';
            console.log('Entered');
        }
        if (this.countProductsCartLocalUpdated === 0) {
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
        this.getAllProductsCategoriesList();
        if (this.countClick > 1) {
            console.log('Clicked More than one');
            this.showToastOnWishlist();
        }
        else {
        }
        this.rendererVehicle.setElementStyle(this._elRef.nativeElement, "webkitTransition", "max-height 500px, padding 500ms");
        this.rendererCategories.setElementStyle(this._elRef.nativeElement, "webkitTransition", "max-height 500px, padding 1200ms");
        this.getAllFeaturedProducts();
        this.getAllFeaturedProductsCategories();
        // this.getCategoriesApi();
        this.viewCartApi();
        this.getMakeApi();
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
    searchData(makeValue, strTestValue2, strEngineListSelectedValue, year) {
        if (!this.makeValue) {
            console.log('issue make');
            this.showToastOnEmptyMake();
        }
        else if (!this.strModelValue) {
            this.showToastOnEmptyModel();
            console.log('issue model');
        }
        // else if (!this.strEngineValue) {
        //   this.strEngineValueUpdated = this.strEngineValue;
        //   this.showToastOnEmptyModel();
        //   console.log('issue engine' + this.strEngineValueUpdated);
        // }
        else {
            console.log('success!!!!!!');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__searchproducts_searchproducts__["a" /* SearchproductsPage */], {
                make: this.makeValue,
                model: this.strTestValue2,
                engine: this.strModelValue,
                year: this.yearValue
            });
            console.log("Sent product make " + this.makeValue);
            console.log("Sent product model " + this.strModelValue);
            console.log("Sent product engine " + this.strEngineListSelectedValue);
            console.log("Sent product year " + this.yearValue);
        }
    }
    toggle() {
        this.visible = !this.visible;
    }
    localStorageItem() {
        if (localStorage.getItem("isSigned") === "true") {
            console.log('isSigned true');
            return true;
        }
        else {
            console.log('isSigned false');
            return false;
        }
        ;
    }
    //  hide(){
    //   if(this.hideMe){
    //     console.log('Current State' + this.hideMe);
    //     this.hideMe=false;
    //   }
    //   else {
    //     console.log('Current State..' + this.hideMe);
    //     this.hideMe=true;
    //   }
    //   }
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
    //  addProductToCart(id, name,image,description,regular_price) {
    //   if (localStorage.getItem("Userid value") === null) {
    //     let products = [];
    //     if (localStorage.getItem('products')) {
    //       products = JSON.parse(localStorage.getItem('products')); // get product list 
    //     } 
    //     console.log("Added productsList id " + id);
    //     console.log("Added productsList name " + name);
    //     // products.push({'ProductId' : id , 'ProductName' : name , 'ProductQuantity': '1' ,'ProductImage' : image ,'ProductDescription':description , 'ProductRegularPrice' : regular_price} ); 
    //     // localStorage.setItem('products', JSON.stringify(products)); 
    //     this.showToastOnAddProductLocal(name);
    //     this.countProductsCartLocalUpdated++;
    //     this.countClickAddToCart++;
    //     if(this.countClickAddToCart>1){
    //       console.log('Product cannot be added ');
    //       this.showToastOnAlreadyAddedProduct(name);
    //     }
    //     else {
    //       console.log('Product can be added');
    //       products.push({'ProductId' : id , 'ProductName' : name , 'ProductQuantity': '1' ,'ProductImage' : image ,'ProductDescription':description , 'ProductRegularPrice' : regular_price} ); 
    //       localStorage.setItem('products', JSON.stringify(products)); 
    //       localStorage.setItem('ProductCount',this.countClick);
    //     }
    //   }  
    //   else { 
    //     this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
    //           this.obj = JSON.stringify(jsonResponse);
    //           console.log("Sent productsList response " + this.obj);
    //           console.log("Sent productsList id " + id);
    //           this.showToastOnAddProductServer(name);
    //           // this.countProductsCart++;
    //           this.countProductsCartLocalUpdated++;
    //         });
    //   }   
    // } 
    addProductToCart(id, name, image, description, regular_price) {
        if (localStorage.getItem("Userid value") === null) {
            let products = [];
            if (localStorage.getItem('products')) {
                products = JSON.parse(localStorage.getItem('products')); // get product list 
            }
            console.log("Added productsList id " + id);
            console.log("Added productsList name " + name);
            products.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price });
            localStorage.setItem('products', JSON.stringify(products));
            this.showToastOnAddProductLocal(name);
            this.countProductsCartLocalUpdated++;
            this.countClickAddToCart++;
            // if(this.countClickAddToCart>1){
            //   console.log('Product cannot be added ');
            //   this.showToastOnAlreadyAddedProduct(name);
            // }
            // else {
            //   console.log('Product can be added');
            //   products.push({'ProductId' : id , 'ProductName' : name , 'ProductQuantity': '1' ,'ProductImage' : image ,'ProductDescription':description , 'ProductRegularPrice' : regular_price} ); 
            //   localStorage.setItem('products', JSON.stringify(products)); 
            //   localStorage.setItem('ProductCount',this.countClick);
            // }
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
    addToWishList(id, name, image, description, regular_price, x, date) {
        this.visible = !this.visible;
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
        productsWishlist.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price, ProductDateCreated: this.vartoday });
        localStorage.setItem('productsWishlist', JSON.stringify(productsWishlist));
        this.buttonIcon = "home";
        this.showToastOnAddProductWishlist(name);
        this.countProductsWishlistLocalUpdated++;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    wishlistPage() {
        console.log('wishlistPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getAllFeaturedProducts();
        this.getAllFeaturedProductsCategories();
        this.viewCartApi();
        this.getMakeApi();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.complete();
        }, 500);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__viewall_viewall__["a" /* ViewallPage */]);
    }
    ionChange(event) {
        console.log('Entered value ' + event.value);
        this.strTestValue4 = event.value;
        // if(this.strTestValue4.length <= 2) {
        //   this.showToastOnLengthProduct();
        //   return;
        // }
        // if(this.strTestValue4.length<=2)
        // {
        //     console.log('Length issue');
        //     this.showToastOnLengthProduct();
        // }
    }
    //   productDetailPage1(searchProductName) {
    //      if(searchProductName){
    //       console.log('filled');
    //           this.navCtrl.push(SearchproductsupdatedPage, {
    //       input: this.searchProductName,
    //  });
    //     console.log('Sent Search value' + this.searchProductName)
    //     }
    //     else {
    //       console.log('empty');
    //       this.showToastOnEmptyProduct();
    //     }
    //   }
    productDetailPage2(catId) {
        if (this.companyName) {
            console.log('failure passed company name');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */], {
                catId: catId,
            });
        }
        else if (this.searchProductName) {
            console.log('failure passed search name' + this.searchProductName);
            //  if(this.strTestValue4.length <= 2) {
            //     this.showToastOnLengthProduct();
            //  }
            //  else {
            //     this.navCtrl.push(SearchproductsupdatedPage, {
            //      input: this.searchProductName,
            //         });
            //  }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__searchproductsupdated_searchproductsupdated__["a" /* SearchproductsupdatedPage */], {
                input: this.searchProductName,
            });
        }
        else {
            console.log('success passed');
        }
    }
    searchData2(strMakeListSelectedValue, strModelListSelectedValue, engine, year) {
        // this.navCtrl.push(SearchproductsPage, {
        //       make: this.makeValue,
        //       model: this.modelValue,
        //       engine:this.engineValue,
        //       year:this.yearValue
        //     });
        console.log("Sent product make " + this.makeValue);
        console.log("Sent product model " + this.modelValue);
        console.log("Sent product engine " + this.strTestValue3);
        console.log("Sent product year " + this.yearValue);
    }
    productDetailPage(id, name, regular_price) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__productcategorydetail_productcategorydetail__["a" /* ProductcategorydetailPage */], {
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
            this.rendererVehicle.setElementStyle(this.cardContentVehicle.nativeElement, "max-height", "1500px");
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
    // getAllFeaturedProducts() {
    //     const service = this.apiProvider.getFeaturedProducts();
    //     service.subscribe((jsonResponse) => {
    //       const resultado = jsonResponse;
    //       this.featuredProductsList = resultado;
    //       this.obj = JSON.stringify(jsonResponse);
    //         if(resultado === null){
    //           this.showToastOnEmptyFeaturedProducts();
    //           console.log('data not available');
    //           this.strData = 'data not available';
    //         }
    //         else {
    //           // console.log('data available');
    //         }
    //     });
    //   } 
    getAllFeaturedProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                content: 'Please wait loading products!',
            });
            yield loader.present();
            loader.present().then(() => {
                // const service = this.apiProvider.getOrders();   
                // service.subscribe((jsonResponse) => {      
                this.httpClient.get('http://busybanda.com/sterling-tools/api/get_featured_product').subscribe(jsonResponse => {
                    if (jsonResponse) {
                        this.featuredProductsList = jsonResponse['result'];
                        this.obj = JSON.stringify(jsonResponse);
                        //   console.log('details available '+ this.obj );
                        loader.dismiss();
                    }
                    const myURL_body = jsonResponse['result'];
                    this.strData = myURL_body;
                    if (this.strData = 'null') {
                        console.log('details available obj empty ');
                        this.strData = 'No data';
                    }
                    else {
                        console.log('details not available ');
                    }
                }, error => {
                    console.log(error);
                    //this.showToastOnProductError(error);
                });
            });
        });
    }
    // getAllFeaturedProductsCategories() {
    //     const service = this.apiProvider.getProductCategoriesGrid();
    //     service.subscribe((jsonResponse) => {
    //       const resultado = jsonResponse;
    //       this.featuredProductCategoryList = resultado;
    //       this.obj = JSON.stringify(jsonResponse);
    //       this.strData = 'No data available';
    //         if(resultado === null){
    //           this.showToastOnEmptyFeaturedProducts();
    //         }
    //         else {
    //           //console.log('data available');
    //         }
    //     });  
    //   }   
    getAllFeaturedProductsCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            // const loader = await this.loadingController.create({
            //   content: 'Please wait fetching orders!',
            // });
            // await loader.present();
            // loader.present().then(() => {      
            // const service = this.apiProvider.getOrders();   
            // service.subscribe((jsonResponse) => {      
            this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_category_grid').subscribe(jsonResponse => {
                if (jsonResponse) {
                    this.featuredProductCategoryList = jsonResponse['result'];
                    this.obj = JSON.stringify(jsonResponse);
                    // console.log('details available '+ this.obj );
                    // loader.dismiss(); 
                }
                const myURL_body = jsonResponse['result'];
                this.strData = myURL_body;
                if (this.strData = 'null') {
                    console.log('details available obj empty ');
                    this.strData = 'No data';
                }
                else {
                    console.log('details not available ');
                }
            }, error => {
                console.log(error);
                // this.showToastOnProductError(error);
            });
            // });
        });
    }
    onClear() {
        this.searchProductName = '';
    }
    // getAllProductsCategoriesList() {
    //   const service = this.apiProvider.getProductCategories();
    //   service.subscribe((jsonResponse) => {
    //     const resultado = jsonResponse;
    //     this.productCategoryList = resultado;
    //     this.obj = JSON.stringify(jsonResponse);
    //     this.strData = 'No data available';
    //     if(this.productCategoryList.name = 'Uncategorized'){
    //       console.log('Uncategorized available');
    //       //this.productCategoryList.splice(0);
    //       //this.productCategoryList.filter(item => item !== "Uncategorized")
    //       this.productCategoryList.splice(0,1);
    //     }
    //     else {
    //       console.log('Uncategorized not available');
    //     }
    //       if(resultado === null){
    //         this.showToastOnEmptyFeaturedProducts();
    //       }
    //       else {
    //        // console.log('data available getAllProductsCategoriesList' + this.obj);
    //       }
    //       for (const entry of this.productCategoryList) {
    //         // console.log('Dynamic Ids ' + entry.catId);
    //          this.strCateid = entry.catId;
    //       }
    //   });
    // }
    // getCategoriesApi(){
    //     // console.log('getProductCategoriesApi called    ');  
    //     const service = this.apiProvider.getProductCategories();
    //     service.subscribe((data) => {
    //         const resultado = data;
    //         this.featuredCategoryList = resultado;
    //         this.productTitle = data.title;
    //     }); 
    //   }
    getAllProductsCategoriesList() {
        return __awaiter(this, void 0, void 0, function* () {
            // const loader = await this.loadingController.create({
            //   content: '',
            // });
            // await loader.present();
            // loader.present().then(() => {      
            // const service = this.apiProvider.getOrders();   
            // service.subscribe((jsonResponse) => {      
            this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_category').subscribe(jsonResponse => {
                if (jsonResponse) {
                    this.productCategoryList = jsonResponse['result'];
                    this.obj = JSON.stringify(jsonResponse);
                    console.log('details available ' + this.obj);
                    // loader.dismiss(); 
                }
                const myURL_body = jsonResponse['result'];
                this.strData = myURL_body;
                if (this.strData = 'null') {
                    console.log('details available obj empty ');
                    this.strData = 'No data';
                }
                else {
                    console.log('details not available ');
                }
                if (this.productCategoryList.name = 'Uncategorized') {
                    console.log('Uncategorized available');
                    //this.productCategoryList.splice(0);
                    //this.productCategoryList.filter(item => item !== "Uncategorized")
                    this.productCategoryList.splice(0, 4);
                }
                else {
                    console.log('Uncategorized not available');
                }
            }, error => {
                console.log(error);
                //this.showToastOnProductError(error);
            });
            // });
        });
    }
    getCategoriesApi() {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                content: '',
            });
            yield loader.present();
            loader.present().then(() => {
                // const service = this.apiProvider.getOrders();   
                // service.subscribe((jsonResponse) => {      
                this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_category').subscribe(jsonResponse => {
                    if (jsonResponse) {
                        this.featuredCategoryList = jsonResponse['result'];
                        this.obj = JSON.stringify(jsonResponse);
                        console.log('details available ' + this.obj);
                        loader.dismiss();
                    }
                    // const myURL_body = jsonResponse['result'];
                    // this.strResponse = myURL_body;
                    //  if(this.strResponse = 'null'){
                    //   console.log('details available obj empty ' );
                    //   this.strDataServer = 'No data';
                    //  }
                    //   else { 
                    //     console.log('details not available ' );
                    //   }
                }, error => {
                    console.log(error);
                    // this.showToastOnProductError(error);
                });
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
    getCategories(value) {
        console.info("Selected Product category : ", value);
        console.info("Selected Product strCateid : ", this.strCateid);
        // this.strModelListSelectedValue = modelValue;
    }
    testValue() {
        console.info('testValue');
    }
    testValue1() {
        console.info('testValue1');
    }
    getMakeApi() {
        //console.log('getMakeApi called    ');
        const service = this.apiProvider.searchMakeCategories();
        service.subscribe((data) => {
            const resultado = data;
            this.makeList = resultado;
            this.strMakeListValue = resultado;
        });
    }
    getModelApi(strMakeListSelectedValue) {
        console.log('getModelApi called    ');
        const service = this.apiProvider.getMakeCategories(strMakeListSelectedValue);
        service.subscribe((data) => {
            const resultado = data;
            this.modelList = resultado;
            this.strMakeListSelectedValue = resultado;
            this.strModelListSelectedValue = resultado;
            this.strEngineListSelectedValue = resultado;
            this.obj = JSON.stringify(data);
            // console.log('Selected model   ' + this.strTestValue);
        });
    }
    triggerMeModel(value) {
        this.showLoadingControllerLaunch();
        console.log("selected value", value);
        this.strTestValue1 = value;
        console.log("selected strTestValue1", this.strTestValue1);
        this.getEngineApi(this.makeValue, this.strTestValue1);
    }
    triggerMeEngine(value) {
        console.log("selected value", value);
        this.strTestValue2 = value;
        console.log("selected strTestValue2", this.strTestValue2);
        this.getYearApi(this.makeValue, this.strTestValue1, this.strTestValue2);
        console.log('Selected engine   ' + this.strTestValue2);
    }
    triggerMeYear(value) {
        console.log("selected value", value);
        this.strTestValue3 = value;
        console.log("selected strTestValue3", this.strTestValue3);
        this.getYearApi(this.makeValue, this.strTestValue2, this.strTestValue3);
    }
    getEngineApi(strMakeListSelectedValue, strModelListSelectedValue) {
        console.log('getEngineApi called    ' + this.strTestValue1);
        const service = this.apiProvider.getEngineCategories(strMakeListSelectedValue, this.strTestValue1);
        service.subscribe((data) => {
            const resultado = data;
            this.engineList = resultado;
            this.strMakeListSelectedValue = resultado;
            this.strModelListSelectedValue = resultado;
            this.strModelListSelectedValue = this.modelValue;
            this.strEngineListSelectedValue = this.engineValue;
            console.log(' api response  make ' + strMakeListSelectedValue);
            console.log(' api response  model ' + strModelListSelectedValue);
            console.log(' api response  engine ' + this.strEngineListSelectedValue);
        });
    }
    getYearApi(strMakeListSelectedValue, strModelListSelectedValue, strEngineListSelectedValue) {
        console.log('getYearApi called    ');
        const service = this.apiProvider.getYearCategories(strMakeListSelectedValue, strModelListSelectedValue, strEngineListSelectedValue);
        service.subscribe((data) => {
            const resultado = data;
            this.yearList = resultado;
            this.strMakeListSelectedValue = resultado;
            this.strModelListSelectedValue = resultado;
            console.log('Engine api response   ' + resultado);
        });
    }
    makeDropDownValue() {
        this.strMakeListSelectedValue = this.makeValue;
        this.getModelApi(this.strMakeListSelectedValue);
        console.log("Selected make:  ", this.makeValue);
        //  this.engineValue ='';
        //  this.yearValue = '';     
        // this.strTestValue1 = '';
    }
    searchVehicleData(makeValue, strTestValue2, strTestValue3, year) {
        if (!this.makeValue) {
            console.log('issue make');
            this.showToastOnEmptyMake();
        }
        else if (!this.strTestValue1) {
            this.showToastOnEmptyModel();
            console.log('issue model');
        }
        else {
            console.log('success!!!!!!');
            // this.engineKey = strTestValue2;
            console.log('issue engine' + this.strTestValue2);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__searchproducts_searchproducts__["a" /* SearchproductsPage */], {
                make: this.makeValue,
                model: this.strTestValue1,
                engine1: this.strTestValue2,
                year: this.yearValue
            });
            console.log("Sent product make " + this.makeValue);
            console.log("Sent product model " + this.strTestValue1);
            console.log("Sent product engine " + strTestValue2);
            console.log("Sent product engine value " + this.engineKey);
            console.log("Sent product year " + this.yearValue);
        }
    }
    getOuterNametushar(event) {
        console.log("getOuterNametushar called  " + this.engineValue);
        // this.strDynamicId = this.companyName;
    }
    readMoreLocal(id, name, image, description, regular_price) {
        this.showToastOnPriceEmptyProducts();
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
                        console.log('View cart length ' + this.viewCartList.length);
                        console.log('All Json Response' + resultado);
                        if (this.viewCartList) {
                            this.countProductsCartLocalUpdated = this.viewCartList.length;
                        }
                        else {
                            this.countProductsCartLocalUpdated = this.countProductsCart;
                        }
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
    showToastOnAddProductLocal(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Local Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
    showToastOnAlreadyAddedProduct(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product already Added in Local Cart : \n ' + strProductAdded,
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
    showToastOnAddProductWishlist(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Wishlist : \n ' + strProductAdded + '\n',
            duration: 1000,
            position: "bottom",
        });
        toast.present();
    }
    showToastOnAddProduct(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Cart : \n ' + strProductAdded + '\n',
            duration: 1000,
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
    showToastOnEmptyProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Input Product ',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnLengthProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Min length of Product should be 3',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    callMakeApi() {
        this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_make_search').subscribe((response) => {
            const resultado = response;
            this.makeList = resultado;
            this.modeKeys = resultado;
        });
    }
    showMakeLoader() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: 'Please wait fetching Make!',
                duration: 600,
            });
            yield loading.present();
        });
    }
    showToastOnEmptyMake() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Please select Make ',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyModel() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Please select Model ',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_12__capacitor_core__["a" /* Plugins */];
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
                //this.router.navigate(['/invoices']);
                // this.router.navigate(['/managecard']);
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
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_11" /* ViewChild */])("cc"),
    __metadata("design:type", Object)
], HomePage.prototype, "cardContentVehicle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_11" /* ViewChild */])("cc1"),
    __metadata("design:type", Object)
], HomePage.prototype, "cardContentCategory", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["E" /* Input */])("title"),
    __metadata("design:type", String)
], HomePage.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["E" /* Input */])("title"),
    __metadata("design:type", String)
], HomePage.prototype, "Elem", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: "page-home",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\home\home.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png" /></ion-icon>\n\n    </button>\n\n\n\n    <!-- <p *ngIf="result.length === 0">No matching Result found</p>   -->\n\n    <!-- <div *ngIf="featuredProductsList; else elseStatement" class="checkFeaturedProducts">  -->\n\n    <!-- <ng-template *ngIf="role === \'admin\';then asscom else unit"></ng-template> -->\n\n\n\n\n\n     <ion-title>\n\n      Products\n\n      <span float-right>\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n      </span>\n\n    </ion-title> \n\n\n\n    <!-- <img src="assets/sterlinglogo.png"  style="width:30px;height:30px ;"> -->\n\n      <!-- <span float-right>\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n      </span> -->\n\n\n\n\n\n  </ion-navbar>\n\n  <!-- <div class="custom-id"  >\n\n    <ion-item class="custom" >\n\n      <ion-select  \n\n          (ionChange)="getOuterName()" \n\n          [(ngModel)]="companyName" \n\n          placeholder = "All Products"\n\n          okText="Ok"\n\n          cancelText="Cancel" \n\n          class="testing">\n\n        <ion-option *ngFor="let companies of productCategoryList" \n\n          [value]="companies.catId" >\n\n          {{companies.name}}\n\n        </ion-option>\n\n      </ion-select>\n\n      <ion-icon name="md-search" class="text-light icon"></ion-icon>\n\n    </ion-item>\n\n    <ion-searchbar \n\n          showCancelButton="focus" \n\n          cancelButtonText="Custom Cancel" \n\n          placeholder="Search Products" \n\n           [(ngModel)]="searchProductName" \n\n           (click)="productDetailPage2(companyName)">\n\n    </ion-searchbar>\n\n  </div>   -->\n\n\n\n\n\n  <!-- <div>\n\n    <ion-select  \n\n          (ionChange)="getOuterName()" \n\n          [(ngModel)]="companyName" \n\n          placeholder = "All Products"\n\n          okText="Ok"\n\n          cancelText="Cancel" \n\n          class="testing">\n\n        <ion-option *ngFor="let companies of productCategoryList" \n\n          [value]="companies.catId" >\n\n          {{companies.name}}\n\n        </ion-option>\n\n      </ion-select>\n\n    <ion-input placeholder="Enter Input.. "></ion-input>\n\n   \n\n    <button ion-button (click)="someThingLikeLogOut()" style="align-self:auto;">\n\n      <ion-icon name="search" style="    width: 21px;height: 30px;"></ion-icon>\n\n    </button>\n\n  </div> -->\n\n\n\n  <!-- <div class="maininput">\n\n    <ion-item>\n\n      <ion-select (ionChange)="getOuterName()" [(ngModel)]="companyName" placeholder="All Products" okText="Ok"\n\n        cancelText="Cancel" class="testing">\n\n        <ion-option *ngFor="let companies of productCategoryList" [value]="companies.catId">\n\n          {{companies.name}}\n\n        </ion-option>\n\n      </ion-select>\n\n\n\n      <ion-input placeholder="Search" style="height: 40px;"></ion-input>\n\n      <button item-end ion-button style="align-self: flex-end;padding: 19px;">\n\n        <ion-icon name="md-search"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </div> -->\n\n\n\n\n\n  <!-- <ion-item \n\n  text-center>\n\n    <ion-select (ionChange)="getOuterName()" [(ngModel)]="companyName" placeholder="All Products" okText="Ok"\n\n    cancelText="Cancel" class="testing">\n\n    <ion-option *ngFor="let companies of productCategoryList" [value]="companies.catId">\n\n      {{companies.name}}\n\n    </ion-option>\n\n  </ion-select>\n\n\n\n\n\n    <ion-input type="text" placeholder="Search"   [(ngModel)]="searchProductName" ></ion-input>\n\n    <button item-end ion-button >\n\n      <ion-icon name="md-search" (click)="productDetailPage2(companyName)" ></ion-icon>\n\n    </button>\n\n   </ion-item> -->\n\n\n\n  <!-- <ion-item>\n\n    <ion-select placeholder="Select One">\n\n      <ion-option value="f">Female</ion-option>\n\n      <ion-option value="m">Male</ion-option>\n\n    </ion-select>\n\n    <ion-input placeholder="Enter Input"></ion-input>\n\n   \n\n    <button ion-button (click)="someThingLikeLogOut()" style="align-self:auto;">\n\n      <ion-icon name="search" style="    width: 21px;height: 30px;"></ion-icon>\n\n    </button>\n\n  </ion-item> -->\n\n\n\n  <!-- <ion-item>\n\n    <ion-select placeholder="All Products">\n\n      <ion-option value="f">Kit</ion-option >\n\n      <ion-option  value="m">Sensors</ion-option >\n\n    </ion-select>\n\n    <ion-input placeholder="Enter Input"></ion-input>\n\n    <button ion-button (click)="someThingLikeLogOut()" style="align-self:auto;">\n\n      <ion-icon name="search" style="    width: 21px;height: 30px;"></ion-icon>\n\n    </button>\n\n  </ion-item> -->\n\n\n\n\n\n\n\n\n\n  <div class="main-searchbar">\n\n\n\n  <ion-item class="custom">\n\n    \n\n    <ion-select  \n\n   \n\n    [(ngModel)]="companyName" \n\n    placeholder = "All Products"\n\n    okText="Ok"\n\n    cancelText="Cancel" \n\n    class="testing">\n\n  <ion-option *ngFor="let companies of productCategoryList" \n\n    [value]="companies.catId" >\n\n    {{companies.name}}\n\n  </ion-option>\n\n</ion-select>\n\n <ion-icon name="md-search" class="text-light icon"></ion-icon>\n\n    <ion-input placeholder="Search Products"  [(ngModel)]="searchProductName" ></ion-input>\n\n   \n\n</ion-item>\n\n<button ion-button  style="align-self:auto;">\n\n  <ion-icon name="search" (click)="productDetailPage2(companyName)"></ion-icon>\n\n</button>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n  <!-- <div class="custom-id"  >\n\n    <ion-item class="custom" >\n\n      <button ion-button (click)="someThingLikeLogOut()" style="align-self:auto;">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="someThingLikeLogOut()" style="align-self:auto;">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </div> -->\n\n\n\n  <!-- <ion-item>\n\n    <ion-label position="floating" style="font-size: 10px;">Floating Label</ion-label>\n\n    <ion-input style="width: 100px;"></ion-input>\n\n  \n\n    <button ion-button (click)="someThingLikeLogOut()" style="align-self:auto;">\n\n      <ion-icon name="search"></ion-icon>\n\n    </button>\n\n  </ion-item> -->\n\n\n\n  <!-- <div class="custom-id"  >\n\n    <ion-item class="custom" >\n\n      <ion-select  \n\n      (ionChange)="getOuterName()" \n\n      [(ngModel)]="companyName" \n\n      placeholder = "All Products"\n\n      okText="Ok"\n\n      cancelText="Cancel" \n\n      class="testing">\n\n    <ion-option *ngFor="let companies of productCategoryList" \n\n      [value]="companies.catId" >\n\n      {{companies.name}}\n\n    </ion-option>\n\n  </ion-select>\n\n    <input class="input-field"  placeholder="Password"  type="text"  >\n\n    </ion-item>\n\n  </div> -->\n\n\n\n\n\n  <!-- <div class="custom-id"  >\n\n    <ion-item class="custom" >\n\n      <ion-select  \n\n          (ionChange)="getOuterName()" \n\n          [(ngModel)]="companyName" \n\n          placeholder = "All Products"\n\n          okText="Ok"\n\n          cancelText="Cancel" \n\n          class="testing"\n\n          style="color: red;">\n\n        <ion-option *ngFor="let companies of productCategoryList" \n\n          [value]="companies.catId" >\n\n          {{companies.name}}\n\n        </ion-option>\n\n      </ion-select>\n\n      <ion-icon name="md-search" class="text-light icon"></ion-icon>\n\n    </ion-item>\n\n    <ion-input \n\n          showCancelButton="focus" \n\n          cancelButtonText="Custom Cancel" \n\n          placeholder="Search Products.." \n\n          \n\n           [(ngModel)]="searchProductName" \n\n           (click)="productDetailPage2(companyName)">\n\n    </ion-input>\n\n\n\n    <button ion-button (click)="someThingLikeLogOut()" style="align-self:auto;">\n\n      <ion-icon name="search"></ion-icon>\n\n    </button>\n\n  </div> -->\n\n\n\n  <!-- <div style="width: 100%;">\n\n    <input type="text" style="float: left; width: 100px;" id="url" value="Paste URL here">\n\n    <input type="text" style="float: left; width: 100px;" id="url" value="Paste URL here">\n\n    <button style="font-size: 10px; margin: 2px; float: left;" id="i">Go</button>\n\n</div>\n\n  -->\n\n\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="chevron-down-circle-outline" pullingText="Pull to refresh"\n\n      refreshingSpinner="circles" refreshingText="Refreshing Products.">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <div class="banner-text">\n\n        <p [innerHTML]="slide.description"></p>\n\n        <small [innerHTML]="slide.smalltext"></small>\n\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <!-- <p (click)="viewAllCategories()">\n\n    Featured Items\n\n    <small class="bg-thime btn-round text-white" float-right> View All </small>\n\n  </p> -->\n\n\n\n  <!-- <p (click)="viewAllCategories()">\n\n    Featured Items--\n\n    <small class="bg-thime btn-round text-white" float-right>{{countProductsWishlistLocalUpdated}} </small>\n\n  </p>\n\n  <p (click)="viewAllCategories()">\n\n    Featured Items--\n\n    <small class="bg-thime btn-round text-white" float-right>{{countProductsCartLocalUpdated}} </small>\n\n  </p> -->\n\n\n\n\n\n\n\n  <div class="card-main">\n\n    <ion-card>\n\n      <ion-card-header (click)="toggleAccordionVehicle()">\n\n        <ion-list>\n\n          <ion-item>\n\n            <button ion-button clear small icon-only item-right>\n\n              <ion-icon color="light" [name]="icon"></ion-icon>\n\n            </button>\n\n\n\n            <h6>SHOP BY VEHICLE</h6>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-header>\n\n      <ion-card-content #cc>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select placeholder="MAKE" value="sortpopular" okText="Ok" cancelText="Cancel"\n\n                    (ionChange)="makeDropDownValue(makeValue)" [(ngModel)]="makeValue" style="max-width: 45%;">\n\n                    <ion-option *ngFor="let makeKey of makeList">{{makeKey}}</ion-option>\n\n\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select placeholder="MODEL" value="sortpopular" okText="Ok" cancelText="Cancel"\n\n                    style="max-width: 45%;">\n\n                    <!-- <ion-option value="sortpopular">popularity</ion-option>\n\n                    <ion-option value="sortaveragerating">rating</ion-option>\n\n                    <ion-option value="sortlatest">latest</ion-option>\n\n                    <ion-option value="sortpricelowhigh" style="max-width: 100%">low to high</ion-option > -->\n\n                    <!-- <ion-option *ngFor="let modelKey of modelList" >{{modelKey}}</ion-option> -->\n\n                    <ion-option *ngFor="let modelKey of modelList" [value]="modelKey"\n\n                      (ionSelect)="triggerMeModel(modelKey)">{{modelKey}}</ion-option>\n\n\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select placeholder="SUB MODEL" value="sortpopular" okText="Ok" cancelText="Cancel" \n\n                    [(ngModel)]="engineValue" (ionChange)="getOuterNametushar()">\n\n                    <!-- <ion-option value="sortpopular">popularity</ion-option>\n\n                    <ion-option value="sortaveragerating">rating</ion-option>\n\n                    <ion-option value="sortlatest">latest</ion-option>\n\n                    <ion-option value="sortpricelowhigh" style="max-width: 100%">low to high</ion-option> -->\n\n                    <!-- <ion-option *ngFor="let engineKey of engineList" >{{engineKey}}</ion-option> -->\n\n\n\n                    <ion-option *ngFor="let engineKey of engineList" [value]="engineKey"\n\n                      (ionSelect)="triggerMeEngine(engineKey)">{{engineKey}}</ion-option>\n\n\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select placeholder="YEAR" value="sortpopular" okText="Ok" cancelText="Cancel"\n\n                    [(ngModel)]="yearValue">\n\n                    <!-- <ion-option value="sortpopular">popularity</ion-option>\n\n                    <ion-option value="sortaveragerating">rating</ion-option>\n\n                    <ion-option value="sortlatest">latest</ion-option>\n\n                    <ion-option value="sortpricelowhigh" style="max-width: 100%">low to high</ion-option> -->\n\n                    <!-- <ion-option *ngFor="let yearKey of yearList" >{{yearKey}}</ion-option> -->\n\n                    <ion-option *ngFor="let yearKey of yearList">{{yearKey}}</ion-option>\n\n\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center" style="2px 10px !important;">\n\n            <button ion-button full class="bg-thime btn-round btn-text"\n\n            (click)="searchVehicleData(makeValue,strTestValue2,strTestValue3)">\n\n              Search\n\n            </button>\n\n          </ion-row>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n\n\n  <div class="card-main">\n\n    <ion-card>\n\n      <ion-card-header (click)="toggleAccordionCategory()">\n\n        <ion-list>\n\n          <ion-item>\n\n            <button ion-button clear small icon-only item-right>\n\n              <ion-icon color="light" [name]="icon"></ion-icon>\n\n            </button>\n\n\n\n            <h6>SHOP BY CATEGORY</h6>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-header>\n\n      <ion-card-content #cc1>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center;background: white;">\n\n\n\n                <ion-grid class="product-grid" style="margin-top: 8px;">\n\n                  <ion-row class="rowgrid">\n\n                    <ion-col class="columngrid" *ngFor="let featuredProductCategories of featuredProductCategoryList"\n\n                      (click)="productcategoryDetailPage(featuredProductCategories.catId,featuredProductCategories.url)"\n\n                      style="box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);">\n\n\n\n\n\n                      <ion-card>\n\n\n\n\n\n                        <ion-card-header style="justify-content: left">\n\n                          <div class="img-box">\n\n\n\n                            <!-- <img src="assets/imgs/categoryfirst.png"  style="width:200px;height:80px ;"> -->\n\n\n\n                            <img [src]="featuredProductCategories.thumbnail"\n\n                              style="width:200px;height:80px;margin-top: 6px">\n\n\n\n\n\n\n\n                          </div>\n\n                        </ion-card-header>\n\n                        <ion-card-content>\n\n\n\n                          <ion-item>\n\n                            <h5 style="font-size: 14px;text-align: -webkit-center;margin-top: 7px;">\n\n                              {{featuredProductCategories.name}}</h5>\n\n                          </ion-item>\n\n                          <div>\n\n                            <div *ngIf="featuredProductCategories.regular_price">\n\n                              <!--If "product" exists-->\n\n                              <h5 style="font-size: 12px;text-align: center;"> <span class="priceicon">Price : </span>\n\n                                <span class="priceicon">$</span> {{featuredProductCategories.regular_price}} </h5>\n\n                              <!-- <div class="rateing">\n\n                                <div class="card-btn">  \n\n                                  <p class="" float-left>\n\n                                    <button\n\n                                      ion-button\n\n                                      full\n\n                                      class="bg-thime btn-round btn-text"\n\n                                      style="margin-top: 3px; width: 150px;text-align: center;"\n\n                                    >\n\n                                      Add To Cart\n\n                                    </button>\n\n                                  </p>\n\n                                </div>\n\n                              </div> -->\n\n                            </div>\n\n\n\n\n\n                            <!--If "product" not exists-->\n\n\n\n                            <div *ngIf="!featuredProductCategories.regular_price" style="text-align: -webkit-center;">\n\n                              <!-- <span >☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span> -->\n\n                              <div class="rateing">\n\n                                <div class="card-btn">\n\n                                  <p class="" float-left>\n\n                                    <!-- <button\n\n                                      ion-button\n\n                                      full\n\n                                      class="bg-thime btn-round btn-text"\n\n                                      style="margin-top: 3px; width: 150px;text-align: center;"\n\n                                    >\n\n                                       More Info--\n\n                                    </button> -->\n\n\n\n                                  </p>\n\n                                  <!-- <p style="font-size: 11px;text-align: -webkit-center;">{{featuredProductCategories.name}}</p> -->\n\n                                  <!-- <ion-item >\n\n                                    <h5 style="font-size: 11px;text-align: -webkit-center;">{{featuredProductCategories.name}}</h5> \n\n                                  </ion-item> -->\n\n                                </div>\n\n                              </div>\n\n                            </div>\n\n                          </div>\n\n\n\n\n\n\n\n\n\n                        </ion-card-content>\n\n                      </ion-card>\n\n                    </ion-col>\n\n\n\n\n\n                  </ion-row>\n\n                </ion-grid>\n\n\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n\n\n        <!-- <div class="select-section shadow-bottom">\n\n          <ion-row\n\n            class="ion-justify-content-center"\n\n           \n\n          >\n\n            <button ion-button full class="bg-thime btn-round btn-text">\n\n              Shop Now\n\n            </button>\n\n          </ion-row>\n\n        </div>   -->\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n\n\n\n\n  <!-- <div class="shorting-bar">\n\n    <ion-item>\n\n      <div class="one">\n\n         <div class="one1">\n\n            <ion-icon name="code-working" style="margin-top: 10px;"></ion-icon>\n\n             <ion-item class="custom short">\n\n              <ion-select\n\n                placeholder="SORT BY"\n\n                value="MAKE"\n\n                okText="Ok"\n\n                cancelText="Cancel"\n\n                style="color: red;"\n\n                class="ion-select"\n\n                (ionChange)="sortDropDownValue(featuredProductCategoryList)">\n\n                <ion-option value="NAME">MODEL</ion-option>\n\n                <ion-option value="PRICE">PRICE</ion-option>\n\n                <ion-option value="BRAND">BRAND</ion-option>\n\n                <ion-option value="POSITION" >POSITION</ion-option>\n\n              </ion-select>\n\n        \n\n              <ion-icon name="md-search" class="text-light icon"></ion-icon>\n\n            </ion-item> \n\n             </div>   \n\n\n\n        \n\n        <div class="two2" (click)="hide()">\n\n          <ion-icon\n\n            ios="ios-funnel"\n\n            md="md-funnel"\n\n            role="img"\n\n            class="icon icon-ios ion-ios-funnel item-icon"\n\n            aria-label="funnel"  \n\n            ng-reflect-ios="ios-funnel"\n\n            ng-reflect-md="md-funnel"\n\n          ></ion-icon\n\n          >FILTER \n\n        </div>\n\n        \n\n      </div>\n\n\n\n      <div class="two">\n\n        <ion-icon ios="ios-grid" md="md-grid" (click)="gridView()"></ion-icon>\n\n        <ion-icon\n\n          ios="ios-list-box"\n\n          md="md-list-box"\n\n          (click)="listView()"\n\n        ></ion-icon>\n\n      </div>\n\n    </ion-item>\n\n  </div> -->\n\n  <div class="select-section shadow-bottom" *ngIf="hideMe">\n\n    <ion-row class="filter-bar">\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n\n\n\n\n\n\n  <div *ngIf="featuredProductsList; else elseStatement" class="checkFeaturedProducts">\n\n  </div>\n\n  <ng-template #elseStatement style="margin-top: 10px;">\n\n    No Product Available\n\n  </ng-template>\n\n\n\n  <ng-container *ngIf="( featuredProductsList | filter : localSearchProduct) as result">\n\n\n\n\n\n\n\n    <p *ngIf="result.length === 0">No matching Result found</p>\n\n  </ng-container>\n\n\n\n  <ion-grid class="product-grid" style="margin-top: 15px;">\n\n    <ion-row class="rowgrid">\n\n      <ion-col class="columngrid" *ngFor="let featuredProducts of featuredProductsList | filter:localSearchProduct">\n\n        <ion-card>\n\n          <ion-card-header style="justify-content: left">\n\n            <div class="img-box"\n\n              (click)="productDetailPage(featuredProducts.id,featuredProducts.name,featuredProducts.regular_price)">\n\n              <img [src]="featuredProducts.image" style="width:200px;height:80px ;">\n\n            </div>\n\n            <ion-icon name="md-heart" class="text-light icon"\n\n              (click)="addToWishList(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price,vartoday)">\n\n            </ion-icon>\n\n\n\n            <!-- <ion-icon name="arrow-down" *ngIf="!visible" (click)="toggle()"></ion-icon>\n\n            <ion-icon name="arrow-up" *ngIf="visible" (click)="toggle()"></ion-icon> -->\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n\n\n\n\n\n\n            <ion-item>\n\n              <h5 style="font-size: 11px;text-align: -webkit-center;">{{featuredProducts.name}}</h5>\n\n            </ion-item>\n\n            <div>\n\n              <div *ngIf="featuredProducts.regular_price">\n\n                <!--If "product" exists-->\n\n                <h5 style="font-size: 12px;text-align: center;color: red;"> <span class="priceicon"\n\n                    style="color: red;">Price : </span> <span class="priceicon">$</span>\n\n                  {{featuredProducts.regular_price}} </h5>\n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p style="width: 100%;" float-left>\n\n                      <button ion-button full class="bg-thime btn-round btn-text"\n\n                        (click)="addProductToCart(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)">\n\n                        Add To Cart\n\n                      </button>\n\n                    </p>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n\n\n\n\n\n\n              <div *ngIf="!featuredProducts.regular_price">\n\n                <!--If "product" not exists-->\n\n                <h5 style="font-size: 12px;text-align: center"> Price Not Available</h5>\n\n\n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p class="" float-left>\n\n                      <button ion-button full class="bg-thime btn-round btn-text"\n\n                        style="margin-top: 3px; width: 150px;text-align: center;"\n\n                        (click)="readMoreLocal(featuredProducts.id,featuredProducts.name,featuredProducts.regular_price)">\n\n                        Read More\n\n                      </button>\n\n                    </p>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n\n\n\n\n\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <!-- <ion-col>\n\n        <ion-icon name="arrow-down" *ngIf="!visible" (click)="toggle()"></ion-icon>\n\n        <ion-icon name="arrow-up" *ngIf="visible" (click)="toggle()"></ion-icon>\n\n      </ion-col> -->\n\n\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <!-- <ion-item>\n\n        <ion-label>Make</ion-label>\n\n        <ion-select [(ngModel)]="makeValue"  (ionChange)="makeDropDownValue(makeValue)">\n\n          <ion-option *ngFor="let key of makeList" >{{key}}</ion-option>\n\n        </ion-select>\n\n    \n\n      </ion-item>\n\n\n\n\n\n     \n\n\n\n\n\n      <ion-item>\n\n        <ion-label>Model</ion-label>\n\n        <ion-select [(ngModel)]="modelValue" (ionChange)="modelDropDownValue(modelValue)" >\n\n          <ion-option *ngFor="let key of modelList">{{makeValue}}</ion-option>\n\n        </ion-select>\n\n      </ion-item> -->\n\n\n\n  <!-- <ion-item>\n\n        <ion-label>Model</ion-label>\n\n        <ion-select [(ngModel)]="makeValue" (ionChange)="modelDropDownValue(makeValue)">\n\n          <ion-option *ngFor="let key of makeList">{{makeValue}}</ion-option>\n\n          \n\n        </ion-select>\n\n        <ion-label>Length {{makeList.length}}</ion-label>\n\n      </ion-item> -->\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_core__["X" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_5__angular_core__["X" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_demo__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testing_testing__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__capacitor_core__ = __webpack_require__(22);
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
        this.dropdown1 = "Test";
        // this.strData = 'No Products in Cart';
        this.viewCartApi();
        this.showLoadingControllerLaunch();
        if (localStorage.getItem("products") === null) {
            // this.showToastOnEmptyCart();
        }
        else if (this.viewCartList.length === 0) {
            this.showToastOnEmptyCart();
        }
        // if("ProductId" in localStorage){
        if (localStorage["products"]) {
            console.log("Yes");
        }
        else {
            console.log("No*****");
        }
        console.log("Product Count is: " + localStorage.getItem("ProductCount"));
        if (localStorage.getItem("products")) {
            this.productsLocalCart = JSON.parse(localStorage.getItem("products")); // get product list
            console.log("****** filled" + localStorage.getItem("products"));
            //this.strDataLocal = 'Cart is Empty.Please add items!';
        }
        else {
            console.log("****** empty");
            // this.strDataLocal = 'Cart is Empty.Please add items!';
            //this.showToastOnEmptyCart();
        }
        this.obj = JSON.stringify(this.productsLocalCart);
        for (let i = 0; i < this.productsLocalCart.length; i++) {
            if (this.productsLocalCart[i].ProductQuantity &&
                this.productsLocalCart[i].ProductRegularPrice &&
                this.productsLocalCart[i].ProductDescription &&
                this.productsLocalCart[i].ProductId) {
                // this.strProductQuantity;
                this.strProductQuantity = this.productsLocalCart[i].ProductQuantity;
                this.strProductRegularPrice = this.productsLocalCart[i].ProductRegularPrice;
                this.strProductDescription = this.productsLocalCart[i].ProductDescription;
                this.strProductName = this.productsLocalCart[i].ProductName;
                this.strProductRegularPriceRevised1 = this.strProductRegularPriceRevised;
                this.productTotalPrice = this.productsLocalCart[i].ProductRegularPrice;
                var sum = 0, nums = ["100", "300", "400", "60", "40"];
                for (i = 0; i < nums.length; i++) {
                    sum += +nums[i];
                }
                this.productsLocalCart = JSON.parse(localStorage.getItem("products"));
            }
            else {
                console.log("Product quantity not available");
                this.showToastOnProductsQuantityCartLocally();
            }
        }
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            if (activeView.name === "ViewcartPage") {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    console.log("data");
                }
                else {
                    console.log("data!!!");
                }
            }
        });
    }
    toggleIcon() {
        if (this.buttonIcon === "star") {
            this.buttonIcon = "home";
        }
        else if (this.buttonIcon === "home") {
            this.buttonIcon = "star";
        }
    }
    toggleIcon1() {
        if (this.buttonIcon1 === "cart") {
            this.buttonIcon1 = "home";
        }
        else if (this.buttonIcon1 === "home") {
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
            // this.navCtrl.setRoot(AddressPage);
        }
    }
    clickOptionFlatRate() {
        this.loaderFlatRate();
        this.strSubTotalAmountFlatRate = "$" + this.strSubTotalAmount + 5;
        console.log("hello you clicked Flat rate" + this.strSubTotalAmountFlatRate);
        this.numberResult = this.strSubTotalAmount + 5;
        this.strSubTotalAmount = this.numberResult;
        console.log("Updated Flat Rate " + "NZD " + "$" + this.numberResult);
    }
    clickOptionLocal() {
        this.strSubTotalAmount = this.total;
        console.log("hello you clicked local" + this.strSubTotalAmount);
    }
    doRefresh(event) {
        console.log("Begin async operation");
        this.viewCartApi();
        setTimeout(() => {
            console.log("Async operation has ended");
            event.complete();
        }, 500);
    }
    productcategoryDetailPage(product_id, name) {
        console.log("Product Id--" + product_id);
        console.log("Product Name--" + name);
        this.strTestProductId = product_id;
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
            if (this.viewCartList[index].product_id === this.eventCartNumber) {
                console.log("success even");
                this.viewCartList[index].quantity += 2;
                this.testTushar = this.viewCartList[index].quantity;
                this.buttonDisabled = false;
            }
            else {
                console.log("success odd");
                this.viewCartList[index].quantity++;
                this.testTushar = this.viewCartList[index].quantity;
                this.testArray1 = this.viewCartList[index].quantity;
                this.testArray2 = this.testTushar;
                this.buttonDisabled = false;
            }
        }
        else {
            if (this.viewCartList[index].product_id === this.eventCartNumber) {
                console.log("success even");
                this.viewCartList[index].quantity += 2;
                this.testTushar = this.viewCartList[index].quantity;
                this.buttonDisabled = false;
            }
            else {
                console.log("success odd");
                this.viewCartList[index].quantity++;
                this.testTushar = this.viewCartList[index].quantity;
                this.testArray1 = this.viewCartList[index].product_id;
                this.testArray2 = this.testTushar;
                this.buttonDisabled = false;
            }
        }
    }
    incrementValueLocal(index, item) {
        if (this.productsLocalCart[index].ProductId === this.eventCartNumber) {
            console.log("success even");
            this.productsLocalCart[index].ProductQuantity += 2;
            this.testTushar = this.productsLocalCart[index].ProductQuantity;
            this.buttonDisabled = false;
        }
        else {
            console.log("success odd");
            this.productsLocalCart[index].ProductQuantity++;
            this.testTushar = this.productsLocalCart[index].ProductQuantity;
            this.testArray1 = this.productsLocalCart[index].ProductQuantity;
            this.testArray2 = this.testTushar;
            this.buttonDisabled = false;
        }
    }
    decrementValueLocal(index, item) {
        if (this.productsLocalCart[index].ProductQuantity <= 1) {
            console.log("failure");
            this.showToastOnCart();
        }
        else if (this.productsLocalCart[index].ProductId === this.eventCartNumber) {
            console.log("success even");
            this.productsLocalCart[index].ProductQuantity -= 2;
            this.testTushar = this.productsLocalCart[index].ProductQuantity;
            this.buttonDisabled = false;
        }
        else {
            console.log("success odd");
            this.productsLocalCart[index].ProductQuantity--;
            this.testTushar = this.productsLocalCart[index].ProductQuantity;
            this.testArray1 = this.productsLocalCart[index].ProductQuantity;
            this.testArray2 = this.testTushar;
            this.buttonDisabled = false;
        }
    }
    decrementValue(index, strDynamicId) {
        if (this.viewCartList[index].quantity <= 1) {
            console.log("failure");
            this.showToastOnCart();
        }
        else {
            if (this.viewCartList[index].product_id === this.eventCartNumber &&
                this.viewCartList[index].quantity <= 2) {
                console.log("no decrement ");
            }
            else if (this.viewCartList[index].product_id === this.eventCartNumber) {
                this.viewCartList[index].quantity -= 2;
                this.testTushar = this.viewCartList[index].quantity;
                this.buttonDisabled = false;
            }
            else {
                console.log("success odd");
                this.viewCartList[index].quantity--;
                this.testTushar = this.viewCartList[index].quantity;
                this.buttonDisabled = false;
            }
        }
    }
    /*
        Update Shopping Cart button
    */
    updateShoppingCart() {
        console.log("Updated  Product Quantity " + this.testTushar);
        console.log("Updated  Product Id " + this.strDynamicId);
        this.httpClient
            .get("http://busybanda.com/sterling-tools/api/set_cart_items?" +
            "user_id=" +
            localStorage.getItem("Userid value") +
            "&product_id=" +
            this.strTestProductId +
            "&quantity=" +
            this.testTushar)
            .subscribe((jsonResponse) => {
            this.obj = JSON.stringify(jsonResponse);
            this.showToastOnAddingCart();
            this.viewCartApi();
        });
    }
    /*
        Remove Particular product from cart
    */
    removeProductServer(product_id, name) {
        this.showCartRemovalServer(product_id, name);
    }
    /*
        Remove Product from local storage cart
    */
    removeProductLocally(index, item, name) {
        this.showCartRemovalAlert2(index, item, name);
    }
    clearCart() {
        this.showCartRemovalAlert3();
    }
    /*
        viewCartApi
    */
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            this.presentLoading();
            try {
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log("View cart length " + this.viewCartList.length);
                        console.log("All Json Response" + this.obj);
                        var result = [];
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
                        this.strSubTotalAmount = this.total;
                        this.strQuantityUpdated = this.total1 * 2;
                        localStorage.setItem("name", this.strSubTotalAmount);
                        console.log("Hey   " + this.strSubTotalAmount);
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
                                    this.strNumber = priceValue.concat("price");
                                }
                            }
                        }
                        for (keyProductId in this.viewCartList) {
                            if (this.viewCartList.hasOwnProperty(keyProductId)) {
                                size++;
                                const productIdValue = this.viewCartList[keyProductId].product_id;
                                this.viewCartList[keyProductId].product_id = productIdValue;
                                if (productIdValue === "") {
                                }
                                else {
                                    this.strProductIdValue = productIdValue;
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
    showLoadingControllerLaunch() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_8__capacitor_core__["a" /* Plugins */];
            this.networkListener = Network.addListener("networkStatusChange", (status) => {
                console.log("Network status HomePage here", status);
                this.networkStatus = status;
            });
            if ((yield Network.getStatus()).connectionType === "none") {
                this.showNetworkAlert();
                console.log("Network status not available", this.networkStatus);
            }
            else {
                this.networkStatus = yield Network.getStatus();
                console.log("Network status available", this.networkStatus);
                this.presentLoadingDefault();
            }
        });
    }
    showNetworkAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert = yield this.alertController.create({
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
        });
    }
    showCartRemovalServer(product_id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert1 = this.alertController.create({
                title: "Remove Item! " + name,
                message: "Do you want to remove item from cart!",
                enableBackdropDismiss: false,
                buttons: [
                    {
                        cssClass: "my-custom-class",
                        text: "Ok",
                        handler: (ok) => {
                            console.log("Remove Product: " + product_id);
                            if (localStorage.getItem("isSigned")) {
                                console.log("User Status " + "isSigned true");
                                // this.httpClient.get('http://busybanda.com/sterling-tools/api/remove_cart_item?'+'product_id='+ product_id + '&quantity=' + '0').subscribe((jsonResponse) => {
                                this.httpClient
                                    .get("http://busybanda.com/sterling-tools/api/remove_cart_item?" +
                                    "user_id=" +
                                    localStorage.getItem("Userid value") +
                                    "&product_id=" +
                                    product_id +
                                    "&quantity=" +
                                    "0")
                                    .subscribe((jsonResponse) => {
                                    this.obj = JSON.stringify(jsonResponse);
                                    console.log("Data" + this.obj);
                                    this.showToastOnDeletingCart();
                                    this.viewCartApi();
                                    // this.doRefresh(event);
                                    window.location.reload();
                                    //this.navCtrl.setRoot(HomePage);
                                    console.log("view cart length" + this.viewCartList.length);
                                    // if(this.viewCartList.length < 1){
                                    //   this.navCtrl.setRoot(HomePage);
                                    // }
                                    // this.ngOnInit();
                                });
                            }
                            else {
                                console.log("isSigned status: " + "isSigned false");
                            }
                            // this.httpClient.get('http://busybanda.com/sterling-tools/api/remove_cart_item?'+'product_id='+ product_id).subscribe((jsonResponse) => {
                            //     this.obj = JSON.stringify(jsonResponse);
                            //     console.log('Data' + this.obj);
                            //     this.showToastOnDeletingCart();
                            //     this.viewCartApi();
                            //   });
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
        });
    }
    callPage() {
        this.ngOnInit();
    }
    showCartRemovalAlert2(index, item, name) {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert1 = this.alertController.create({
                title: "Remove Item! " + name,
                message: "Do you want to remove item from cart locally!",
                enableBackdropDismiss: false,
                buttons: [
                    {
                        cssClass: "my-custom-class",
                        text: "Ok",
                        handler: (ok) => {
                            console.log("Confirm Ok");
                            console.log("Remove Product: " + item);
                            for (let i = 0; i < this.productsLocalCart.length; i++) {
                                if (this.productsLocalCart[i] == item) {
                                    this.productsLocalCart.splice(i, 1);
                                    localStorage.setItem("products", JSON.stringify(this.productsLocalCart));
                                }
                            }
                        },
                    },
                    {
                        text: "Cancel",
                        handler: (data) => {
                            let navTransition = alert1.dismiss();
                            return false;
                        },
                    },
                ],
            });
            alert1.present();
        });
    }
    showCartRemovalAlert3() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert1 = this.alertController.create({
                title: "Clear Item! ",
                message: "Do you want to clear cart locally!",
                enableBackdropDismiss: false,
                buttons: [
                    {
                        cssClass: "my-custom-class",
                        text: "Ok",
                        handler: (ok) => {
                            console.log("Confirm Ok");
                            console.log("Remove Product: ");
                            this.productsLocalCart = [];
                            localStorage.removeItem("products");
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
        });
    }
    presentLoadingDefault() {
        let loading = this.loadingController.create({
            content: "Please wait Viewing Cart...",
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
                message: localStorage.getItem("Product Title"),
                duration: 6000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyCart() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.strContent = this.strContent.replace(/\n/g, "<br />");
            const toast = yield this.toastController.create({
                message: "Cart is empty.Please add items!",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnFilledCart() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.strContent = this.strContent.replace(/\n/g, "<br />");
            const toast = yield this.toastController.create({
                message: "Cart is filled.Please wait, loading items!",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Minimum product quantity cannot be less than 1 ",
                duration: 400,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnProductsRemovedCartLocally() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Product removed from cart" + this.strProductTitle,
                duration: 1400,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnProductsQuantityCartLocally() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Product Quantity not available from cart",
                duration: 4000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnAddingEmptyCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Please add quantity of product",
                duration: 300,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnUserIdNull() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Please Login in the application",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnAddingCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Product quantity Updated in cart ",
                duration: 1300,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnDeletingCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Product Deleted in cart " + this.obj,
                duration: 1500,
                position: "bottom",
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
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_11" /* ViewChild */])("nativeElement", { read: Element }),
    __metadata("design:type", Element)
], ViewcartPage.prototype, "alert", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_11" /* ViewChild */])("nativeElement", { read: Element }),
    __metadata("design:type", Element)
], ViewcartPage.prototype, "alert1", void 0);
ViewcartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: "page-viewcart",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\viewcart\viewcart.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png" /></ion-icon>\n\n    </button>\n\n    <ion-title style="text-align: center">View Cart\n\n\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <!-- <div class="custom-id">\n\n   \n\n    <ion-searchbar placeholder="Search any part here" ></ion-searchbar>\n\n  </div> -->\n\n\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n\n\n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="chevron-down-circle-outline" pullingText="Pull to refresh"\n\n      refreshingSpinner="circles" refreshingText="Refreshing Cart.">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n\n\n  <!-- <ion-item *ngIf="!viewCartList.length && !productsLocalCart.length;else other_content">\n\n    <h5 style="font-size: 12px;">{{strData}}</h5> \n\n  </ion-item> -->\n\n\n\n  <ion-item *ngIf="!viewCartList.length && !productsLocalCart.length ;else other_content" lines="none">\n\n    <h5 style="font-size: 12px;">{{strDataServer}}</h5>\n\n  </ion-item>\n\n\n\n  <!-- <ion-item *ngIf="productsLocalCart.length ;else other_content1" lines="none">\n\n    <h5 style="font-size: 12px;">{{strDataLocal}}</h5>\n\n  </ion-item> -->\n\n\n\n  <ion-item *ngIf="viewCartList ;else other_content3" lines="none">\n\n    <h5 style="font-size: 12px;">{{strDataServer}}</h5>\n\n  </ion-item>\n\n\n\n\n\n  <ng-template #other_content3>\n\n    <h5 style="font-size: 12px;">Empty data</h5>\n\n  </ng-template>\n\n\n\n\n\n\n\n  <ng-template #other_content>\n\n\n\n    <div class="pincod bg-white shadow-bottom cart-box" style=" padding: 16px 16px 16px 16px;margin-bottom: -31px">\n\n      <ion-row style="margin-top: 8px" *ngFor="let productsLocal of productsLocalCart;let i = index"\n\n        (click)="productcategoryDetailPage(productsLocal.ProductId,productsLocal.ProductName)">\n\n\n\n        <ion-col col-4>\n\n          <ion-list>\n\n            <ion-item>\n\n              <img [src]="productsLocal.ProductImage" style="width:200px;height:80px ;">\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-8 class="right-main-bar">\n\n\n\n          <div class="row">\n\n            <div class="block">{{productsLocal.ProductName}}</div>\n\n            <ion-icon name="md-close" style="margin-left: 100px;margin-top: 5px;"\n\n              (click)="removeProductLocally(i,productsLocal,productsLocal.ProductName)">\n\n            </ion-icon>\n\n\n\n          </div>\n\n\n\n          <div style="margin-top: 6% ">\n\n            QTY\n\n            <span class="icon">\n\n              <ion-icon name="md-remove-circle" style="margin-left: 10%; margin-top: 2%"\n\n                (click)="decrementValueLocal(i,productsLocal.ProductId)">\n\n              </ion-icon>\n\n            </span>\n\n            <span text-center style="margin-left: 10%;color: red;">{{productsLocal.ProductQuantity}}</span>\n\n\n\n            <span class="icon" text-right>\n\n              <ion-icon name="md-add-circle" (click)="incrementValueLocal(i,productsLocal.ProductId)"\n\n                style="margin-left: 10%"></ion-icon>\n\n            </span>\n\n          </div>\n\n\n\n\n\n          <div style="margin-top: 6%">\n\n            <label> <span class="priceicon">Product Price </span>{{productsLocal.ProductRegularPrice}} <span\n\n                class="priceicon">$</span></label>\n\n\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n    <div class="pincod bg-white shadow-bottom cart-box" style=" padding: 16px 16px 16px 16px;">\n\n      <ion-row style="margin-top: 8px" *ngFor="let viewCart of viewCartList;let i = index"\n\n        (click)="productcategoryDetailPage(viewCart.product_id,viewCart.name)">\n\n\n\n        <ion-col col-4>\n\n          <ion-list>\n\n            <ion-item lines="none">\n\n              <img [src]="viewCart.product_thumbnail" style="width:200px;height:80px ;">\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-8 class="right-main-bar">\n\n\n\n          <div class="row">\n\n            <div class="block">{{viewCart.name}}</div>\n\n            <ion-icon name="md-close" style="margin-left: 37px;margin-top: 5px;"\n\n              (click)="removeProductServer(viewCart.product_id,viewCart.name)">\n\n            </ion-icon>\n\n\n\n          </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n          <div style="margin-top: 6% ">\n\n            QTY\n\n            <span class="icon">\n\n              <ion-icon name="md-remove-circle" style="margin-left: 10%; margin-top: 2%"\n\n                (click)="decrementValue(i,strDynamicId)">\n\n              </ion-icon>\n\n            </span>\n\n            <span text-center style="margin-left: 10%;color: red;">{{viewCart.quantity}}</span>\n\n\n\n            <span class="icon" text-right>\n\n              <ion-icon name="md-add-circle" (click)="incrementValue(i,viewCart.product_id)" style="margin-left: 10%">\n\n              </ion-icon>\n\n            </span>\n\n          </div>\n\n\n\n\n\n          <div style="margin-top: 6%">\n\n            <label> <span class="priceicon">Product Price </span>{{viewCart.price}} <span\n\n                class="priceicon">$</span></label>\n\n\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </div>\n\n\n\n    <div class="reating-review bg-white" padding style="margin-bottom: 15px">\n\n      <div class="reating">\n\n        <div class="select-section shadow-bottom" style="text-align: center">\n\n          <ion-row class="ion-justify-content-center" style="justify-content: center">\n\n            <button ion-button full class="bg-thime btn-round btn-text" style="max-width: 390px"\n\n              (click)="updateShoppingCart(strTestProductId)" [disabled]="buttonDisabled">\n\n              Update Cart\n\n            </button>\n\n\n\n\n\n          </ion-row>\n\n        </div>\n\n      </div>\n\n\n\n\n\n\n\n\n\n     \n\n\n\n\n\n\n\n      <ion-item>\n\n        <ion-label style="float: left; font-size: 14px">Grand Total</ion-label>\n\n        <ion-label style="float: right; color: red"> $ NZD {{strSubTotalAmount}}</ion-label>\n\n      </ion-item>\n\n\n\n\n\n\n\n\n\n\n\n      <div style="margin-top: 1px;">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col size="12" offset="4">\n\n              <ion-item>\n\n                <ion-label style="color: black;float: left">Shipping Charges</ion-label>\n\n                <ion-select okText="Ok" cancelText="Cancel">\n\n                  <ion-option selected value="brown" style="color: black" (ionSelect)="clickOptionLocal()">Local Pickup\n\n                  </ion-option>\n\n                  <ion-option value="blonde" style="float: right; color: black" (ionSelect)="clickOptionFlatRate()">Flat\n\n                    Rate: $5.00</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <button ion-button full class="bg-thime btn-round btn-text" style="max-width: 390px; float: none; height: 40px"\n\n          (click)="checkOutPage()">\n\n\n\n\n\n          Checkout\n\n        </button>\n\n      </ion-item>\n\n\n\n    </div>\n\n\n\n  </ng-template>\n\n\n\n  <ng-template #other_content1>\n\n    <div class="pincod bg-white shadow-bottom cart-box" style=" padding: 16px 16px 16px 16px;">\n\n      <ion-row style="margin-top: 8px" *ngFor="let productsLocal of productsLocalCart;let i = index"\n\n        (click)="productcategoryDetailPage(productsLocal.ProductId,productsLocal.ProductName)">\n\n\n\n        <ion-col col-4>\n\n          <ion-list>\n\n            <ion-item>\n\n              <img [src]="productsLocal.ProductImage" style="width:200px;height:80px ;">\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-8 class="right-main-bar">\n\n\n\n          <div class="row">\n\n            <div class="block">{{productsLocal.ProductName}}</div>\n\n            <ion-icon name="md-close" style="margin-left: 37px;margin-top: 5px;"\n\n              (click)="removeProductLocally(i,productsLocal,productsLocal.ProductName)">\n\n            </ion-icon>\n\n\n\n          </div>\n\n\n\n          <div style="margin-top: 6% ">\n\n            QTY\n\n            <span class="icon">\n\n              <ion-icon name="md-remove-circle" style="margin-left: 10%; margin-top: 2%"\n\n                (click)="decrementValueLocal(i,productsLocal.ProductId)">\n\n              </ion-icon>\n\n            </span>\n\n            <span text-center style="margin-left: 10%;color: red;">{{productsLocal.ProductQuantity}}</span>\n\n\n\n            <span class="icon" text-right>\n\n              <ion-icon name="md-add-circle" (click)="incrementValueLocal(i,productsLocal.ProductId)"\n\n                style="margin-left: 10%"></ion-icon>\n\n            </span>\n\n          </div>\n\n\n\n\n\n          <div style="margin-top: 6%">\n\n            <label> <span class="priceicon">Product Price </span>{{productsLocal.ProductRegularPrice}} <span\n\n                class="priceicon">$</span></label>\n\n\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </div>\n\n\n\n    <div class="reating-review bg-white" padding style="margin-top: 30px;">\n\n      <div class="reating">\n\n        <div class="select-section shadow-bottom" style="text-align: center">\n\n          <ion-row class="ion-justify-content-center" style="justify-content: center">\n\n            <button ion-button full class="bg-thime btn-round btn-text" style="max-width: 390px"\n\n              (click)="updateShoppingCart(strTestProductId)" [disabled]="buttonDisabled">\n\n              Update Cart\n\n            </button>\n\n\n\n            <button ion-button full class="bg-thime btn-round btn-text" style="max-width: 390px" (click)="clearCart()">\n\n              Clear Cart\n\n            </button>\n\n          </ion-row>\n\n        </div>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label style="float: left; font-size: 14px">Grand Total</ion-label>\n\n        <ion-label style="float: right; color: red"> $ NZD {{strSubTotalAmount}}</ion-label>\n\n      </ion-item>\n\n\n\n    </div>\n\n\n\n  </ng-template>\n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\viewcart\viewcart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_core__["X" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* App */]])
], ViewcartPage);

//# sourceMappingURL=viewcart.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productcategorydetail_productcategorydetail__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itemdetail_itemdetail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser_ngx__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__capacitor_core__ = __webpack_require__(22);
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
var ViewallPage_1;











/**
 * Generated class for the ViewallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ViewallPage = ViewallPage_1 = class ViewallPage {
    constructor(navCtrl, modalCtrl, toastController, apiProvider, httpClient, loadingController, rendererVehicle, rendererCategories, _elRef, inAppBrowser, platform, app, alertController) {
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
        this.alertController = alertController;
        this.productsLocalCart = [];
        this.viewCartList = [];
        this.accordionExpandedVehicle = false;
        this.accordionExpandedCategory = false;
        this.hideMe = false;
        this.icon = "arrow-forward";
        this.icon1 = "arrow-forward";
        this.elements = document.getElementsByClassName("columngrid");
        this.featuredProductsList = [];
        this.featuredCategoryList = [];
        this.featuredProductCategoryList = [];
        this.testStr = 'Hello, World,\nand all you beautiful people in it!';
        this.buttonIcon = "home";
        this.letclickCount = 0;
        this.myimage = 'https://aws1.discourse-cdn.com/ionicframework/original/3X/c/f/cf7af661f0bae7cca915258f2b8d6b3937fccda4.png';
        this.countClick = 0;
        this.makeList = [];
        this.modelList = [];
        this.modeKeys = [];
        this.httpClientFetch = [];
        this.varoutput = [];
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.countProductsWishList = 0;
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
    }
    ngOnInit() {
        this.checkNetwork();
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
        if (this.countClick > 1) {
            console.log('Clicked More than one');
            this.showToastOnWishlist();
        }
        else {
            // console.log('Clicked one');
        }
        this.rendererVehicle.setElementStyle(this._elRef.nativeElement, "webkitTransition", "max-height 500px, padding 500ms");
        this.rendererCategories.setElementStyle(this._elRef.nativeElement, "webkitTransition", "max-height 500px, padding 1200ms");
        this.getAllFeaturedProducts();
        this.getAllFeaturedProductsCategories();
        this.getCategoriesApi();
        this.viewCartApi();
        this.getMakeApi();
        // this.getModelApi(this.makeValue);
        // this.callMakeApi();
        this.zone = {
            kind: 'key2'
        };
        // this.modeKeys = [
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'ViewallPage') {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                }
                else {
                }
            }
        });
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
            this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
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
    changeView() {
        this.buttonIcon = "star";
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getAllFeaturedProducts();
        this.getAllFeaturedProductsCategories();
        this.viewCartApi();
        this.getMakeApi();
        //this.getModelApi(this.makeValue);
        setTimeout(() => {
            console.log('Async operation has ended');
            event.complete();
        }, 500);
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
        // this.navCtrl.push(ViewallcategoriesPage);
        this.navCtrl.push(ViewallPage_1);
    }
    productDetailPage(id, name, regular_price) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
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
        // console.log('getProductCategoriesApi called    ');  
        const service = this.apiProvider.getProductCategories();
        service.subscribe((data) => {
            const resultado = data;
            this.featuredCategoryList = resultado;
            this.productTitle = data.title;
        });
    }
    sortDropDownValue() {
        console.log("Selected sortDropDownValue");
        this.getCategoriesApi();
        this.featuredProductCategoryList.sort();
        var points = [5.0, 3.7, 1.0, 2.9, 3.4, 4.5];
        var output = [];
        for (let i = 0; i < points.length; i++) {
            points.sort(function (a, b) {
                return b - a;
            });
            output += points[i] + "<br>";
        }
        console.log(output);
        console.log("Selected sortDropDownValue" + this.featuredProductCategoryList.sort());
    }
    getMakeApi() {
        console.log('getMakeApi called    ');
        const service = this.apiProvider.searchMakeCategories();
        service.subscribe((data) => {
            const resultado = data;
            this.makeList = resultado;
            this.strMakeListValue = resultado;
            console.log('MakeApi response   ' + resultado);
            this.modeKeys = resultado;
            if (this.makeList) {
                this.getModelApi(this.makeValue);
                console.log('MakeApi response success ' + this.makeList.length);
                //console.log("Selected model api:  ", this.makeValue);
            }
            else {
                console.log('getMakeApi issue ');
            }
        });
    }
    makeDropDownValue() {
        console.log("Selected make:  ", this.makeValue);
    }
    // onSelect(make) {
    //   this.modelList = this.apiProvider.getModelCategories(this.makeValue).filter((item) => item.make == make);
    // }
    modelDropDownValue(make) {
        console.log("Selected model:  ", this.makeValue);
        this.modelList = this.apiProvider.getMakeCategories(this.makeValue).filter((item) => item.make == make);
    }
    getModelApi(makeValue) {
        console.log('getModelApi called    ');
        const service = this.apiProvider.getMakeCategories(makeValue);
        service.subscribe((data) => {
            const resultado = data;
            this.modelList = resultado;
            this.strModelListValue = resultado;
            this.modeKeys = resultado;
            console.log('modelkeys ' + this.modeKeys);
        });
    }
    addToWishList(id, name, image, description, regular_price, x) {
        //this.visible = !this.visible;
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
        productsWishlist.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price });
        localStorage.setItem('productsWishlist', JSON.stringify(productsWishlist));
        this.buttonIcon = "home";
        this.showToastOnAddProductWishlist(name);
        this.countProductsWishlistLocalUpdated++;
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            console.log('Code for localStorage/sessionStorage.');
        }
        else {
            // Sorry! No Web Storage support..
            console.log('Sorry! No Web Storage support..');
        }
    }
    readMoreLocal(id, name, image, description, regular_price) {
        this.showToastOnPriceEmptyProducts();
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
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
                            //this.buttonIcon = "cart";
                        }
                        else {
                            console.log('Cart Empty ');
                            //this.countProducts = 'Empty';
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
    callMakeApi() {
        //this.showMakeLoader();
        // const service = this.apiProvider.getMakeCategories();
        //   service.subscribe((data) => {
        //       const resultado = data;
        //       this.makeList = resultado; 
        //      this.strMakeListValue =  resultado;
        //      console.log('getMakeApi called    ' + resultado);
        //      this.modeKeys =resultado;
        //   });
        // return this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_make_search').pipe(map((res: any) => this.httpClientFetch = res.result));
        this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_make_search').subscribe((response) => {
            const resultado = response;
            this.makeList = resultado;
            this.modeKeys = resultado;
        });
    }
    showMakeLoader() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: 'Please wait fetching Make!',
                duration: 600,
            });
            yield loading.present();
        });
    }
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_10__capacitor_core__["a" /* Plugins */];
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
                //this.router.navigate(['/invoices']);
                // this.router.navigate(['/managecard']);
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
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["_11" /* ViewChild */])("cc"),
    __metadata("design:type", Object)
], ViewallPage.prototype, "cardContentVehicle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["_11" /* ViewChild */])("cc1"),
    __metadata("design:type", Object)
], ViewallPage.prototype, "cardContentCategory", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["E" /* Input */])("title"),
    __metadata("design:type", String)
], ViewallPage.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["E" /* Input */])("title"),
    __metadata("design:type", String)
], ViewallPage.prototype, "Elem", void 0);
ViewallPage = ViewallPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["n" /* Component */])({
        selector: 'page-viewall',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\viewall\viewall.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n  \n\n    <ion-title >Products\n\n      <span float-right>\n\n        <!-- <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n\n        <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon> -->\n\n\n\n        <!-- <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n\n        <ion-icon class="icon"  (click)="cartPage()" >\n\n          <img src="assets/imgs/ic_my_cart.png" width="100%;" />\n\n          <ion-badge class="icon add-icon" >{{countProducts}}</ion-badge> \n\n        </ion-icon> -->\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n        \n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n      </span>\n\n     \n\n    </ion-title>\n\n\n\n    <!-- <ion-title >\n\n      <span float-right>\n\n        <div style="font-size: 10px;color: black;text-align: end;">{{countProducts}}</div>\n\n      </span>\n\n    </ion-title> -->\n\n  </ion-navbar>\n\n  <div class="custom-id">\n\n    <!-- <ion-item class="custom">\n\n      <ion-select\n\n        placeholder="All"\n\n        value="MAKE"\n\n        okText="Ok"\n\n        cancelText="Cancel"\n\n        style="margin-left: 1px"\n\n      >\n\n        <ion-option value="MAKE" style="max-width: 60px">MAKE</ion-option>\n\n        <ion-option value="MODEL">MODEL</ion-option>\n\n        <ion-option value="YEAR">YEAR</ion-option>\n\n      </ion-select>\n\n\n\n      <ion-icon name="md-search" class="text-light icon"></ion-icon>\n\n    </ion-item> -->\n\n    <ion-searchbar\n\n      placeholder="Search Products"\n\n      [(ngModel)]="localSearchProduct"\n\n      \n\n    ></ion-searchbar>\n\n\n\n      \n\n    <!-- <input class="form-control" type="text" name="search" [(ngModel)]="searchText" placeholder="&#61442;  Search Products"> -->\n\n\n\n  </div>  \n\n  <!-- <ion-list>\n\n    <ion-item > </ion-item>\n\n  </ion-list> -->\n\n  <!-- <div class="tab-row">\n\n    <ion-row>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/first.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/second.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/third.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/fourth.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col (click)="categoryPage()">  \n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/fifth.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n    \n\n    </ion-row>\n\n  </div> -->\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="chevron-down-circle-outline"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing Products."\n\n    >\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <div class="banner-text">\n\n        <p [innerHTML]="slide.description"></p>\n\n        <small [innerHTML]="slide.smalltext"></small>\n\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <!-- <p (click)="viewAllCategories()">\n\n    Featured Items\n\n    <small class="bg-thime btn-round text-white" float-right> View All </small>\n\n  </p> -->\n\n\n\n  <!-- <div class="card-main">\n\n    <ion-card>\n\n      <ion-card-header (click)="toggleAccordionVehicle()">\n\n        <ion-list>\n\n          <ion-item>\n\n            <button ion-button clear small icon-only item-right>\n\n              <ion-icon color="light" [name]="icon"></ion-icon>\n\n            </button>\n\n\n\n            <h6>SHOP BY VEHICLE</h6>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-header>\n\n      <ion-card-content #cc>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select\n\n                    placeholder="MAKE"\n\n                    value="sortpopular"\n\n                    okText="Ok"\n\n                    cancelText="Cancel"\n\n                    (ionChange)="makeDropDownValue(makeValue)"\n\n                    [(ngModel)]="makeValue">\n\n                    <ion-option *ngFor="let key of makeList" >{{key}}</ion-option>\n\n                  \n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select\n\n                    placeholder="MODEL"\n\n                    value="sortpopular"\n\n                    okText="Ok"\n\n                    cancelText="Cancel"\n\n                  >\n\n                    <ion-option value="sortpopular">popularity</ion-option>\n\n                    <ion-option value="sortaveragerating">rating</ion-option>\n\n                    <ion-option value="sortlatest">latest</ion-option>\n\n                    <ion-option value="sortpricelowhigh" style="max-width: 100%"\n\n                      >low to high</ion-option\n\n                    >\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select\n\n                    placeholder="YEAR"\n\n                    value="sortpopular"\n\n                    okText="Ok"\n\n                    cancelText="Cancel"\n\n                  >\n\n                    <ion-option value="sortpopular">popularity</ion-option>\n\n                    <ion-option value="sortaveragerating">rating</ion-option>\n\n                    <ion-option value="sortlatest">latest</ion-option>\n\n                    <ion-option value="sortpricelowhigh" style="max-width: 100%"\n\n                      >low to high</ion-option\n\n                    >\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row\n\n            class="ion-justify-content-center"\n\n            style="2px 10px !important;"\n\n          >\n\n            <button ion-button full class="bg-thime btn-round btn-text">\n\n              Search \n\n            </button>\n\n          </ion-row>\n\n        </div>  \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div> -->\n\n\n\n\n\n  <!-- <div class="card-main">\n\n    <ion-card>\n\n      <ion-card-header (click)="toggleAccordionCategory()">\n\n        <ion-list>\n\n          <ion-item>\n\n            <button ion-button clear small icon-only item-right>\n\n              <ion-icon color="light" [name]="icon"></ion-icon>\n\n            </button>\n\n\n\n            <h6>SHOP BY CATEGORY</h6>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-header>\n\n      <ion-card-content #cc1>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center;background: white;">\n\n\n\n                <ion-grid class="product-grid" style="margin-top: 40px;">\n\n                  <ion-row class="rowgrid">\n\n                    <ion-col\n\n                      class="columngrid"\n\n                      *ngFor="let featuredProductCategories of featuredProductCategoryList"\n\n                      (click)="productcategoryDetailPage(featuredProductCategories.catId,featuredProductCategories.url)"\n\n                      style="box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);">\n\n              \n\n                     \n\n                      <ion-card >\n\n                        \n\n              \n\n                        <ion-card-header style="justify-content: left">\n\n                          <div \n\n                            class="img-box"\n\n                           \n\n                           >\n\n\n\n\n\n                            <img  [src]="featuredProductCategories.thumbnail"  style="width:200px;height:80px;margin-top: 13px">\n\n\n\n                         \n\n                              \n\n                          </div>\n\n                        </ion-card-header>\n\n                        <ion-card-content>\n\n                      \n\n                          <ion-item >\n\n                            <h5 style="font-size: 14px;text-align: -webkit-center;margin-top: 7px;">{{featuredProductCategories.name}}</h5> \n\n                          </ion-item>\n\n                          <div>\n\n                            <div *ngIf="featuredProductCategories.regular_price">    \n\n                              <h5 style="font-size: 12px;text-align: center;"  > <span class="priceicon">Price : </span>  <span class="priceicon">$</span> {{featuredProductCategories.regular_price}} </h5>  \n\n                             \n\n                            </div>\n\n\n\n\n\n                        \n\n                            <div *ngIf="!featuredProductCategories.regular_price" style="text-align: -webkit-center;">    \n\n                              <div class="rateing">\n\n                                <div class="card-btn">\n\n                                   <p class="" float-left>\n\n                                  \n\n                                    \n\n                                  </p> \n\n                                 \n\n                                </div>\n\n                              </div>\n\n                            </div> \n\n                        </div>\n\n              \n\n                        \n\n              \n\n                         \n\n                        </ion-card-content>\n\n                      </ion-card>\n\n                    </ion-col>\n\n              \n\n                \n\n                  </ion-row>\n\n                </ion-grid>\n\n              \n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n     \n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row\n\n            class="ion-justify-content-center"\n\n           \n\n          >\n\n            <button ion-button full class="bg-thime btn-round btn-text">\n\n              Shop Now\n\n            </button>\n\n          </ion-row>\n\n        </div>  \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div> -->\n\n\n\n  \n\n\n\n \n\n  \n\n\n\n \n\n\n\n\n\n   <div *ngIf="featuredProductsList; else elseStatement" class="checkFeaturedProducts"> \n\n</div> \n\n<ng-template #elseStatement style="margin-top: 10px;"> \n\n    No Product Available\n\n</ng-template> \n\n\n\n<ng-container *ngIf="( featuredProductsList | filter : localSearchProduct) as result">\n\n\n\n  \n\n  \n\n  <p *ngIf="result.length === 0">No matching Result found</p>  \n\n</ng-container>\n\n\n\n  <ion-grid class="product-grid" style="margin-top: 40px;">\n\n    <ion-row class="rowgrid">\n\n      <ion-col\n\n        class="columngrid"\n\n        *ngFor="let featuredProducts of featuredProductsList | filter:localSearchProduct">\n\n\n\n       \n\n        <ion-card >\n\n          \n\n\n\n          <ion-card-header style="justify-content: left">\n\n            <div \n\n              class="img-box"\n\n              (click)="productDetailPage(featuredProducts.id,featuredProducts.name,featuredProducts.regular_price)">\n\n              <img  [src]="featuredProducts.image"  style="width:200px;height:80px ;">\n\n            </div>\n\n            <ion-icon    name="md-heart" class="text-light icon" (click)="addToWishList(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)"></ion-icon>\n\n         \n\n          \n\n\n\n           \n\n          </ion-card-header>\n\n          <ion-card-content>\n\n\n\n           \n\n        \n\n            <ion-item >\n\n              <h5 style="font-size: 11px;text-align: -webkit-center;">{{featuredProducts.name}}</h5> \n\n            </ion-item>\n\n            <div>\n\n              <div *ngIf="featuredProducts.regular_price">     <!--If "product" exists-->\n\n                <h5 style="font-size: 12px;text-align: center;color: red;"  > <span class="priceicon" style="color: red;">Price : </span> <span class="priceicon">$</span> {{featuredProducts.regular_price}}  </h5>  \n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p style="width: 100%;" float-left>\n\n                      <button\n\n                        ion-button\n\n                        full\n\n                        class="bg-thime btn-round btn-text"\n\n                        \n\n                        \n\n                        (click)="addToCart(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)"\n\n\n\n                      >\n\n                        Add To Cart\n\n                      </button>\n\n                    </p>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n          \n\n          \n\n              <div *ngIf="!featuredProducts.regular_price">     <!--If "product" not exists-->\n\n                <h5 style="font-size: 12px;text-align: center"> Price Not Available</h5>  \n\n\n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p style="width: 100%;" float-left>\n\n                      <button\n\n                        ion-button\n\n                        full\n\n                        class="bg-thime btn-round btn-text"\n\n                        style="margin-top: 3px; width: 150px;text-align: center;"\n\n                        (click)="readMoreLocal(featuredProducts.id,featuredProducts.name,featuredProducts.regular_price)"\n\n                      >\n\n                        Read More\n\n                      </button>\n\n                    </p>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n          </div>\n\n\n\n          \n\n\n\n            \n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n  \n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  \n\n      <!-- <ion-item>\n\n        <ion-label>Make</ion-label>\n\n        <ion-select [(ngModel)]="makeValue"  (ionChange)="makeDropDownValue(makeValue)">\n\n          <ion-option *ngFor="let key of makeList" >{{key}}</ion-option>\n\n        </ion-select>\n\n    \n\n      </ion-item>\n\n\n\n\n\n     \n\n\n\n\n\n      <ion-item>\n\n        <ion-label>Model</ion-label>\n\n        <ion-select [(ngModel)]="modelValue" (ionChange)="modelDropDownValue(modelValue)" >\n\n          <ion-option *ngFor="let key of modelList">{{makeValue}}</ion-option>\n\n        </ion-select>\n\n      </ion-item> -->\n\n\n\n       <!-- <ion-item>\n\n        <ion-label>Model</ion-label>\n\n        <ion-select [(ngModel)]="makeValue" (ionChange)="modelDropDownValue(makeValue)">\n\n          <ion-option *ngFor="let key of makeList">{{makeValue}}</ion-option>\n\n          \n\n        </ion-select>\n\n        <ion-label>Length {{makeList.length}}</ion-label>\n\n      </ion-item> -->\n\n\n\n \n\n\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\viewall\viewall.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_8__angular_core__["X" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_8__angular_core__["X" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_8__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["a" /* AlertController */]])
], ViewallPage);

//# sourceMappingURL=viewall.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(2);
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
var _a, _b, _c, _d, _e, _f, _g;






let TestingPage = class TestingPage {
    constructor(apiService, loadingController, platform, navCtrl, httpClient, toastController, app) {
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.app = app;
        this.firstName = "";
        this.lastName = "";
        this.companyName = "";
        this.streetAddress = "";
        this.town = "";
        this.postCode = "";
        this.phoneNo = "";
        this.emailAddress = "";
        this.addressArray = [];
        this.countProductsAddress = 0;
        this.emailAddress1 = "104402:BEo8VfAJvOT7Rf0h";
        this.password = "";
        this.emailAddressencoded = "testing";
        this.enstring = "104402:BEo8VfAJvOT7Rf0h";
        // tslint:disable-next-line: no-unused-expression
    }
    ngOnInit() {
        this.pickAddress();
        this.presentLoading();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === "TestingPage") {
                if (nav.canGoBack()) {
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                }
            }
        });
    }
    pickAddress() {
        if (localStorage.getItem("address") === null) {
            console.log("Address Empty");
        }
        else {
            console.log("Address filled");
            // console.log('First Name' + localStorage.getItem('FirstName'));
            // console.log('First Name' + localStorage.getItem('LastName'));
            this.addressArray = localStorage.getItem("address");
            console.log("All Array data " + this.addressArray);
            var storedArray = JSON.parse(localStorage.getItem("address")); //no brackets
            var i;
            for (i = 0; i < storedArray.length; i++) {
                // alert(storedArray[i]);
                console.log("All Array data length" + storedArray[i].FirstName);
                this.firstName = storedArray[i].FirstName;
                this.lastName = storedArray[i].LastName;
                this.streetAddress = storedArray[i].StreetAddress;
                this.town = storedArray[i].Town;
                this.postCode = storedArray[i].PostalCode;
                this.phoneNo = storedArray[i].PhoneNo;
                this.emailAddress = storedArray[i].EmailAddress;
            }
            // for(let i = 0; i < this.addressArray.length; i++){
            //   console.log('Enetered  ');
            //   if(this.addressArray[i].FirstName && this.addressArray[i].LastName  ){
            //     this.strFirstName = this.addressArray[i].FirstName;
            //     console.log('First Name' + this.strFirstName);
            //   }
            // }
        }
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    checkoutBtnClick() {
        if (this.firstName === "") {
            this.showToastOnEmptyFirstName();
        }
        else if (this.lastName === "") {
            this.showToastOnEmptyLastName();
        }
        else if (this.streetAddress === "") {
            this.showToastOnEmptyStreetAddress();
        }
        else if (this.town === "") {
            this.showToastOnEmptyTown();
        }
        else if (this.postCode === "") {
            this.showToastOnEmptyPostCode();
        }
        else if (this.phoneNo === "") {
            this.showToastOnEmptyPhoneNo();
        }
        else if (this.emailAddress === "") {
            this.showToastOnEmptyEmailAddress();
        }
        else {
            // this.showToastOnFormSuccess();
            this.allValidationPassed();
            // this.navCtrl.setRoot(PaymentPage);
            this.loginCredentialsCheck1();
            console.log("All Result " + this.firstName);
        }
    }
    allValidationPassed() {
        let address = [];
        if (localStorage.getItem("address")) {
            address = JSON.parse(localStorage.getItem("address")); // get product list
        }
        console.log("saved first name " + this.firstName);
        console.log("saved last name " + this.lastName);
        address.push({
            FirstName: this.firstName,
            LastName: this.lastName,
            StreetAddress: this.streetAddress,
            Town: this.town,
            PostalCode: this.postCode,
            PhoneNo: this.phoneNo,
            EmailAddress: this.emailAddress,
        });
        localStorage.setItem("address", JSON.stringify(address));
        //this.showToastOnAddAddressLocal(this.firstName);
        this.showToastOnFormSuccess();
    }
    showToastOnFormSuccess() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Success ",
                duration: 1000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyFirstName() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter First Name ",
                duration: 1000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyLastName() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter Last Name ",
                duration: 1000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyCompanyName() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter Company Name ",
                duration: 1000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter Country ",
                duration: 1000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyStreetAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter Street Address ",
                duration: 1000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyTown() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter Town ",
                duration: 1000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyRegion() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter Region ",
                duration: 1000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyPostCode() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter Post Code ",
                duration: 1000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyPhoneNo() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter phone no ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyEmailAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter email address ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnAddAddressLocal(strFirstName) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Address saved locally ",
                duration: 3000,
                position: "bottom",
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
    loginCredentialsCheck1() {
        // Define the string
        // Encode the String
        var encodedString = btoa(this.enstring);
        console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Cookie", "ASP.NET_SessionId=cgydxj1s0320hgw0f5udwoh1; AWSELB=C99F59C51651FA01D4CDD5A64A04F21C64855D8A0792B4BF2570A997B2A9F532677F47FCCE580B41D0156EDE6538E87105E9B5B40ADB39EC1FFBEBBBAF86F902187CC34F8A; AWSELBCORS=C99F59C51651FA01D4CDD5A64A04F21C64855D8A0792B4BF2570A997B2A9F532677F47FCCE580B41D0156EDE6538E87105E9B5B40ADB39EC1FFBEBBBAF86F902187CC34F8A; TS01ea8473=01bec82efc8fe8f35bcdc2a3780ccc780d98d2ebd25ccdb4d1c13d630287e253bfa2a5e1b02a916c4a8fb482006e8406c92df561b5b915ab86c2e7ec2d288b4da518bf90c1965312dcc601882be8be4678b7855d7a6ab61d6d6b5783f73217a2851e84003f");
        var urlencoded = new URLSearchParams();
        urlencoded.append("account_id", "625835");
        urlencoded.append("username", "104402");
        urlencoded.append("password", "BEo8VfAJvOT7Rf0h");
        urlencoded.append("cmd", "_xclick");
        this.retrievedObject = JSON.parse(localStorage.getItem("name"));
        console.log("this.strTest " + this.retrievedObject);
        urlencoded.append("amount", this.retrievedObject);
        urlencoded.append("return_url", "https://demo.paymarkclick.co.nz/guides/test");
        let requestParam = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
        };
        var proxyUrl = "https://cors-anywhere.herokuapp.com/", targetUrl = "https://demo.paymarkclick.co.nz/api/webpayments/paymentservice/rest/WPRequest";
        fetch(proxyUrl + targetUrl, requestParam)
            .then((response) => response.text())
            .then((result) => window.open(result.replace(/<\/?[^>]+>/gi, "")));
    }
};
TestingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: "page-testing",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\testing\testing.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n    <ion-title\n\n      >Address Details\n\n      <span float-right>\n\n        <ion-icon class="icon"\n\n          ><img src="assets/imgs/ic_my_wishlist.png" width="100%;"\n\n        /></ion-icon>\n\n        <ion-icon class="icon" class="fa fa-thumbs-up" (click)="cartPage()"\n\n          ><img src="assets/imgs/ic_my_cart.png" width="100%;"\n\n        /></ion-icon>\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-content" padding>\n\n  <ion-row class="logo-row">\n\n    <ion-col>\n\n      <img src="assets/imgs/sterlinglogo.png" />\n\n      <br />\n\n      <!-- <h4>Sterling Tools</h4> -->\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div>\n\n    <ion-list>\n\n      <div class="login-box">\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list inset>\n\n              <div class="input-container">\n\n                <!-- <ion-icon name="mail" item-left></ion-icon> -->\n\n                <input\n\n                  class="input-field"\n\n                  placeholder="First Name"\n\n                  type="name"\n\n                  [(ngModel)]="firstName"\n\n                  style="\n\n                    width: 100%;\n\n                    box-sizing: border-box;\n\n                    -webkit-box-sizing: border-box;\n\n                    -moz-box-sizing: border-box;\n\n                    height: 35px;\n\n                  "\n\n                />\n\n              </div>\n\n\n\n              <div style="margin-top: 10px">\n\n                <input\n\n                  class="input-field"\n\n                  placeholder="Last Name"\n\n                  type="name"\n\n                  [(ngModel)]="lastName"\n\n                  style="\n\n                    width: 100%;\n\n                    box-sizing: border-box;\n\n                    -webkit-box-sizing: border-box;\n\n                    -moz-box-sizing: border-box;\n\n                    height: 35px;\n\n                  "\n\n                />\n\n              </div>\n\n\n\n              <div style="margin-top: 10px">\n\n                <input\n\n                  class="input-field"\n\n                  placeholder="Company Name"\n\n                  type="name"\n\n                  [(ngModel)]="companyName"\n\n                  style="\n\n                    width: 100%;\n\n                    box-sizing: border-box;\n\n                    -webkit-box-sizing: border-box;\n\n                    -moz-box-sizing: border-box;\n\n                    height: 35px;\n\n                  "\n\n                />\n\n              </div>\n\n\n\n              <div style="margin-top: 14px">\n\n                <h4 style="font-size: 15px">Country/Region</h4>\n\n              </div>\n\n\n\n              <div style="margin-top: 10px">\n\n                <input\n\n                  class="input-field"\n\n                  placeholder="Street Address"\n\n                  type="name"\n\n                  [(ngModel)]="streetAddress"\n\n                  style="\n\n                    width: 100%;\n\n                    box-sizing: border-box;\n\n                    -webkit-box-sizing: border-box;\n\n                    -moz-box-sizing: border-box;\n\n                    height: 35px;\n\n                  "\n\n                />\n\n              </div>\n\n\n\n              <div style="margin-top: 10px">\n\n                <input\n\n                  class="input-field"\n\n                  placeholder="Town/City"\n\n                  type="name"\n\n                  [(ngModel)]="town"\n\n                  style="\n\n                    width: 100%;\n\n                    box-sizing: border-box;\n\n                    -webkit-box-sizing: border-box;\n\n                    -moz-box-sizing: border-box;\n\n                    height: 35px;\n\n                  "\n\n                />\n\n              </div>\n\n\n\n              <div style="margin-top: 10px">\n\n                <input\n\n                  class="input-field"\n\n                  placeholder="Region/Optional"\n\n                  type="name"\n\n                  [(ngModel)]="region"\n\n                  style="\n\n                    width: 100%;\n\n                    box-sizing: border-box;\n\n                    -webkit-box-sizing: border-box;\n\n                    -moz-box-sizing: border-box;\n\n                    height: 35px;\n\n                  "\n\n                />\n\n              </div>\n\n\n\n              <div style="margin-top: 10px">\n\n                <input\n\n                  class="input-field"\n\n                  placeholder="Postcode"\n\n                  type="number"\n\n                  [(ngModel)]="postCode"\n\n                  style="\n\n                    width: 100%;\n\n                    box-sizing: border-box;\n\n                    -webkit-box-sizing: border-box;\n\n                    -moz-box-sizing: border-box;\n\n                    height: 35px;\n\n                  "\n\n                />\n\n              </div>\n\n\n\n              <div style="margin-top: 10px">\n\n                <input\n\n                  class="input-field"\n\n                  placeholder="PhoneNo."\n\n                  type="number"\n\n                  [(ngModel)]="phoneNo"\n\n                  style="\n\n                    width: 100%;\n\n                    box-sizing: border-box;\n\n                    -webkit-box-sizing: border-box;\n\n                    -moz-box-sizing: border-box;\n\n                    height: 35px;\n\n                  "\n\n                />\n\n              </div>\n\n\n\n              <div style="margin-top: 10px">\n\n                <input\n\n                  class="input-field"\n\n                  placeholder="Email Address"\n\n                  type="email"\n\n                  [(ngModel)]="emailAddress"\n\n                  style="\n\n                    width: 100%;\n\n                    box-sizing: border-box;\n\n                    -webkit-box-sizing: border-box;\n\n                    -moz-box-sizing: border-box;\n\n                    height: 35px;\n\n                  "\n\n                />\n\n              </div>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col class="signup-col">\n\n            <button\n\n              ion-button\n\n              class="submit-btn"\n\n              full\n\n              type="submit"\n\n              style="text-transform: none"\n\n              class="bg-thime btn-round btn-text"\n\n              (click)="checkoutBtnClick()"\n\n            >\n\n              Submit\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\testing\testing.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ToastController */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */]) === "function" ? _g : Object])
], TestingPage);

//# sourceMappingURL=testing.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(40);
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





let SearchdetailsPage = class SearchdetailsPage {
    constructor(navCtrl, navParams, alertController, platform, app, toastController, httpClient, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.platform = platform;
        this.app = app;
        this.toastController = toastController;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.currentNumber = 1;
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.countProductsWishList = 0;
        this.strId = navParams.get("id");
        this.strProductDescription = 'Product Description: ' + navParams.get("description");
        this.strProductName = 'Product Name: ' + navParams.get("name");
        this.strProductSize = 'Product Size: ' + navParams.get("size");
        this.strImage = navParams.get("image");
        this.strProductRegularPrice = 'Product Regular Price: ' + navParams.get("regular_price");
        this.strProductMake = 'Product Make: ' + navParams.get("make");
        this.strProductModel = 'Product Model: ' + navParams.get("model");
    }
    ngOnInit() {
        this.showLoaderPageLoad();
        this.checkNetwork();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'SearchdetailsPage') {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
                    console.log('test');
                }
                else {
                    console.log('test-------');
                }
            }
        });
        if (this.countProductsWishlistLocalUpdated === 0) {
            this.countProductsWishlistLocalUpdated = '';
            console.log('Entered');
        }
        if (this.countProductsCartLocalUpdated === 0) {
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
    addToWishList(id, name, image, description, regular_price, x) {
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
        productsWishlist.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price });
        localStorage.setItem('productsWishlist', JSON.stringify(productsWishlist));
        // this.buttonIcon = "home";
        this.showToastOnAddProductWishlist(name);
        this.countProductsWishlistLocalUpdated++;
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            console.log('Code for localStorage/sessionStorage.');
        }
        else {
            // Sorry! No Web Storage support..
            console.log('Sorry! No Web Storage support..');
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
            this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
                this.obj = JSON.stringify(jsonResponse);
                console.log("Sent productsList response " + this.obj);
                console.log("Sent productsList id " + id);
                this.showToastOnAddProductServer(name);
                this.countProductsCart++;
            });
        }
    }
    showToastOnAddProductWishlist(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Wishlist : \n ' + strProductAdded + '\n',
            duration: 1000,
            position: "bottom",
        });
        toast.present();
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
    showLoaderPageLoad() {
        let loading = this.loadingController.create({
            content: 'Please wait loading details!'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 1700);
    }
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_2__capacitor_core__["a" /* Plugins */];
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
                // this.showLoaderPageLoad();
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
                        },
                    },
                ],
            });
            alert.present();
        });
    }
};
SearchdetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-searchdetails',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\searchdetails\searchdetails.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"/>\n\n    </ion-icon>\n\n    </button>\n\n    <ion-title>Product Detail\n\n      <span float-right>\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n        \n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n      </span>\n\n     \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header> \n\n\n\n\n\n<ion-content class="bg-light">\n\n  <div class="img-section shadow-bottom" text-center>\n\n  \n\n  \n\n\n\n\n\n    <img  [src]="strImage"  style="width:200px;height:150px;margin-top: 18px;">\n\n\n\n    <div class="tab-btn-box">\n\n      <!-- <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;"  >\n\n        \n\n      </div>\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div>\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div> -->\n\n    </div>\n\n    <!-- <div class="d-flex" style="align-items: start;margin-top: 5px;" >\n\n      <span>{{strName}}</span>\n\n      <span class="icon">\n\n        <ion-icon name="md-remove" (click)="decrementValue()"></ion-icon\n\n      ></span>\n\n      <span\n\n        class="text-sky small-text"\n\n        style="text-align: center; margin-left: 20%"\n\n      >\n\n        {{currentNumber}}</span\n\n      >\n\n      <span class="icon" style="margin-left: 20%"\n\n        ><ion-icon name="md-add" (click)="incrementValue()"></ion-icon\n\n      ></span>\n\n    </div>\n\n    <div class="card-btn" style="margin-top: 15px;">\n\n      <div class="d-flex" style="padding: 1rem">\n\n        <div class="review-box">\n\n          <span class="text-sky small-text" style="color: black;">Product Quantity</span>\n\n        </div>\n\n      \n\n      </div>\n\n    </div> -->\n\n  </div>\n\n\n\n\n\n\n\n  <div class="features bg-white shadow-bottom" padding style="margin-top: 50px;">\n\n    <h6 class="heading">Key Features</h6>\n\n    \n\n    <p><span class="circle"></span>{{strProductName}}</p>\n\n    <p><span class="circle"></span>{{strProductDescription}}</p>\n\n    <p><span class="circle"></span>{{strProductRegularPrice}} $ </p>\n\n    <p><span class="circle"></span>{{strProductMake}}</p>  \n\n    <p><span class="circle"></span>{{strProductModel}}</p>\n\n    <!-- <p><span class="circle"></span>{{strProductSize}}</p> -->\n\n\n\n\n\n\n\n    \n\n  </div>\n\n\n\n  <div class="reating-review bg-white" padding style="margin-top: 50px;">\n\n    <div class="reating"></div>\n\n\n\n    <div class="lick"  >\n\n      <button\n\n      ion-button\n\n      full\n\n      class="btn-round green-shadow btn-text"\n\n      style="background-color: red; color: white;"\n\n     \n\n      (click)="addToCart(dynamicId,strProductName,strImage,strProductDescription,strProductRegularPrice)"\n\n\n\n      >\n\n\n\n    Add To Cart\n\n      \n\n    </button>\n\n    </div>\n\n\n\n    <!-- (click)="addToCart(dynamicId)" -->\n\n    \n\n\n\n  \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\searchdetails\searchdetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], SearchdetailsPage);

//# sourceMappingURL=searchdetails.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductcategorydetaillistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productcategorydetail_productcategorydetail__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(13);
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






let ProductcategorydetaillistPage = class ProductcategorydetaillistPage {
    constructor(navCtrl, navParams, toastController, httpClient, alertController, platform, app, apiProvider, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.httpClient = httpClient;
        this.alertController = alertController;
        this.platform = platform;
        this.app = app;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.currentNumber = 1;
        this.viewCartList = [];
        this.countProductsWishList = 0;
        this.countProductsCartLocal = 0;
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.strProductId = navParams.get("id");
        this.strProductName = navParams.get("name");
        this.strProductImage = navParams.get("image");
        this.strProductRegularPrice = navParams.get("regular_price");
        this.strProductDescription = navParams.get("description");
        this.strProductMake = navParams.get("make");
        this.strProductModel = navParams.get("model");
        this.strProductYear = navParams.get("year");
        this.strProductStock = navParams.get("stock");
        if (this.strProductName === "") {
            this.strProductName = "No Product Name   ";
        }
        else {
            this.strProductName = "Product Name: " + this.strProductName;
        }
        if (this.strProductDescription === "") {
            this.strProductDescription = "No Product Description   ";
        }
        else {
            this.strProductDescription =
                "Product Description: " + this.strProductDescription;
        }
        if (this.strProductRegularPrice === "") {
            this.strProductRegularPrice = "No Regular Price   ";
        }
        else {
            this.strProductRegularPrice =
                "Regular Price: " + this.strProductRegularPrice;
        }
        if (this.strProductMake === "") {
            this.strProductMake = "No Product Make   ";
        }
        else {
            this.strProductMake = "Product Make: " + this.strProductMake;
        }
        if (this.strProductModel === "") {
            this.strProductModel = "No Product Model   ";
        }
        else {
            this.strProductModel = "Product Model: " + this.strProductModel;
        }
        if (this.strProductYear === "") {
            this.strProductYear = "No Product Year   ";
        }
        else {
            this.strProductYear = "Product Year: " + this.strProductYear;
        }
        // if(this.strProductStock === ''){
        //   this.strProductStock = 'No Product Stock   ';
        // }
        // else {
        //   this.strProductStock = 'Product Stock: ' + this.strProductStock;
        // }
        console.log("Id received" + this.strProductId);
        console.log("Name received" + this.strProductName);
        console.log("Image received" + this.strProductName);
    }
    ngOnInit() {
        this.viewCartApi();
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
        var productsWishlistarrayFromStorage = JSON.parse(localStorage.getItem("productsWishlist"));
        if (productsWishlistarrayFromStorage != null &&
            productsWishlistarrayFromStorage.length > 0) {
            var arrayLength = productsWishlistarrayFromStorage.length;
            this.countProductsWishList = arrayLength;
            this.countProductsWishlistLocalUpdated = this.countProductsWishList;
            console.log("Local Wishlist filled " + this.countProductsWishlistLocalUpdated);
        }
        else {
            console.log("Local Wishlist empty ");
        }
        /*
             Local Cart
         */
        var productsCartarrayFromStorage = JSON.parse(localStorage.getItem("products"));
        if (productsCartarrayFromStorage != null &&
            productsCartarrayFromStorage.length > 0) {
            var arrayLength1 = productsCartarrayFromStorage.length;
            this.countProductsCart = arrayLength1;
            this.countProductsCartLocalUpdated = this.countProductsCart;
            console.log("Local Cart filled " + this.countProductsCartLocalUpdated);
        }
        else {
            console.log("Local Cart empty ");
        }
        this.checkNetwork();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === "ProductcategorydetaillistPage") {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__productcategorydetail_productcategorydetail__["a" /* ProductcategorydetailPage */]);
                }
                else {
                }
            }
        });
    }
    incrementValue() {
        this.currentNumber++;
    }
    decrementValue() {
        if (this.currentNumber <= 1) {
            console.log("Issue in cart ");
            this.showToastOnCart();
        }
        else {
            console.log("success in cart ");
            this.currentNumber--;
        }
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
        }
        else {
            this.httpClient
                .get("http://busybanda.com/sterling-tools/api/set_cart_items?" +
                "user_id=" +
                localStorage.getItem("Userid value") +
                "&product_id=" +
                id)
                .subscribe((jsonResponse) => {
                this.obj = JSON.stringify(jsonResponse);
                console.log("Sent productsList response " + this.obj);
                console.log("Sent productsList id " + id);
                this.showToastOnAddProductServer(name);
                // this.countProductsCart++;
                this.countProductsCartLocalUpdated++;
            });
        }
    }
    showToastOnCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Minimum product quantity cannot be less than 1 ",
                duration: 400,
                position: "bottom",
            });
            toast.present();
        });
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log("All Json Response" + this.obj);
                        this.strData = "No Products in Cart";
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
                        }
                        else {
                            this.countProductsCartLocalUpdated = this.countProductsCart;
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
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
            message: "Product Added in Cart : \n " +
                strProductAdded +
                "\n" +
                "\nProduct Quantity:  1",
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_3__capacitor_core__["a" /* Plugins */];
            this.networkListener = Network.addListener("networkStatusChange", (status) => {
                console.log("Network status HomePage here", status);
                this.networkStatus = status;
            });
            if ((yield Network.getStatus()).connectionType === "none") {
                this.showNetworkAlert();
                console.log("Network status not available", this.networkStatus);
            }
            else {
                this.networkStatus = yield Network.getStatus();
                console.log("Network status available", this.networkStatus);
                this.showLoadingControllerLaunch();
            }
        });
    }
    showNetworkAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert = yield this.alertController.create({
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
        });
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: "Please wait!",
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 800);
    }
    showToastOnAddProductLocal(strProductAdded) {
        const toast = this.toastController.create({
            message: "Product Added in Local Cart : \n " +
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
            message: "Product Added in Server : \n " +
                strProductAdded +
                "\n" +
                "\nProduct Quantity:  1",
            duration: 1000,
            position: "bottom",
        });
        toast.present();
    }
};
ProductcategorydetaillistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: "page-productcategorydetaillist",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\productcategorydetaillist\productcategorydetaillist.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n    <ion-title\n\n      >Product Detail\n\n      <span float-right>\n\n        <!-- <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n\n        <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon> -->\n\n\n\n       \n\n        <!-- <ion-icon class="icon"  (click)="wishlistPage()" >\n\n          <img src="assets/imgs/ic_my_wishlist.png" width="100%;" />\n\n          <ion-badge class="icon add-icon" >{{countProductsWishList}}</ion-badge> \n\n        </ion-icon>\n\n\n\n        <ion-icon class="icon"  (click)="cartPage()" >\n\n          <img src="assets/imgs/ic_my_cart.png" width="100%;" />\n\n          <ion-badge class="icon add-icon" >{{countProductsCart}}</ion-badge> \n\n        </ion-icon> -->\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n        \n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n     \n\n\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header> \n\n\n\n<!--<select size & color>-->\n\n<ion-content class="bg-light">\n\n  <div class="img-section shadow-bottom" text-center>\n\n  \n\n  \n\n\n\n\n\n    <img  [src]="strProductImage"  style="width:200px;height:150px;margin-top: 18px;">\n\n\n\n    \n\n   \n\n  </div>\n\n\n\n  \n\n\n\n  <div class="features bg-white shadow-bottom" padding style="margin-top: 15px;">\n\n    <h6 class="heading">Key Features</h6>\n\n    <p><span class="circle"></span>{{strProductName}}</p>\n\n    <p><span class="circle"></span>{{strProductDescription}}</p>\n\n     <p><span class="circle"></span>{{strProductMake}}</p>  \n\n    <p><span class="circle"></span>{{strProductModel}}</p>\n\n    <p><span class="circle"></span>{{strProductYear}}</p>\n\n    <p><span class="circle"></span>{{strProductRegularPrice}}  </p>\n\n  \n\n  </div>\n\n\n\n  \n\n\n\n  <div *ngIf="strProductRegularPrice"> \n\n    <div class="reating-review bg-white" padding >\n\n      <div class="reating"></div>\n\n  \n\n      <!-- <div class="d-flex" style="align-items: start" style="margin-top: 48px;">\n\n        <span>{{strName}}</span>\n\n        <span class="icon">\n\n          <ion-icon name="md-remove" (click)="decrementValue()"></ion-icon\n\n        ></span>\n\n        <span\n\n          class="text-sky small-text"\n\n          style="text-align: center; margin-left: 20%"\n\n        >\n\n          {{currentNumber}}</span\n\n        >\n\n        <span class="icon" style="margin-left: 20%"\n\n          ><ion-icon name="md-add" (click)="incrementValue()"></ion-icon\n\n        ></span>\n\n      </div>\n\n      <div class="card-btn" style="margin-top: 8px;">\n\n        <div class="d-flex" style="padding: 1rem">\n\n          <div class="review-box">\n\n            <span class="text-sky small-text" style="color: black;">Product Quantity</span>\n\n          </div>\n\n         \n\n        </div>\n\n      </div> -->\n\n      <div class="lick" >\n\n        <button\n\n        ion-button\n\n        full\n\n        class="btn-round green-shadow btn-text"\n\n        style="background-color: red; color: white;"\n\n        (click)="addToCart(dynamicId,strProductName,strImage,strProductDescription,strProductRegularPrice)"\n\n        >\n\n  \n\n      Add To Cart\n\n        \n\n      </button>\n\n      </div>\n\n  \n\n    \n\n    </div>\n\n  </div>\n\n\n\n  <!-- <div *ngIf="strProductRegularPrice;else test" class="lick">\n\n    available\n\n  </div>\n\n  <ng-template #test class="lick">\n\n    not available\n\n  </ng-template> -->\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\productcategorydetaillist\productcategorydetaillist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
], ProductcategorydetaillistPage);

//# sourceMappingURL=productcategorydetaillist.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadmorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productcategorydetail_productcategorydetail__ = __webpack_require__(48);
/*
    Created by Lasting Software Private Limited
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






let ReadmorePage = class ReadmorePage {
    constructor(navCtrl, navParams, platform, loadingController, app, httpClient, alertController, apiProvider, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingController = loadingController;
        this.app = app;
        this.httpClient = httpClient;
        this.alertController = alertController;
        this.apiProvider = apiProvider;
        this.toastController = toastController;
        this.productsListInformation = [];
        this.productsListInformation1 = [];
        this.viewCartList = [];
        this.countProductsWishList = 0;
        this.countProductsCartLocal = 0;
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.strId = navParams.get("id");
        this.dynamicId = this.strId;
    }
    ngOnInit() {
        this.checkNetwork();
        this.viewCartApi();
        if (this.countProductsWishlistLocalUpdated === 0) {
            this.countProductsWishlistLocalUpdated = '';
            console.log('Entered');
        }
        if (this.countProductsCartLocalUpdated === 0) {
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
        this.showLoadingControllerLaunch();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'ReadmorePage') {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__productcategorydetail_productcategorydetail__["a" /* ProductcategorydetailPage */]);
                }
                else {
                }
            }
        });
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
                    this.strProductDescription = entry.description;
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
                    // this.strTaxonomyProductBrandTag = "No Tag Available";
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
            this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
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
        if (localStorage.getItem('productsWishlist')) {
            productsWishlist = JSON.parse(localStorage.getItem('productsWishlist')); // get product list 
        }
        console.log("Sent productsList id " + id);
        console.log("Sent productsList name " + name);
        productsWishlist.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price });
        localStorage.setItem('productsWishlist', JSON.stringify(productsWishlist));
        // this.buttonIcon = "home";
        this.showToastOnAddProductWishlist(name);
        this.countProductsWishlistLocalUpdated++;
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            console.log('Code for localStorage/sessionStorage.');
        }
        else {
            // Sorry! No Web Storage support..
            console.log('Sorry! No Web Storage support..');
        }
    }
    showToastOnAddProductWishlist(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Wishlist : \n ' + strProductAdded + '\n',
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
    showToastOnAddProductLocal(strProductAdded) {
        const toast = this.toastController.create({
            message: 'Product Added in Local Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
                        if (this.viewCartList.length >= 1) {
                            console.log('Cart Filled ');
                            this.countProductsCart = this.viewCartList.length;
                            this.buttonIcon = "cart";
                        }
                        else {
                            console.log('Cart Empty ');
                            this.countProductsCart = 'Empty';
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
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
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_3__capacitor_core__["a" /* Plugins */];
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
                //this.router.navigate(['/invoices']);
                // this.router.navigate(['/managecard']);
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
    showToastOnAddProductServer(strProductAdded) {
        const toast = this.toastController.create({
            message: 'Product Added in Server : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
            duration: 1000,
            position: "bottom",
        });
        toast.present();
    }
};
ReadmorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-readmore',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\readmore\readmore.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n    <ion-title\n\n      >Product Detail\n\n      <span float-right>\n\n       \n\n        <!-- <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n\n        <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon> -->\n\n\n\n        <ion-icon class="icon"  (click)="wishlistPage()" >\n\n          <img src="assets/imgs/ic_my_wishlist.png" width="100%;" />\n\n          <ion-badge class="icon add-icon" >{{countProductsWishList}}</ion-badge> \n\n        </ion-icon>\n\n\n\n        <ion-icon class="icon"  (click)="cartPage()" >\n\n          <img src="assets/imgs/ic_my_cart.png" width="100%;" />\n\n          <ion-badge class="icon add-icon" >{{countProductsCart}}</ion-badge> \n\n        </ion-icon>\n\n        \n\n         \n\n     \n\n\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header> \n\n\n\n<!--<select size & color>-->\n\n<ion-content class="bg-light">\n\n  <div class="img-section shadow-bottom" text-center>\n\n  \n\n  \n\n\n\n    <!-- <img src="assets/imgs/productimage.jpg" /> -->\n\n\n\n    <img  [src]="strImage"  style="width:200px;height:150px;margin-top: 8px;">\n\n\n\n    <!-- <div class="tab-btn-box">\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;"  >\n\n        \n\n      </div>\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div>\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div>\n\n    </div> -->\n\n    <!-- <div class="d-flex" style="align-items: start">\n\n      <span>{{strName}}</span>\n\n      <span class="icon">\n\n        <ion-icon name="md-remove" (click)="decrementValue()"></ion-icon\n\n      ></span>\n\n      <span\n\n        class="text-sky small-text" style="text-align: center; margin-left: 20%">\n\n        {{currentNumber}}\n\n      </span>\n\n      <span class="icon" style="margin-left: 20%"><ion-icon name="md-add" (click)="incrementValue()"></ion-icon></span>\n\n    </div> -->\n\n    <!-- <div class="card-btn">\n\n      <div class="d-flex" style="padding: 1rem">\n\n        <div class="review-box">\n\n          <span class="text-sky small-text" style="color: black;">Product Quantity</span>\n\n        </div>\n\n      \n\n      </div>\n\n    </div> -->\n\n  </div>\n\n\n\n  <!-- <div class="select-section shadow-bottom">\n\n        <ion-row>\n\n            <ion-col col-6 >\n\n                <div class="size">\n\n                    <ion-item>\n\n                        <ion-label>{{"size" | translate}}</ion-label>\n\n                        <ion-select  interface="action-sheet">\n\n                            <ion-option value="enable">Small</ion-option>\n\n                            <ion-option selected value="mute">Medium</ion-option>\n\n                            <ion-option value="mute_week"> large</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <div class="color">\n\n                    <ion-item>\n\n                        <ion-label>{{"color" | translate}}</ion-label>\n\n                        <ion-select interface="action-sheet">\n\n                            <ion-option selected value="enable">Black</ion-option>\n\n                            <ion-option value="mute">White</ion-option>\n\n                            <ion-option value="mute_week">Red</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div> -->\n\n\n\n  <!-- <div class="select-section shadow-bottom">\n\n      <ion-row>\n\n          <ion-col col-12 >\n\n              <div class="size">\n\n                  <ion-item>\n\n                      <ion-label>{{"size" | translate}}</ion-label>\n\n                      <ion-select  interface="action-sheet">\n\n                          <ion-option value="enable">Small</ion-option>\n\n                          <ion-option selected value="mute">Medium</ion-option>\n\n                          <ion-option value="mute_week"> large</ion-option>\n\n                      </ion-select>\n\n                  </ion-item>\n\n              </div>\n\n          </ion-col>\n\n       \n\n      </ion-row>\n\n  </div> -->\n\n\n\n  <div class="features bg-white shadow-bottom" padding>\n\n    <h6 class="heading">Key Features</h6>\n\n    <p><span class="circle"></span>{{strProductName}}</p>\n\n    <!-- <p><span class="circle"></span>{{strProductRegularPrice}} $ </p> -->\n\n\n\n   \n\n    <p><span class="circle"></span>{{strProductDescription}}</p>\n\n    <p><span class="circle"></span>{{strProductSalePrice}}</p>\n\n    <p><span class="circle"></span>{{strProductMake}}</p>  \n\n    <p><span class="circle"></span>{{strProductModel}}</p>\n\n    <p><span class="circle"></span>{{strProductYear}}</p>\n\n    <p><span class="circle"></span>{{strStock}}</p>\n\n\n\n  \n\n\n\n\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductCatTitle}}</p>\n\n    <p><span class="circle"></span>{{strTaxonomyProductBrandTitle}}</p> -->\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductBrandModel}}</p> -->\n\n\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductMakeTitle}}</p>\n\n    <p><span class="circle"></span>{{strTaxonomyProductYearTitle}}</p> -->\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductBrandTag}}</p> -->\n\n  </div>\n\n\n\n  <!-- <div class="reating-review bg-white" padding >\n\n    <div class="reating"></div>\n\n\n\n    <div class="lick" >\n\n      <button\n\n      ion-button\n\n      full\n\n      class="btn-round green-shadow btn-text"\n\n      style="background-color: red; color: white;"\n\n     \n\n      (click)="addToCart(dynamicId,strProductName,strImage,strProductDescription,strProductRegularPrice)"\n\n\n\n      >\n\n\n\n    Add To Cart\n\n      \n\n    </button>\n\n    </div>\n\n\n\n    \n\n\n\n  \n\n  </div> -->\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\readmore\readmore.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */]])
], ReadmorePage);

//# sourceMappingURL=readmore.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppconstantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(13);
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
 * Generated class for the AppconstantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let AppconstantsPage = class AppconstantsPage {
    constructor(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        // users: any;
        this.users = [];
    }
    ngOnInit() {
        this.data.getData1().subscribe(res => {
            this.users = res.results;
        });
    }
    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.data.getData1().subscribe(res => {
                for (let user of res.results) {
                    this.users.push(user);
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    }
};
AppconstantsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-appconstants',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\appconstants\appconstants.html"*/'\n\n<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important;">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title text-uppercase>lAZY LOADING\n\n      <span float-right>\n\n        <ion-icon class="icon" ><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n\n        <ion-icon class="icon" ><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n        \n\n\n\n           \n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n       \n\n  \n\n  <ion-content padding>\n\n  \n\n   \n\n  \n\n    <ion-list>\n\n      <ion-item *ngFor="let user of users" style="font-size: 10px;">\n\n        <!-- <ion-avatar item-left>\n\n          <img [src]="user.picture.thumbnail" alt="" style="width: 40px;height: 40px;">\n\n        </ion-avatar>\n\n        {{user.name.first}} {{user.name.last}} -->\n\n        <ion-title text-uppercase>Test</ion-title>\n\n      </ion-item>\n\n    </ion-list>\n\n  \n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n  \n\n\n\n  </ion-content>\n\n  '/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\appconstants\appconstants.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
], AppconstantsPage);

//# sourceMappingURL=appconstants.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorydetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capacitor_core__ = __webpack_require__(22);
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
 * Generated class for the CategorydetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let CategorydetailPage = class CategorydetailPage {
    constructor(navCtrl, navParams, alertController, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.toastController = toastController;
        this.currentNumber = 1;
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.countProductsWishList = 0;
        this.strId = navParams.get("id");
        this.strProductDescription = 'Product Description: ' + navParams.get("description");
        this.strImage = navParams.get("image");
        this.strProductRegularPrice = 'Product Regular Price: ' + navParams.get("regular_price");
        this.strProductMake = 'Product Make: ' + navParams.get("make");
        this.strProductModel = 'Product Model: ' + navParams.get("model");
        console.log("Received Product Id " + this.strId);
        console.log("Received Product description " + this.strProductDescription);
        console.log("Received Product image " + this.strImage);
    }
    ngOnInit() {
        this.checkNetwork();
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
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_2__capacitor_core__["a" /* Plugins */];
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
                //this.router.navigate(['/invoices']);
                // this.router.navigate(['/managecard']);
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
};
CategorydetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categorydetail',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\categorydetail\categorydetail.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"/>\n\n    </ion-icon>\n\n    </button>\n\n    <ion-title>Category Detail\n\n      <span float-right>\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n        \n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n      </span>\n\n     \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header> \n\n\n\n\n\n<ion-content class="bg-light">\n\n  <div class="img-section shadow-bottom" text-center>\n\n  \n\n  \n\n\n\n\n\n    <img  [src]="strImage"  style="width:200px;height:150px;margin-top: 18px;">\n\n\n\n    <div class="tab-btn-box">\n\n      <!-- <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;"  >\n\n        \n\n      </div>\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div>\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div> -->\n\n    </div>\n\n    <div class="d-flex" style="align-items: start;margin-top: 5px;" >\n\n      <span>{{strName}}</span>\n\n      <span class="icon">\n\n        <ion-icon name="md-remove" (click)="decrementValue()"></ion-icon\n\n      ></span>\n\n      <span\n\n        class="text-sky small-text"\n\n        style="text-align: center; margin-left: 20%"\n\n      >\n\n        {{currentNumber}}</span\n\n      >\n\n      <span class="icon" style="margin-left: 20%"\n\n        ><ion-icon name="md-add" (click)="incrementValue()"></ion-icon\n\n      ></span>\n\n    </div>\n\n    <div class="card-btn">\n\n      <div class="d-flex" style="padding: 1rem">\n\n        <div class="review-box">\n\n          <span class="text-sky small-text" style="color: black;">Product Quantity</span>\n\n        </div>\n\n      \n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n\n\n  <div class="features bg-white shadow-bottom" padding>\n\n    <h6 class="heading">Key Features</h6>\n\n    <p><span class="circle"></span>{{strProductDescription}}</p>\n\n    <p><span class="circle"></span>{{strProductRegularPrice}} $ </p>\n\n    <p><span class="circle"></span>{{strProductMake}}</p>  \n\n    <p><span class="circle"></span>{{strProductModel}}</p>\n\n\n\n\n\n    \n\n  </div>\n\n\n\n  <div class="reating-review bg-white" padding >\n\n    <div class="reating"></div>\n\n\n\n    <div class="lick" >\n\n      <button\n\n      ion-button\n\n      full\n\n      class="btn-round green-shadow btn-text"\n\n      style="background-color: red; color: white;"\n\n     \n\n      (click)="addToCart(dynamicId,strProductName,strImage,strProductDescription,strProductRegularPrice)"\n\n\n\n      >\n\n\n\n    Add To Cart\n\n      \n\n    </button>\n\n    </div>\n\n\n\n    <!-- (click)="addToCart(dynamicId)" -->\n\n    \n\n\n\n  \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\categorydetail\categorydetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], CategorydetailPage);

//# sourceMappingURL=categorydetail.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
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
 * Generated class for the ClsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ClsPage = class ClsPage {
    constructor(navCtrl, navParams, loadingController, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.httpClient = httpClient;
        this.url = 'http://busybanda.com/sterling-tools/api/get_category_by_id?id=39493';
        this.categoriesList = [];
    }
    ngOnInit() {
        this.getCategoriesApi();
    }
    getCategoriesApi() {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                content: 'Please wait fetching data!',
            });
            yield loader.present();
            loader.present().then(() => {
                // const service = this.apiProvider.getOrders();   
                // service.subscribe((jsonResponse) => {      
                this.httpClient.get(this.url).subscribe(jsonResponse => {
                    if (jsonResponse) {
                        this.categoriesList = jsonResponse['result'];
                        this.obj = JSON.stringify(jsonResponse);
                        console.log('details available ' + this.obj);
                        loader.dismiss();
                    }
                    const myURL_body = jsonResponse['result'];
                    this.strResponse = myURL_body;
                    if (this.strResponse = 'null') {
                        console.log('details available obj empty ');
                        this.strDataServer = 'No data';
                    }
                    else {
                        console.log('details not available ');
                    }
                }, error => {
                    console.log(error);
                    // this.showToastOnProductError(error);
                });
            });
        });
    }
};
ClsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-cls',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\cls\cls.html"*/'<!--\n\n  Generated template for the ClsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png" />\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>Pagination\n\n      <span float-right>\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n\n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n      </span>\n\n\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ng-template *ngIf="categoriesList.length === \'0\';then card else noCard">\n\n\n\n    <ion-item lines="none">\n\n      <ion-label style="margin-top: 40%;text-align: center;">No data Found</ion-label>\n\n    </ion-item>\n\n  </ng-template>\n\n\n\n  <ng-template #noCard>\n\n    <ion-item>\n\n      <ion-label>SORT BY </ion-label>\n\n      <ion-select placeholder="Please select" value="Name" okText="Okay" cancelText="Dismiss"\n\n        (ionChange)="sortDropDownValue(categoriesList)" style="width: 200px;padding: 0px 10px;">\n\n        <ion-option value="Name">Name</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n   \n\n    <ion-grid class="product-grid">\n\n      <ion-row class="rowgrid" text-center>\n\n        <ion-col col-6 class="columngrid" *ngFor="let categoryItem of categoriesList |filter:searchText | paginate: {itemsPerPage: 10,currentPage: p}">\n\n          <ion-card>\n\n            <ion-card-header style="justify-content: left">\n\n              <div class="img-box">\n\n                <img [src]="categoryItem.image" style="width:200px;height:80px ;"\n\n                  (click)="productDetailPage(categoryItem.id,categoryItem.name,categoryItem.image,categoryItem.regular_price,categoryItem.description,categoryItem.attribute.pa_make,categoryItem.attribute.pa_model,categoryItem.attribute.pa_year)">\n\n              </div>\n\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n\n\n              <div>\n\n                <h5 style="font-size: 11px;text-align: -webkit-center;"> {{categoryItem.name}}</h5>\n\n              </div>\n\n              <div>\n\n\n\n\n\n                <div *ngIf="categoryItem.regular_price">\n\n                  <!--If "product" exists-->\n\n                  <h5 style="font-size: 10px;text-align: center;color: red;margin-top: 13px;"> <span class="priceicon"\n\n                      style="color: red;">Price : </span> <span class="priceicon">$</span>\n\n                    {{categoryItem.regular_price}} </h5>\n\n                  <div class="rateing">\n\n                    <div class="card-btn">\n\n                      <p style="width: 100%;font-size: 10px;" float-left>\n\n                        <button ion-button full class="bg-thime btn-round btn-text" \n\n                         \n\n                          (click)="addToCart(categoryItem.id,categoryItem.name,categoryItem.image,categoryItem.description,categoryItem.regular_price)">\n\n                          Add To Cart\n\n                        </button>\n\n                      </p>\n\n                    </div> \n\n                  </div>\n\n                </div>\n\n\n\n                <div *ngIf="!categoryItem.regular_price">\n\n                  <!--If "product" not exists-->\n\n                  <h5 style="font-size: 10px;text-align: center;color: red;margin-top: 13px;"> Price Not Available</h5>\n\n                  <div class="rateing">\n\n                    <div class="card-btn">\n\n                      <p style="width: 100%;font-size: 10px;" float-left>\n\n                        <button ion-button full class="bg-thime btn-round btn-text" \n\n                        \n\n                          (click)="productDetailPage(categoryItem.id,categoryItem.name,categoryItem.image,categoryItem.regular_price,categoryItem.description,categoryItem.attribute.pa_make,categoryItem.attribute.pa_model,categoryItem.attribute.pa_year)">\n\n                          Read More\n\n                        </button>\n\n                      </p>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n  </ng-template>\n\n  <pagination-controls (pageChange)="p = $event" previousLabel="Prev" nextLabel="Next"></pagination-controls>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\cls\cls.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], ClsPage);

//# sourceMappingURL=cls.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchproducts_searchproducts__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categorydetail_categorydetail__ = __webpack_require__(184);
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
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let Home1Page = class Home1Page {
    constructor(apiProvider, httpClient, navCtrl, toastController, apiService, loadingCtrl, alertController) {
        this.apiProvider = apiProvider;
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.stateInfo = [];
        this.countryInfo = [];
        this.cityInfo = [];
        this.makeInfo = [];
        this.modelInfo = [];
        this.makeList = [];
        this.modelList = [];
        this.engineList = [];
        this.yearList = [];
        this.productCategoryList = [];
        this.products = [];
        this.subject = "";
        this.body = "";
        this.to = "";
        this.showDataboolean = false;
        this.productCategoryInformation = [];
        this.productCategoryInformation1 = [];
        this.searchProduct = "";
        this.searchTerm = "";
        this.searchTerm1 = "";
        this.searching = false;
        this.isItemAvailable = false;
        this.div1 = true;
        this.div2 = true;
        this.div3 = true;
        this.showMainContent = true;
        this.selectedType = "make";
        this.showData = true;
        this.hide = true;
        this.hide1 = true;
        this.hide2 = true;
        this.hide3 = true;
        this.hideMeFirstValue = false;
        this.hideButton = true;
        this.items = [
            { title: "one" },
            { title: "two" },
            { title: "three" },
            { title: "four" },
            { title: "five" },
            { title: "six" },
        ];
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
        this.initializeItems();
    }
    ngOnInit() {
        // this.callProductCategoryDetail();
        this.getMakeApi();
        this.hide = !this.hide;
        this.hide1 = !this.hide1;
        this.hide2 = !this.hide2;
        this.hide3 = !this.hide3;
    }
    clickfirst() {
        this.hideMeFirstValue = true;
    }
    getModelApi(strMakeListSelectedValue) {
        console.log("getModelApi called    ");
        const service = this.apiProvider.getMakeCategories(strMakeListSelectedValue);
        service.subscribe((data) => {
            const resultado = data;
            this.modelList = resultado;
            this.strMakeListSelectedValue = resultado;
            this.strModelListSelectedValue = resultado;
            this.strEngineListSelectedValue = resultado;
            this.obj = JSON.stringify(data);
            console.log("Selected model tushar:  " + this.strTestValue);
        });
    }
    triggerMeMake(value) {
        console.log("selected triggerMeMake", value);
        this.hideMe2 = !this.hideMe2;
    }
    triggerMeModel(value) {
        console.log("selected value", value);
        this.strModelValue = value;
        console.log("selected strTestValue1", this.strModelValue);
        this.getEngineApi(this.makeValue, this.strModelValue);
        this.hideMe1 = !this.hideMe1;
        // this.companyName = 'Model value';
    }
    triggerMeEngine(value) {
        console.log("selected value", value);
        this.strTestValue2 = value;
        console.log("selected strTestValue2", this.strTestValue2);
        this.getYearApi(this.makeValue, this.strModelValue, this.strTestValue2);
    }
    triggerMeYear(value) {
        console.log("selected value", value);
        this.strTestValue3 = value;
        console.log("selected strTestValue3", this.strTestValue3);
        this.getYearApi(this.makeValue, this.strTestValue2, this.strTestValue3);
    }
    getEngineApi(strMakeListSelectedValue, strModelListSelectedValue) {
        console.log("getEngineApi called    " + this.strModelValue);
        const service = this.apiProvider.getEngineCategories(strMakeListSelectedValue, this.strModelValue);
        service.subscribe((data) => {
            const resultado = data;
            this.engineList = resultado;
            this.strMakeListSelectedValue = resultado;
            this.strModelListSelectedValue = resultado;
            this.strModelListSelectedValue = this.modelValue;
            console.log("Engine api response  make " + strMakeListSelectedValue);
            console.log("Engine api response  model " + strModelListSelectedValue);
        });
    }
    getYearApi(strMakeListSelectedValue, strModelListSelectedValue, strEngineListSelectedValue) {
        console.log("getYearApi called    ");
        const service = this.apiProvider.getYearCategories(strMakeListSelectedValue, strModelListSelectedValue, strEngineListSelectedValue);
        service.subscribe((data) => {
            const resultado = data;
            this.yearList = resultado;
            this.strMakeListSelectedValue = resultado;
            this.strModelListSelectedValue = resultado;
            console.log("Engine api response   " + resultado);
        });
    }
    makeDropDownValue() {
        this.showLoadingControllerLaunch();
        this.strMakeListSelectedValue = this.makeValue;
        this.getModelApi(this.strMakeListSelectedValue);
        console.log("Selected makeDropDownValue :  ", this.makeValue);
        this.hideMe = !this.hideMe;
    }
    searchData(makeValue, strTestValue2, strEngineListSelectedValue, year) {
        if (!this.makeValue) {
            console.log("issue make");
            this.showToastOnEmptyMake();
        }
        else if (!this.strModelValue) {
            this.showToastOnEmptyModel();
            console.log("issue model");
        }
        // else if (!this.strEngineValue) {
        //   this.strEngineValueUpdated = this.strEngineValue;
        //   this.showToastOnEmptyModel();
        //   console.log('issue engine' + this.strEngineValueUpdated);
        // }
        else {
            console.log("success!!!!!!");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__searchproducts_searchproducts__["a" /* SearchproductsPage */], {
                make: this.makeValue,
                model: this.strTestValue2,
                engine: this.strModelValue,
                year: this.yearValue,
            });
            console.log("Sent product make " + this.makeValue);
            console.log("Sent product model " + this.strModelValue);
            console.log("Sent product engine " + this.strEngineListSelectedValue);
            console.log("Sent product year " + this.yearValue);
        }
    }
    showToastOnEmptyMake() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Please select Make ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyModel() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Please select Model ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    callProductCategoryDetail() {
        this.httpClient
            .get("http://busybanda.com/sterling-tools/api/get_products/")
            .subscribe((jsonResponse) => {
            if (jsonResponse) {
                let loading = this.loadingCtrl.create({
                    content: "Please wait...",
                });
                loading.present();
                console.log("Got Json Response success");
                loading.dismiss();
                this.productCategoryInformation1 = jsonResponse["result"];
                this.obj = JSON.stringify(jsonResponse);
                console.log("Particular product details json " + this.obj);
                localStorage.setItem("GetProducts", this.obj);
            }
            else {
                console.log("Got Json Response failure");
            }
            if (this.productCategoryInformation1 &&
                this.productCategoryInformation1.length) {
                console.log("Particular product details available ");
            }
            else {
                this.strData = "No data available";
                console.log("Particular product empty " + jsonResponse["result"]);
            }
        });
    }
    // productDetailPage(id, name,regular_price) {
    //   this.navCtrl.push(ItemdetailPage, {
    //     id: id,
    //     name: name,
    //     regular_price:regular_price
    //   });
    //   console.log("Sent product id " + id);
    //   console.log("Sent product name " + name);
    //   console.log("Sent product name " + regular_price);
    //   console.log('data added '+this.val);
    // }
    searchClick(id, description, regular_price, image, pa_make, pa_model) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__categorydetail_categorydetail__["a" /* CategorydetailPage */], {
            id: id,
            description: description,
            regular_price: regular_price,
            image: image,
            make: pa_make,
            model: pa_model,
        });
        console.log("Selected Product Id " + id);
        console.log("Selected Product description " + description);
        console.log("Selected Product regular_price " + regular_price);
        console.log("Selected Product image " + image);
        console.log("Selected Product make " + pa_make);
        console.log("Selected Product model " + pa_model);
    }
    filterItems(searchTerm) {
        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
    filterItems1(searchTerm1) {
        return this.productCategoryInformation.filter((item1) => {
            return item1.name.toLowerCase().indexOf(searchTerm1.toLowerCase()) > -1;
        });
    }
    initializeItems() {
        this.items = [
            "Islamabad",
            "Istanbul",
            "Jakarta",
            "Kiel",
            "Kyoto",
            "Le Havre",
            "Lebanon",
            "Lhasa",
        ];
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != "") {
            this.items = this.items.filter((item) => {
                return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    }
    getItems1(ev) {
        // Reset items back to all of the items
        // this.callProductCategoryDetail();
        // set val to the value of the ev target
        var val = ev.target.value;
        // var ans = 334;
        // var temp = ans.toString().toLowerCase();
        // alert(temp);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != "") {
            this.productCategoryInformation1 = this.productCategoryInformation1.filter((item) => {
                return (item
                    .toString()
                    .toLowerCase()
                    .indexOf(val.toString().toLowerCase()) > -1);
            });
        }
    }
    showToastOnClick() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Please select Model ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    div1Function() {
        this.div1 = true;
        this.div2 = false;
        this.div3 = false;
    }
    div2Function() {
        this.div2 = true;
        this.div1 = false;
        this.div3 = false;
    }
    div3Function() {
        this.div3 = true;
        this.div2 = false;
        this.div1 = false;
    }
    openSelect() {
        this.selectRef.open();
    }
    closeSelect() {
        this.selectRef.close();
    }
    ShowHideButton() {
        this.showMainContent = this.showMainContent ? false : true;
    }
    onChange(event) {
        this.selectedType = event.target.value;
    }
    onChange1(event) {
        this.selectedType = "Please select value";
    }
    onOptionsSelected(event) {
        let value = event.target.value;
        this.sourceValue = value;
        if (this.sourceValue === "MAKE") {
            this.showData = true;
            console.log("Test");
        }
        else {
            this.showData = false;
            console.log("Test1");
        }
    }
    onOptionsSelected1(event) {
        let value = event.target.value;
        this.sourceValue = value;
        if (this.sourceValue === "MAKE") {
            this.showData = true;
            console.log("Test2");
        }
        else {
            this.showData = false;
            console.log("Test3");
        }
    }
    ngIfCtrl() {
        this.hide = !this.hide;
        console.log("Tushar called ");
    }
    ngIfCtrl1() {
        this.hide = this.hide;
        console.log("Tushar called!!!!");
    }
    ngIfCtrl2() {
        this.hide = this.hide;
        console.log("Tushar called!!!!!!!!! ");
    }
    getOuterName(event) {
        console.log("selected value getOuterName " + this.companyName);
        console.log("Model clicked");
        // this.hideMe1 = !  this.hideMe1;
        // this.companyName = 'Default value' + '';
    }
    getOuterName1(event) {
        console.log("selected value  getOuterName1" + this.companyName1);
        console.log("Engine clicked");
        this.hideMe2 = !this.hideMe2;
    }
    getOuterName2(event) {
        console.log("selected value  getOuterName2" + this.companyName);
        console.log("Year clicked");
        this.hideMe3 = !this.hideMe2;
    }
    hideTest() {
        console.log("Make clicked");
        this.hideMe = !this.hideMe;
    }
    hideTest1() {
        console.log("Model clicked");
        this.hideMe1 = !this.hideMe1;
    }
    hideTest2() {
        console.log("Engine clicked");
        this.hideMe2 = !this.hideMe2;
    }
    getMakeApi() {
        //console.log('getMakeApi called    ');
        const service = this.apiProvider.searchMakeCategories();
        service.subscribe((data) => {
            const resultado = data;
            this.makeList = resultado;
            this.strMakeListValue = resultado;
        });
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingCtrl.create({
            content: "Please wait !",
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 600);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])("mySelect"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Select */])
], Home1Page.prototype, "selectRef", void 0);
Home1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: "page-home1",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\home1\home1.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n    <ion-title text-uppercase\n\n      >AUTO PARTS\n\n      <span float-right>\n\n        <ion-icon class="icon"\n\n          ><img src="assets/imgs/ic_my_wishlist.png" width="100%;"\n\n        /></ion-icon>\n\n        <ion-icon class="icon"\n\n          ><img src="assets/imgs/ic_my_cart.png" width="100%;"\n\n        /></ion-icon>\n\n        <!-- <ion-badge  color="primary" style="width: 100px;">\n\n          <ion-icon name="cart"></ion-icon>\n\n              {{7}}\n\n          </ion-badge>\n\n\n\n          <ion-badge  color="primary" style="width: 30px;">\n\n            <ion-icon name="mail"></ion-icon>\n\n                {{3}}\n\n            </ion-badge> -->\n\n        <!-- <ion-icon class="icon" ><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n\n            <ion-badge color="dark">99</ion-badge> -->\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n  <div class="col-md-4 col-xs-12">\n\n    <!-- <div class="size" style="justify-content: center">\n\n    <ion-item>\n\n      <ion-label>Make</ion-label>\n\n      <ion-select\n\n        \n\n        value="sortpopular"\n\n        okText="Ok"\n\n        cancelText="Cancel"\n\n        (ionChange)="makeDropDownValue(makeValue)"\n\n        [(ngModel)]="makeValue"\n\n        >\n\n        <ion-option *ngFor="let makeKey of makeList" >{{makeKey}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </div>\n\n\n\n  <div class="size" style="justify-content: center">\n\n    <ion-item>\n\n      <ion-label>Model</ion-label>\n\n      <ion-select \n\n        value="sortpopular"\n\n        okText="Ok"\n\n        cancelText="Cancel">\n\n        <ion-option *ngFor="let modelKey of modelList" [value] = "modelKey" (ionSelect)="triggerMeModel(modelKey)" >{{modelKey}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </div>\n\n  <div class="size" style="justify-content: center">\n\n    <ion-item>\n\n      <ion-label>SubModel</ion-label>\n\n      <ion-select\n\n        value="sortpopular"\n\n        okText="Ok"\n\n        cancelText="Cancel"\n\n        [(ngModel)]="engineValue">\n\n        <ion-option *ngFor="let engineKey of engineList" [value] = "engineKey" (ionSelect)="triggerMeEngine(engineKey)">{{engineKey}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </div>\n\n\n\n  <div class="size" style="justify-content: center">\n\n    <ion-item>\n\n      <ion-label>Year</ion-label>\n\n      <ion-select\n\n        value="sortpopular"\n\n        okText="Ok"\n\n        cancelText="Cancel"\n\n        [(ngModel)]="yearValue">\n\n        <ion-option *ngFor="let yearKey of yearList"  >{{yearKey}}</ion-option>\n\n      </ion-select>\n\n\n\n\n\n    </ion-item>\n\n  </div>\n\n\n\n\n\n  <button ion-button full class="bg-thime btn-round btn-text"\n\n  (click)="searchData(makeValue,strTestValue2,strTestValue3)">\n\n    Search \n\n  </button> -->\n\n\n\n    <!-- <div class="list">\n\n		<ul>\n\n			<li *ngFor="let item of collection | paginate: { itemsPerPage: 5, currentPage: p }">{{ makeList }}</li>\n\n    </ul>\n\n    <ion-card>\n\n      <ion-label>{{makeList.result}}</ion-label>\n\n    </ion-card>\n\n\n\n		<pagination-controls (pageChange)="p = $event"></pagination-controls>\n\n</div> -->\n\n\n\n    <!-- <ion-item>\n\n  <ion-label floating>Badge Number</ion-label>\n\n  <ion-input type="number" [(ngModel)]="badgeNumber">\n\n  </ion-input>\n\n</ion-item>\n\n\n\n<button ion-button (click)="setBadges(badgeNumber)">Set Badges to {{badgeNumber}}</button>\n\n<button ion-button (click)="increaseBadges(badgeNumber)">Increase Badges by {{badgeNumber}}</button>\n\n<button ion-button (click)="decreaseBadges(badgeNumber)">Decrease Badges by {{badgeNumber}}</button>\n\n<button ion-button (click)="getBadges()">Get Badges</button>\n\n<button ion-button (click)="clearBadges()">Clear Badges</button>\n\n<button ion-button (click)="requestPermission()">Request Permission</button> -->\n\n\n\n    <!-- <ion-searchbar (ionInput)="getItems($event)" ></ion-searchbar>\n\n<ion-list>\n\n  <ion-item *ngFor="let item of items">\n\n    {{ item }}\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n\n\n\n\n<ion-searchbar (ionInput)="getItems1($event)"  [(ngModel)]="name" ></ion-searchbar>\n\n<ion-list>\n\n  <ion-item *ngFor="let item of productCategoryInformation1" (click)="searchClick(item.id,item.description,item.regular_price,item.image,item.attribute.pa_make,item.attribute.pa_model)">\n\n    {{ item.name }}\n\n  </ion-item>\n\n</ion-list> -->\n\n\n\n    <!-- <div class="col-md-12 no-padding">\n\n\n\n  <select (change)="onChange($event)"  class="form-control select2" type="text" style="width: 100%;">\n\n    <option selected value="make">Please select value</option>\n\n    <option  value="make">Make</option>\n\n\n\n  </select>\n\n</div>\n\n\n\n<div *ngIf="selectedType == \'make\'" class="col-md-12 no-padding">\n\n  <label>Application Name</label>\n\n  <input type="text"  class="form-control" id="applicationname" placeholder="Application Name">\n\n  <span class="text-danger" *ngIf="[\'applicationname\'].touched && [\'applicationname\'].hasError(\'required\')">\n\n    Application Name is required! </span>\n\n</div>\n\n\n\n<div *ngIf="selectedType == \'make\'" class="col-md-12 no-padding">\n\n  <input type="text" class="form-control" id="mainmenu" placeholder="Message  "> \n\n  <select (change)="onChange1($event)"  class="form-control select2" type="text" style="width: 100%;">\n\n    <option  value="make">Model</option>\n\n\n\n  </select>-->\n\n\n\n    <!-- <select [(ngModel)]="selectAccountType" (change)=\'onOptionsSelected($event)\' style="width: 100px">\n\n      <option selected id="MAKE" value="MAKE">MAKE</option>\n\n      <option id="VALUEB" value="VALUEB">VALUEB</option>\n\n    </select>\n\n\n\n    <div *ngIf="showData===true">\n\n\n\n       <select [(ngModel)]="selectAccountType" (change)=\'onOptionsSelected1($event)\' style="width: 100px">\n\n        <option id="MAKE" value="MAKE">MAKE</option>\n\n      </select> \n\n    </div> -->\n\n    <!-- <button ion-button full round (click)="ngIfCtrl()" >Click </button>\n\n    <ion-input type="text" value="" *ngIf="hide"></ion-input> -->\n\n\n\n    <!-- <ion-item *ngIf="hide">\n\n      <ion-label>Select</ion-label>\n\n      <ion-select (ionChange)="getOuterName()"  [(ngModel)]="companyName"   placeholder = "Make">\n\n        <ion-option value="make">make</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item  >\n\n      <ion-label>Select</ion-label>\n\n      <ion-select (ionChange)="getOuterName()"  [(ngModel)]="companyName"   placeholder = "Model">\n\n        <ion-option value="model">model</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n\n\n    <!-- <ion-item  >\n\n      <ion-label>Select</ion-label>\n\n      <ion-select (ionChange)="getOuterName()"  [(ngModel)]="companyName"   placeholder = "Make" (click)="ngIfCtrl()">\n\n        <ion-option value="make">make</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item  *ngIf="hide">\n\n      <ion-label>Select</ion-label>\n\n      <ion-select (ionChange)="getOuterName()"  [(ngModel)]="companyName"   placeholder = "Model" (click)="ngIfCtrl1()">\n\n        <ion-option value="model">model</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n\n\n    <!-- <div *ngIf="hideMe"> here your content</div> -->\n\n\n\n    <!-- <button ion-button (click)="hideTest()">Make</button>\n\n    <button ion-button (click)="hideTest1()"  *ngIf="hideMe">Model</button>\n\n    <button ion-button  (click)="hideTest2()" *ngIf="hideMe1">Engine</button>\n\n    <button ion-button   *ngIf="hideMe2">Year</button> -->\n\n\n\n    <ion-item>\n\n      <ion-label>Make</ion-label>\n\n      <ion-select\n\n        (ionChange)="makeDropDownValue(makeValue)"\n\n        [(ngModel)]="makeValue"\n\n        placeholder="Select One"\n\n      >\n\n        <ion-option *ngFor="let makeKey of makeList">{{makeKey}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="hideMe">\n\n      <ion-label>Model</ion-label>\n\n      <ion-select\n\n        (ionChange)="getOuterName()"\n\n        [(ngModel)]="companyName"\n\n        placeholder="Model"\n\n      >\n\n        <ion-option\n\n          *ngFor="let modelKey of modelList"\n\n          [value]="modelKey"\n\n          (ionSelect)="triggerMeModel(modelKey)"\n\n          placeholder="Model value"\n\n          >{{modelKey}}</ion-option\n\n        >\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="hideMe1">\n\n      <ion-label>Engine</ion-label>\n\n      <ion-select\n\n        (ionChange)="getOuterName1()"\n\n        [(ngModel)]="engineValue"\n\n        placeholder="Engine"\n\n      >\n\n        <ion-option\n\n          *ngFor="let engineKey of engineList"\n\n          [value]="engineKey"\n\n          (ionSelect)="triggerMeEngine(engineKey)"\n\n        >\n\n          {{engineKey}}</ion-option\n\n        >\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <div class="size" style="justify-content: center">\n\n      <ion-item *ngIf="hideMe2">\n\n        <ion-label>Year</ion-label>\n\n        <ion-select\n\n          value="sortpopular"\n\n          okText="Ok"\n\n          cancelText="Cancel"\n\n          [(ngModel)]="yearValue"\n\n          (ionChange)="getOuterName2()"\n\n        >\n\n          <ion-option *ngFor="let yearKey of yearList">{{yearKey}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </div>\n\n    <button ion-button full round (click)="searchData(makeValue)">\n\n      Search\n\n    </button>\n\n\n\n    <!-- <div *ngIf="alive">alive</div>\n\n    <div *ngIf="!alive">dead</div>\n\n    <button ion-button (click)="alive = !alive">flip</button> -->\n\n\n\n    <!-- <button ion-button (click)="hideMeFirst()">Hide Div</button> -->\n\n    <!-- <button ion-button (click)="clickfirst()">Make</button>\n\n<div *ngIf="hideMeFirstValue"> here your content</div> -->\n\n\n\n    <!-- <ion-item >\n\n      <ion-label>Select value</ion-label>\n\n      <ion-select placeholder="Select One"  >\n\n        <ion-option value="f">Test</ion-option>\n\n        <ion-option value="m">Test</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="clickfirst()">\n\n      <ion-label>Select value</ion-label>\n\n      <ion-select placeholder="Select One" *ngIf="hideMe2">\n\n        <ion-option value="f">Test</ion-option>\n\n        <ion-option value="m">Test</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n\n\n    <!-- <ion-item  (click)="hideTest()">\n\n  <ion-label>Make</ion-label>\n\n  <ion-select  (ionChange)="makeDropDownValue(makeValue)" [(ngModel)]="makeValue"   placeholder = "Make" (click)="ngIfCtrl()">\n\n    <ion-option *ngFor="let makeKey of makeList" >{{makeKey}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n\n\n<ion-item  *ngIf="hide" >\n\n  <ion-label>Model</ion-label>\n\n  <ion-select (ionChange)="getOuterName()"  [(ngModel)]="companyName"   placeholder = "Model" (click)="ngIfCtrl1()">\n\n    <ion-option *ngFor="let modelKey of modelList" [value] = "modelKey" (ionSelect)="triggerMeModel(modelKey)" >{{modelKey}}</ion-option>\n\n  </ion-select>\n\n</ion-item> -->\n\n\n\n    <!-- <ion-item *ngIf="hide">\n\n    Test\n\n  </ion-item> -->\n\n\n\n    <!-- <ion-item  >\n\n  <ion-label>Engine</ion-label>\n\n  <ion-select (ionChange)="getOuterName()"  [(ngModel)]="engineValue"   placeholder = "Engine" (click)="ngIfCtrl1()">\n\n    <ion-option *ngFor="let engineKey of engineList" [value] = "engineKey" (ionSelect)="triggerMeEngine(engineKey)">{{engineKey}}</ion-option>  </ion-select>\n\n</ion-item> -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\home1\home1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], Home1Page);

//# sourceMappingURL=home1.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeresponsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__itemdetail_itemdetail__ = __webpack_require__(54);
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
 * Generated class for the MakeresponsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let MakeresponsePage = class MakeresponsePage {
    constructor(navCtrl, modalCtrl, navParams, httpClient, loadingController, toastController, apiProvider, toastCtrl, app, platform, alertController) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.apiProvider = apiProvider;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.platform = platform;
        this.alertController = alertController;
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
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.countProductsWishList = 0;
        this.strId = navParams.get("id");
        this.strProductUrl = "Product Url " + navParams.get("url");
        this.strProductDescription = "Product Description " + navParams.get("description");
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
        this.viewCartApi();
        this.showLoadingControllerLaunch();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'MakeresponsePage') {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
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
                if (this.strProductSubModel) {
                    this.strProductSubModel = 'Sub Model Empty: ';
                }
                else {
                    this.strProductSubModel = 'SubModel: ' + entry.attribute.pa_sub_model;
                }
                if (entry.attribute.pa_year_end === '') {
                    this.strProductYearEnd = 'Year End Empty ';
                }
                else {
                    this.strProductYearEnd = 'Year End: ' + entry.attribute.pa_year_end;
                }
                if (entry.attribute.pa_year_end === '') {
                    this.strProductYearStart = 'Year Start Empty ';
                }
                else {
                    this.strProductYearStart = 'Year Start: ' + entry.attribute.pa_year_start;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
            id: id,
            title: title,
        });
        console.log('Sent productsList id ' + id);
        console.log('Sent productsList title ' + title);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
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
                        }
                        else {
                            this.countProductsCartLocalUpdated = this.countProductsCart;
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
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
            this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id + '&quantity=' + this.currentNumber).subscribe((jsonResponse) => {
                this.obj = JSON.stringify(jsonResponse);
                console.log("Sent productsList response " + this.obj);
                console.log("Sent productsList id " + id);
                this.showToastOnAddProductServer(name);
                // this.countProductsCart++;
                this.countProductsCartLocalUpdated++;
            });
        }
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
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_7__capacitor_core__["a" /* Plugins */];
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
                //this.router.navigate(['/invoices']);
                // this.router.navigate(['/managecard']);
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
};
MakeresponsePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
        selector: 'page-makeresponse',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\makeresponse\makeresponse.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"/>\n\n    </ion-icon>\n\n    </button>\n\n    <ion-title>Product Detail\n\n     \n\n      <!-- <span float-right>\n\n        <ion-icon name="cart" style="margin-left: 12px;">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n        \n\n        <ion-icon name="cart" style="margin-left: 12px;">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n     \n\n      </span> -->\n\n\n\n\n\n      <span float-right>\n\n\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n        \n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n      </span>\n\n     \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header> \n\n\n\n<!--<select size & color>-->\n\n<ion-content class="bg-light">\n\n  <div class="img-section shadow-bottom" text-center>\n\n  \n\n  \n\n\n\n    <!-- <img src="assets/imgs/productimage.jpg" /> -->\n\n\n\n    <img  [src]="strImage"  style="width:200px;height:150px;margin-top: 8px;">\n\n\n\n    <!-- <div class="tab-btn-box">\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;"  >\n\n        \n\n      </div>\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div>\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div>\n\n    </div> -->\n\n    <div class="d-flex" style="align-items: start">\n\n      <span>{{strName}}</span>\n\n      <span class="icon">\n\n        <ion-icon name="md-remove" (click)="decrementValue()"></ion-icon\n\n      ></span>\n\n      <span\n\n        class="text-sky small-text"\n\n        style="text-align: center; margin-left: 20%"\n\n      >\n\n        {{currentNumber}}</span\n\n      >\n\n      <span class="icon" style="margin-left: 20%"\n\n        ><ion-icon name="md-add" (click)="incrementValue()"></ion-icon\n\n      ></span>\n\n    </div>\n\n    <div class="card-btn">\n\n      <div class="d-flex" style="padding: 1rem">\n\n        <div class="review-box">\n\n          <!-- <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-add" (click)="decrementValue()"></ion-icon></small> -->\n\n          <span class="text-sky small-text" style="color: black;">Product Quantity</span>\n\n        </div>\n\n        <!-- <div class="price-box">\n\n                    <div class="price text-light" style="margin-right: 1rem;">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                    </div>\n\n                    <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                    </div>\n\n                </div> -->\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <!-- <div class="select-section shadow-bottom">\n\n        <ion-row>\n\n            <ion-col col-6 >\n\n                <div class="size">\n\n                    <ion-item>\n\n                        <ion-label>{{"size" | translate}}</ion-label>\n\n                        <ion-select  interface="action-sheet">\n\n                            <ion-option value="enable">Small</ion-option>\n\n                            <ion-option selected value="mute">Medium</ion-option>\n\n                            <ion-option value="mute_week"> large</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <div class="color">\n\n                    <ion-item>\n\n                        <ion-label>{{"color" | translate}}</ion-label>\n\n                        <ion-select interface="action-sheet">\n\n                            <ion-option selected value="enable">Black</ion-option>\n\n                            <ion-option value="mute">White</ion-option>\n\n                            <ion-option value="mute_week">Red</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div> -->\n\n\n\n  <!-- <div class="select-section shadow-bottom">\n\n      <ion-row>\n\n          <ion-col col-12 >\n\n              <div class="size">\n\n                  <ion-item>\n\n                      <ion-label>{{"size" | translate}}</ion-label>\n\n                      <ion-select  interface="action-sheet">\n\n                          <ion-option value="enable">Small</ion-option>\n\n                          <ion-option selected value="mute">Medium</ion-option>\n\n                          <ion-option value="mute_week"> large</ion-option>\n\n                      </ion-select>\n\n                  </ion-item>\n\n              </div>\n\n          </ion-col>\n\n       \n\n      </ion-row>\n\n  </div> -->\n\n\n\n  <div class="features bg-white shadow-bottom" padding>\n\n    <h6 class="heading">Key Features</h6>\n\n    <p><span class="circle"></span>{{strProductName}}</p>\n\n<!--   \n\n    <p><span class="circle"></span>{{strProductDescription}}</p>\n\n    <p><span class="circle"></span>{{strProductRegularPrice}} $ </p> -->\n\n    <!-- <p><span class="circle"></span>{{strProductSalePrice}}</p> -->\n\n    <p><span class="circle"></span>{{strProductMake}}</p>  \n\n    <p><span class="circle"></span>{{strProductModel}}</p>\n\n    <p><span class="circle"></span>{{strProductSubModel}}</p>\n\n    <p><span class="circle"></span>{{strProductYearStart}}</p>\n\n    <p><span class="circle"></span>{{strProductYearEnd}}</p>\n\n  \n\n\n\n    <!-- <p><span class="circle"></span>{{strStock}}</p> -->\n\n\n\n    <!-- <div>\n\n      <div  *ngIf="strStock=== null;else templateName">    \n\n        *Stock --- \n\n      </div>\n\n\n\n      <ng-template #templateName>\n\n        *Stock  \n\n      </ng-template>\n\n  \n\n      \n\n  </div> -->\n\n\n\n\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductCatTitle}}</p>\n\n    <p><span class="circle"></span>{{strTaxonomyProductBrandTitle}}</p> -->\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductBrandModel}}</p> -->\n\n\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductMakeTitle}}</p>\n\n    <p><span class="circle"></span>{{strTaxonomyProductYearTitle}}</p> -->\n\n    <!-- <p><span class="circle"></span>{{strTaxonomyProductBrandTag}}</p> -->\n\n  </div>\n\n\n\n  <div class="reating-review bg-white" padding >\n\n    <div class="reating"></div>\n\n\n\n    <div class="lick" >\n\n      <button\n\n      ion-button\n\n      full\n\n      class="btn-round green-shadow btn-text"\n\n      style="background-color: red; color: white;"\n\n     \n\n      (click)="addToCart(dynamicId,strProductName,strImage,strProductDescription,strProductRegularPrice)"\n\n\n\n      >\n\n\n\n    Add To Cart\n\n      \n\n    </button>\n\n    </div>\n\n\n\n    <!-- (click)="addToCart(dynamicId)" -->\n\n    \n\n\n\n  \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\makeresponse\makeresponse.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
], MakeresponsePage);

//# sourceMappingURL=makeresponse.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Itemdetaillistpage1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(15);
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






let Itemdetaillistpage1Page = class Itemdetaillistpage1Page {
    constructor(navCtrl, navParams, toastController, httpClient, alertController, platform, app, apiProvider, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.httpClient = httpClient;
        this.alertController = alertController;
        this.platform = platform;
        this.app = app;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.currentNumber = 1;
        this.viewCartList = [];
        this.countProductsWishList = 0;
        this.countProductsCartLocal = 0;
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
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
        if (this.countProductsWishlistLocalUpdated === 0) {
            this.countProductsWishlistLocalUpdated = '';
            console.log('Entered');
        }
        if (this.countProductsCartLocalUpdated === 0) {
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
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    console.log('Test');
                }
                else {
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
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
                        console.log('View cart length ' + this.viewCartList.length);
                        if (this.viewCartList) {
                            this.countProductsCartLocalUpdated = this.viewCartList.length;
                        }
                        else {
                            this.countProductsCartLocalUpdated = this.countProductsCart;
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
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
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_3__capacitor_core__["a" /* Plugins */];
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
                this.showLoadingControllerLaunch();
                this.viewCartApi();
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
};
Itemdetaillistpage1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-itemdetaillistpage1',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\itemdetaillistpage1\itemdetaillistpage1.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"/>\n\n    </ion-icon>\n\n    </button>\n\n    <ion-title>Product Detail\n\n     \n\n     \n\n\n\n      <span float-right>\n\n\n\n    \n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n        \n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n      </span>\n\n     \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header> \n\n\n\n<!--<select size & color>-->\n\n<ion-content class="bg-light">\n\n\n\n\n\n \n\n  <div class="img-section shadow-bottom" text-center>\n\n  \n\n  \n\n\n\n    <!-- <img src="assets/imgs/productimage.jpg" /> -->\n\n\n\n    <img  [src]="strProductImage"  style="width:200px;height:150px;margin-top: 18px;">\n\n\n\n   \n\n    <div class="d-flex" style="align-items: start;margin-top: 15px;">\n\n      <span>{{strName}}</span>\n\n      <span class="icon">\n\n        <ion-icon name="md-remove" (click)="decrementValue()"></ion-icon\n\n      ></span>\n\n      <span\n\n        class="text-sky small-text"\n\n        style="text-align: center; margin-left: 20%"\n\n      >\n\n        {{currentNumber}}</span\n\n      >\n\n      <span class="icon" style="margin-left: 20%"\n\n        ><ion-icon name="md-add" (click)="incrementValue()"></ion-icon\n\n      ></span>\n\n    </div>\n\n    <div class="card-btn">\n\n      <div class="d-flex" style="padding: 1rem">\n\n        <div class="review-box">\n\n          <span class="text-sky small-text" style="color: black;margin-top: 4px;">Product Quantity</span>\n\n        </div>\n\n     \n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n \n\n  <div class="features bg-white shadow-bottom" padding>\n\n    <h6 class="heading">Key Features</h6>\n\n    <p><span class="circle"></span>{{strProductName}}</p>\n\n    <p><span class="circle"></span>{{strProductRegularPrice}} $ </p>\n\n    <p><span class="circle"></span>{{strProductDescription}}</p>\n\n    <p><span class="circle"></span>{{strProductSalePrice}}</p>\n\n    <p><span class="circle"></span>{{strProductMake}}</p>  \n\n    <p><span class="circle"></span>{{strProductModel}}</p>\n\n    <p><span class="circle"></span>{{strProductSubModel}}</p>\n\n    <p><span class="circle"></span>{{strProductYearStart}}</p>\n\n    <p><span class="circle"></span>{{strProductYearFrom}}</p>\n\n    <p><span class="circle"></span>{{strProductYearEnd}}</p>\n\n\n\n    \n\n    <!-- <p><span class="circle"></span>{{strStock}}</p> -->\n\n\n\n    \n\n\n\n  \n\n  </div>\n\n\n\n  <div class="reating-review bg-white" padding >\n\n    <div class="reating"></div>\n\n\n\n    <div class="lick" >\n\n      <button\n\n      ion-button\n\n      full\n\n      class="btn-round green-shadow btn-text"\n\n      style="background-color: red; color: white;"\n\n     \n\n      (click)="addToCart(dynamicId,strProductName,strImage,strProductDescription,strProductRegularPrice)"\n\n\n\n      >\n\n\n\n    Add To Cart\n\n      \n\n    </button>\n\n    </div>\n\n\n\n    <!-- (click)="addToCart(dynamicId)" -->\n\n    \n\n\n\n  \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\itemdetaillistpage1\itemdetaillistpage1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
], Itemdetaillistpage1Page);

//# sourceMappingURL=itemdetaillistpage1.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountupdatedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__capacitor_core__ = __webpack_require__(22);
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









let MyaccountupdatedPage = class MyaccountupdatedPage {
    constructor(navCtrl, navParams, loadingController, httpClient, platform, toastController, apiProvider, app, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.httpClient = httpClient;
        this.platform = platform;
        this.toastController = toastController;
        this.apiProvider = apiProvider;
        this.app = app;
        this.alertController = alertController;
        this.account = "profile";
        this.viewCartList = [];
        this.strAddressUpdated = '';
        this.strCityUpdated = '';
        this.strStateUpdated = '';
        this.strPostalCodeUpdated = '';
        this.strPhoneNoUpdated = '';
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.countProductsWishList = 0;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad MyaccountupdatedPage');
    }
    ngOnInit() {
        this.viewCartApi();
        this.showLoaderPageLoad();
        this.getProfileApi();
        this.checkNetwork();
        if (this.countProductsWishlistLocalUpdated === 0) {
            this.countProductsWishlistLocalUpdated = '';
            console.log('Entered');
        }
        if (this.countProductsCartLocalUpdated === 0) {
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
    }
    // getProfileApi(){
    //   this.httpClient.get('http://busybanda.com/sterling-tools/api/get_user_details?' +  'user_id=' + localStorage.getItem('Userid value')).subscribe((jsonResponse) => {
    //         this.obj = JSON.stringify(jsonResponse);
    //         const parsedData = JSON.parse(this.obj);
    //         status = parsedData.Status;
    //         if (localStorage.getItem("Userid value") === null) {
    //           console.log('Issue');
    //         }  
    //         else {
    //           console.log('Success' +this.obj);
    //         }
    //         this.strAddress = parsedData.result.address;
    //         this.strCity = parsedData.result.city;
    //         this.strState = parsedData.result.state;
    //         this.strPostalCode = parsedData.result.postalcode;
    //         this.strPhone = parsedData.result.phone;
    //         console.log('Fetched address' + this.strAddress);
    //       });
    //       this.platform.registerBackButtonAction(() => {
    //         // Catches the active view
    //         let nav = this.app.getActiveNavs()[0];
    //         let activeView = nav.getActive();                
    //         // Checks if can go back before show up the alert
    //         if(activeView.name === 'MyaccountupdatedPage') {
    //             if (nav.canGoBack()){
    //             } else {
    //                 this.navCtrl.setRoot(HomePage);
    //             }
    //         }
    //     });
    // }
    getProfileApi() {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                content: 'Please wait loading profile!',
            });
            yield loader.present();
            loader.present().then(() => {
                // const service = this.apiProvider.getOrders();   
                // service.subscribe((jsonResponse) => {      
                this.httpClient.get('http://busybanda.com/sterling-tools/api/get_user_details?' + 'user_id=' + localStorage.getItem('Userid value')).subscribe((jsonResponse) => {
                    if (jsonResponse) {
                        this.obj = JSON.stringify(jsonResponse);
                        const parsedData = JSON.parse(this.obj);
                        status = parsedData.Status;
                        if (localStorage.getItem("Userid value") === null) {
                            console.log('Issue');
                        }
                        else {
                            console.log('Success' + this.obj);
                        }
                        this.strAddress = parsedData.result.address;
                        this.strCity = parsedData.result.city;
                        this.strState = parsedData.result.state;
                        this.strPostalCode = parsedData.result.postalcode;
                        this.strPhone = parsedData.result.phone;
                        console.log('Fetched address' + this.strAddress);
                        loader.dismiss();
                    }
                    // const myURL_body = jsonResponse['result'];
                    // this.strResponse = myURL_body;
                    //  if(this.strResponse = 'null'){
                    //   console.log('details available obj empty ' );
                    //   this.strDataServer = 'No data';
                    //  }
                    //   else { 
                    //     console.log('details not available ' );
                    //   }
                }, error => {
                    console.log(error);
                    //this.showToastOnProductError(error);
                });
            });
        });
    }
    loginBtnClick() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Login Button clicked.');
            if (this.strAddress === '') {
                this.showToastOnEmptyAddress();
            }
            else if (this.strCity === '') {
                this.showToastOnEmptyCity();
            }
            else if (this.strState === '') {
                this.showToastOnEmptyState();
            }
            else if (this.strPostalCode === '') {
                this.showToastOnEmptyPostalCode();
            }
            else if (this.strPhone === '') {
                this.showToastOnEmptyPhone();
            }
            // else if ((await Network.getStatus()).connectionType === 'none') {
            //   this.showNetworkAlert();
            //   console.log('Network status not available', this.networkStatus);
            // } 
            // Credentials filled 
            else {
                this.showLoadingControllerLaunch();
            }
        });
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: 'Please wait!'
        });
        loading.present();
        this.callUpdateProfileApi();
        setTimeout(() => {
            loading.dismiss();
        }, 1000);
    }
    callUpdateProfileApi() {
        this.strAddressUpdated = this.strAddress;
        this.strCityUpdated = this.strCity;
        this.strStateUpdated = this.strState;
        this.strPostalCodeUpdated = this.strPostalCode;
        this.strPhoneNoUpdated = this.strPhone;
        console.log('callUpdateProfileApi called' + this.strAddress);
        this.httpClient.get('http://busybanda.com/sterling-tools/api/set_user_details?' + 'user_id=' + localStorage.getItem('Userid value') + '&address=' + this.strAddress + '&city=' + this.strCity + '&state=' + this.strState + '&postalcode=' + this.strPostalCode + '&phone=' + this.strPhone).subscribe((response) => {
            this.obj = JSON.stringify(response);
            const parsedData = JSON.parse(this.obj);
            status = parsedData.Status;
            this.strResponseCode = parsedData.RespCode;
            console.log('Updated profile' + this.obj);
            this.getProfileApi();
            if (this.obj.includes('Updated')) {
                console.log('Json Response success ' + this.obj);
                console.log('Json Response status ' + this.obj.status);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
            else {
                this.showLoadingControllerFailure();
                console.log('Json Response Failure ' + this.obj);
            }
        });
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
                        //  if(this.viewCartList.length>=1) {
                        //   console.log('Cart Filled ');
                        //   this.countProducts = this.viewCartList.length;
                        //    this.buttonIcon = "cart";
                        //  }
                        //  else{
                        //   console.log('Cart Empty ');
                        //  this.countProducts = 'Empty';
                        //  }
                        if (this.viewCartList) {
                            this.countProductsCartLocalUpdated = this.viewCartList.length;
                        }
                        else {
                            this.countProductsCartLocalUpdated = this.countProductsCart;
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
    showToastOnEmptyAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Address ',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyCity() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter City ',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyState() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter State ',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyPostalCode() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Postal Code ',
                duration: 3000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    showToastOnEmptyPhone() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Phone ',
                duration: 3000,
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
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_7__capacitor_core__["a" /* Plugins */];
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
                //this.router.navigate(['/invoices']);
                // this.router.navigate(['/managecard']);
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
    showToastOnProductError(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Error' + strProductAdded,
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
};
MyaccountupdatedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
        selector: 'page-myaccountupdated',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\myaccountupdated\myaccountupdated.html"*/'<ion-header class="bg-thime ">\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n    <ion-icon class="menu-icon">\n\n      <img src="assets/imgs/ic_menu.png">\n\n    </ion-icon>\n\n  </button>\n\n    <ion-title>My Account\n\n      <!-- <span float-right> \n\n        <ion-icon padding-right name="ios-search-outline" width="100%;" ></ion-icon>\n\n        <ion-icon name="ios-cart-outline" width="100%;"></ion-icon>              \n\n      </span> -->\n\n      <!-- <span float-right>\n\n        <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n\n        <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon>\n\n      </span> -->\n\n\n\n      <!-- <span float-right>\n\n        <ion-icon class="icon"  (click)="wishlistPage()" >\n\n          <img src="assets/imgs/ic_my_wishlist.png" width="100%;" />\n\n          <ion-badge class="icon add-icon" >{{countProductsWishList}}</ion-badge> \n\n        </ion-icon>\n\n\n\n       \n\n        <ion-icon class="icon"  (click)="cartPage()"  >\n\n          <img src="assets/imgs/ic_my_cart.png" width="100%;" />\n\n          <ion-badge class="icon add-icon" >{{countProductsCartLocal}}</ion-badge> \n\n        </ion-icon>\n\n      </span> -->\n\n\n\n      <span float-right>\n\n\n\n        <!-- <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n        \n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon>  -->\n\n\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n        \n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n      </span>\n\n\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-list padding-left class="tab-bar main-tools">\n\n    <ion-item padding-left padding-right style="background: red;">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/profile_pix.png">\n\n      </ion-avatar>\n\n      <!-- <h2 class="">{{strDataUserLogin}}\n\n        <small class="" style="float: right;"> Edit Profile</small>\n\n      </h2>\n\n      <p class="text-dark" style="color: black;">+91 908 765 4321\n\n      </p> -->\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-toolbar no-border-top class="tab-bar menu-bar">\n\n    <ion-segment [(ngModel)]="account">\n\n      <ion-segment-button value="profile" style="text-transform: none;color: black;">\n\n        Profile\n\n      </ion-segment-button>\n\n      <!-- <ion-segment-button value="card" style="text-transform: none;color: black;">\n\n        My Cards\n\n      </ion-segment-button>\n\n      <ion-segment-button value="address" style="text-transform: none;color: black;">\n\n       My Address\n\n      </ion-segment-button> -->\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="account">\n\n    <div *ngSwitchCase="\'profile\'" class="profile-section">\n\n      <ion-list>\n\n        <!-- <ion-item>\n\n          <ion-label floating>Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="strDataUserLogin" ></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Email</ion-label>\n\n          <ion-input type="email" [(ngModel)]="strDataUserEmail"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>UserRegistered On</ion-label>\n\n          <ion-input type="text" [(ngModel)]="strDataUserRegistered"></ion-input>\n\n        </ion-item> -->\n\n        <ion-item>\n\n          <ion-label floating>Address</ion-label>\n\n          <ion-input type="text" [(ngModel)]="strAddress" class="inputfield"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>City</ion-label>\n\n          <ion-input type="text" [(ngModel)]="strCity" class="inputfield"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>State</ion-label>\n\n          <ion-input type="text" [(ngModel)]="strState" class="inputfield"></ion-input>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Postal Code</ion-label>\n\n          <ion-input type="number" [(ngModel)]="strPostalCode" class="inputfield"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Phone</ion-label>\n\n          <ion-input type="number" [(ngModel)]="strPhone" class="inputfield"></ion-input>\n\n        </ion-item>\n\n      \n\n\n\n        <ion-row>  \n\n          <ion-col class="signup-col">\n\n            <button ion-button class="submit-btn" full type="submit" style="text-transform: none;" class="bg-thime btn-round btn-text" (click)="loginBtnClick()">Update</button>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'card\'" class="card-section bg-light">\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <div class="card-row">XXXX XXXX XXXX 5887\n\n            <img src="assets/imgs/visa.png">\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <div class="card-row">XXXX XXXX XXXX 5887\n\n            <img src="assets/imgs/master-card.png">\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <div class="form" padding-left padding-right>\n\n          <p padding-bottom margin-bottom>\n\n            <!-- <ion-icon name="ios-add-circle-outline" style="float: left;">\n\n\n\n            </ion-icon> -->\n\n            \n\n            Add New Card \n\n          <span style="float: right;">Save</span></p>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>Card Type</ion-label>\n\n              <ion-input type="text" text-right value="Visa Express"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Card Number</ion-label>\n\n              <ion-input type="text" text-right value="1234-1234-1234-1234"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Name on Card</ion-label>\n\n              <ion-input type="text" text-right value="John Smith"></ion-input>\n\n            </ion-item>\n\n            <div class="date-cvc-row">\n\n              <div class="date">\n\n                <ion-item>\n\n                  <ion-label>Expiry Date</ion-label>\n\n                  <ion-input type="text" text-right value="10/23"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n              <div class="cvc">\n\n                <ion-item>\n\n                  <ion-label>CVV</ion-label>\n\n                  <ion-input type="text" text-right value="234"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n            </div>\n\n            <ion-item class="border-none">\n\n              <ion-label text-right style="color: black;">Save Card Details</ion-label>\n\n              <ion-toggle checked="false"></ion-toggle>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-card>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'address\'" class="address-section bg-light">\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <div class="addres-detail">\n\n            <h3> \n\n              <ion-icon name="ios-pin-outline" class="icon-position"> </ion-icon>\n\n              John Smith \n\n              <span style="float: right;">Change\n\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n\n              </span>\n\n            </h3>\n\n            <p>DE234 Mapleridge Drive Plano,<br> Texas 743A US.</p>\n\n            <p>+91 908765432</p>\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <div class="form" padding-left padding-right>\n\n          <p padding-bottom margin-bottom>\n\n            <!-- <ion-icon name="ios-add-circle-outline" >\n\n            </ion-icon> -->\n\n            Add New Card\n\n            <span style="float: right;">Save</span>\n\n          </p>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>Pincode</ion-label>\n\n              <ion-input type="text" text-right value="110092"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Address</ion-label>\n\n              <ion-input type="text" text-right value="DE234 Map Drive Plano,"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Phone number</ion-label>\n\n              <ion-input type="text" text-right value="+91 908 765 4321"></ion-input>\n\n            </ion-item>\n\n            <div class="date-cvc-row">\n\n              <div class="city">\n\n                <ion-item>\n\n                  <ion-label>City</ion-label>\n\n                  <ion-input type="text" text-right value="Delhi"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n              <div class="State">\n\n                <ion-item>\n\n                  <ion-label>State</ion-label>\n\n                  <ion-input type="text" text-right value="Delhi"></ion-input>\n\n                </ion-item>\n\n              </div>\n\n            </div>\n\n            <ion-item class="border-none">\n\n              <ion-label text-right>Make this my default address</ion-label>\n\n              <ion-toggle checked="true" (ionChange)="update($event)"></ion-toggle>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\myaccountupdated\myaccountupdated.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
], MyaccountupdatedPage);

//# sourceMappingURL=myaccountupdated.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacypolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
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
        selector: 'page-privacypolicy',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\privacypolicy\privacypolicy.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n  </button>\n\n      <ion-title>Privacy Policy\n\n          <!-- <span float-right> \n\n            <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n            <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n\n          </span> -->\n\n      </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <!-- <h3>Welcome to your first Ionic app!</h3> -->\n\n\n\n  <p>\n\n    Sterling Engineering Limited – T/A Sterling Clutch and Brake understands how important it is to protect the personal information of our customers, business partners and other stakeholders that we interact with. We take care to comply with the Privacy Principles contained in the Privacy Act and provide you with a level of comfort that the information you provide to us will be managed in accordance with law. This Privacy Policy describes how we collect, use and dispose of personal information.\n\n  </p>\n\n  <p>\n\n    1. What personal information do we collect?\n\nWe may collect information from you which reasonably identifies you as an individual, including your name, email address, telephone number and billing address. If you are a customer, we may also collect your vehicle registration number.\n\n  </p>\n\n  <p>\n\n    2. What type of personal information do we collect?\n\nWe may collect your personal information when you provide details through our website, contact us by phone, email or in-store or when you complete forms. Our website also uses cookies which stores personal information that you provide to track user traffic patterns and to better serve you when you revisit the website. You can disable cookies in your browser. Your personal information will be securely stored by us. Personal information relating to customers located in New Zealand may also be stored by us and by our selected third party providers in New Zealand.>\n\n  </p>\n\n\n\n  <p>\n\n    3. Why do we collect your personal information?\n\nWe may collect your personal information to:\n\n\n\nProcess transactions, both in-store and online;\n\nAnswer your questions, resolve your complaints and conduct investigations;\n\nMarket and sell our products and promote our brands;\n\nComply with any legal requirements;\n\nProcure goods and services;\n\nConduct research to better understand and serve our customers and for statistical purposes;\n\nCommunicate with you, including where we need to conduct a product recall;\n\nPrevent fraud, including services to protect your information; and\n\nProvide you with marketing offers and information about our brands.\n\nIf we want to use your personal information for other reasons, we will contact you and ask you for your consent.\n\n  </p>\n\n\n\n  <p>\n\n    4. When do we disclose your personal information?\n\nWe may disclose your personal information to people and organisations:\n\n\n\nThat provide us with services to promote our products;\n\nThat carry out, or help us to carry out, our business activities including our agents, contractors and external advisors;\n\nThat maintain our information technology and payment system infrastructure; and\n\nTo whom we are authorised or required by law to do so.\n\nYour personal information may also be disclosed by us to other people and organisations that you have consented to.\n\n  </p>\n\n\n\n  <p>\n\n    5.What rights do you have in relation to your personal information?\n\nYou have the right to access your personal information and require us to correct any of your personal information. To access or correct your personal information, please Contact Us. You can also contact us direct at the address below or writing to our Privacy Officer at: Sterling Clutch and Brake, 55 Neilson Street, Cnr Neilson Street and Onehunga Mall, Onehunga, Auckland 1643 , New Zealand. Sterling Clutch and Brake, PO Box PO Box 13101, Onehunga Mall, Onehunga, Auckland 1643, New Zealand\n\n  </p>\n\n\n\n  <p>\n\n    6.How do you make a complaint?\n\nIf you would like to make a complaint regarding our use of your personal information, you can Contact Us.\n\n  </p>\n\n\n\n  <p>\n\n    7. Who do you contact for further information?\n\nIf you require further information about this Privacy Policy, you can Contact Us.\n\n  </p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\privacypolicy\privacypolicy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
], PrivacypolicyPage);

//# sourceMappingURL=privacypolicy.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchproductsupdatedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__itemdetaillistpage1_itemdetaillistpage1__ = __webpack_require__(188);
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









let SearchproductsupdatedPage = class SearchproductsupdatedPage {
    constructor(navCtrl, navParams, app, platform, alertController, httpClient, apiProvider, toastController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.platform = platform;
        this.alertController = alertController;
        this.httpClient = httpClient;
        this.apiProvider = apiProvider;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.countProductsWishList = 0;
        this.countProductsCartLocal = 0;
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.viewCartList = [];
        this.productsListInformation = [];
        this.currentNumber = 1;
        this.showDataboolean = false;
        this.strInputtedValue = navParams.get("input");
        console.log('received searchProductName' + this.strInputtedValue);
    }
    ngOnInit() {
        this.checkNetwork();
        if (this.countProductsWishlistLocalUpdated === 0) {
            this.countProductsWishlistLocalUpdated = '';
            console.log('Entered');
        }
        if (this.countProductsCartLocalUpdated === 0) {
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
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'SearchproductsupdatedPage') {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    console.log('test***');
                }
                else {
                    console.log('test1*****');
                }
            }
        });
        this.getProductsBySearch();
    }
    productDetailPage(id, name, image, regular_price, description, make, model, yearStart, yearEnd) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__itemdetaillistpage1_itemdetaillistpage1__["a" /* Itemdetaillistpage1Page */], {
            id: id,
            name: name,
            image: image,
            regular_price: regular_price,
            description: description,
            make: make,
            model: model,
            yearStart: yearStart,
            yearEnd: yearEnd
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
            this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
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
    wishlistPage() {
        console.log('wishlistPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    getProductsBySearch() {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                content: 'Loading...',
            });
            yield loader.present();
            loader.present().then(() => {
                this.httpClient.get("http://busybanda.com/sterling-tools/api/get_products_by_search?" + "searchby=" + this.strInputtedValue).subscribe(jsonResponse => {
                    if (jsonResponse) {
                        this.productsListInformation = jsonResponse['result'];
                        this.obj = JSON.stringify(jsonResponse);
                        console.log('details available ' + this.obj);
                        loader.dismiss();
                    }
                    const myURL_body = jsonResponse['result'];
                    this.strResponse = myURL_body;
                    if (this.strResponse = 'null') {
                        console.log('details available obj empty ');
                        this.strDataServer = 'No data';
                    }
                    else {
                        console.log('details not available ');
                    }
                }, error => {
                    console.log(error);
                    //this.showToastOnProductError(error);
                });
            });
        });
    }
    showToastOnProductError(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Error ' + strProductAdded,
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getProductsBySearch();
        setTimeout(() => {
            console.log('Async operation has ended');
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
        if (localStorage.getItem('productsWishlist')) {
            productsWishlist = JSON.parse(localStorage.getItem('productsWishlist')); // get product list 
        }
        console.log("Sent productsList id " + id);
        console.log("Sent productsList name " + name);
        productsWishlist.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price });
        localStorage.setItem('productsWishlist', JSON.stringify(productsWishlist));
        //  this.buttonIcon = "home";
        this.showToastOnAddProductWishlist(name);
        this.countProductsWishlistLocalUpdated++;
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            console.log('Code for localStorage/sessionStorage.');
        }
        else {
            // Sorry! No Web Storage support..
            console.log('Sorry! No Web Storage support..');
        }
    }
    showToastOnAddProductWishlist(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Wishlist : \n ' + strProductAdded + '\n',
            duration: 1000,
            position: "bottom",
        });
        toast.present();
    }
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_2__capacitor_core__["a" /* Plugins */];
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
                //this.showLoaderPageLoad();
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
    showLoaderPageLoad() {
        let loading = this.loadingController.create({
            content: 'Please wait loading Orders!'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 1700);
    }
};
SearchproductsupdatedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-searchproductsupdated',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\searchproductsupdated\searchproductsupdated.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle style="display: block !important">\n\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n  </button>\n\n\n\n      <ion-title>Categories Details\n\n         \n\n         \n\n            <span float-right>\n\n            \n\n              <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n                <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n              </ion-icon> \n\n              \n\n              <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n                <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n              </ion-icon> \n\n            \n\n          </span>\n\n      </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n  <div *ngIf="!productsListInformation || productsListInformation.length === 0;else other_content">\n\n    <p>No data found</p>\n\n  </div>\n\n  <!-- <ion-col col-6 class="columngrid" *ngFor="let categoryItem of productCategoryInformation |filter:searchText | paginate: {itemsPerPage: 10,currentPage: p}"> -->\n\n\n\n  \n\n<ng-template #other_content>\n\n  <ion-grid class="product-grid" style="margin-top: 40px;">\n\n    <ion-row class="rowgrid">\n\n      <ion-col class="columngrid" *ngFor="let featuredProducts of productsListInformation |filter:searchText | paginate: {itemsPerPage: 10,currentPage: p}">\n\n        <ion-card>\n\n          <ion-card-header style="justify-content: left">\n\n            <div class="img-box">\n\n              <img [src]="featuredProducts.image" style="width:200px;height:80px ;margin-top: 30px;"\n\n                (click)="productDetailPage(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price,featuredProducts.attribute.pa_make,featuredProducts.attribute.pa_model,featuredProducts.attribute.pa_year,featuredProducts.attribute.pa_yearfrom)">\n\n            </div>\n\n            <ion-icon name="md-heart" class="text-light icon" style="margin-top: -11px;"\n\n              (click)="addToWishList(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)">\n\n            </ion-icon>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <ion-item>\n\n              <h5 style="font-size: 15px;text-align: -webkit-center;">{{featuredProducts.name}}</h5>\n\n            </ion-item>\n\n            <div>\n\n              <div *ngIf="featuredProducts.regular_price">\n\n                <h5 style="font-size: 13px;text-align: center;color: red;"> <span class="priceicon"\n\n                    style="color: red;">Price : </span> <span class="priceicon">$</span>\n\n                  {{featuredProducts.regular_price}} </h5>\n\n\n\n                <ion-item>\n\n                  <button ion-button full class="bg-thime btn-round btn-text"\n\n                    style="margin-top: 3px;text-align: center;height: 40px;font-size: 10px;"\n\n                    (click)="addToCart(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)">\n\n                    Add To Cart\n\n                  </button>\n\n                </ion-item>\n\n              </div>\n\n\n\n              <div *ngIf="!featuredProducts.regular_price">\n\n                <h5 style="font-size: 13px;text-align: center"> Price Not Available</h5>\n\n\n\n                <ion-item>\n\n                  <button ion-button full class="bg-thime btn-round btn-text"\n\n                    style="margin-top: 3px; text-align: center;height: 40px;font-size: 10px;"\n\n                    (click)="productDetailPage(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price,featuredProducts.attribute.pa_make,featuredProducts.attribute.pa_model,featuredProducts.attribute.pa_year,featuredProducts.attribute.pa_yearfrom)">\n\n                    Read More\n\n                  </button>\n\n                </ion-item>\n\n              </div>\n\n            </div>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <pagination-controls (pageChange)="p = $event" previousLabel="Prev" nextLabel="Next"></pagination-controls>\n\n\n\n\n\n</ng-template>\n\n\n\n\n\n \n\n\n\n\n\n\n\n \n\n\n\n\n\n \n\n\n\n</ion-content>\n\n  '/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\searchproductsupdated\searchproductsupdated.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], SearchproductsupdatedPage);

//# sourceMappingURL=searchproductsupdated.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsandconditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
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
        selector: 'page-termsandconditions',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\termsandconditions\termsandconditions.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n  </button>\n\n      <ion-title>Terms & Conditions\n\n          <!-- <span float-right> \n\n            <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n            <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n\n          </span> -->\n\n      </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <!-- <h3>Welcome to your first Ionic app!</h3> -->\n\n\n\n  <h3>Sterling Engineering Limited Terms & Conditions</h3>\n\n\n\n  <p>\n\n    1. Our Working Hours\n\nMonday :- 8:00 – 17.30\n\nTuesday :- 8:00 – 17.30\n\nWednesday :- 8:00 – 17.30\n\nThursday :- 8:00 – 17.30\n\nFriday :- 8:00 – 17.30\n\nSaturday :- 9:00 – 1.00\n\nSunday :- Closed\n\n  </p>\n\n  <p>\n\n    2. Our Delivery Service\n\n    Our Sterling Engineering Limited company Take Max Up to 5-7 business Days for delivery Service.\n\n    -NZ Courier service – orders up to 5:00pm for next day delivery –\n\n    </p>\n\n  <p>\n\n    3. Information Security\n\nSterling Engineering Limited accept credit card (MasterCard, Visa, Discover, and American Express) and EFT payments.\n\nAll credit card payments currently do not incur a merchant fee.\n\n  </p>\n\n\n\n  <h3>Returns Policy</h3>\n\n\n\n  <p>At Sterling Clutch and Brake we are committed to genuine customer service. If you are not happy with a product you have purchased as it is incorrect or faulty simply return it within 7 days.</p>\n\n\n\n  <p>1. Conditions of return\n\n    To enable us to process your return or exchange, you will need to present a copy of your receipt or other proof of purchase.\n\n    Goods can only be returned if they are faulty or you have received the incorrect item. You will need to return your product within 7 days. Your product must be unused, in its original packaging and in a saleable condition. If you are unable to provide proof of purchase, we may still offer a credit or an exchange for a similar product.\n\n    Unfortunately we are unable to offer a refund, credit or exchange for specially ordered products (unless the product is not fit for purpose or faulty) or products which have been modified or used contrary to the product’s instructions.</p>\n\n\n\n\n\n    <p>2. Assessing your return\n\n      If your product is faulty, we may need to conduct an assessment to determine the nature and extent of the fault. This may include sending the product to the manufacturer or their repair agent. Products that are likely to require assessment include tools, and specially procured items.\n\n      We will notify you of the outcome once the assessment has been completed.</p>\n\n\n\n      <p>\n\n        3. International Returns\n\nUnfortunately we are not able to cover return postage fees on all return types.\n\nIf we receive your return and it isn’t in the condition outlined in our returns policy the item will be sent back to your original shipping address – we will contact you straight way to advise you of this.\n\nPlease contact us by phone on 09 6364919 8.00am – 5.00pm Monday – Friday, or contact us via our online chat for further information.\n\nYou can view our privacy policy and our terms and conditions on line.\n\n      </p>\n\n\n\n      <h3>Cancellation Policy</h3>\n\n\n\n      <p>\n\n        Cancellations of orders is possible only before the order is invoiced for shipment. Once an order is invoiced and packed, it cannot be cancelled To cancel an order, please call our Customer Support Center @ 09 636 4919 and give your order number requesting for a cancellation. If the order hasn’t been invoiced, our team will cancel the order for you and the refund will be posted back via the same method of payment for all pre-paid orders\n\n      </p>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\termsandconditions\termsandconditions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], TermsandconditionsPage);

//# sourceMappingURL=termsandconditions.js.map

/***/ }),

/***/ 204:
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
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
		764,
		2
	],
	"../pages/accordiantest/accordiantest.module": [
		763,
		35
	],
	"../pages/address/address.module": [
		766,
		34
	],
	"../pages/appconstants/appconstants.module": [
		767,
		33
	],
	"../pages/categorydetail/categorydetail.module": [
		768,
		32
	],
	"../pages/categoryupdated/categoryupdated.module": [
		765,
		31
	],
	"../pages/cls/cls.module": [
		770,
		30
	],
	"../pages/demo/demo.module": [
		769,
		29
	],
	"../pages/home1/home1.module": [
		771,
		28
	],
	"../pages/itemdetaillistpage1/itemdetaillistpage1.module": [
		773,
		27
	],
	"../pages/login/login.module": [
		772,
		1
	],
	"../pages/makeresponse/makeresponse.module": [
		774,
		26
	],
	"../pages/myaccountupdated/myaccountupdated.module": [
		775,
		25
	],
	"../pages/paymentpage/paymentpage.module": [
		778,
		24
	],
	"../pages/privacypolicy/privacypolicy.module": [
		779,
		23
	],
	"../pages/product-category-detail-grid/product-category-detail-grid.module": [
		776,
		22
	],
	"../pages/productcategory/productcategory.module": [
		777,
		21
	],
	"../pages/productcategorydetail/productcategorydetail.module": [
		782,
		20
	],
	"../pages/productcategorydetaillist/productcategorydetaillist.module": [
		781,
		19
	],
	"../pages/readmore/readmore.module": [
		783,
		18
	],
	"../pages/register/register.module": [
		780,
		17
	],
	"../pages/searchdata/searchdata.module": [
		784,
		16
	],
	"../pages/searchdetails/searchdetails.module": [
		785,
		15
	],
	"../pages/searchproducts/searchproducts.module": [
		787,
		14
	],
	"../pages/searchproductsupdated/searchproductsupdated.module": [
		786,
		13
	],
	"../pages/termsandconditions/termsandconditions.module": [
		788,
		12
	],
	"../pages/test1/test1.module": [
		790,
		11
	],
	"../pages/testcart/testcart.module": [
		793,
		10
	],
	"../pages/testing/testing.module": [
		791,
		9
	],
	"../pages/testingproducts/testingproducts.module": [
		789,
		8
	],
	"../pages/viewall/viewall.module": [
		794,
		7
	],
	"../pages/viewallcategories/viewallcategories.module": [
		796,
		6
	],
	"../pages/viewallcategoriesupdated/viewallcategoriesupdated.module": [
		792,
		0
	],
	"../pages/viewcart/viewcart.module": [
		797,
		5
	],
	"../pages/vieworder/vieworder.module": [
		795,
		4
	],
	"../pages/wishlistupdated/wishlistupdated.module": [
		798,
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
webpackAsyncContext.id = 247;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VieworderdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(10);
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
        selector: 'page-vieworderdetails',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\vieworderdetails\vieworderdetails.html"*/'<!--\n\n  Generated template for the VieworderdetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle style="display: block !important">\n\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n  </button>\n\n      <ion-title>MyOrders\n\n          <span float-right> \n\n            <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n            <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n\n          </span>\n\n      </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n\n\n\n\n  <ion-card class="card" *ngIf="productCategoryInformation.length==0;else other_content" >\n\n    <ion-card-header>\n\n      <ion-item lines="none">\n\n        <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{strData}}</ion-label>\n\n      </ion-item> \n\n  \n\n          \n\n    </ion-card-header>\n\n  </ion-card>\n\n\n\n\n\n  <ng-template #other_content>\n\n    <ion-card class="card" >\n\n      <ion-card-header>\n\n       \n\n  \n\n       \n\n    \n\n        <ion-item lines="none">\n\n          <ion-label style="color: black;margin-right: 8px;font-size: 11px">{{strOrderTitle}}</ion-label>\n\n        </ion-item> \n\n  \n\n        <ion-item lines="none">\n\n          <ion-label style="color: black;margin-right: 8px;font-size: 11px">{{strOrderStatus}}</ion-label>\n\n        </ion-item> \n\n  \n\n        <ion-item lines="none">\n\n          <ion-label style="color: black;margin-right: 8px;font-size: 11px">{{strCommentStatus}}</ion-label>\n\n        </ion-item> \n\n  \n\n        <ion-item lines="none">\n\n          <ion-label style="color: black;margin-right: 8px;font-size: 11px">{{strPingStatus}}</ion-label>\n\n        </ion-item> \n\n  \n\n  \n\n      </ion-card-header>\n\n    </ion-card>\n\n   </ng-template>\n\n\n\n\n\n \n\n\n\n\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\vieworderdetails\vieworderdetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], VieworderdetailsPage);

//# sourceMappingURL=vieworderdetails.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistupdatedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__capacitor_core__ = __webpack_require__(22);
/**
 * Generated class for the WishlistupdatedPage page.
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
var WishlistupdatedPage_1;








let WishlistupdatedPage = WishlistupdatedPage_1 = class WishlistupdatedPage {
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
        this.productsLocalWishList = [];
        this.viewCartList = [];
        this.letclickCount = 0;
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.countProductsWishList = 0;
    }
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
        var productsWishlistarrayFromStorage = JSON.parse(localStorage.getItem("productsWishlist"));
        if (productsWishlistarrayFromStorage != null &&
            productsWishlistarrayFromStorage.length > 0) {
            var arrayLength = productsWishlistarrayFromStorage.length;
            this.countProductsWishList = arrayLength;
            this.countProductsWishlistLocalUpdated = this.countProductsWishList;
            console.log("Local Wishlist filled " + this.countProductsWishlistLocalUpdated);
        }
        else {
            console.log("Local Wishlist empty ");
        }
        /*
             Local Cart
         */
        var productsCartarrayFromStorage = JSON.parse(localStorage.getItem("products"));
        if (productsCartarrayFromStorage != null &&
            productsCartarrayFromStorage.length > 0) {
            var arrayLength1 = productsCartarrayFromStorage.length;
            this.countProductsCart = arrayLength1;
            this.countProductsCartLocalUpdated = this.countProductsCart;
            console.log("Local Cart filled " + this.countProductsCartLocalUpdated);
        }
        else {
            console.log("Local Cart empty ");
        }
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === "WishlistupdatedPage") {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                    // this.navCtrl.setRoot(HomePage);
                }
            }
        });
        this.viewCartApi();
        if (localStorage.getItem("productsWishlist")) {
            this.productsLocalCart = JSON.parse(localStorage.getItem("productsWishlist")); // get product list
            console.log("****** filled-----" + localStorage.getItem("productsWishlist"));
            this.strData = "Wishlist is Empty.Please add items!";
        }
        else {
            console.log("****** empty" + localStorage.getItem("productsWishlist"));
            this.showToastOnEmptyCart();
        }
        this.obj = JSON.stringify(this.productsLocalCart);
        for (let i = 0; i < this.productsLocalCart.length; i++) {
            if (this.productsLocalCart[i].ProductQuantity &&
                this.productsLocalCart[i].ProductRegularPrice &&
                this.productsLocalCart[i].ProductDescription &&
                this.productsLocalCart[i].ProductId) {
                this.strProductQuantity = this.productsLocalCart[i].ProductQuantity;
                this.strProductRegularPrice = this.productsLocalCart[i].ProductRegularPrice;
                this.strProductDescription = this.productsLocalCart[i].ProductDescription;
                this.strProductName = this.productsLocalCart[i].ProductName;
                this.strProductRegularPriceRevised1 = this.strProductRegularPriceRevised;
                this.productTotalPrice = this.productsLocalCart[i].ProductRegularPrice;
                var sum = 0, nums = ["100", "300", "400", "60", "40"];
                for (i = 0; i < nums.length; i++) {
                    sum += +nums[i];
                    // console.log('All  TotalPrice ' + sum);
                }
                this.productsLocalCart = JSON.parse(localStorage.getItem("productsWishlist"));
            }
            else {
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
        localStorage.setItem("productsWishlist", JSON.stringify(this.productsLocalCart));
        this.showToastOnAddProductLocal(name);
        if (typeof Storage !== "undefined") {
            // Code for localStorage/sessionStorage.
            console.log("Code for localStorage/sessionStorage.");
        }
        else {
            // Sorry! No Web Storage support..
            console.log("Sorry! No Web Storage support..");
        }
    }
    facebookPage() {
        window.open("https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttp%253A%252F%252Fbusybanda.com%252Fsterling-tools%252Fwishlist%252F17FD81%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB", "_self");
    }
    twitterPage() {
        window.open("https://twitter.com/share?url=http%3A%2F%2Fbusybanda.com%2Fsterling-tools%2Fwishlist%2F17FD81%2F", "_self");
    }
    pInterestPage() {
        window.open("https://www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fbusybanda.com%2Fsterling-tools%2Fwishlist%2F17FD81%2F&media=http%3A%2F%2Fbusybanda.com%2Fsterling-tools%2Fwp-content%2Fuploads%2F2020%2F11%2Fall-car-oil-air-filters.png", "_self");
    }
    whatsUpPage() {
        window.open("https://api.whatsapp.com/send?text=http%3A%2F%2Fbusybanda.com%2Fsterling-tools%2Fwishlist%2F17FD81%2F", "_self");
    }
    copyPage() {
        window.open();
    }
    emailPage() {
        navigator.clipboard.writeText(this.strProductName).then().catch(e => console.error(e));
    }
    showToastOnAddProductLocal(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: "Product Added in Local Cart : \n " +
                strProductAdded +
                "\n" +
                "\nProduct Quantity:  1",
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    wishlistPage() {
        console.log("wishlistPage");
        this.navCtrl.push(WishlistupdatedPage_1);
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
    showCartRemovalAlert2(index, item, name) {
        return __awaiter(this, void 0, void 0, function* () {
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
                            localStorage.setItem("productsWishlist", JSON.stringify(this.productsLocalCart));
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
        });
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
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
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
                        }
                        else {
                            this.countProductsCartLocalUpdated = this.countProductsCart;
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
                message: "WishList is empty.Please add items!",
                duration: 7000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnProductsQuantityCartLocally() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Product Quantity not available from cart",
                duration: 4000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showLoadingControllerLaunch() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_6__capacitor_core__["a" /* Plugins */];
            this.networkListener = Network.addListener("networkStatusChange", (status) => {
                console.log("Network status HomePage here", status);
                this.networkStatus = status;
            });
            if ((yield Network.getStatus()).connectionType === "none") {
                this.showNetworkAlert();
                console.log("Network status not available", this.networkStatus);
            }
            else {
                this.networkStatus = yield Network.getStatus();
                // this.showAlert();
                console.log("Network status available", this.networkStatus);
                // this.router.navigate(['/transactions']);
                this.presentLoadingDefault();
                this.showToastOnPageLoad();
            }
        });
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
    showNetworkAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert = yield this.alertController.create({
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
        });
    }
    showToastOnPageLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: localStorage.getItem("Product Title"),
                duration: 6000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnAddProductSingle(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: "Product Added in Cart : \n " +
                strProductAdded +
                "\n" +
                "\nProduct Quantity:  1",
            duration: 6000,
            position: "bottom",
        });
        toast.present();
    }
    showCartWishlistRemovalAlert(item) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    showCartWishlistRemovalAlert1() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    showToastOnDeletingWishlist() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Product Deleted from  wishlist " + this.strProductAdded,
                duration: 1500,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnDeletingWishlist1() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Wishlist Cleared",
                duration: 1500,
                position: "bottom",
            });
            toast.present();
        });
    }
};
WishlistupdatedPage = WishlistupdatedPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: "page-wishlistupdated",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\wishlistupdated\wishlistupdated.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n    <ion-title style="text-align: left"\n\n      >My Wishlist\n\n\n\n      <!-- <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n\n        <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon> -->\n\n\n\n      <!-- <ion-icon class="icon"  (click)="wishlistPage()" >\n\n          <img src="assets/imgs/ic_my_wishlist.png" width="100%;" />\n\n          <ion-badge class="icon add-icon" >{{countProductsWishList}}</ion-badge> \n\n        </ion-icon>\n\n\n\n        <ion-icon class="icon"  (click)="cartPage()" >\n\n          <img src="assets/imgs/ic_my_cart.png" width="100%;" />\n\n          <ion-badge class="icon add-icon" >{{countProductsCart}}</ion-badge> \n\n        </ion-icon> -->\n\n      <span float-right>\n\n        <ion-icon\n\n          class="icon-add"\n\n          name="heart"\n\n          style="margin-left: 12px"\n\n          (click)="wishlistPage()"\n\n        >\n\n          <ion-badge id="notifications-badge" color="primary"\n\n            >{{countProductsWishlistLocalUpdated}}</ion-badge\n\n          >\n\n        </ion-icon>\n\n\n\n        <ion-icon\n\n          class="icon-add"\n\n          name="cart"\n\n          style="margin-left: 12px"\n\n          (click)="cartPage()"\n\n        >\n\n          <ion-badge id="notifications-badge" color="primary"\n\n            >{{countProductsCartLocalUpdated}}</ion-badge\n\n          >\n\n        </ion-icon>\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <!-- <div class="custom-id">\n\n    <ion-searchbar placeholder="Search any part here"></ion-searchbar>\n\n  </div> -->\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="chevron-down-circle-outline"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing Wishlist."\n\n    >\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-item *ngIf=" !productsLocalCart.length;else other_content">\n\n    <h5 style="font-size: 12px">{{strData}}</h5>\n\n  </ion-item>\n\n\n\n  <ng-template #other_content>\n\n    <!-- <div class="reating-review bg-white" padding style="margin-top: 5px" > \n\n      <div class="reating">\n\n        <div class="select-section shadow-bottom" style="text-align: center"\n\n        >\n\n          <ion-row\n\n            class="ion-justify-content-center"\n\n            style="justify-content: center"\n\n           >\n\n           \n\n  \n\n            <button\n\n              ion-button\n\n              full\n\n              class="bg-thime btn-round btn-text"\n\n              style="max-width: 390px"\n\n              (click)="clearWishlist()">\n\n              Clear Wishlist\n\n            </button>\n\n          </ion-row>\n\n        </div>\n\n      </div>\n\n    </div> -->\n\n\n\n    <div\n\n      class="pincod bg-white shadow-bottom cart-box"\n\n      style="padding: 16px 16px 16px 16px"\n\n    >\n\n      <ion-row\n\n        style="margin-top: 8px"\n\n        *ngFor="let productsLocal of productsLocalCart;let i = index"\n\n      >\n\n        <ion-col col-4>\n\n          <ion-list>\n\n            <ion-item>\n\n              <img\n\n                [src]="productsLocal.ProductImage"\n\n                style="width: 200px; height: 75px"\n\n              />\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-8>\n\n          <div class="row">\n\n            <div class="block">Name: {{productsLocal.ProductName}}</div>\n\n            <span class="icon" text-right>\n\n              <ion-icon\n\n                name="md-close"\n\n                style="margin-left: 30px; margin-top: 5px"\n\n                (click)="removeProductLocally(i,productsLocal,productsLocal.ProductName)"\n\n              >\n\n              </ion-icon>\n\n            </span>\n\n          </div>\n\n          <!-- (click)="removeProductLocally(i,productsLocal,productsLocal.ProductName)" -->\n\n\n\n          <div style="margin-top: 6%">\n\n            <label>\n\n              Price: {{productsLocal.ProductRegularPrice}}\n\n              <span class="priceicon">$</span></label\n\n            >\n\n          </div>\n\n\n\n          <div style="margin-top: 6%">\n\n            <label style="color: black"\n\n              >Description: {{productsLocal.ProductDescription}}\n\n            </label>\n\n          </div>\n\n\n\n          <div style="margin-top: 6%">\n\n            <label style="color: black"\n\n              >Date Created: {{productsLocal.ProductDateCreated}}\n\n            </label>\n\n          </div>\n\n\n\n          <!-- <div style="margin-top: 10%">\n\n            <button\n\n              ion-button\n\n              full\n\n              class="bg-thime btn-round btn-text"\n\n              style="margin-top: 3px; width: 150px; text-align: center"\n\n              (click)="addToCart(i,productsLocal.ProductId,productsLocal.ProductName,productsLocal.ProductImage,productsLocal.ProductDescription,productsLocal.ProductRegularPrice)"\n\n            >\n\n              Add To Cart\n\n            </button>\n\n          </div> -->\n\n        </ion-col>\n\n\n\n        <ion-item>\n\n          <button\n\n            ion-button\n\n            full\n\n            class="bg-thime btn-round btn-text"\n\n            style="margin-top: 3px; height: 40px; text-align: center"\n\n            (click)="addToCart(i,productsLocal.ProductId,productsLocal.ProductName,productsLocal.ProductImage,productsLocal.ProductDescription,productsLocal.ProductRegularPrice)"\n\n          >\n\n            Add To Cart\n\n          </button>\n\n        </ion-item>\n\n\n\n      \n\n\n\n        <!-- no-lines -->\n\n        <ion-item\n\n          class="center"\n\n          style="text-align: center; display: flex"\n\n          no-lines\n\n        >\n\n          <p style="color: black">Share On</p>\n\n          <ion-icon\n\n            name="logo-facebook"\n\n            style="margin: 8px; margin-top: 12px; font-size: 25px"\n\n            (click)="facebookPage()"\n\n          ></ion-icon>\n\n          <ion-icon\n\n            name="logo-twitter"\n\n            style="margin: 8px; margin-top: 12px; font-size: 25px"\n\n            (click)="twitterPage()"\n\n          ></ion-icon>\n\n          <ion-icon\n\n            name="logo-pinterest"\n\n            style="margin: 8px; margin-top: 12px; font-size: 25px"\n\n            (click)="pInterestPage()"\n\n          ></ion-icon>\n\n          <ion-icon\n\n            name="logo-whatsapp"\n\n            style="margin: 8px; margin-top: 12px; font-size: 25px"\n\n            (click)="whatsUpPage()"\n\n          ></ion-icon>\n\n          <ion-icon\n\n            name="copy"\n\n            style="margin: 8px; margin-top: 12px; font-size: 25px"\n\n            (click)="copyPage()"\n\n          ></ion-icon>\n\n          <ion-icon\n\n            name="mail"\n\n            style="margin: 8px; margin-top: 12px; font-size: 25px"\n\n            (click)="emailPage()"\n\n          ></ion-icon>\n\n        </ion-item>\n\n      </ion-row>\n\n    </div>\n\n\n\n    <!-- <div class="reating-review bg-white" padding style="margin-bottom: 15px">\n\n      <div class="reating">\n\n        <div class="select-section shadow-bottom" style="text-align: center">\n\n          <ion-row\n\n            class="ion-justify-content-center"\n\n            style="justify-content: center"\n\n          >\n\n            <button\n\n              ion-button\n\n              full\n\n              class="bg-thime btn-round btn-text"\n\n              style="max-width: 390px"\n\n            >\n\n              Update Shopping Cart\n\n            </button>\n\n  \n\n            <button\n\n              ion-button\n\n              full\n\n              class="bg-thime btn-round btn-text"\n\n              style="max-width: 390px"\n\n            >\n\n              Clear Shopping Cart\n\n            </button>\n\n          </ion-row>\n\n        </div>\n\n      </div>\n\n      <ion-item>\n\n        <ion-label style="float: left; font-size: 14px">Subtotal</ion-label>\n\n        <ion-label style="float: right; color: red"> Rs 251.00</ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="float: left; font-size: 14px"\n\n          >Discount (Flat 10% Off)</ion-label\n\n        >\n\n        <ion-label style="float: right; color: red">-Rs25.10</ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="float: left; font-size: 14px">Grand Total</ion-label>\n\n        <ion-label style="float: right; color: red">Rs 225.90</ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button\n\n          ion-button\n\n          full\n\n          class="bg-thime btn-round btn-text"\n\n          style="max-width: 390px; float: none; height: 40px"\n\n         >\n\n          Proceed to Checkout\n\n        </button>\n\n      </ion-item>\n\n    </div> -->\n\n  </ng-template>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\wishlistupdated\wishlistupdated.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */]])
], WishlistupdatedPage);

//# sourceMappingURL=wishlistupdated.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(10);
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
    constructor(navCtrl, modalCtrl, apiProvider, platform, app, alertController, loadingController, toastController, httpClient) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.platform = platform;
        this.app = app;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.httpClient = httpClient;
        this.viewOrdersList = [];
        this.viewCartList = [];
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.countProductsWishList = 0;
    }
    ngOnInit() {
        this.checkNetwork();
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
        if (this.countProductsWishlistLocalUpdated === 0) {
            this.countProductsWishlistLocalUpdated = '';
            console.log('Entered');
        }
        if (this.countProductsCartLocalUpdated === 0) {
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
    }
    cartPage() {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    searchPage() {
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
        return __awaiter(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                content: 'Please wait fetching orders!',
            });
            yield loader.present();
            loader.present().then(() => {
                // const service = this.apiProvider.getOrders();   
                // service.subscribe((jsonResponse) => {      
                this.httpClient.get('http://busybanda.com/sterling-tools/api/get_shop_order/').subscribe(jsonResponse => {
                    if (jsonResponse) {
                        this.viewOrdersList = jsonResponse['result'];
                        this.obj = JSON.stringify(jsonResponse);
                        console.log('details available ' + this.obj);
                        loader.dismiss();
                    }
                    const myURL_body = jsonResponse['result'];
                    this.strResponse = myURL_body;
                    if (this.strResponse = 'null') {
                        console.log('details available obj empty ');
                        this.strDataServer = 'No data';
                    }
                    else {
                        console.log('details not available ');
                    }
                }, error => {
                    console.log(error);
                    // this.showToastOnProductError(error);
                });
            });
        });
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
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
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
                        // console.log('Length of cart ' + this.viewCartList.length);
                        // if(this.viewCartList.length>=1) {
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
                        }
                        else {
                            this.countProductsCartLocalUpdated = this.countProductsCart;
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
    }
    showLoaderPageLoad() {
        let loading = this.loadingController.create({
            content: 'Please wait loading Orders!'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 1700);
    }
    checkNetwork() {
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
                this.showLoaderPageLoad();
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
};
Myorder_2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-myorder_2 ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\myorder_2\myorder_2.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n    <ion-title\n\n      >My Order\n\n      <!-- <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n\n            </span> -->\n\n      <span float-right>\n\n        <!-- <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n\n                <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n\n                <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon> -->\n\n\n\n        <!-- <ion-icon class="icon"  (click)="wishlistPage()" >\n\n                    <img src="assets/imgs/ic_my_wishlist.png" width="100%;" />\n\n                    <ion-badge class="icon add-icon" >{{countProductsWishList}}</ion-badge> \n\n                  </ion-icon>\n\n          \n\n                  <ion-icon class="icon"  (click)="cartPage()" >\n\n                    <img src="assets/imgs/ic_my_cart.png" width="100%;" />\n\n                    <ion-badge class="icon add-icon" >{{countProductsCart}}</ion-badge> \n\n                  </ion-icon>\n\n              </span> -->\n\n        <ion-icon\n\n          class="icon-add"\n\n          name="heart"\n\n          style="margin-left: 12px"\n\n          (click)="wishlistPage()"\n\n        >\n\n          <ion-badge id="notifications-badge" color="primary"\n\n            >{{countProductsWishlistLocalUpdated}}</ion-badge\n\n          >\n\n        </ion-icon>\n\n\n\n        <ion-icon\n\n          class="icon-add"\n\n          name="cart"\n\n          style="margin-left: 12px"\n\n          (click)="cartPage()"\n\n        >\n\n          <ion-badge id="notifications-badge" color="primary"\n\n            >{{countProductsCartLocalUpdated}}</ion-badge\n\n          >\n\n        </ion-icon>\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="chevron-down-circle-outline"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing Orders."\n\n    >\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card *ngFor="let vieworders of viewOrdersList">\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-3>\n\n          <div class="img-box">\n\n            <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n            <!-- <img src="assets/imgs/productimage.jpg"> -->\n\n            <img\n\n              src="assets/imgs/productimage.jpg"\n\n              style="width: 130px; float: left"\n\n            />\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          <!-- <h4>Unique For Men Black Formal Slim Fit Shirt</h4> -->\n\n          <!-- <h4>{{vieworders.post_title}}</h4> -->\n\n          <div>\n\n            <p style="color: black">Order Id: {{vieworders.orderId}}</p>\n\n            <!-- <p style="color: black;">Order Status {{vieworders.orderStatus}}</p> -->\n\n          </div>\n\n          <div padding-top>\n\n            <!-- <small class="text-sky ">Cancel Order</small> -->\n\n            <!-- <small class="text-white bg-green green-shadow">Track Order</small> -->\n\n            <p style="color: black">Date: {{vieworders.created.date}}</p>\n\n          </div>\n\n          <div class="card-btn" padding-top>\n\n            <!-- <small class="text-sky ">Cancel Order</small> -->\n\n            <!-- <small class="text-white bg-green green-shadow">Track Order</small> -->\n\n            <p style="color: black">Status: {{vieworders.orderStatus}}</p>\n\n          </div>\n\n          <div class="card-btn" padding-top>\n\n            <!-- <small class="text-sky ">Cancel Order</small> -->\n\n            <!-- <small class="text-white bg-green green-shadow">Track Order</small> -->\n\n            <p style="color: black">Item Count: {{vieworders.itemCount}}</p>\n\n          </div>\n\n\n\n          <div class="card-btn" padding-top>\n\n            <!-- <small class="text-sky ">Cancel Order</small> -->\n\n            <!-- <small class="text-white bg-green green-shadow">Track Order</small> -->\n\n            <p style="color: black">Total: {{vieworders.total}}</p>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <!-- <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>Delivered on 12-March-2017</p> <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">Return Item</small>\n\n                        <small class="text-white bg-thime sky-shadow">Rate Now</small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Multicolor Dil Men\'s Watch</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>{{"deliver_on" | translate}} 12-March-017</p>\n\n                        <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">Share Product</small>\n\n                        <small class="text-white bg-gray gray-shadow">Rated 4\n\n                         <ion-icon name="md-star"></ion-icon>\n\n                        </small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card> -->\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\myorder_2\myorder_2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
], Myorder_2Page);

//# sourceMappingURL=myorder_2.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wishlist_wishlist__ = __webpack_require__(68);
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
        selector: 'page-help ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\help\help.html"*/'<!-- <ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n        </button>\n\n        <ion-title>Help Center</ion-title>\n\n    </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"/></ion-icon>\n\n    </button>\n\n    <ion-title>Help Center</ion-title>\n\n \n\n    </ion-navbar>\n\n  \n\n     \n\n  </ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <h6 style="text-align: left;">Frequently Asked Questions</h6>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Track Order\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Order Track Help Text\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Refund\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Refund help text\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n             cancel help\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            cancel help text\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Seller help\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Seller help text\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Payments\n\n            <!-- <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon> -->\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Payments help text\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\help\help.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
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
        selector: 'page-review ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\review\review.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"add_review" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-header style="padding-bottom: 0;">\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n\n\n        <ion-card-content>\n\n            <div class="form">\n\n                <ion-list>\n\n                    <ion-item class="write-reveiw">\n\n                        <ion-textarea type="text" placeholder="{{\'write_review\' | translate}}"></ion-textarea>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-input type="text" placeholder="{{\'heading_review\' | translate}}"></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n            <button ion-button full class="bg-green btn-round btn-text">{{"submit_now" | translate}}</button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <h5>{{"previous_orders" | translate}}</h5>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/bag.jpg"> -->\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/wach.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Multicolor Dil Men\'s Watch</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\review\review.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ReviewPage);

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 393:
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

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(397);
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
        selector: 'page-password ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\password\password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"login_box2" | translate}} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center>{{"forgot_password_text" | translate}}</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"login_box2" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="______"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="verificationPage()">{{"continue" | translate}}</button>\n\n    <p text-center class="text-sky">{{"forgot_password" | translate}}</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\password\password.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], PasswordPage);

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__ = __webpack_require__(398);
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
        selector: 'page-verification ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\verification\verification.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"verify_code" | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center>{{"verify_label" | translate}} <br>{{"verify_label1" | translate}} +91 903 335 6708</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"verify_code" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="______"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="createaccountPage()">{{"verify" | translate}}</button>\n\n    <p text-center>\n\n      <span float-left class="text-sky">{{"resend" | translate}}</span>\n\n      <span float-right>1:32 {{"min_left" | translate}}</span>\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\verification\verification.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], VerificationPage);

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
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
        selector: 'page-createaccount',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\createaccount\createaccount.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <!-- <ion-title>{{"create_account" | translate}}</ion-title> -->\n\n\n\n    <!-- <ion-img class="logo-img"\n\n    style="align-items: center;"\n\n    src="assets/sterlinglogo.png"\n\n  ></ion-img> -->\n\n\n\n  <img src="assets/imgs/sterlinglogo.png" >\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center padding-bottom margin-bottom>{{"sign_up_label" | translate}}</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"phone" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="+91 903 335 6708"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"full_name" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"email" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="jhonsmith8994@gmail.com"></ion-input>\n\n      </ion-item>\n\n      <div class="d-flex">\n\n        <ion-item>\n\n          <ion-label>{{"login_box2" | translate}}</ion-label>\n\n          <ion-input type="text" text-right value="******"></ion-input>\n\n        </ion-item>\n\n        <ion-icon name="ios-eye-outline" class="text-light eye-icon"></ion-icon>\n\n      </div>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="homePage()">{{"continue" | translate}}</button>\n\n    <p text-center>\n\n      <small>\n\n        {{"tnc_prelabel" | translate}} \n\n        <span class="text-sky"> {{"tnc" | translate}} </span>\n\n      </small>\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\createaccount\createaccount.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], CreateaccountPage);

//# sourceMappingURL=createaccount.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
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
        selector: 'page-short',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\short\short.html"*/'<ion-content (click)="dismiss()">\n\n  <div class="group">\n\n    <ion-list radio-group>\n\n      <ion-list-header class="d-flex" text-uppercase>\n\n        {{"sort_by" | translate}}\n\n        <ion-icon name="ios-arrow-down"></ion-icon>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by1" | translate}}</ion-label>\n\n        <ion-radio checked="true" value="popularity"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by2" | translate}}</ion-label>\n\n        <ion-radio value="price_h_l"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by3" | translate}}</ion-label>\n\n        <ion-radio value="price_l_h"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"sort_by4" | translate}}</ion-label>\n\n        <ion-radio value="newest"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\short\short.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], ShortPage);

//# sourceMappingURL=short.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__searchdetails_searchdetails__ = __webpack_require__(180);
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








let SearchPage = class SearchPage {
    constructor(navCtrl, viewCtrl, navParams, httpClient, loadingController, alertController, toastController, platform, app) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.platform = platform;
        this.app = app;
        this.productCategoryInformation = [];
        this.countClick = 0;
        this.countProductsWishList = 0;
        this.countProductsCartLocal = 0;
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.strId = navParams.get("catId");
        this.dynamicId = this.strId;
        console.log('Received catId' + this.dynamicId);
    }
    ngOnInit() {
        if (this.countProductsWishlistLocalUpdated === 0) {
            this.countProductsWishlistLocalUpdated = '';
            console.log('Entered');
        }
        if (this.countProductsCartLocalUpdated === 0) {
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
        this.showLoadingControllerLaunch();
        // this.callProductCategoryDetail();
        this.getProductsCategoryBySearch();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'SearchPage') {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                    console.log('test***');
                }
                else {
                    console.log('test1*****');
                }
            }
        });
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    callProductCategoryDetail() {
        this.httpClient.get('http://busybanda.com/sterling-tools/api/get_category_by_id?' + 'id=' + this.dynamicId)
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
            this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
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
        if (localStorage.getItem('productsWishlist')) {
            productsWishlist = JSON.parse(localStorage.getItem('productsWishlist')); // get product list 
        }
        console.log("Sent productsList id " + id);
        console.log("Sent productsList name " + name);
        productsWishlist.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price });
        localStorage.setItem('productsWishlist', JSON.stringify(productsWishlist));
        // this.buttonIcon = "home";
        this.showToastOnAddProductWishlist(name);
        this.countProductsWishlistLocalUpdated++;
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            console.log('Code for localStorage/sessionStorage.');
        }
        else {
            // Sorry! No Web Storage support..
            console.log('Sorry! No Web Storage support..');
        }
    }
    productDetailPage(id, name, image, description, regular_price, make, model, size) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__searchdetails_searchdetails__["a" /* SearchdetailsPage */], {
            id: id,
            name: name,
            image: image,
            regular_price: regular_price,
            description: description,
            make: make,
            model: model,
            size: size
        });
        console.log("Sent product id " + id);
        console.log("Sent product name " + name);
        console.log("Sent product name " + regular_price);
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
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: "Please wait !",
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 600);
    }
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_3__capacitor_core__["a" /* Plugins */];
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
                        },
                    },
                ],
            });
            alert.present();
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
    showToastOnAddProductWishlist(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Wishlist : \n ' + strProductAdded + '\n',
            duration: 3000,
            position: "bottom",
        });
        toast.present();
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
    getProductsCategoryBySearch() {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                content: 'Please wait. Loading data!',
            });
            yield loader.present();
            loader.present().then(() => {
                // this.httpClient.get("http://busybanda.com/sterling-tools/api/get_products_by_search?" +"searchby=" +this.strInputtedValue).subscribe(jsonResponse => {
                this.httpClient.get('http://busybanda.com/sterling-tools/api/get_category_by_id?' + 'id=' + this.dynamicId).subscribe(jsonResponse => {
                    if (jsonResponse) {
                        this.productCategoryInformation = jsonResponse['result'];
                        this.obj = JSON.stringify(jsonResponse);
                        console.log('details available ' + this.obj);
                        loader.dismiss();
                    }
                    const myURL_body = jsonResponse['result'];
                    this.strResponse = myURL_body;
                    //  if(this.strResponse = 'null'){
                    //   console.log('details available obj empty ' ); 
                    //   this.strData = 'No data'; 
                    //  }
                    //   else {
                    //     console.log('details not available ' );
                    //   }
                }, error => {
                    console.log(error);
                    //this.showToastOnProductError(error);
                });
            });
        });
    }
    showToastOnProductError(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Error ' + strProductAdded,
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
};
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-search ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png" /></ion-icon>\n\n    </button>\n\n    <ion-title>Search.\n\n      <span float-right>\n\n\n\n\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n\n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n\n\n\n\n\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n<ion-content padding class="search-main">\n\n  <div *ngIf="!productCategoryInformation || productCategoryInformation.length === 0">\n\n    <p>No data found</p>\n\n  </div>\n\n\n\n\n\n\n\n  <ion-grid class="product-grid" style="margin-top: 40px;">\n\n    <ion-row class="rowgrid">\n\n      <ion-col class="columngrid" *ngFor="let featuredProducts of productCategoryInformation ">\n\n        <ion-card>\n\n          <ion-card-header style="justify-content: left">\n\n            <div class="img-box">\n\n              <img [src]="featuredProducts.image" style="width:200px;height:80px ;margin-top: 30px;"\n\n                (click)="productDetailPage(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price,featuredProducts.attribute.pa_make,featuredProducts.attribute.pa_model,featuredProducts.attribute.pa_size)">\n\n            </div>\n\n            <ion-icon name="md-heart" class="text-light icon" style="margin-top: -11px;"\n\n              (click)="addToWishList(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)">\n\n            </ion-icon>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <ion-item>\n\n              <h5 style="font-size: 15px;text-align: -webkit-center;">{{featuredProducts.name}}</h5>\n\n            </ion-item>\n\n            <div>\n\n              <div *ngIf="featuredProducts.regular_price">\n\n                <h5 style="font-size: 13px;text-align: center;color: red;"> <span class="priceicon"\n\n                    style="color: red;">Price : </span> <span class="priceicon">$</span>\n\n                  {{featuredProducts.regular_price}} </h5>\n\n\n\n                <ion-item>\n\n                  <button ion-button full class="bg-thime btn-round btn-text"\n\n                    style="margin-top: 3px;text-align: center;height: 40px;font-size: 10px;"\n\n                    (click)="addToCart(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)">\n\n                    Add To Cart\n\n                  </button>\n\n                </ion-item>\n\n              </div>\n\n\n\n              <div *ngIf="!featuredProducts.regular_price">\n\n                <h5 style="font-size: 13px;text-align: center"> Price Not Available</h5>\n\n\n\n                <ion-item>\n\n                  <button ion-button full class="bg-thime btn-round btn-text"\n\n                    style="margin-top: 3px; text-align: center;height: 40px;font-size: 10px;"\n\n                    (click)="productDetailPage(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price,featuredProducts.attribute.pa_make,featuredProducts.attribute.pa_model,featuredProducts.attribute.pa_size)">\n\n                    Read More\n\n                  </button>\n\n                </ion-item>\n\n              </div>\n\n            </div>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\search\search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
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
        this.emailAddress = "104402:BEo8VfAJvOT7Rf0h";
        this.password = "";
        this.emailAddressencoded = "testing";
        this.enstring = "104402:BEo8VfAJvOT7Rf0h";
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
        this.retrievedObject = JSON.parse(localStorage.getItem("name"));
        console.log("this.strTest " + this.retrievedObject);
        urlencoded.append("amount", this.retrievedObject);
        // urlencoded.append("amount", "1.00");
        urlencoded.append("return_url", "https://demo.paymarkclick.co.nz/guides/test");
        let requestParam = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
        };
        var proxyUrl = "https://cors-anywhere.herokuapp.com/", targetUrl = "https://demo.paymarkclick.co.nz/api/webpayments/paymentservice/rest/WPRequest";
        fetch(proxyUrl + targetUrl, requestParam)
            .then((response) => response.text())
            .then((result) => window.open(result.replace(/<\/?[^>]+>/gi, "")));
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
        selector: "page-payment ",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\payment\payment.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Pay now</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content radio-group class="bg-light">\n\n    <ion-row text-center class="status">\n\n        <ion-col class="complate">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>Signin</span></ion-col>\n\n        <ion-col class="processing">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>Shipping</span></ion-col>\n\n        <ion-col class="panding">\n\n            <ion-icon name="md-radio-button-off"></ion-icon><span>Payment</span></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card>\n\n        <p class="heading">Payment Method</p>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>Credit Card</ion-label>\n\n                <ion-radio checked="true" value="card"></ion-radio>\n\n            </ion-item>\n\n            <div class="form">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <ion-label>Card Type</ion-label>\n\n                        <ion-select  interface="action-sheet">\n\n                            <ion-option selected value="visa">{{"visa_exp" | translate}}</ion-option>\n\n                            <ion-option value="debit">{{"debit" | translate}}</ion-option>\n\n                            <ion-option value="master">{{"master" | translate}}</ion-option>\n\n                            <ion-option value="credit">{{"credit" | translate}} </ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>Card Number</ion-label>\n\n                        <ion-input type="text" text-right value="1234-1234-1234-5678"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>Card Name</ion-label>\n\n                        <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col col-8 class="">\n\n                          <div class="d-flex mr-5">\n\n                            <ion-item>\n\n                              <ion-label>Expiry Date</ion-label>\n\n                              <ion-input type="text" text-right value="11/20"></ion-input>\n\n                            </ion-item>\n\n                            <ion-icon name="md-calendar" class="text-light calendar-icon"></ion-icon>\n\n                          </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                          <ion-item>\n\n                            <ion-label>CVV Number.</ion-label>\n\n                            <ion-input type="text" text-right value="244"></ion-input>\n\n                          </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n\n\n                    <!-- <ion-row>\n\n                        <ion-col>\n\n                          <ion-list inset>\n\n                            \n\n                           \n\n                            <ion-item >\n\n                              <ion-icon name="mail"  item-left ></ion-icon>\n\n                              <input class="input-field" placeholder="Username" type="name" [(ngModel)]="emailAddress" >\n\n                            </ion-item>\n\n      \n\n                           \n\n                            \n\n                          </ion-list>\n\n                        </ion-col>\n\n                      </ion-row> -->\n\n\n\n                    <ion-item>\n\n                        <ion-label text-right>Save Card Details</ion-label>\n\n                        <ion-toggle color="secondary" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>Cash On Delivery</ion-label>\n\n                <ion-radio value="cod"></ion-radio>\n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>Net Banking\n\n                    \n\n                </ion-label>\n\n                <ion-radio value="net_banking"></ion-radio>\n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <div class="spacebar"></div>\n\n    <div class="btn-padding btn-fisx-bottom">\n\n        <button \n\n        ion-button\n\n        full\n\n        class="bg-thime btn-round btn-text"\n\n        style="max-width: 390px; float: none; height: 40px"\n\n            (click)="placedPage()">Pay <img src="assets/imgs/rupee-white.png">\n\n            100$ \n\n        </button>\n\n\n\n        <!-- <button\n\n          ion-button\n\n          full\n\n          class="bg-thime btn-round btn-text"\n\n          style="max-width: 390px; float: none; height: 40px"\n\n          (click)="checkOutPage()">\n\n\n\n        \n\n          Proceed to Checkout\n\n        </button> -->\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\payment\payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordiantestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
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
        selector: 'page-accordiantest',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\accordiantest\accordiantest.html"*/'<!--\n\n  Generated template for the AccordiantestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-menu [content]="content" [side]="getSideOfCurLang()">\n\n  <ion-header>\n\n  \n\n    <div style="background: #a8171e; height: 170px;" padding text-center>\n\n      <ion-item text-center>\n\n        <img src="assets/imgs/sterlinglogo.png" class="img" />\n\n\n\n        <h2 style="color: white; justify-content: center;">STERLING</h2>\n\n\n\n        <ion-row style="margin-top: 4%;">\n\n          <p style="color: white; margin-left: 14%; text-align: center;">\n\n            sterlingtools@gmail.com\n\n          </p>\n\n          <ion-icon\n\n            name="arrow-forward"\n\n            style="margin-left: 7%; width: 30px; height: 30px;"\n\n          >\n\n          </ion-icon>\n\n        </ion-row>  \n\n      </ion-item>\n\n    </div>\n\n\n\n    <div class="menu-tabs" padding text-center>\n\n      <ion-row>\n\n        <img src="assets/imgs/ic_my_orders.png" style="width: 40px;" />\n\n        <p\n\n          style="\n\n            font-size: 10px;\n\n            color: white;\n\n            margin-left: 4%;\n\n            font-size: 12px;\n\n          "\n\n        >\n\n          My Orders\n\n        </p>\n\n\n\n        <img\n\n          src="assets/imgs/ic_my_addresses.png"\n\n          style="margin-left: 7%; width: 40px;"\n\n        />\n\n        <p\n\n          style="\n\n            font-size: 10px;\n\n            color: white;\n\n            margin-left: 4%;\n\n            font-size: 12px;\n\n          "\n\n        >\n\n          My Addresses\n\n        </p>\n\n      </ion-row>\n\n    </div>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card >\n\n    <ion-card-header (click)="toggleAccordion()" > \n\n      <ion-list>\n\n        \n\n        <ion-item color="primary">\n\n          \n\n          <button ion-button clear small icon-only item-right>\n\n            <ion-icon color="light" [name]="icon"></ion-icon>\n\n          </button>\n\n\n\n          <h6>SHOP BY VEHICLE </h6>\n\n        \n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-header>\n\n    <ion-card-content #cc>\n\n      <div class="select-section shadow-bottom">\n\n        <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4" >\n\n                <div class="size" style="justify-content: center;" >\n\n                \n\n                 \n\n                  <ion-item >\n\n                    <ion-select placeholder="Sort"  value="sortpopular" okText="Ok" cancelText="Cancel" >\n\n                      <ion-option value="sortpopular" >popularity</ion-option>\n\n                      <ion-option value="sortaveragerating">rating</ion-option>\n\n                      <ion-option value="sortlatest">latest</ion-option>\n\n                      <ion-option value="sortpricelowhigh" style="max-width: 100%;">low to high</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n                </div>\n\n            </ion-col>\n\n         \n\n        </ion-row>\n\n      </div>\n\n      <div class="select-section shadow-bottom">\n\n        <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4" >\n\n                <div class="size" style="justify-content: center;" >\n\n                \n\n                 \n\n                  <ion-item >\n\n                    <ion-select placeholder="Sort"  value="sortpopular" okText="Ok" cancelText="Cancel" >\n\n                      <ion-option value="sortpopular" >popularity</ion-option>\n\n                      <ion-option value="sortaveragerating">rating</ion-option>\n\n                      <ion-option value="sortlatest">latest</ion-option>\n\n                      <ion-option value="sortpricelowhigh" style="max-width: 100%;">low to high</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n                </div>\n\n            </ion-col>\n\n         \n\n        </ion-row>\n\n      </div>\n\n\n\n      <div class="select-section shadow-bottom">\n\n        <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4" >\n\n                <div class="size" style="justify-content: center;" >\n\n                \n\n                 \n\n                  <ion-item >\n\n                    <ion-select placeholder="Sort"  value="sortpopular" okText="Ok" cancelText="Cancel" >\n\n                      <ion-option value="sortpopular" >popularity</ion-option>\n\n                      <ion-option value="sortaveragerating">rating</ion-option>\n\n                      <ion-option value="sortlatest">latest</ion-option>\n\n                      <ion-option value="sortpricelowhigh" style="max-width: 100%;">low to high</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n                </div>\n\n            </ion-col>\n\n         \n\n        </ion-row>\n\n      </div>\n\n\n\n      <div class="select-section shadow-bottom">\n\n        <ion-row class="ion-justify-content-center" style="padding: 2px 7px;">\n\n            <button ion-button full class="bg-thime btn-round btn-text"   >Shop Now</button>\n\n    </ion-row>\n\n      </div>\n\n    </ion-card-content>\n\n\n\n    \n\n  </ion-card>\n\n</ion-content>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav\n\n  [root]="rootPage"\n\n \n\n  #content\n\n  swipeBackEnabled="false "\n\n  type="overlay"\n\n></ion-nav>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\accordiantest\accordiantest.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["X" /* Renderer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
], AccordiantestPage);

//# sourceMappingURL=accordiantest.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryupdatedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__itemdetail_itemdetail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wishlist_wishlist__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_category__ = __webpack_require__(140);
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
        selector: 'page-categoryupdated',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\categoryupdated\categoryupdated.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important;">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n    <ion-title text-uppercase>Categories\n\n      <span float-right>\n\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n\n        <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n      </span>\n\n    </ion-title>\n\n    <!-- <ion-title>{{\'AUTO PARTS\' | translate}}</ion-title>\n\n    <span float-right>\n\n      <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="30px" height="30px"></ion-icon>\n\n      <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n    </span> -->\n\n  </ion-navbar>\n\n  <ion-searchbar  placeholder="Search Products" (click)="searchPage()"></ion-searchbar>\n\n  <!-- <ion-list>\n\n    <ion-item > </ion-item>\n\n  </ion-list> -->\n\n  <div class="tab-row">\n\n    <ion-row>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/first.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/second.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/third.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/fourth.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col (click)="categoryPage()">  \n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/fifth.png">\n\n          <small class="text-white">LORUM</small>\n\n        </div>\n\n      </ion-col>\n\n      <!-- <ion-col (click)="categoryPage()">\n\n        <div class="img-box" text-center>\n\n          <img src="assets/imgs/more.png">\n\n          <small class="text-white">More</small>\n\n        </div>\n\n      </ion-col> -->\n\n    </ion-row>\n\n  </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light">\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <div class="banner-text">\n\n        <p [innerHTML]="slide.description"></p>\n\n        <small [innerHTML]="slide.smalltext"></small>\n\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  \n\n\n\n  <p>Featured Items\n\n    <small class="bg-thime btn-round text-white" float-right>View All</small>\n\n  </p>\n\n  <!-- <ion-row>\n\n    <ion-col>\n\n      <ion-card >\n\n        <ion-card-header>\n\n          <div class="img-box" (click)="itemdetailPage()">\n\n              <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n\n          </div>\n\n          <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n        </ion-card-header>\n\n        <ion-card-content (click)="itemdetailPage()" >\n\n          <h5>hi</h5>\n\n          <div class="rateing">\n\n            <div class="card-btn">\n\n              <p class="" float-left>\n\n                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                <span class="text-light bold"> (125)</span>\n\n              </p>\n\n              <div style="display: flex;" float-right>\n\n                <div class="price text-light mr-5">\n\n                  <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                </div>\n\n                <div class="price text-sky">\n\n                  <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col>\n\n      <ion-card>\n\n        <ion-card-header>\n\n            <div class="img-box" (click)="itemdetailPage()">\n\n                <img src="assets/imgs/productimagenew.jpg" style="width: 130px;">\n\n            </div>\n\n            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n        </ion-card-header>\n\n        <ion-card-content (click)="itemdetailPage()">\n\n            <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n            <div class="rateing">\n\n                <div class="card-btn">\n\n                    <p class="" float-left>\n\n                        <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="text-light bold"> (125)</span>\n\n                    </p>\n\n                    <div style="display: flex;" float-right>\n\n                        <div class="price text-light mr-5">\n\n                            <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                        </div>\n\n                        <div class="price text-sky">\n\n                            <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>  \n\n  </ion-row>   -->\n\n\n\n <!-- <ion-row>   \n\n    <ion-col>\n\n      <ion-card>\n\n          <ion-card-header>\n\n              <div class="img-box" (click)="itemdetailPage()">\n\n                  <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n\n              </div>\n\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="itemdetailPage()">\n\n              <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n              <div class="rateing">\n\n                  <div class="card-btn">\n\n                      <p class="" float-left>\n\n                          <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                          <span class="text-light bold"> (125)</span>\n\n                      </p>\n\n                      <div style="display: flex;" float-right>\n\n                          <div class="price text-light mr-5">\n\n                              <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                          </div>\n\n                          <div class="price text-sky">\n\n                              <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                          </div>\n\n                      </div>\n\n                  </div>\n\n              </div>\n\n          </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col>\n\n      <ion-card>\n\n          <ion-card-header>\n\n              <div class="img-box" (click)="itemdetailPage()">\n\n                  <img src="assets/imgs/productimagenew.jpg" style="width: 130px;">\n\n              </div>\n\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n          </ion-card-header>\n\n          <ion-card-content (click)="itemdetailPage()">\n\n              <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n              <div class="rateing">\n\n                  <div class="card-btn">\n\n                      <p class="" float-left>\n\n                          <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                          <span class="text-light bold"> (125)</span>\n\n                      </p>\n\n                      <div style="display: flex;" float-right>\n\n                          <div class="price text-light mr-5">\n\n                              <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                          </div>\n\n                          <div class="price text-sky">\n\n                              <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                          </div>\n\n                      </div>\n\n                  </div>\n\n              </div>\n\n          </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>  -->\n\n\n\n  <ion-grid>\n\n    <ion-row  >   \n\n      <ion-col *ngFor="let products of productsList">\n\n        <ion-card >\n\n            <ion-card-header >\n\n                <div class="img-box" (click)="itemdetailPage(products.id,products.title,products.url,products.status,products.date,products.modified)">\n\n                    <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content (click)="itemdetailPage(products.id,products.title)">\n\n              <ion-item >\n\n                <ion-label>{{products.title}}</ion-label>\n\n              </ion-item>  \n\n                <!-- <h5>Unique For Men Black Formal Slim Fit Shirt</h5> -->\n\n  \n\n                <h5>{{products.status}}</h5>\n\n                <div class="rateing">\n\n                    <div class="card-btn">\n\n                        <p class="" float-left>\n\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                            <span class="text-light bold"> (125)</span>\n\n                        </p>\n\n                        <div style="display: flex;" float-right>\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n       <!-- <ion-col>\n\n        <ion-card >\n\n            <ion-card-header >\n\n                <div class="img-box" (click)="itemdetailPage()">\n\n                    <img src="assets/imgs/productimage.jpg" style="width: 130px;">\n\n                </div>\n\n                <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content (click)="itemdetailPage()">\n\n              <ion-item >\n\n                <ion-label>{{products.title}}</ion-label>\n\n              </ion-item>  \n\n  \n\n                <h5>{{products.status}}</h5>\n\n                <div class="rateing">\n\n                    <div class="card-btn">\n\n                        <p class="" float-left>\n\n                            <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                            <span class="text-light bold"> (125)</span>\n\n                        </p>\n\n                        <div style="display: flex;" float-right>\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>  -->\n\n    </ion-row> \n\n\n\n\n\n  </ion-grid>\n\n\n\n \n\n \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\categoryupdated\categoryupdated.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */]])
], CategoryupdatedPage);

//# sourceMappingURL=categoryupdated.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/**
 * Generated class for the AddressPage page.
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
var _a, _b, _c;


let AddressPage = class AddressPage {
    constructor(navCtrl, navParams, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.firstName = "";
        this.lastName = "";
        this.streetAddress = "";
        this.town = "";
        this.postCode = "";
        this.phoneNo = "";
        this.emailAddress = "";
    }
    ngOnInit() { }
    saveBtnClick() {
        if (this.firstName === "") {
            this.showToastOnEmptyFirstName();
        }
        else if ((this.lastName = "")) {
            this.showToastOnEmptyLastName();
        }
        else if ((this.streetAddress = "")) {
            this.showToastOnEmptyStreetAddress();
        }
        else if ((this.town = "")) {
            this.showToastOnEmptyTown();
        }
        else if ((this.postCode = "")) {
            this.showToastOnEmptyPostCode();
        }
        else if ((this.phoneNo = "")) {
            this.showToastOnEmptyPhoneNo();
        }
        else if ((this.emailAddress = "")) {
            this.showToastOnEmptyEmailAddress();
        }
        else {
            this.allValidationPassed();
        }
    }
    allValidationPassed() {
        let address = [];
        if (localStorage.getItem("address")) {
            address = JSON.parse(localStorage.getItem("address")); // get product list
        }
        console.log("saved first name " + this.firstName);
        console.log("saved last name " + this.lastName);
        address.push({
            FirstName: this.firstName,
            LastName: this.lastName,
            StreetAddress: this.streetAddress,
            Town: this.town,
            PostalCode: this.postCode,
            PhoneNo: this.phoneNo,
            EmailAddress: this.emailAddress,
        });
        localStorage.setItem("address", JSON.stringify(address));
        this.showToastOnAddAddressLocal(this.firstName);
    }
    showToastOnEmptyFirstName() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter first name ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyLastName() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter last name ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyStreetAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter street address ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyTown() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter town ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyPostCode() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter Post code ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyPhoneNo() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter phone no ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnEmptyEmailAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Enter email address ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnAddAddressLocal(strFirstName) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Address saved locally ",
                duration: 3000,
                position: "bottom",
            });
            toast.present();
        });
    }
    isActive(pageName) {
        return this.navCtrl.getActive().name === pageName;
    }
};
AddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-address",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\address\address.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n    <ion-title\n\n      >Address Details\n\n      <span float-right>\n\n        <ion-icon class="icon" ><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n\n        <ion-icon class="icon"  class="fa fa-thumbs-up"  (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"/></ion-icon>\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header> \n\n\n\n\n\n\n\n\n\n\n\n<ion-content class="login-content" padding>\n\n  <ion-row class="logo-row">\n\n    <ion-col>\n\n      <img src="assets/imgs/sterlinglogo.png" />\n\n      <br />\n\n      <!-- <h4>Sterling Tools</h4> -->\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div>\n\n    <ion-list>\n\n      <div class="login-box">\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list inset>\n\n              <div class="input-container">\n\n                <!-- <ion-icon name="mail" item-left></ion-icon> -->\n\n                <input class="input-field" placeholder="First Name" type="name" [(ngModel)]="firstName" style="width: 100%; \n\n                box-sizing: border-box;\n\n                -webkit-box-sizing:border-box;\n\n                -moz-box-sizing: border-box;height: 35px;"/>\n\n              </div>\n\n\n\n              <div style="margin-top: 10px;">\n\n                <input class="input-field" placeholder="Last Name" type="name" [(ngModel)]="lastName" style="width: 100%; \n\n                box-sizing: border-box;\n\n                -webkit-box-sizing:border-box;\n\n                -moz-box-sizing: border-box;height: 35px;"/>\n\n              </div>\n\n\n\n              <div style="margin-top: 10px;">\n\n                <input class="input-field" placeholder="Company Name" type="name" [(ngModel)]="companyName" style="width: 100%; \n\n                box-sizing: border-box;\n\n                -webkit-box-sizing:border-box;\n\n                -moz-box-sizing: border-box;height: 35px;"/>\n\n              </div>\n\n\n\n              <div style="margin-top: 14px;">\n\n                <h4 style="font-size: 15px;">Country/Region</h4>\n\n              </div>\n\n\n\n              <div style="margin-top: 10px;">\n\n                <input class="input-field" placeholder="Street Address" type="name" [(ngModel)]="streetAddress" style="width: 100%; \n\n                box-sizing: border-box;\n\n                -webkit-box-sizing:border-box;\n\n                -moz-box-sizing: border-box;height: 35px;"/>\n\n              </div>\n\n\n\n              <div style="margin-top: 10px;">\n\n                <input class="input-field" placeholder="Town/City" type="name" [(ngModel)]="town" style="width: 100%; \n\n                box-sizing: border-box;\n\n                -webkit-box-sizing:border-box;\n\n                -moz-box-sizing: border-box;height: 35px;"/>\n\n              </div>\n\n\n\n              <div style="margin-top: 10px;">\n\n                <input class="input-field" placeholder="Region/Optional" type="name" [(ngModel)]="region" style="width: 100%; \n\n                box-sizing: border-box;\n\n                -webkit-box-sizing:border-box;\n\n                -moz-box-sizing: border-box;height: 35px;"/>\n\n              </div>\n\n\n\n              <div style="margin-top: 10px;">\n\n                <input class="input-field" placeholder="Postcode" type="number" [(ngModel)]="postCode" style="width: 100%; \n\n                box-sizing: border-box;\n\n                -webkit-box-sizing:border-box;\n\n                -moz-box-sizing: border-box;height: 35px;"/>\n\n              </div>\n\n\n\n              <div style="margin-top: 10px;">\n\n                <input class="input-field" placeholder="Phone" type="number" [(ngModel)]="phoneNo" style="width: 100%; \n\n                box-sizing: border-box;\n\n                -webkit-box-sizing:border-box;\n\n                -moz-box-sizing: border-box;height: 35px;"/>\n\n              </div>\n\n\n\n\n\n              <div style="margin-top: 10px;">\n\n                <input class="input-field" placeholder="Email Address" type="email" [(ngModel)]="emailAddress" style="width: 100%; \n\n                box-sizing: border-box;\n\n                -webkit-box-sizing:border-box;\n\n                -moz-box-sizing: border-box;height: 35px;"/>\n\n              </div>\n\n\n\n\n\n\n\n             \n\n              \n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col class="signup-col">\n\n            <button\n\n              ion-button\n\n              class="submit-btn"\n\n              full\n\n              type="submit"\n\n              style="text-transform: none"\n\n              class="bg-thime btn-round btn-text"\n\n              (click)="saveBtnClick()">\n\n              Save\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\address\address.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" ? _c : Object])
], AddressPage);

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCategoryDetailGridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
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
        selector: 'page-product-category-detail-grid',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\product-category-detail-grid\product-category-detail-grid.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle style="display: block !important">\n\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n  </button>\n\n\n\n    <!-- <ion-icon name="md-arrow-back"></ion-icon>\n\n    <ion-icon name="md-search" class="text-light icon"></ion-icon> -->\n\n\n\n\n\n      <ion-title>Categories Details\n\n          <span float-right> \n\n            <ion-icon class="icon" ><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n            <ion-icon class="icon" ><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n\n          </span>\n\n      </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n  <ion-refresher slot="fixed" >\n\n    <ion-refresher-content\n\n      pullingIcon="chevron-down-circle-outline"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing Product Categories Details."\n\n    >\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-card *ngIf="strData;else other_content">\n\n\n\n    <ion-card-header >\n\n      <ion-item lines="none">\n\n        <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{strData}}</ion-label>\n\n      </ion-item> \n\n  \n\n          \n\n    </ion-card-header>\n\n  </ion-card>\n\n\n\n  \n\n\n\n\n\n  <ng-template #other_content>\n\n\n\n    <div class="select-section shadow-bottom">\n\n      <ion-row>\n\n          <ion-col col-12 >\n\n              <div class="size">\n\n                <ion-item>\n\n                  <ion-label>Sort</ion-label>\n\n                  <ion-select placeholder="Please select" value="sortpopular" okText="Ok" cancelText="Cancel">\n\n                    <ion-option value="sortpopular" style="max-width: 100%;width: 100%;" (ionSelect)="sortPopular()">Sort By popularity</ion-option>\n\n                    <ion-option value="sortaveragerating">Sort By average rating</ion-option>\n\n                    <ion-option value="sortlatest">Sort By latest</ion-option>\n\n                    <ion-option value="sortpricelowhigh">Sort By price: low to high</ion-option>\n\n                    <ion-option value="sortpricehighlow">Sort By price: high to low</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n          </ion-col>\n\n       \n\n      </ion-row>\n\n  </div>\n\n  \n\n    \n\n    <ion-grid class="product-grid">\n\n      <ion-row class="rowgrid" text-center>\n\n        <ion-col col-6\n\n          class="columngrid"\n\n          *ngFor="let productCategory of productCategoryInformation"\n\n         >\n\n          <ion-card>\n\n            <ion-card-header style="justify-content: left">\n\n              <div\n\n                class="img-box"\n\n              >\n\n                <!-- <img src="assets/imgs/productimage.jpg" style="width: 130px;float: left;" /> -->\n\n                <img  [src]="productCategory.image"  style="width:200px;height:80px ;">\n\n\n\n              </div>\n\n              <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n          \n\n             \n\n\n\n\n\n              <!-- <div >\n\n                <h5 style="font-size: 10px;text-align: -webkit-center;"> <span class="priceicon">Name : </span> {{productCategory.name}}</h5> \n\n              </div>\n\n              <div >\n\n                <h5 style="font-size: 10px;text-align: -webkit-center;margin-top: 8px;"> <span class="priceicon">Price : </span> {{productCategory.regular_price}} $</h5> \n\n              </div>\n\n\n\n              <div class="rating" style="text-align: -webkit-center;margin-top: 8px;">\n\n                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\n\n              </div>\n\n  \n\n              <div class="rateing">\n\n                <div class="card-btn">\n\n                </div>\n\n              </div> -->\n\n\n\n              <ion-item >\n\n                <h5 style="font-size: 11px;text-align: -webkit-center;"> {{productCategory.name}}</h5> \n\n              </ion-item>\n\n  \n\n              <div>\n\n                <div *ngIf="productCategory.regular_price">     <!--If "product" exists-->\n\n                  <h5 style="font-size: 12px;text-align: center;"  > <span class="priceicon">Price : </span> {{productCategory.regular_price}}  <span class="priceicon">$</span></h5>  \n\n                  <div class="rating" style="text-align: -webkit-center;margin-top: 8px;">\n\n                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\n\n                  </div>\n\n      \n\n                  <!-- <div class="rateing">\n\n                    <div class="card-btn">\n\n                      <p class="" float-left>\n\n                        <button\n\n                          ion-button\n\n                          full\n\n                          class="bg-thime btn-round btn-text"\n\n                          style="margin-top: 3px; width: 150px;text-align: center;"\n\n                        >\n\n                          Add To Cart\n\n                        </button>\n\n                      </p>\n\n                    </div>\n\n                  </div> -->\n\n                </div>\n\n            \n\n                <div *ngIf="!productCategory.regular_price">     <!--If "product" not exists-->\n\n                  <!-- <h5 style="font-size: 12px;text-align: center"  >  <span class="priceicon">$</span>Price Not Available</h5>   -->\n\n                  <h5 style="font-size: 12px;text-align: center"> Price Not Available</h5>  \n\n                  <div class="rating" style="text-align: -webkit-center;margin-top: 8px;">\n\n                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\n\n                  </div>\n\n                  <!-- <div class="rateing">\n\n                    <div class="card-btn">\n\n                      <p class="" float-left>\n\n                        <button\n\n                          ion-button\n\n                          full\n\n                          class="bg-thime btn-round btn-text"\n\n                          style="margin-top: 3px; width: 150px;text-align: center;"\n\n                        >\n\n                          Read More\n\n                        </button>\n\n                      </p>\n\n                    </div>\n\n                  </div> -->\n\n                </div>\n\n            </div>\n\n\n\n\n\n            \n\n\n\n\n\n\n\n\n\n\n\n\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    \n\n  </ng-template>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <!-- <ng-template #other_content1>\n\n\n\n    <ion-card *ngFor="let productCategory of productCategoryInformation">\n\n\n\n      <ion-card-header >\n\n        <ion-item lines="none">\n\n          <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{productCategory.name}}</ion-label>\n\n        </ion-item> \n\n    \n\n            \n\n      </ion-card-header>\n\n    </ion-card>\n\n\n\n  </ng-template> -->\n\n\n\n\n\n \n\n\n\n</ion-content>\n\n  '/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\product-category-detail-grid\product-category-detail-grid.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ProductCategoryDetailGridPage);

//# sourceMappingURL=product-category-detail-grid.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
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
        selector: 'page-paymentpage',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\paymentpage\paymentpage.html"*/'<ion-content class="login-content" padding >\n\n  <ion-row class="logo-row">\n\n      <ion-col>\n\n        <img src="assets/imgs/sterlinglogo.png"/>\n\n        <br/>\n\n        <h4>Sterling Tools</h4>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n    <div >\n\n      <ion-list >\n\n          <div class="login-box">\n\n            \n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-list inset>\n\n                      \n\n                     \n\n                      <div class="input-container">\n\n                        <ion-icon name="mail"  item-left ></ion-icon>\n\n                        <input class="input-field" placeholder="Username" type="name" [(ngModel)]="emailAddress" >\n\n                      </div>\n\n\n\n                      <div class="input-container">\n\n                        <ion-icon name="lock"  item-left ></ion-icon>\n\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n\n                      </div>\n\n                      <div class="input-container">\n\n                        <ion-icon name="lock"  item-left ></ion-icon>\n\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n\n                      </div>\n\n                      <div class="input-container">\n\n                        <ion-icon name="lock"  item-left ></ion-icon>\n\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n\n                      </div>\n\n                      <div class="input-container">\n\n                        <ion-icon name="lock"  item-left ></ion-icon>\n\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n\n                      </div>\n\n                      <div class="input-container">\n\n                        <ion-icon name="lock"  item-left ></ion-icon>\n\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n\n                      </div>\n\n                      <div class="input-container">\n\n                        <ion-icon name="lock"  item-left ></ion-icon>\n\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n\n                      </div>\n\n                      <div class="input-container">\n\n                        <ion-icon name="lock"  item-left ></ion-icon>\n\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n\n                      </div>\n\n                      <div class="input-container">\n\n                        <ion-icon name="lock"  item-left ></ion-icon>\n\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n\n                      </div>\n\n                      <div class="input-container">\n\n                        <ion-icon name="lock"  item-left ></ion-icon>\n\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n\n                      </div>\n\n                      \n\n                    </ion-list>\n\n                  </ion-col>\n\n                </ion-row>\n\n                \n\n                <ion-row>  \n\n                  <ion-col class="signup-col">\n\n                    <button ion-button class="submit-btn" full type="submit" style="text-transform: none;" class="bg-thime btn-round btn-text" (click)="loginBtnClick()">Checkout</button>\n\n\n\n                  </ion-col>\n\n                </ion-row>\n\n                \n\n             \n\n            </div>\n\n      </ion-list>\n\n    \n\n      \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\paymentpage\paymentpage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */]])
], PaymentpagePage);

//# sourceMappingURL=paymentpage.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchdataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(15);
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
 * Generated class for the SearchdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let SearchdataPage = class SearchdataPage {
    constructor(navCtrl, navParams, httpClient, apiProvider, toastController, loadingController, app, platform, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.apiProvider = apiProvider;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.app = app;
        this.platform = platform;
        this.alertController = alertController;
        this.featuredProductsList = [];
        this.countProductsWishList = 0;
        this.countProductsCartLocal = 0;
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.strProductId = navParams.get("id");
        this.strProductName = navParams.get('name');
        this.strProductImage = navParams.get('image');
        this.strProductRegularPrice = navParams.get('regular_price');
        this.strProductDescription = navParams.get('description');
        this.strProductMake = navParams.get('make');
        this.strProductModel = navParams.get('model');
        this.strProductYear = navParams.get('year');
        this.strProductStock = navParams.get('stock');
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
        this.strDataServer = 'No Data';
        this.checkNetwork();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'SearchproductsPage') {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                }
                else {
                }
            }
        });
        this.showLoadingControllerLaunch();
        const service = this.apiProvider.getSearchData(this.strMake, this.strModel, this.strEngine, this.strYear);
        service.subscribe((jsonResponse) => {
            const resultado = jsonResponse;
            this.featuredProductsList = resultado;
            this.obj = JSON.stringify(jsonResponse);
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
                this.showToastOnAddProductSingle(this.strMake);
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
        if (localStorage.getItem('productsWishlist')) {
            productsWishlist = JSON.parse(localStorage.getItem('productsWishlist')); // get product list 
        }
        console.log("Sent productsList id " + id);
        console.log("Sent productsList name " + name);
        productsWishlist.push({ 'ProductId': id, 'ProductName': name, 'ProductQuantity': '1', 'ProductImage': image, 'ProductDescription': description, 'ProductRegularPrice': regular_price });
        localStorage.setItem('productsWishlist', JSON.stringify(productsWishlist));
        ///this.buttonIcon = "home";
        this.showToastOnAddProductWishlist(name);
        this.countProductsWishlistLocalUpdated++;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    showToastOnEmptyFeaturedProducts() {
        const toast = this.toastController.create({
            message: "Products not available!",
            duration: 1000,
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
    showToastOnAddProductSingle(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
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
    checkNetwork() {
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
                //this.router.navigate(['/invoices']);
                // this.router.navigate(['/managecard']);
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
    showToastOnAddProductWishlist(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: 'Product Added in Wishlist : \n ' + strProductAdded + '\n',
            duration: 1000,
            position: "bottom",
        });
        toast.present();
    }
};
SearchdataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-searchdata',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\searchdata\searchdata.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"/>\n\n    </ion-icon>\n\n    </button>\n\n    <ion-title>Product Detail\n\n     \n\n     \n\n\n\n      <span float-right>\n\n\n\n    \n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n        \n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n      </span>\n\n     \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header> \n\n\n\n<!--<select size & color>-->\n\n<ion-content class="bg-light">\n\n\n\n\n\n \n\n  <div class="img-section shadow-bottom" text-center>\n\n  \n\n  \n\n\n\n    <!-- <img src="assets/imgs/productimage.jpg" /> -->\n\n\n\n    <img  [src]="strProductImage"  style="width:200px;height:150px;margin-top: 18px;">\n\n\n\n   \n\n    <div class="d-flex" style="align-items: start;margin-top: 15px;">\n\n      <span>{{strName}}</span>\n\n      <span class="icon">\n\n        <ion-icon name="md-remove" (click)="decrementValue()"></ion-icon\n\n      ></span>\n\n      <span\n\n        class="text-sky small-text"\n\n        style="text-align: center; margin-left: 20%"\n\n      >\n\n        {{currentNumber}}</span\n\n      >\n\n      <span class="icon" style="margin-left: 20%"\n\n        ><ion-icon name="md-add" (click)="incrementValue()"></ion-icon\n\n      ></span>\n\n    </div>\n\n    <div class="card-btn">\n\n      <div class="d-flex" style="padding: 1rem">\n\n        <div class="review-box">\n\n          <span class="text-sky small-text" style="color: black;margin-top: 4px;">Product Quantity</span>\n\n        </div>\n\n     \n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n \n\n  <div class="features bg-white shadow-bottom" padding>\n\n    <h6 class="heading">Key Features</h6>\n\n    <p><span class="circle"></span>{{strProductName}}</p>\n\n    <p><span class="circle"></span>{{strProductRegularPrice}} $ </p>\n\n    <p><span class="circle"></span>{{strProductDescription}}</p>\n\n    <p><span class="circle"></span>{{strProductSalePrice}}</p>\n\n    <p><span class="circle"></span>{{strProductMake}}</p>  \n\n    <p><span class="circle"></span>{{strProductModel}}</p>\n\n    <p><span class="circle"></span>{{strProductSubModel}}</p>\n\n    <p><span class="circle"></span>{{strProductYear}}</p>\n\n    <p><span class="circle"></span>{{strProductYearFrom}}</p>\n\n    <p><span class="circle"></span>{{strStock}}</p>\n\n\n\n    \n\n\n\n  \n\n  </div>\n\n\n\n  <div class="reating-review bg-white" padding >\n\n    <div class="reating"></div>\n\n\n\n    <div class="lick" >\n\n      <button\n\n      ion-button\n\n      full\n\n      class="btn-round green-shadow btn-text"\n\n      style="background-color: red; color: white;"\n\n     \n\n      (click)="addToCart(dynamicId,strProductName,strImage,strProductDescription,strProductRegularPrice)"\n\n\n\n      >\n\n\n\n    Add To Cart\n\n      \n\n    </button>\n\n    </div>\n\n\n\n    <!-- (click)="addToCart(dynamicId)" -->\n\n    \n\n\n\n  \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\searchdata\searchdata.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], SearchdataPage);

//# sourceMappingURL=searchdata.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingproductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
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
            window.localStorage.setItem("selectedProduct", JSON.stringify(this.navParams.get("product")));
        }
    }
    ionViewDidEnter() {
        this.getSingleProduct();
    }
    getSingleProduct() {
        if (window.localStorage.getItem("selectedProduct") != "undefined") {
            this.selectProduct = JSON.parse(window.localStorage.getItem("selectedProduct"));
            console.log("Ionic Storage " + this.selectProduct);
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
        this.storage
            .set("stuff", "My stuff")
            .then(() => this.storage.get("stuff"))
            .then((stuff) => console.log(stuff));
        localStorage.setItem("selectedProduct", JSON.stringify(this.navParams.get("product")));
        this.productCount++;
    }
    addToCart(product) {
        var productPrice = this.productCount * parseInt(product.price);
        let cartProduct = {
            product_id: product.id,
            name: product.name,
            thumb: product.thumb,
            count: this.productCount,
            totalPrice: productPrice,
        };
        // this.cartService.addToCart(cartProduct).then((val) => {
        //   this.presentToast(cartProduct.name);
        // });
    }
    presentToast(name) {
        let toast = this.toastCtrl.create({
            message: `${name} has been added to cart`,
            showCloseButton: true,
            closeButtonText: "View Cart",
        });
        toast.onDidDismiss(() => {
            this.navCtrl.push("CartPage");
        });
        toast.present();
    }
};
TestingproductsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: "page-testingproducts",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\testingproducts\testingproducts.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n      <ion-title>Men\'s Shirts\n\n          <span float-right>\n\n          <ion-icon class="icon" ><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n\n            <ion-icon class="icon" ><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n          </span>\n\n      </ion-title>\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light">\n\n\n\n\n\n\n\n    \n\n\n\n  <div class="card product-detail">\n\n    <ion-slides pager="true" slidesperview="1">\n\n          <ion-slide>\n\n            <img alt="" src="{{selectProduct?.thumb}}">\n\n          </ion-slide>\n\n          <ion-slide ngfor="let prodImg of selectProduct?.images">\n\n            <img alt="" src="{{prodImg}}">\n\n          </ion-slide>\n\n        </ion-slides>\n\n     \n\n        <ion-row class="action-btn-wrap" no-padding="">\n\n          <ion-col text-right="">\n\n        <button class="wish-list-btn card" click="" color="light" icon-only="" ion-button="" item="" togglewishlist="">\n\n              <ion-icon color="gray" name="md-heart"></ion-icon>\n\n            </button>\n\n     \n\n            <button class="wish-list-btn card" click="" color="light" icon-only="" ion-button="" item="" togglewishlist="">\n\n              <ion-icon color="gray" name="share"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n         \n\n     \n\n    <div class="border-bottom" margin-top="" padding="" text-center="">\n\n    <h2><span>\n\n    {{selectProduct?.name}}</span></h2>\n\n    {{ selectProduct?.short_description }}\n\n     \n\n    <h3 class="price" color="danger" margin-top="">\n\n    {{ selectProduct?.price | currency:\'USD\':true\n\n              }}</h3>\n\n    </div>\n\n    <ion-row padding-="">\n\n            <ion-col>\n\n              </ion-col></ion-row>\n\n     \n\n    <h4>\n\n                  Quantity\n\n              </h4>\n\n    <ion-col class="qty" text-right="">\n\n                <button    (click)="decreaseProductCount()" color="light" decreaseproductcount="" ion-button="" small="">\n\n                  -\n\n                </button>\n\n                <button clear="" color="dark" ion-button="" small="">\n\n                  {{productCount}}\n\n                </button>\n\n                <button (click)="incrementProductCount()" color="light" incrementproductcount="" ion-button="" small="">\n\n                  +\n\n                </button>\n\n              </ion-col>\n\n           \n\n      </div>\n\n\n\n      <ion-footer class="single-footer">\n\n     \n\n        <ion-grid>\n\n          <ion-row>\n\n             <ion-col addtocart="" class="addCart" click="" selectproduct="">\n\n               <button color="secondary" full="" ion-button="">\n\n                 ADD TO CART\n\n               </button>          \n\n       \n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n         \n\n      </ion-footer>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\testingproducts\testingproducts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], TestingproductsPage);

//# sourceMappingURL=testingproducts.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
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
        this.strProductNameCart = "";
        this.strProductNameCart1 = "";
        this.dynamicId = "";
        this.strPName = "";
        this.strPName1 = "";
    }
    ngOnInit() {
        this.viewCartApi();
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
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
            catch (error) { }
        });
    }
    getProductsInCart(dynamicId) {
        this.httpClient
            .get("http://busybanda.com/sterling-tools/api/get_products_by_id?" +
            "id=" +
            dynamicId)
            .subscribe((jsonResponse) => {
            // console.log('Dynamic Product Id ' + dynamicId);
            this.productsListInformation = jsonResponse["result"];
            this.objProductsViewCart = JSON.stringify(jsonResponse);
            var list = new Array();
            this.productsListInformation.forEach((number, index, array) => {
                // console.log(array);
                for (var key in array) {
                    var value = array[key];
                    console.log("***" + key, value);
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
                console.log("Product details Not Found in Cart");
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
                        console.log("Product details Found in Cart");
                        this.productsListInformationTemp = attribute.name;
                        this.strPName1 = this.productsListInformationTemp;
                        this.productsListInformation.push(this.productsListInformationTemp);
                    }
                    else {
                    }
                });
            }
            console.log("strPName " + this.strPName);
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
        selector: "page-test1",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\test1\test1.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>test1</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n \n\n  <ion-card class="card" *ngFor="let viewCart of viewCartList" style="margin-top: 10%;">\n\n    <ion-card-header>\n\n      <ion-item lines="none" >\n\n        <ion-label style="color: black;font-size: 8px;">{{viewCart.product_id }}</ion-label>\n\n        <ion-label style="color: black;font-size: 8px;">{{viewCart.quantity }}</ion-label>\n\n        <ion-label style="color: black;font-size: 8px;">{{strPName }}</ion-label>\n\n      </ion-item> \n\n    </ion-card-header>\n\n  </ion-card>\n\n\n\n  <ion-card class="card"  style="margin-top: 10%;"   >\n\n    <ion-card-header>  \n\n      <ion-item lines="none"  >\n\n        <!-- <ion-label style="color: red;font-size: 7px;" ngDefaultControl [(ngModel)] = "strProductNameCart"></ion-label> -->\n\n        <ion-label style="color: red;font-size: 7px;">{{strProductNameCart}}</ion-label>\n\n\n\n      </ion-item>\n\n    </ion-card-header>\n\n  </ion-card>\n\n\n\n  <ion-card class="card"  style="margin-top: 10%;"  *ngFor="let product of productsListInformationTemp"  >\n\n    <ion-card-header>  \n\n      <ion-item lines="none"  >\n\n        <!-- <ion-label style="color: red;font-size: 7px;" ngDefaultControl [(ngModel)] = "strProductNameCart"></ion-label> -->\n\n        <ion-label style="color: blue;font-size: 7px;">{{strPName1}}</ion-label>\n\n\n\n      </ion-item>\n\n    </ion-card-header>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n\n\n '/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\test1\test1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], Test1Page);

//# sourceMappingURL=test1.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
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
                const service = this.apiProvider.getCartDetails();
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
        selector: 'page-testcart',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\testcart\testcart.html"*/'\n\n<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n  <button ion-button menuToggle style="display: block !important">\n\n    <ion-icon class="menu-icon"\n\n      ><img src="assets/imgs/ic_menu.png"\n\n    /></ion-icon>\n\n  </button>\n\n    <ion-title style="text-align: center"\n\n      >View Cart\n\n        \n\n    </ion-title>\n\n  </ion-navbar>\n\n  <div class="custom-id">\n\n   \n\n    <ion-searchbar placeholder="Search any part here" ></ion-searchbar>\n\n  </div>\n\n \n\n</ion-header>\n\n   \n\n<ion-content class="bg-light">\n\n\n\n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="chevron-down-circle-outline"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing Cart."\n\n    >\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n\n\n  <ion-item *ngIf="!viewCartList.length;else other_content">\n\n    <h5 style="font-size: 12px;">{{strData}}</h5> \n\n   \n\n  </ion-item>\n\n\n\n\n\n  <ng-template #other_content>\n\n\n\n    <div class="pincod bg-white shadow-bottom cart-box"  style=" padding: 16px 16px 16px 16px;"\n\n    >\n\n      <ion-row style="margin-top: 8px" *ngFor="let viewCart of viewCartList;let i = index" \n\n      (click)="productcategoryDetailPage(viewCart.product_id,viewCart.name)">\n\n        <ion-col col-4>\n\n          <ion-list>\n\n            <ion-item>\n\n              <img  [src]="viewCart.product_thumbnail"  style="width:200px;height:80px ;">\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-8>\n\n          \n\n          <div class="row"  >\n\n            <div class="block">{{viewCart.name}}</div>\n\n            <ion-icon\n\n            name="md-close"\n\n            style="margin-left: 10%; margin-top: 2%"\n\n            (click)="removeProduct(viewCart.product_id)">\n\n          </ion-icon> \n\n            \n\n          </div>      \n\n  \n\n         \n\n          <div   style="margin-top: 6% ">\n\n             <!-- <ion-input  type="number"   [(ngModel)]="valueQuantity" id="myText" placeholder = "Input New Quantity" >{{viewCart.quantity}}  </ion-input> \n\n             <input value="{{viewCart.quantity}}" class="form-control" style="text-align:center;" id="textbox" type="number">  -->\n\n             <!-- <ion-input type="number" min="1"  [(ngModel)]="valueQuantity">{{viewCart.quantity}}</ion-input> -->\n\n             <!-- <input value="{{viewCart.quantity}}" class="form-control" style="text-align:center;" id="textbox" type="number"> -->\n\n          </div>\n\n\n\n \n\n         \n\n\n\n          <div style="margin-top: 6% " >\n\n            QTY          \n\n            <span class="icon"\n\n              >\n\n              <ion-icon\n\n                name="md-remove-circle"\n\n                style="margin-left: 10%; margin-top: 2%"\n\n                (click)="decrementValue1(i,strDynamicId)">\n\n              </ion-icon>\n\n          </span>\n\n            <span  text-center style="margin-left: 10%;color: red;">{{viewCart.quantity}}</span>\n\n            <!-- <span  text-center style="margin-left: 10%;color: red;">{{strDynamicProductQuantity}}</span> -->\n\n\n\n            <span class="icon" text-right\n\n              ><ion-icon\n\n                name="md-add-circle"\n\n                (click)="incrementValue1(i,strDynamicId)"\n\n                style="margin-left: 10%"\n\n              ></ion-icon\n\n            ></span>\n\n          </div>\n\n\n\n        \n\n          <div style="margin-top: 6%">\n\n            <label > <span class="priceicon">Product Regular Price   </span>{{viewCart.price}} <span class="priceicon">$</span></label>\n\n        \n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    \n\n    </div>\n\n\n\n    <div  >\n\n      <div class="reating-review bg-white" padding style="margin-bottom: 15px" > \n\n        <div class="reating" >\n\n          <div class="select-section shadow-bottom" style="text-align: center"\n\n           >\n\n            <ion-row\n\n              class="ion-justify-content-center"\n\n              style="justify-content: center"\n\n             >\n\n              <button\n\n                ion-button\n\n                full\n\n                class="bg-thime btn-round btn-text"\n\n                style="max-width: 390px"\n\n                (click)="updateShoppingCart(strDynamicId)">\n\n                Update Shopping Cart\n\n              </button>\n\n            </ion-row>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n    <div style="margin-top: 10%;">\n\n\n\n      {{obj}}\n\n    </div>\n\n\n\n\n\n       <!-- <div >\n\n        <div class="reating-review bg-white" padding style="margin-bottom: 15px" > \n\n          <div class="reating" >\n\n            <div class="select-section shadow-bottom" style="text-align: center"\n\n             >\n\n              <ion-row\n\n                class="ion-justify-content-center"\n\n                style="justify-content: center"\n\n               >\n\n                <button\n\n                  ion-button\n\n                  full\n\n                  class="bg-thime btn-round btn-text"\n\n                  style="max-width: 390px"\n\n                  (click)="updateShoppingCart(strDynamicId)">\n\n                  Update Shopping Cart\n\n                </button>\n\n              </ion-row>\n\n            </div>\n\n          </div>\n\n    </div>\n\n       </div > -->\n\n\n\n\n\n      \n\n        \n\n\n\n\n\n       \n\n  \n\n \n\n\n\n  </ng-template>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\testcart\testcart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], TestcartPage);

//# sourceMappingURL=testcart.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VieworderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vieworderdetails_vieworderdetails__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
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
        selector: 'page-vieworder',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\vieworder\vieworder.html"*/'<!--\n\n  Generated template for the VieworderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>View Orders</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n  </button>\n\n      <ion-title>MyOrders\n\n          <span float-right> \n\n            <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n            <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n\n          </span>\n\n      </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="chevron-down-circle-outline"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing Orders..."\n\n    >\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-card class="card" *ngFor="let vieworders of viewOrdersList"  >\n\n    <ion-card-header >\n\n     \n\n\n\n      <!-- <ion-item lines="none">\n\n        <ion-label style="color: black;max-width: 40%;margin-right: 8px;">Order Id</ion-label>\n\n        <ion-label style="color: black;max-width: 40%;margin-right: 8px;">{{orders.ID}}</ion-label>\n\n      </ion-item>   \n\n\n\n      <ion-item lines="none">\n\n        <ion-label style="color: black;max-width: 40%;margin-right: 8px;">Order Title</ion-label>\n\n        <ion-label style="color: black;max-width: 40%;margin-right: 8px;">{{orders.post_title}}</ion-label>\n\n      </ion-item>  -->\n\n\n\n      <!-- <ion-item lines="none">\n\n        <ion-label style="color: black;margin-right: 8px;">Order Title</ion-label>\n\n      </ion-item>  -->\n\n\n\n\n\n      <ion-item lines="none">\n\n        <ion-label style="color: black;margin-right: 8px;font-size: 13px;">{{vieworders.post_title}}</ion-label>\n\n      </ion-item> \n\n\n\n\n\n    \n\n    </ion-card-header>\n\n  </ion-card>\n\n\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\vieworder\vieworder.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */]])
], VieworderPage);

//# sourceMappingURL=vieworder.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewallcategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__productcategorydetail_productcategorydetail__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser_ngx__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__itemdetail_itemdetail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(2);
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
var ViewallcategoriesPage_1;









/**
 * Generated class for the ViewallcategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ViewallcategoriesPage = ViewallcategoriesPage_1 = class ViewallcategoriesPage {
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
        this.makeList = [];
        this.modelList = [];
        this.modeKeys = [];
        this.httpClientFetch = [];
        this.varoutput = [];
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
        this.getMakeApi();
        this.getModelApi(this.makeValue);
        // this.callMakeApi();
        this.zone = {
            kind: 'key2'
        };
        // this.modeKeys = [
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getAllFeaturedProducts();
        this.getAllFeaturedProductsCategories();
        this.viewCartApi();
        this.getMakeApi();
        this.getModelApi(this.makeValue);
        setTimeout(() => {
            console.log('Async operation has ended');
            event.complete();
        }, 500);
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
        this.navCtrl.push(ViewallcategoriesPage_1);
    }
    productDetailPage(id, name, regular_price) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__itemdetail_itemdetail__["a" /* ItemdetailPage */], {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__productcategorydetail_productcategorydetail__["a" /* ProductcategorydetailPage */], {
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
    //  .pipe(map((res: any) => this.httpClientFetch = res.result));
    makeDropDownValue() {
        console.log("Selected makeDropDownValue", this.makeValue);
    }
    sortDropDownValue() {
        console.log("Selected sortDropDownValue");
        this.getCategoriesApi();
        this.featuredProductCategoryList.sort();
        var points = [5.0, 3.7, 1.0, 2.9, 3.4, 4.5];
        var output = [];
        var i;
        for (i = 0; i < points.length; i++) {
            points.sort(function (a, b) {
                return b - a;
            });
            output += points[i] + "<br>";
        }
        console.log(output);
        console.log("Selected sortDropDownValue" + this.featuredProductCategoryList.sort());
    }
    modelDropDownValue() {
        console.log("Selected modelDropDownValue", this.modelValue);
    }
    getMakeApi() {
        console.log('getMakeApi called    ');
        const service = this.apiProvider.searchMakeCategories();
        service.subscribe((data) => {
            const resultado = data;
            this.makeList = resultado;
            this.strMakeListValue = resultado;
            console.log('getMakeApi called    ' + resultado);
            this.modeKeys = resultado;
            //    if(this.makeList){
            //     this.getModelApi(this.makeValue)
            //     console.log('getMakeApi success ');
            //    }
            //    else {
            //     console.log('getMakeApi issue ');
            //    }
            //    console.log("Selected makeDropDownValue getMakeApi", this.makeValue); 
        });
    }
    getModelApi(makeValue) {
        console.log('getModelApi called    ');
        const service = this.apiProvider.getMakeCategories(makeValue);
        service.subscribe((data) => {
            const resultado = data;
            this.modelList = resultado;
            this.strModelListValue = resultado;
            this.modeKeys = resultado;
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
                const service = this.apiProvider.getCartDetails();
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
    callMakeApi() {
        this.showMakeLoader();
        // const service = this.apiProvider.getMakeCategories();
        //   service.subscribe((data) => {
        //       const resultado = data;
        //       this.makeList = resultado; 
        //      this.strMakeListValue =  resultado;
        //      console.log('getMakeApi called    ' + resultado);
        //      this.modeKeys =resultado;
        //   });
        // return this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_make_search').pipe(map((res: any) => this.httpClientFetch = res.result));
        this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_make_search').subscribe((response) => {
            const resultado = response;
            this.makeList = resultado;
            this.modeKeys = resultado;
        });
    }
    showMakeLoader() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                content: 'Please wait fetching Make!',
                duration: 600,
            });
            yield loading.present();
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_11" /* ViewChild */])("cc"),
    __metadata("design:type", Object)
], ViewallcategoriesPage.prototype, "cardContentVehicle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_11" /* ViewChild */])("cc1"),
    __metadata("design:type", Object)
], ViewallcategoriesPage.prototype, "cardContentCategory", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["E" /* Input */])("title"),
    __metadata("design:type", String)
], ViewallcategoriesPage.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["E" /* Input */])("title"),
    __metadata("design:type", String)
], ViewallcategoriesPage.prototype, "Elem", void 0);
ViewallcategoriesPage = ViewallcategoriesPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["n" /* Component */])({
        selector: 'page-viewallcategories',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\viewallcategories\viewallcategories.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n  \n\n    <ion-title >Products\n\n      <span float-right>\n\n        <ion-header style="font-size: 14px;color: white;margin-left: -85px; margin-top: 5px;"> Cart: {{countProducts}}</ion-header>\n\n        <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"/></ion-icon>\n\n        <ion-icon class="icon"  (click)="cartPage()" ><img src="assets/imgs/ic_my_cart.png" width="100%;" /></ion-icon>\n\n      </span>\n\n     \n\n    </ion-title>\n\n\n\n \n\n  </ion-navbar>\n\n  <div class="custom-id">\n\n    <ion-item class="custom">\n\n      <ion-select\n\n        placeholder="All"\n\n        value="MAKE"\n\n        okText="Ok"\n\n        cancelText="Cancel"\n\n        style="margin-left: 1px"\n\n      >\n\n        <ion-option value="MAKE" style="max-width: 60px">MAKE</ion-option>\n\n        <ion-option value="MODEL">MODEL</ion-option>\n\n        <ion-option value="YEAR">YEAR</ion-option>\n\n      </ion-select>\n\n\n\n      <ion-icon name="md-search" class="text-light icon"></ion-icon>\n\n    </ion-item>\n\n    <ion-searchbar\n\n      placeholder="Search Products"\n\n      [(ngModel)]="localSearchProduct"\n\n      \n\n    ></ion-searchbar>\n\n\n\n      \n\n\n\n  </div>  \n\n\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="chevron-down-circle-outline"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing Products."\n\n    >\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <div class="banner-text">\n\n        <p [innerHTML]="slide.description"></p>\n\n        <small [innerHTML]="slide.smalltext"></small>\n\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <p (click)="viewAllCategories()">\n\n    Featured Items\n\n    <small class="bg-thime btn-round text-white" float-right> View All </small>\n\n  </p>\n\n\n\n  <div class="card-main">\n\n    <ion-card>\n\n      <ion-card-header (click)="toggleAccordionVehicle()">\n\n        <ion-list>\n\n          <ion-item>\n\n            <button ion-button clear small icon-only item-right>\n\n              <ion-icon color="light" [name]="icon"></ion-icon>\n\n            </button>\n\n\n\n            <h6>SHOP BY VEHICLE</h6>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-header>\n\n      <ion-card-content #cc>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select\n\n                    placeholder="MAKE"\n\n                    value="sortpopular"\n\n                    okText="Ok"\n\n                    cancelText="Cancel"\n\n                    (ionChange)="makeDropDownValue(makeValue)"\n\n                    [(ngModel)]="makeValue">\n\n                    <ion-option *ngFor="let key of makeList" >{{key}}</ion-option>\n\n                   \n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select\n\n                    placeholder="MODEL"\n\n                    value="sortpopular"\n\n                    okText="Ok"\n\n                    cancelText="Cancel"\n\n                  >\n\n                    <ion-option value="sortpopular">popularity</ion-option>\n\n                    <ion-option value="sortaveragerating">rating</ion-option>\n\n                    <ion-option value="sortlatest">latest</ion-option>\n\n                    <ion-option value="sortpricelowhigh" style="max-width: 100%"\n\n                      >low to high</ion-option\n\n                    >\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center">\n\n                <ion-item>\n\n                  <ion-select\n\n                    placeholder="YEAR"\n\n                    value="sortpopular"\n\n                    okText="Ok"\n\n                    cancelText="Cancel"\n\n                  >\n\n                    <ion-option value="sortpopular">popularity</ion-option>\n\n                    <ion-option value="sortaveragerating">rating</ion-option>\n\n                    <ion-option value="sortlatest">latest</ion-option>\n\n                    <ion-option value="sortpricelowhigh" style="max-width: 100%"\n\n                      >low to high</ion-option\n\n                    >\n\n                  </ion-select>\n\n                </ion-item>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row\n\n            class="ion-justify-content-center"\n\n            style="2px 10px !important;"\n\n          >\n\n            <button ion-button full class="bg-thime btn-round btn-text">\n\n              Search \n\n            </button>\n\n          </ion-row>\n\n        </div>  \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n\n\n  <div class="card-main">\n\n    <ion-card>\n\n      <ion-card-header (click)="toggleAccordionCategory()">\n\n        <ion-list>\n\n          <ion-item>\n\n            <button ion-button clear small icon-only item-right>\n\n              <ion-icon color="light" [name]="icon"></ion-icon>\n\n            </button>\n\n\n\n            <h6>SHOP BY CATEGORY</h6>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-header>\n\n      <ion-card-content #cc1>\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row class="ion-justify-content-center">\n\n            <ion-col size="12" offset="4">\n\n              <div class="size" style="justify-content: center;background: white;">\n\n\n\n                <ion-grid class="product-grid" style="margin-top: 40px;">\n\n                  <ion-row class="rowgrid">\n\n                    <ion-col\n\n                      class="columngrid"\n\n                      *ngFor="let featuredProductCategories of featuredProductCategoryList"\n\n                      (click)="productcategoryDetailPage(featuredProductCategories.catId,featuredProductCategories.url)"\n\n                      style="box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);">\n\n              \n\n                     \n\n                      <ion-card >\n\n                        \n\n              \n\n                        <ion-card-header style="justify-content: left">\n\n                          <div \n\n                            class="img-box"\n\n                           \n\n                           >\n\n\n\n\n\n                            <img  [src]="featuredProductCategories.thumbnail"  style="width:200px;height:80px;margin-top: 13px">\n\n\n\n                         \n\n                              \n\n                          </div>\n\n                        </ion-card-header>\n\n                        <ion-card-content>\n\n                      \n\n                          <ion-item >\n\n                            <h5 style="font-size: 14px;text-align: -webkit-center;margin-top: 7px;">{{featuredProductCategories.name}}</h5> \n\n                          </ion-item>\n\n                          <div>\n\n                            <div *ngIf="featuredProductCategories.regular_price">     <!--If "product" exists-->\n\n                              <h5 style="font-size: 12px;text-align: center;"  > <span class="priceicon">Price : </span>  <span class="priceicon">$</span> {{featuredProductCategories.regular_price}} </h5>  \n\n                              \n\n                            </div>\n\n\n\n\n\n                             <!--If "product" not exists-->\n\n                        \n\n                            <div *ngIf="!featuredProductCategories.regular_price" style="text-align: -webkit-center;">    \n\n                              <!-- <span >☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span> -->\n\n                              <div class="rateing">\n\n                                <div class="card-btn">\n\n                                   <p class="" float-left>\n\n                                 \n\n                                    \n\n                                  </p> \n\n                                \n\n                                </div>\n\n                              </div>\n\n                            </div> \n\n                        </div>\n\n              \n\n                        \n\n              \n\n                         \n\n                        </ion-card-content>\n\n                      </ion-card>\n\n                    </ion-col>\n\n              \n\n                \n\n                  </ion-row>\n\n                </ion-grid>\n\n              \n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n     \n\n\n\n        <div class="select-section shadow-bottom">\n\n          <ion-row\n\n            class="ion-justify-content-center"\n\n           \n\n          >\n\n            <button ion-button full class="bg-thime btn-round btn-text">\n\n              Shop Now\n\n            </button>\n\n          </ion-row>\n\n        </div>  \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n  \n\n\n\n  \n\n  <div class="select-section shadow-bottom" *ngIf="hideMe">\n\n    <ion-row class="filter-bar">\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select  interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n          </ion-select>\n\n          </ion-item>  \n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n            </ion-select>\n\n          </ion-item>  \n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n            </ion-select>\n\n          </ion-item>  \n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div class="size">\n\n          <ion-item>\n\n            <ion-select interface="action-sheet">\n\n              <ion-option selected value="mute">Brakes</ion-option>\n\n              <ion-option value="enable">Suspensions</ion-option>\n\n            </ion-select>\n\n          </ion-item>  \n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n \n\n\n\n\n\n   <div *ngIf="featuredProductsList; else elseStatement" class="checkFeaturedProducts"> \n\n</div> \n\n<ng-template #elseStatement style="margin-top: 10px;"> \n\n    No Product Available\n\n</ng-template> \n\n\n\n<ng-container *ngIf="( featuredProductsList | filter : localSearchProduct) as result">\n\n\n\n  \n\n  \n\n  <p *ngIf="result.length === 0">No matching Result found</p>  \n\n</ng-container>\n\n\n\n  <ion-grid class="product-grid" style="margin-top: 40px;">\n\n    <ion-row class="rowgrid">\n\n      <ion-col\n\n        class="columngrid"\n\n        *ngFor="let featuredProducts of featuredProductsList | filter:localSearchProduct">\n\n\n\n       \n\n        <ion-card >\n\n          \n\n\n\n          <ion-card-header style="justify-content: left">\n\n            <div \n\n              class="img-box"\n\n              (click)="productDetailPage(featuredProducts.id,featuredProducts.name,featuredProducts.regular_price)">\n\n              <img  [src]="featuredProducts.image"  style="width:200px;height:80px ;">\n\n            </div>\n\n            <ion-icon    name="md-heart" class="text-light icon" (click)="addToWishList(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)"></ion-icon>\n\n         \n\n          \n\n\n\n           \n\n          </ion-card-header>\n\n          <ion-card-content>\n\n\n\n           \n\n        \n\n            <ion-item >\n\n              <h5 style="font-size: 11px;text-align: -webkit-center;">{{featuredProducts.name}}</h5> \n\n            </ion-item>\n\n            <div>\n\n              <div *ngIf="featuredProducts.regular_price">     <!--If "product" exists-->\n\n                <h5 style="font-size: 12px;text-align: center;color: red;"  > <span class="priceicon" style="color: red;">Price : </span> <span class="priceicon">$</span> {{featuredProducts.regular_price}}  </h5>  \n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p class="" float-left>\n\n                      <button\n\n                        ion-button\n\n                        full\n\n                        class="bg-thime btn-round btn-text"\n\n                        style="margin-top: 3px; width: 150px;text-align: center;"\n\n                        \n\n                        (click)="addToCart(featuredProducts.id,featuredProducts.name,featuredProducts.image,featuredProducts.description,featuredProducts.regular_price)"\n\n\n\n                      >\n\n                        Add To Cart\n\n                      </button>\n\n                    </p>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n\n\n          \n\n          \n\n              <div *ngIf="!featuredProducts.regular_price">     <!--If "product" not exists-->\n\n                <h5 style="font-size: 12px;text-align: center"> Price Not Available</h5>  \n\n\n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p class="" float-left>\n\n                      <button\n\n                        ion-button\n\n                        full\n\n                        class="bg-thime btn-round btn-text"\n\n                        style="margin-top: 3px; width: 150px;text-align: center;"\n\n                        (click)="readMoreLocal(featuredProducts.id,featuredProducts.name,featuredProducts.regular_price)"\n\n                      >\n\n                        Read More\n\n                      </button>\n\n                    </p>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n          </div>\n\n\n\n          \n\n\n\n            \n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n  \n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  \n\n     \n\n \n\n\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\viewallcategories\viewallcategories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__angular_core__["X" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_7__angular_core__["X" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* App */]])
], ViewallcategoriesPage);

//# sourceMappingURL=viewallcategories.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(419);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_viewall_viewall__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_testcart_testcart__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_paymentpage_paymentpage__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_test1_test1__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_testing_testing__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_product_category_detail_grid_product_category_detail_grid__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_testingproducts_testingproducts__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_myaccountupdated_myaccountupdated__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_accordiantesting_accordiantesting__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_accordiantest_accordiantest__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_viewallcategories_viewallcategories__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_categoryupdated_categoryupdated__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_termsandconditions_termsandconditions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_privacypolicy_privacypolicy__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_productcategorydetail_productcategorydetail__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home1_home1__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_productcategory_productcategory__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_vieworderdetails_vieworderdetails__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_vieworder_vieworder__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_demo_demo__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_component__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_phonenumber_phonenumber__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_password_password__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_verification_verification__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_createaccount_createaccount__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_category_category__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_shirts_shirts__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_itemdetail_itemdetail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_shippining_shippining__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_payment_payment__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_placed_placed__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_wishlist_wishlist__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_my_account_my_account__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_myorder_1_myorder_1__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_myorder_2_myorder_2__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_help_help__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_review_review__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_short_short__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_search_search__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_globalization__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ngx_translate_core__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ngx_translate_http_loader__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__app_config__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_ng2_search_filter__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_storage__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_in_app_browser_ngx__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__angular_router__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_searchproducts_searchproducts__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_productcategorydetaillist_productcategorydetaillist__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_readmore_readmore__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_ngx_pagination__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_appconstants_appconstants__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_categorydetail_categorydetail__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_searchdetails_searchdetails__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_searchproductsupdated_searchproductsupdated__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_searchdata_searchdata__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_itemdetaillistpage1_itemdetaillistpage1__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_makeresponse_makeresponse__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_cls_cls__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_address_address__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_52__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
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
            __WEBPACK_IMPORTED_MODULE_11__components_accordiantesting_accordiantesting__["a" /* AccordiantestingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_myaccountupdated_myaccountupdated__["a" /* MyaccountupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_testingproducts_testingproducts__["a" /* TestingproductsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_product_category_detail_grid_product_category_detail_grid__["a" /* ProductCategoryDetailGridPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_testing_testing__["a" /* TestingPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_test1_test1__["a" /* Test1Page */],
            __WEBPACK_IMPORTED_MODULE_2__pages_paymentpage_paymentpage__["a" /* PaymentpagePage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_testcart_testcart__["a" /* TestcartPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_viewall_viewall__["a" /* ViewallPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_searchproducts_searchproducts__["a" /* SearchproductsPage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_productcategorydetaillist_productcategorydetaillist__["a" /* ProductcategorydetaillistPage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_readmore_readmore__["a" /* ReadmorePage */],
            __WEBPACK_IMPORTED_MODULE_63__pages_appconstants_appconstants__["a" /* AppconstantsPage */],
            __WEBPACK_IMPORTED_MODULE_64__pages_categorydetail_categorydetail__["a" /* CategorydetailPage */],
            __WEBPACK_IMPORTED_MODULE_65__pages_searchdetails_searchdetails__["a" /* SearchdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_66__pages_searchproductsupdated_searchproductsupdated__["a" /* SearchproductsupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_67__pages_searchdata_searchdata__["a" /* SearchdataPage */],
            __WEBPACK_IMPORTED_MODULE_68__pages_itemdetaillistpage1_itemdetaillistpage1__["a" /* Itemdetaillistpage1Page */],
            __WEBPACK_IMPORTED_MODULE_69__pages_makeresponse_makeresponse__["a" /* MakeresponsePage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_cls_cls__["a" /* ClsPage */],
            __WEBPACK_IMPORTED_MODULE_71__pages_address_address__["a" /* AddressPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_56__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_58__angular_router__["a" /* RouterModule */].forRoot([]),
            __WEBPACK_IMPORTED_MODULE_55_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_62_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_50__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_27_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/accordiantest/accordiantest.module#AccordiantestPageModule', name: 'AccordiantestPage', segment: 'accordiantest', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/categoryupdated/categoryupdated.module#CategoryupdatedPageModule', name: 'CategoryupdatedPage', segment: 'categoryupdated', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/appconstants/appconstants.module#AppconstantsPageModule', name: 'AppconstantsPage', segment: 'appconstants', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/categorydetail/categorydetail.module#CategorydetailPageModule', name: 'CategorydetailPage', segment: 'categorydetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/demo/demo.module#DemoPageModule', name: 'DemoPage', segment: 'demo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cls/cls.module#ClsPageModule', name: 'ClsPage', segment: 'cls', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home1/home1.module#Home1PageModule', name: 'Home1Page', segment: 'home1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/itemdetaillistpage1/itemdetaillistpage1.module#Itemdetaillistpage1PageModule', name: 'Itemdetaillistpage1Page', segment: 'itemdetaillistpage1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/makeresponse/makeresponse.module#MakeresponsePageModule', name: 'MakeresponsePage', segment: 'makeresponse', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/myaccountupdated/myaccountupdated.module#MyaccountupdatedPageModule', name: 'MyaccountupdatedPage', segment: 'myaccountupdated', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product-category-detail-grid/product-category-detail-grid.module#ProductCategoryDetailGridPageModule', name: 'ProductCategoryDetailGridPage', segment: 'product-category-detail-grid', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productcategory/productcategory.module#ProductcategoryPageModule', name: 'ProductcategoryPage', segment: 'productcategory', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/paymentpage/paymentpage.module#PaymentpagePageModule', name: 'PaymentpagePage', segment: 'paymentpage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/privacypolicy/privacypolicy.module#PrivacypolicyPageModule', name: 'PrivacypolicyPage', segment: 'privacypolicy', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productcategorydetaillist/productcategorydetaillist.module#ProductcategorydetaillistPageModule', name: 'ProductcategorydetaillistPage', segment: 'productcategorydetaillist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productcategorydetail/productcategorydetail.module#ProductcategorydetailPageModule', name: 'ProductcategorydetailPage', segment: 'productcategorydetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/readmore/readmore.module#ReadmorePageModule', name: 'ReadmorePage', segment: 'readmore', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/searchdata/searchdata.module#SearchdataPageModule', name: 'SearchdataPage', segment: 'searchdata', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/searchdetails/searchdetails.module#SearchdetailsPageModule', name: 'SearchdetailsPage', segment: 'searchdetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/searchproductsupdated/searchproductsupdated.module#SearchproductsupdatedPageModule', name: 'SearchproductsupdatedPage', segment: 'searchproductsupdated', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/searchproducts/searchproducts.module#SearchproductsPageModule', name: 'SearchproductsPage', segment: 'searchproducts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termsandconditions/termsandconditions.module#TermsandconditionsPageModule', name: 'TermsandconditionsPage', segment: 'termsandconditions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/testingproducts/testingproducts.module#TestingproductsPageModule', name: 'TestingproductsPage', segment: 'testingproducts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/test1/test1.module#Test1PageModule', name: 'Test1Page', segment: 'test1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/testing/testing.module#TestingPageModule', name: 'TestingPage', segment: 'testing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewallcategoriesupdated/viewallcategoriesupdated.module#ViewallcategoriesupdatedPageModule', name: 'ViewallcategoriesupdatedPage', segment: 'viewallcategoriesupdated', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/testcart/testcart.module#TestcartPageModule', name: 'TestcartPage', segment: 'testcart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewall/viewall.module#ViewallPageModule', name: 'ViewallPage', segment: 'viewall', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/vieworder/vieworder.module#VieworderPageModule', name: 'VieworderPage', segment: 'vieworder', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewallcategories/viewallcategories.module#ViewallcategoriesPageModule', name: 'ViewallcategoriesPage', segment: 'viewallcategories', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewcart/viewcart.module#ViewcartPageModule', name: 'ViewcartPage', segment: 'viewcart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/wishlistupdated/wishlistupdated.module#WishlistupdatedPageModule', name: 'WishlistupdatedPage', segment: 'wishlistupdated', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_51__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_51__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: createTranslateLoader,
                    deps: [__WEBPACK_IMPORTED_MODULE_50__angular_common_http__["a" /* HttpClient */]]
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
            __WEBPACK_IMPORTED_MODULE_11__components_accordiantesting_accordiantesting__["a" /* AccordiantestingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_myaccountupdated_myaccountupdated__["a" /* MyaccountupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_testingproducts_testingproducts__["a" /* TestingproductsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_product_category_detail_grid_product_category_detail_grid__["a" /* ProductCategoryDetailGridPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_testing_testing__["a" /* TestingPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_test1_test1__["a" /* Test1Page */],
            __WEBPACK_IMPORTED_MODULE_2__pages_paymentpage_paymentpage__["a" /* PaymentpagePage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_testcart_testcart__["a" /* TestcartPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_viewall_viewall__["a" /* ViewallPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_searchproducts_searchproducts__["a" /* SearchproductsPage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_productcategorydetaillist_productcategorydetaillist__["a" /* ProductcategorydetaillistPage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_readmore_readmore__["a" /* ReadmorePage */],
            __WEBPACK_IMPORTED_MODULE_63__pages_appconstants_appconstants__["a" /* AppconstantsPage */],
            __WEBPACK_IMPORTED_MODULE_64__pages_categorydetail_categorydetail__["a" /* CategorydetailPage */],
            __WEBPACK_IMPORTED_MODULE_65__pages_searchdetails_searchdetails__["a" /* SearchdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_66__pages_searchproductsupdated_searchproductsupdated__["a" /* SearchproductsupdatedPage */],
            __WEBPACK_IMPORTED_MODULE_67__pages_searchdata_searchdata__["a" /* SearchdataPage */],
            __WEBPACK_IMPORTED_MODULE_68__pages_itemdetaillistpage1_itemdetaillistpage1__["a" /* Itemdetaillistpage1Page */],
            __WEBPACK_IMPORTED_MODULE_69__pages_makeresponse_makeresponse__["a" /* MakeresponsePage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_cls_cls__["a" /* ClsPage */],
            __WEBPACK_IMPORTED_MODULE_71__pages_address_address__["a" /* AddressPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_57__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_49__ionic_native_globalization__["a" /* Globalization */],
            { provide: __WEBPACK_IMPORTED_MODULE_53__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_53__app_config__["b" /* BaseAppConfig */] },
            { provide: __WEBPACK_IMPORTED_MODULE_26__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_27_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_54__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_27_ionic_angular__["c" /* Badge */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductcategorydetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productcategory_productcategory__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__productcategorydetaillist_productcategorydetaillist__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__readmore_readmore__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__capacitor_core__ = __webpack_require__(22);
/**
 * Generated class for the ProductcategorydetailPage page.
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










let ProductcategorydetailPage = class ProductcategorydetailPage {
    constructor(navCtrl, navParams, modalCtrl, httpClient, loadingController, platform, app, toastController, apiProvider, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.platform = platform;
        this.app = app;
        this.toastController = toastController;
        this.apiProvider = apiProvider;
        this.alertController = alertController;
        this.productCategoryInformation = [];
        this.viewCartList = [];
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.countProductsWishList = 0;
        this.selected_value = "";
        this.strId = navParams.get("catId");
        this.dynamicTermId = this.strId;
        // console.log('Received productsList id ' + this.strId);
    }
    monthfilter() {
        console.log(this.filtermonthwise);
        if (this.filtermonthwise = 'Name') {
            this.showToastOnSortingCategory();
            this.productCategoryInformation.sort((a, b) => (a.name > b.name ? 1 : -1));
            console.log("Sorted by name:   " + this.filtermonthwise);
        }
        else if (this.filtermonthwise = 'Price Low to High') {
            this.showToastOnSortingCategory();
            this.productCategoryInformation.sort((a, b) => (a.regular_price > b.regular_price ? 1 : -1));
            console.log("Sorted by price Low to High:   " + this.filtermonthwise);
        }
        else if (this.filtermonthwise = 'Price High to Low') {
            this.showToastOnSortingCategory();
            this.productCategoryInformation.sort((a, b) => (a.regular_price < b.regular_price ? 1 : -1));
            console.log("Sorted by price High to Low:   " + this.filtermonthwise);
        }
    }
    cartPage() {
        // let modal = this.modalCtrl.create(CartPage);
        // modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    doRefresh(event) {
        console.log("Begin async operation");
        this.callProductCategoryDetail();
        setTimeout(() => {
            console.log("Async operation has ended");
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
    addToWishList(id, name, image, description, regular_price, x) {
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
        });
        localStorage.setItem("productsWishlist", JSON.stringify(productsWishlist));
        this.buttonIcon = "home";
        this.showToastOnAddProductWishlist(name);
        this.countProductsWishlistLocalUpdated++;
        if (typeof Storage !== "undefined") {
            // Code for localStorage/sessionStorage.
            console.log("Code for localStorage/sessionStorage.");
        }
        else {
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
    //   addToCart(id,strProductAdded) {
    //     this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
    //       this.obj = JSON.stringify(jsonResponse);
    //       console.log("Sent productsList response " + this.obj);
    //       console.log("Sent productsList id " + id);
    //       this.showToastOnAddProductSingle(strProductAdded);
    //       this.countProductsCartLocalUpdated++;
    //     });
    // }
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
        }
        else {
            this.httpClient
                .get("http://busybanda.com/sterling-tools/api/set_cart_items?" +
                "user_id=" +
                localStorage.getItem("Userid value") +
                "&product_id=" +
                id)
                .subscribe((jsonResponse) => {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__readmore_readmore__["a" /* ReadmorePage */], {
            id: id,
        });
        console.log("Read More Sent product id " + id);
    }
    productDetailPage(id, name, image, regular_price, description, make, model, year) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__productcategorydetaillist_productcategorydetaillist__["a" /* ProductcategorydetaillistPage */], {
            id: id,
            name: name,
            image: image,
            regular_price: regular_price,
            description: description,
            make: make,
            model: model,
            year: year,
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
            if (activeView.name === "ProductcategorydetailPage") {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__productcategory_productcategory__["a" /* ProductcategoryPage */]);
                    console.log("test");
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__productcategory_productcategory__["a" /* ProductcategoryPage */]);
                    console.log("test!!!");
                }
            }
        });
        // this.showLoadingControllerLaunch();
        this.callProductCategoryDetail();
        /*
              Local Wishlist
          */
        if (this.countProductsWishlistLocalUpdated === 0) {
            this.countProductsWishlistLocalUpdated = "";
            console.log("Entered");
        }
        if (this.countProductsCartLocalUpdated === 0) {
            this.countProductsCartLocalUpdated = "";
            console.log("Entered..");
        }
        var productsWishlistarrayFromStorage = JSON.parse(localStorage.getItem("productsWishlist"));
        if (productsWishlistarrayFromStorage != null &&
            productsWishlistarrayFromStorage.length > 0) {
            var arrayLength = productsWishlistarrayFromStorage.length;
            this.countProductsWishList = arrayLength;
            this.countProductsWishlistLocalUpdated = this.countProductsWishList;
            console.log("Local Wishlist filled " + this.countProductsWishlistLocalUpdated);
        }
        else {
            console.log("Local Wishlist empty ");
        }
        /*
             Local Cart
         */
        var productsCartarrayFromStorage = JSON.parse(localStorage.getItem("products"));
        if (productsCartarrayFromStorage != null &&
            productsCartarrayFromStorage.length > 0) {
            var arrayLength1 = productsCartarrayFromStorage.length;
            this.countProductsCart = arrayLength1;
            this.countProductsCartLocalUpdated = this.countProductsCart;
            console.log("Local Cart filled " + this.countProductsCartLocalUpdated);
        }
        else {
            console.log("Local Cart empty ");
        }
    }
    callProductCategoryDetail() {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                content: "Please wait loading products detail!",
            });
            yield loader.present();
            loader.present().then(() => {
                this.httpClient
                    .get("http://busybanda.com/sterling-tools/api/get_category_by_id?" +
                    "id=" +
                    this.dynamicTermId)
                    .subscribe((jsonResponse) => {
                    this.productCategoryInformation = jsonResponse["result"];
                    this.obj = JSON.stringify(jsonResponse);
                    console.log("Particular product details json " + this.obj.result);
                    if (this.productCategoryInformation &&
                        this.productCategoryInformation.length) {
                        console.log("Particular product details available ");
                        loader.dismiss();
                    }
                    else {
                        this.strData = "No data available";
                        console.log("Particular product empty " + jsonResponse["result"]);
                        loader.dismiss();
                    }
                    for (const entry of this.productCategoryInformation) {
                        this.strProductCategoryName = "Name: " + entry.name;
                        this.strProductMake = entry.attribute.pa_make;
                        console.log(entry.attribute.pa_make);
                    }
                    for (const entry of this.productCategoryInformation) {
                        console.log(entry.name); // val1 and etc...
                    }
                });
            });
        });
    }
    showToastOnProductError(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: "Error" + strProductAdded,
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: "Please wait!",
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
            message: "In Process",
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
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log("All Json Response" + this.obj);
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
                        if (this.viewCartList) {
                            this.countProductsCartLocalUpdated = this.viewCartList.length;
                        }
                        else {
                            this.countProductsCartLocalUpdated = this.countProductsCart;
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
        });
    }
    select_dropdown_value() {
        console.log("selector: ", this.selected_value);
    }
    sortDropDownValue() {
        console.log("Selected sortDropDownValue");
        this.showToastOnSortingCategory();
        this.productCategoryInformation.sort((a, b) => (a.name > b.name ? 1 : -1));
        console.log("Sorted:   " + this.productCategoryInformation);
        var points = [5.0, 3.7, 1.0, 2.9, 3.4, 4.5];
        var output = [];
        for (let i = 0; i < points.length; i++) {
            points.sort(function (a, b) {
                return b - a;
            });
            output += points[i] + "<br>";
        }
        console.log(output);
    }
    showToastOnSortingCategory() {
        let loading = this.loadingController.create({
            content: "Please wait...",
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 700);
    }
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_9__capacitor_core__["a" /* Plugins */];
            this.networkListener = Network.addListener("networkStatusChange", (status) => {
                console.log("Network status HomePage here", status);
                this.networkStatus = status;
            });
            if ((yield Network.getStatus()).connectionType === "none") {
                this.showNetworkAlert();
                console.log("Network status not available", this.networkStatus);
            }
            else {
                this.networkStatus = yield Network.getStatus();
                // this.showAlert();
                console.log("Network status available", this.networkStatus);
                //this.router.navigate(['/invoices']);
                // this.router.navigate(['/managecard']);
            }
        });
    }
    showNetworkAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert = yield this.alertController.create({
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
        });
    }
    showToastOnAddProductLocal(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: "Product Added in Local Cart : \n " +
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
            // message: this.testStr,
            message: "Product Added in Server : \n " +
                strProductAdded +
                "\n" +
                "\nProduct Quantity:  1",
            duration: 1000,
            position: "bottom",
        });
        toast.present();
    }
};
ProductcategorydetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: "page-productcategorydetail",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\productcategorydetail\productcategorydetail.html"*/'<!--\n\n  Generated template for the ClsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png" />\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>Detail\n\n      <span float-right>\n\n        <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n\n\n        <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon>\n\n      </span>\n\n\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n\n\n  <!-- <div *ngIf="isValid;else other_content">\n\n    content here ...\n\n  </div> -->\n\n\n\n\n\n  <div *ngIf="!productCategoryInformation || productCategoryInformation.length === 0;else other_content">\n\n    <p>No data found</p>\n\n  </div>\n\n\n\n<ng-template #other_content>\n\n  <ion-item>\n\n    <ion-label>SORT BY </ion-label>\n\n    <ion-select placeholder="Please select" value="Name" okText="Okay" cancelText="Dismiss" [(ngModel)]="filtermonthwise"\n\n       style="width: 200px;padding: 0px 10px;" (ionChange)="monthfilter(filtermonthwise);">\n\n      <ion-option value="Name" >Name</ion-option>\n\n      <ion-option value="Price Low to High"  >Price Low to High</ion-option>\n\n      <ion-option value="Price High to Low"  >Price High to Low</ion-option>\n\n    </ion-select>\n\n\n\n    <!-- (ionChange)="sortDropDownValue(productCategoryInformation)" -->\n\n  </ion-item>\n\n \n\n  <ion-grid class="product-grid">\n\n    <ion-row class="rowgrid" text-center>\n\n      <ion-col col-6 class="columngrid" *ngFor="let categoryItem of productCategoryInformation |filter:searchText | paginate: {itemsPerPage: 10,currentPage: p}">\n\n        <ion-card>\n\n          <ion-card-header style="justify-content: left">\n\n            <div class="img-box">\n\n              <img [src]="categoryItem.image" style="width:200px;height:80px ;margin-top: 30px;"\n\n                (click)="productDetailPage(categoryItem.id,categoryItem.name,categoryItem.image,categoryItem.regular_price,categoryItem.description,categoryItem.attribute.pa_make,categoryItem.attribute.pa_model,categoryItem.attribute.pa_year)">\n\n            </div>\n\n            <ion-icon name="md-heart" class="text-light icon" style="margin-top: -11px;"\n\n            (click)="addToWishList(categoryItem.id,categoryItem.name,categoryItem.image,categoryItem.description,categoryItem.regular_price)">\n\n          </ion-icon>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n\n\n            <div>\n\n              <!-- <h5 style="font-size: 10px;\n\n              text-align: -webkit-center;\n\n              margin-top: 6px;\n\n              width: max-content;"> {{categoryItem.name}}\n\n              </h5> -->\n\n              <h5 style="font-size: 10px;text-align: center;;margin-top: 15px;"> {{categoryItem.name}}</h5>\n\n            </div>\n\n            <div>\n\n\n\n\n\n              <div *ngIf="categoryItem.regular_price">\n\n                <!--If "product" exists-->\n\n                <h5 style="font-size: 10px;text-align: center;color: red;margin-top: 13px;"> <span class="priceicon"\n\n                    style="color: red;">Price : </span> <span class="priceicon">$</span>\n\n                  {{categoryItem.regular_price}} </h5>\n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p style="width: 100%;font-size: 10px;" float-left>\n\n                      <button ion-button full class="bg-thime btn-round btn-text" \n\n                       style="font-size: 9px;"\n\n                        (click)="addToCart(categoryItem.id,categoryItem.name,categoryItem.image,categoryItem.description,categoryItem.regular_price)">\n\n                        Add To Cart\n\n                      </button>\n\n                    </p>\n\n                  </div> \n\n                </div>\n\n              </div>\n\n\n\n              <div *ngIf="!categoryItem.regular_price">\n\n                <!--If "product" not exists-->\n\n                <h5 style="font-size: 10px;text-align: center;color: red;margin-top: 13px;"> Price Not Available</h5>\n\n                <div class="rateing">\n\n                  <div class="card-btn">\n\n                    <p style="width: 100%;font-size: 10px;" float-left>\n\n                      <button ion-button full class="bg-thime btn-round btn-text" \n\n                      style="font-size: 9px;"\n\n                        (click)="productDetailPage(categoryItem.id,categoryItem.name,categoryItem.image,categoryItem.regular_price,categoryItem.description,categoryItem.attribute.pa_make,categoryItem.attribute.pa_model,categoryItem.attribute.pa_year)">\n\n                        Read More\n\n                      </button>\n\n                    </p>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <pagination-controls (pageChange)="p = $event" previousLabel="Prev" nextLabel="Next"></pagination-controls>\n\n\n\n</ng-template>\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\productcategorydetail\productcategorydetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]])
], ProductcategorydetailPage);

//# sourceMappingURL=productcategorydetail.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__capacitor_core__ = __webpack_require__(22);
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
    constructor(navCtrl, modalCtrl, navParams, httpClient, loadingController, toastController, apiProvider, toastCtrl, app, platform, alertController) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.apiProvider = apiProvider;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.platform = platform;
        this.alertController = alertController;
        this.strProductName1 = [];
        this.productsListInformation = [];
        this.productsListInformation1 = [];
        this.taxonomy_product_make = [];
        this.taxonomy_product_brands = [];
        this.taxonomy_product_model = [];
        this.taxonomy_product_tag = [];
        this.taxonomy_product_cat = [];
        this.strQuantityValue = "";
        this.currentNumber = 1;
        this.productCount = 1;
        this.strQuantityValue1 = "";
        this.viewCartList = [];
        this.picToView = "/assets/imgs/ic_my_cart.png";
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.countProductsWishList = 0;
        this.strId = navParams.get("id");
        this.strProductUrl = "Product Url " + navParams.get("url");
        this.dynamicId = this.strId;
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
        var productsWishlistarrayFromStorage = JSON.parse(localStorage.getItem("productsWishlist"));
        if (productsWishlistarrayFromStorage != null &&
            productsWishlistarrayFromStorage.length > 0) {
            var arrayLength = productsWishlistarrayFromStorage.length;
            this.countProductsWishList = arrayLength;
            this.countProductsWishlistLocalUpdated = this.countProductsWishList;
            console.log("Local Wishlist filled " + this.countProductsWishlistLocalUpdated);
        }
        else {
            console.log("Local Wishlist empty ");
        }
        /*
             Local Cart
         */
        var productsCartarrayFromStorage = JSON.parse(localStorage.getItem("products"));
        if (productsCartarrayFromStorage != null &&
            productsCartarrayFromStorage.length > 0) {
            var arrayLength1 = productsCartarrayFromStorage.length;
            this.countProductsCart = arrayLength1;
            this.countProductsCartLocalUpdated = this.countProductsCart;
            console.log("Local Cart filled " + this.countProductsCartLocalUpdated);
        }
        else {
            console.log("Local Cart empty ");
        }
        this.checkNetwork();
        this.viewCartApi();
        this.showLoadingControllerLaunch();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === "ItemdetailPage") {
                if (nav.canGoBack()) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                }
                else {
                }
            }
        });
        if (this.strQuantityValue1) {
            //deal with value'
            console.log("available ");
        }
        else {
            console.log("not available ");
        }
        this.httpClient
            .get("http://busybanda.com/sterling-tools/api/get_products_by_id?" +
            "id=" +
            this.dynamicId)
            .subscribe((jsonResponse) => {
            this.productsListInformation = jsonResponse["result"];
            this.productsListInformation1 = jsonResponse["result"].attribute;
            this.obj = JSON.stringify(jsonResponse);
            if (this.productsListInformation &&
                this.productsListInformation.length) {
                console.log("Particular product details available ");
            }
            else {
                console.log("Particular product empty " + this.obj);
            }
            for (const entry of this.productsListInformation) {
                this.strProductName = "Product Name: " + entry.name;
                this.strProductRegularPrice = "" + entry.regular_price;
                this.strProductRegularPriceRevised =
                    "Product Regular Price: " +
                        this.strProductRegularPrice.replace("Product Regular Price:", "" + "$");
                this.strImage = entry.image;
                console.log("Image Path " + entry.image);
                if (this.strProductMake) {
                    this.strProductMake = "Make Empty: ";
                }
                else {
                    this.strProductMake = "Make: " + entry.attribute.pa_make;
                }
                if (this.strProductModel) {
                    this.strProductModel = "Model Empty: ";
                }
                else {
                    this.strProductModel = "Model: " + entry.attribute.pa_model;
                }
                if (this.strProductSubModel) {
                    this.strProductSubModel = "Sub Model Empty: ";
                }
                else {
                    this.strProductSubModel =
                        "SubModel: " + entry.attribute.pa_sub_model;
                }
                if (entry.attribute.pa_year_end === "") {
                    this.strProductYearEnd = "Year End Empty ";
                }
                else {
                    this.strProductYearEnd = "Year End: " + entry.attribute.pa_year_end;
                }
                if (entry.attribute.pa_year_end === "") {
                    this.strProductYearStart = "Year Start Empty ";
                }
                else {
                    this.strProductYearStart =
                        "Year Start: " + entry.attribute.pa_year_start;
                }
                // if(this.strProductSalePrice){
                //   this.strProductSalePrice = 'Product Sale Price: ' + entry.sale_price;
                // }
                // else {
                //   this.strProductSalePrice = 'No Product Sale Price Specified';
                // }
                if (entry.sale_price === "") {
                    this.strProductSalePrice = "No Sale Price  ";
                }
                else {
                    this.strProductSalePrice = "Sale Price " + entry.sale_price;
                }
                if (entry.regular_price === "") {
                    this.strProductRegularPrice = "No Regular Price  ";
                }
                else {
                    this.strProductRegularPrice =
                        "Regular Price: " + entry.regular_price;
                }
                if (entry.description === "") {
                    this.strProductDescription = "No Product Description:  ";
                }
                else {
                    this.strProductDescription =
                        "Product Description: " + entry.description;
                }
                if (entry.description === "") {
                    this.strProductDescription = "No Product Description:  ";
                }
                else {
                    this.strProductDescription =
                        "Product Description: " + entry.description;
                }
                if (entry.stock === null) {
                    this.strStock = "No Product Stock  ";
                }
                else {
                    this.strStock = "Product strStock: " + entry.stock;
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
                console.log("Status response: " + attribute.pa_make); // 100, 200, 300
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
        console.log("Sent productsList id " + id);
        console.log("Sent productsList title " + title);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
    }
    incrementValue() {
        this.currentNumber++;
    }
    decrementValue() {
        if (this.currentNumber <= 1) {
            console.log("Issue in cart ");
            this.showToastOnCart();
        }
        else {
            console.log("success in cart ");
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
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log("All Json Response" + this.obj);
                        this.strData = "No Products in Cart";
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
                        }
                        else {
                            this.countProductsCartLocalUpdated = this.countProductsCart;
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
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
        }
        else {
            this.httpClient
                .get("http://busybanda.com/sterling-tools/api/set_cart_items?" +
                "user_id=" +
                localStorage.getItem("Userid value") +
                "&product_id=" +
                id +
                "&quantity=" +
                this.currentNumber)
                .subscribe((jsonResponse) => {
                this.obj = JSON.stringify(jsonResponse);
                console.log("Sent productsList response " + this.obj);
                console.log("Sent productsList id " + id);
                this.showToastOnAddProductServer(name);
                // this.countProductsCart++;
                this.countProductsCartLocalUpdated++;
            });
        }
    }
    addToWishList(id, name, image, description, regular_price, x) {
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
        });
        localStorage.setItem("productsWishlist", JSON.stringify(productsWishlist));
        this.buttonIcon = "home";
        this.showToastOnAddProductWishlist(name);
        this.countProductsWishlistLocalUpdated++;
        if (typeof Storage !== "undefined") {
            // Code for localStorage/sessionStorage.
            console.log("Code for localStorage/sessionStorage.");
        }
        else {
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
    showToastOnAddProductLocal(strProductAdded) {
        const toast = this.toastController.create({
            // message: this.testStr,
            message: "Product Added in Local Cart : \n " +
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
            // message: this.testStr,
            message: "Product Added in Server : \n " +
                strProductAdded +
                "\n" +
                "\nProduct Quantity:  1",
            duration: 1000,
            position: "bottom",
        });
        toast.present();
    }
    showLoadingControllerCart() {
        let loading = this.loadingController.create({
            content: "Please wait!",
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 500);
    }
    showToastOnCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Minimum product quantity cannot be less than 1 ",
                duration: 400,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnAddingCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Product added in cart " +
                    this.strProductName +
                    " " +
                    "with Quantity" +
                    this.currentNumber,
                duration: 1300,
                position: "bottom",
            });
            toast.present();
        });
    }
    showToastOnAddingEmptyCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Please add quantity of product",
                duration: 300,
                position: "bottom",
            });
            toast.present();
        });
    }
    showLoadingControllerLaunch() {
        let loading = this.loadingController.create({
            content: "Please wait loading product details!",
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 600);
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
            message: "Product Added in Cart : \n " +
                strProductAdded +
                "\n" +
                "\nProduct Quantity:  1",
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_7__capacitor_core__["a" /* Plugins */];
            this.networkListener = Network.addListener("networkStatusChange", (status) => {
                console.log("Network status HomePage here", status);
                this.networkStatus = status;
            });
            if ((yield Network.getStatus()).connectionType === "none") {
                this.showNetworkAlert();
                console.log("Network status not available", this.networkStatus);
            }
            else {
                this.networkStatus = yield Network.getStatus();
                // this.showAlert();
                console.log("Network status available", this.networkStatus);
                //this.router.navigate(['/invoices']);
                // this.router.navigate(['/managecard']);
            }
        });
    }
    showNetworkAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            // omitted;
            const alert = yield this.alertController.create({
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
        });
    }
};
ItemdetailPage = ItemdetailPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: "page-itemdetail ",template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\itemdetail\itemdetail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle style="display: block !important">\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png" />\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title\n\n      >Product Detail\n\n\n\n      <!-- <span float-right>\n\n        <ion-icon name="cart" style="margin-left: 12px;">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n        \n\n        <ion-icon name="cart" style="margin-left: 12px;">\n\n          <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n        </ion-icon> \n\n     \n\n      </span> -->\n\n\n\n      <span float-right>\n\n        <ion-icon\n\n          class="icon-add"\n\n          name="heart"\n\n          style="margin-left: 12px"\n\n          (click)="wishlistPage()"\n\n        >\n\n          <ion-badge id="notifications-badge" color="primary"\n\n            >{{countProductsWishlistLocalUpdated}}</ion-badge\n\n          >\n\n        </ion-icon>\n\n\n\n        <ion-icon\n\n          class="icon-add"\n\n          name="cart"\n\n          style="margin-left: 12px"\n\n          (click)="cartPage()"\n\n        >\n\n          <ion-badge id="notifications-badge" color="primary"\n\n            >{{countProductsCartLocalUpdated}}</ion-badge\n\n          >\n\n        </ion-icon>\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!--<select size & color>-->\n\n<ion-content class="bg-light">\n\n  <div class="img-section shadow-bottom" text-center>\n\n    <!-- <img  [src]="strImage"  style="width:50px;height:50px;margin-top: 8px;"> -->\n\n\n\n    <!-- <ion-icon   name="md-heart" class="text-light icon" style="width:50px;height:50px;margin-top: 8px;" (click)="addToWishList(strId,strProductName,strImage,strProductDescription,strProductRegularPrice)"></ion-icon> -->\n\n\n\n    <img\n\n      [src]="strImage"\n\n      style="width: 200px; height: 150px; margin-top: 8px"\n\n      class="zoom"\n\n    />\n\n\n\n    <!-- <div class="tab-btn-box">\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;"  >\n\n        \n\n      </div>\n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div> \n\n      <div class="tab-btn">\n\n        <img  [src]="strImage"  style="width:150px;height:40px;">\n\n      </div>\n\n    </div> -->\n\n    <div class="d-flex" style="align-items: start">\n\n      <!-- <span>Unique For Men Black Formal Slim Fit Shirt by Mark Tayler</span> -->\n\n      <span>{{strName}}</span>\n\n      <span class="icon">\n\n        <ion-icon name="md-remove" (click)="decrementValue()"></ion-icon\n\n      ></span>\n\n      <span\n\n        class="text-sky small-text"\n\n        style="text-align: center; margin-left: 20%"\n\n      >\n\n        {{currentNumber}}</span\n\n      >\n\n      <span class="icon" style="margin-left: 20%"\n\n        ><ion-icon name="md-add" (click)="incrementValue()"></ion-icon\n\n      ></span>\n\n    </div>\n\n    <div class="card-btn">\n\n      <div class="d-flex" style="padding: 1rem">\n\n        <div class="review-box">\n\n          <!-- <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-add" (click)="decrementValue()"></ion-icon></small> -->\n\n          <span\n\n            class="text-sky small-text"\n\n            style="color: black; font-size: 14px"\n\n            >Product Quantity</span\n\n          >\n\n        </div>\n\n        <!-- <div class="price-box">\n\n                    <div class="price text-light" style="margin-right: 1rem;">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                    </div>\n\n                    <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                    </div>\n\n                </div> -->\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="features bg-white shadow-bottom" padding>\n\n    <h6 class="heading">Key Features</h6>\n\n    <p><span class="circle"></span>{{strProductName}}</p>\n\n\n\n    <p><span class="circle"></span>{{strProductDescription}}</p>\n\n    <p><span class="circle"></span>{{strProductRegularPrice}} $</p>\n\n    <p><span class="circle"></span>{{strProductMake}}</p>\n\n    <p><span class="circle"></span>{{strProductModel}}</p>\n\n    <p><span class="circle"></span>{{strProductSubModel}}</p>\n\n    <p><span class="circle"></span>{{strProductYearStart}}</p>\n\n    <p><span class="circle"></span>{{strProductYearEnd}}</p>\n\n  </div>\n\n\n\n  <div class="reating-review bg-white" padding>\n\n    <div class="reating"></div>\n\n\n\n    <div class="lick">\n\n      <button\n\n        ion-button\n\n        full\n\n        class="btn-round green-shadow btn-text"\n\n        style="background-color: red; color: white"\n\n        (click)="addToCart(dynamicId,strProductName,strImage,strProductDescription,strProductRegularPrice)"\n\n      >\n\n        Add To Cart\n\n      </button>\n\n    </div>\n\n\n\n    <div class="lick">\n\n      <button\n\n        ion-button\n\n        full\n\n        class="btn-round green-shadow btn-text"\n\n        style="background-color: red; color: white; margin-top: 12px"\n\n        (click)="addToWishList(strId,strProductName,strImage,strProductDescription,strProductRegularPrice)"\n\n      >\n\n        Add To Wishlist\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\itemdetail\itemdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]])
], ItemdetailPage);

//# sourceMappingURL=itemdetail.js.map

/***/ }),

/***/ 55:
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
        selector: 'page-cart ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\cart\cart.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <!--\n\n      <button ion-button menuToggle>\n\n            <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n          </button>\n\n      -->\n\n    <ion-title>{{"cart" | translate}}\n\n      <span float-right>\n\n        <ion-icon class="icon" ><img src="assets/imgs/ic_cross.png" width="100%;"></ion-icon>           \n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content>\n\n    <div class="main">\n\n        <ion-card class="example-card" *ngFor="let item of cart; let i= index">\n\n        \n\n          <img mat-card-image [src]="item.imgUrl" alt="Photo of a Shiba Inu">\n\n          <ion-card-content>\n\n            <h2>{{item.name}}</h2>\n\n            <h3>${{item.price}}</h3>\n\n          </ion-card-content>\n\n          \n\n        \n\n            <button mat-button (click)="removeFromCart(i)">\n\n              Remove \n\n        \n\n              <ion-icon class="example-icon" aria-hidden="false" aria-label="Example heart icon">delete_forever</ion-icon>\n\n            </button>\n\n        </ion-card>\n\n        </div>\n\n    \n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\cart\cart.html"*/
    }),
    __metadata("design:paramtypes", [])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
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
        selector: 'page-wishlist ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\wishlist\wishlist.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>My Wishlist (3)\n\n            <span float-right>                  \n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique Product for wheel\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>Man\'s shirt </p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/productimagenew.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique Product for wheel space\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>bags & Backpack</p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique Product for wheel test\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>Wrist watch</p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="rateing">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 {{"review" | translate}})</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\wishlist\wishlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */]])
], WishlistPage);

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 752:
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
        selector: 'accordiantesting',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\components\accordiantesting\accordiantesting.html"*/'<!-- Generated template for the AccordiantestingComponent component -->\n\n<div>\n\n  hi\n\n</div>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\components\accordiantesting\accordiantesting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
], AccordiantestingComponent);

//# sourceMappingURL=accordiantesting.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_myaccountupdated_myaccountupdated__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_termsandconditions_termsandconditions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_privacypolicy_privacypolicy__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home1_home1__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_productcategory_productcategory__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_demo_demo__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_category_category__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_wishlist_wishlist__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_myorder_2_myorder_2__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_help_help__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_review_review__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_config__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__node_modules_ngx_translate_core__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_globalization__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_wishlistupdated_wishlistupdated__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_appconstants_appconstants__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cls_cls__ = __webpack_require__(185);
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
    constructor(config, globalization, platform, statusBar, splashScreen, translate, toastController, loadingController, apiProvider) {
        this.config = config;
        this.globalization = globalization;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.apiProvider = apiProvider;
        // rootPage: any = CreateaccountPage;
        // rootPage: any = DemoPage; 
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */];
        this.hideMe = false;
        this.isSignedIn = false;
        this.viewCartList = [];
        this.initializeApp();
        this.checkStatus = this.localStorageItem();
    }
    ngOnInit() {
    }
    localStorageItem() {
        if (localStorage.getItem("isSigned") === "true") {
            console.log('isSigned true');
            return true;
        }
        else {
            console.log('isSigned false');
            return false;
        }
        ;
    }
    initializeApp() {
        this.checkLocalStorage();
        this.viewCartApi();
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
        // console.log('initalizeapp component ts called...');
        // this.platform.ready().then(() => {
        //  // this.splashScreen.hide();
        // });  
        // if(this.hideMe){
        //   if (localStorage.getItem("Userid value") === null) {
        //     console.log('Current State' + this.hideMe + 'login');
        //     this.hideMe=true; 
        //   }  
        // }
        // else {
        //   console.log('Current State..' + this.hideMe  + 'not login');
        //   this.hideMe=false;
        // }
        // if(this.isSignedIn){
        //   // if (localStorage.getItem("Userid value") === null) {
        //   //   this.isSignedIn=false;
        //   //   console.log('Current State..' +  'not login');
        //   // }  
        //   console.log('Current State..' +  'not login');          
        // }
        // else {
        //   this.isSignedIn=true;
        //   console.log('Current State' +  + 'login');
        // }
    }
    // checkAccountStatus(){
    //   if (localStorage.getItem("Userid value") === null) {
    //   }
    // }
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
        // this.nav.setRoot(AppconstantsPage);
    }
    testPage2() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_23__pages_cls_cls__["a" /* ClsPage */]);
    }
    testPage1() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_22__pages_appconstants_appconstants__["a" /* AppconstantsPage */]);
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
    // phonenumberPage() {     
    //   this.showLoaderOnSigningOut();
    //   //localStorage.clear();
    // // this.nav.setRoot(DemoPage);
    // }  
    loginPage() {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_demo_demo__["a" /* DemoPage */]);
    }
    logoutPage() {
        this.showLoaderOnSigningOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_demo_demo__["a" /* DemoPage */]);
        localStorage.removeItem('isSigned');
        localStorage.removeItem('products');
        localStorage.removeItem('productsWishlist');
        localStorage.removeItem('Userid value');
        localStorage.removeItem('name');
    }
    checkLocalStorage() {
        if (localStorage.getItem("Userid value") === null) {
            console.log('User not signed in');
        }
        else {
            console.log('User signed in');
        }
    }
    testPageTushar() {
        // this.nav.setRoot(TestingPage);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_22__pages_appconstants_appconstants__["a" /* AppconstantsPage */]);
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
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        console.log('All Json Response' + resultado);
                        // console.log('Length of cart ' + this.viewCartList.length);
                        if (this.viewCartList.length >= 1) {
                            console.log('Cart Filled ');
                        }
                        else {
                            console.log('Cart Empty ');
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\app\app.html"*/'<ion-menu [content]="content" [side]="getSideOfCurLang()">\n\n  <ion-header>\n\n    <div style="background: #a8171e; height: 170px" padding text-center>\n\n      <ion-item text-center>\n\n        <img src="assets/imgs/sterlinglogo.png" class="img" />\n\n\n\n        <h2 style="color: white; justify-content: center">STERLING</h2>\n\n\n\n        <ion-row style="margin-top: 4%">\n\n          <p style="color: white; margin-left: 14%; text-align: center">\n\n            sterlingtools@gmail.com\n\n          </p>\n\n          <ion-icon\n\n            name="arrow-forward"\n\n            style="\n\n              margin-left: 88%;\n\n              width: 30px;\n\n              height: 30px;\n\n              margin-top: 36px;\n\n              color: white;\n\n            "\n\n          >\n\n          </ion-icon>\n\n        </ion-row>\n\n      </ion-item>\n\n    </div>\n\n\n\n    <!-- style="width: 40px;"  -->\n\n    <div class="menu-tabs" padding text-center>\n\n      <ion-row>\n\n        <img src="assets/imgs/ic_my_orders_updated.png" />\n\n        <p\n\n          style="\n\n            font-size: 10px;\n\n            color: white;\n\n\n\n            font-size: 12px;\n\n          "\n\n        >\n\n          My Orders\n\n        </p>\n\n\n\n        <img src="assets/imgs/ic_my_addresses_updated.png" />\n\n        <p\n\n          style="\n\n            font-size: 10px;\n\n            color: white;\n\n\n\n            font-size: 12px;\n\n          "\n\n        >\n\n          My Addresses\n\n        </p>\n\n      </ion-row>\n\n    </div>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <div class="menu-title">\n\n      <ion-list>\n\n        <button ion-item menuClose (click)="homePage()">\n\n          <img src="assets/imgs/ic_home.png " />\n\n          Home\n\n        </button>\n\n        <!-- <button ion-item menuClose >\n\n          <img src="assets/imgs/ic_categories.png "   />\n\n          {{"categories" | translate}}\n\n         \n\n        </button> -->\n\n        <!-- <div class="drop-down ">\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_electronics.png ">\n\n                        Electronics\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_fashion.png ">\n\n                        Fashion\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_home_decor.png ">\n\n                        Home Decor\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_mobile.png ">\n\n                        Mobile\n\n                </button>\n\n                    <button ion-item menuClose (click)="categoryPage() ">\n\n                    <img src="assets/imgs/ic_more.png ">\n\n                        More\n\n                </button>\n\n                </div> -->\n\n\n\n        <!-- <button ion-item menuClose (click)="categoryPage()">\n\n                  <img src="assets/imgs/ic_categories.png "/>\n\n                  {{"my_order" | translate}}\n\n                </button> -->\n\n\n\n        <button ion-item menuClose (click)="categoryPage()">\n\n          <img src="assets/imgs/ic_my_cart.png " />\n\n          {{"Categories" | translate}}\n\n        </button>\n\n\n\n        <!-- <button ion-item menuClose (click)="categoryPage1()">\n\n                  <img src="assets/imgs/ic_my_cart.png " />\n\n                  Categories1\n\n                </button> -->\n\n        <!-- <button ion-item menuClose (click)="myorder_2Page()">\n\n          <img src="assets/imgs/ic_my_cart.png " />\n\n          {{"my_order" | translate}}\n\n        </button> -->\n\n\n\n        <button\n\n          ion-item\n\n          menuClose\n\n          (click)="myorder_2Page()"\n\n          *ngIf="checkStatus"\n\n        >\n\n          <img src="assets/imgs/ic_my_cart.png " />\n\n          {{"View Orders" | translate}}\n\n        </button>\n\n\n\n        <!-- <button ion-item menuClose (click)="wishlistPage()">\n\n          <img src="assets/imgs/ic_my_wishlist.png " />\n\n          {{"My wishlist (3)" | translate}}\n\n        </button> -->\n\n\n\n        <button ion-item menuClose (click)="wishlistPage1()">\n\n          <img src="assets/imgs/ic_my_wishlist.png " />\n\n          {{"My wishlist" | translate}}\n\n        </button>\n\n        <button\n\n          ion-item\n\n          menuClose\n\n          (click)="my_accountPage()"\n\n          *ngIf="checkStatus"\n\n        >\n\n          <img src="assets/imgs/ic_my_account.png " />\n\n          My Account\n\n        </button>\n\n        <button ion-item menuClose (click)="helpPage()">\n\n          <img src="assets/imgs/ic_help.png " />\n\n          Help Center\n\n        </button>\n\n\n\n        <button ion-item menuClose (click)="privacyPolicyPage()">\n\n          <img src="assets/imgs/ic_logout.png " />\n\n          Privacy Policy\n\n        </button>\n\n\n\n        <button ion-item menuClose (click)="termsConditionsPage()">\n\n          <img src="assets/imgs/ic_logout.png " />\n\n          Terms & Conditions\n\n        </button>\n\n\n\n        <button ion-item menuClose *ngIf="checkStatus" (click)="logoutPage()">\n\n          <img src="assets/imgs/ic_logout.png " />\n\n          Logout\n\n        </button>\n\n\n\n        <button ion-item menuClose *ngIf="!checkStatus" (click)="loginPage()">\n\n          <img src="assets/imgs/ic_logout.png " />\n\n          <!-- <ion-icon name="log-in-outline"></ion-icon> -->\n\n\n\n          Login\n\n        </button>\n\n\n\n        <button ion-item menuClose (click)="testPage()">\n\n          <img src="assets/imgs/ic_logout.png " />\n\n          Test\n\n        </button>\n\n\n\n        <!-- <button ion-item menuClose       (click)="testPage2()" >\n\n            <img src="assets/imgs/ic_logout.png " />\n\n            Testing\n\n          </button> -->\n\n\n\n        <!-- <ng-template #templateName>\n\n          Logout!!\n\n        </ng-template> -->\n\n\n\n        <!-- if (localStorage.getItem("Userid value") === null) { -->\n\n\n\n        <!-- <div *ngIf="checkAccountStatus">\n\n          It\'s Done!\n\n        </div>\n\n    \n\n       \n\n        <div *ngIf="!checkAccountStatus">\n\n          It\'s Not Done!\n\n        </div> -->\n\n      </ion-list>\n\n    </div>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav\n\n  [root]="rootPage"\n\n  #content\n\n  swipeBackEnabled="false "\n\n  type="overlay"\n\n></ion-nav>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\app\app.html"*/
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_18__app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_20__ionic_native_globalization__["a" /* Globalization */],
        __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_19__node_modules_ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonenumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_password__ = __webpack_require__(396);
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
        selector: 'page-phonenumber ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\phonenumber\phonenumber.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-uppercase>{{"app_title" | translate}}\n\n      <span float-end (click)="homePage()" text-capitalize>{{"skip" | translate}}</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <p>Heart</p> -->\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center>{{"phone_text" | translate}}<br>{{"phone_text1" | translate}}</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"phone" | translate}}</ion-label>\n\n        <ion-input type="text" text-end value="+91 9876543210"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="passwordPage()">{{"continue" | translate}}"</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\phonenumber\phonenumber.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], PhonenumberPage);

//# sourceMappingURL=phonenumber.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShirtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__short_short__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__itemdetail_itemdetail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__ = __webpack_require__(68);
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
    searchPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
        modal.present();
    }
    cartPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    }
    itemdetailPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__itemdetail_itemdetail__["a" /* ItemdetailPage */]);
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__["a" /* WishlistPage */]);
    }
};
ShirtsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shirts ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\shirts\shirts.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n      <button ion-button menuToggle style="display: block !important">\n\n        <ion-icon class="menu-icon"\n\n          ><img src="assets/imgs/ic_menu.png"\n\n        /></ion-icon>\n\n      </button>  \n\n      <ion-title\n\n        >Products\n\n        <span float-right>\n\n          <ion-icon class="icon" (click)="wishlistPage()"\n\n            ><img src="assets/imgs/ic_my_wishlist.png" width="100%;"\n\n          /></ion-icon>\n\n          <ion-icon class="icon" (click)="cartPage()"\n\n            ><img src="assets/imgs/ic_my_cart.png" width="100%;"\n\n          /></ion-icon>\n\n        </span>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <div class="custom-id">\n\n      <ion-item class="custom">\n\n        <ion-select\n\n          placeholder="All"\n\n          value="MAKE"\n\n          okText="Ok"\n\n          cancelText="Cancel"\n\n          style="margin-left: 1px"\n\n        >\n\n          <ion-option value="MAKE" style="max-width: 60px">MAKE</ion-option>\n\n          <ion-option value="MODEL">MODEL</ion-option>\n\n          <ion-option value="YEAR">YEAR</ion-option>\n\n        </ion-select>\n\n  \n\n        <ion-icon name="md-search" class="text-light icon"></ion-icon>\n\n      </ion-item>\n\n      <ion-searchbar\n\n        placeholder="Search Products"\n\n        (click)="searchPage()"\n\n      ></ion-searchbar>\n\n    </div>\n\n    <!-- <ion-list>\n\n      <ion-item > </ion-item>\n\n    </ion-list> -->\n\n    <!-- <div class="tab-row">\n\n      <ion-row>\n\n        <ion-col (click)="categoryPage()">\n\n          <div class="img-box" text-center>\n\n            <img src="assets/imgs/first.png">\n\n            <small class="text-white">LORUM</small>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col (click)="categoryPage()">\n\n          <div class="img-box" text-center>\n\n            <img src="assets/imgs/second.png">\n\n            <small class="text-white">LORUM</small>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col (click)="categoryPage()">\n\n          <div class="img-box" text-center>\n\n            <img src="assets/imgs/third.png">\n\n            <small class="text-white">LORUM</small>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col (click)="categoryPage()">\n\n          <div class="img-box" text-center>\n\n            <img src="assets/imgs/fourth.png">\n\n            <small class="text-white">LORUM</small>\n\n          </div>\n\n        </ion-col>\n\n  \n\n        <ion-col (click)="categoryPage()">  \n\n          <div class="img-box" text-center>\n\n            <img src="assets/imgs/fifth.png">\n\n            <small class="text-white">LORUM</small>\n\n          </div>\n\n        </ion-col>\n\n      \n\n      </ion-row>\n\n    </div> -->\n\n  </ion-header>\n\n\n\n\n\n<ion-content class="bg-light">\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card (click)="itemdetailPage()">\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/shirt-3.jpg"> -->\n\n                        <img src="assets/imgs/productimagenew.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/shirt-2.jpg"> -->\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/shirt-4.jpg"> -->\n\n                        <img src="assets/imgs/productimagenew.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n                        <img src="assets/imgs/productimage.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <!-- <img src="assets/imgs/shirt-2.jpg"> -->\n\n                        <img src="assets/imgs/productimagenew.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\shirts\shirts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], ShirtsPage);

//# sourceMappingURL=shirts.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippiningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(400);
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
        selector: 'page-shippining ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\shippining\shippining.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"confirm_order" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="address-section">\n\n        <ion-row text-center class="status">\n\n          <ion-col class="complate">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>{{"login" | translate}}</span></ion-col>\n\n          <ion-col class="processing">\n\n            <ion-icon name="md-radio-button-off"></ion-icon><span>{{"shipping" | translate}}</span></ion-col>\n\n          <ion-col class="panding">\n\n            <ion-icon name="ion-record"></ion-icon><span>{{"payment" | translate}}</span></ion-col>\n\n        </ion-row>\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>\n\n                    {{"your_dlvr_address" | translate}}<span class="text-sky">{{"change" | translate}}<ion-icon name="ios-arrow-forward" class="icon"></ion-icon></span></p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <div class="addres-detail">\n\n                    <h3>\n\n                        <ion-icon name="ios-pin-outline" class="icon-position"></ion-icon>Jhon Smith\n\n                    </h3>\n\n                    <p>DE234 Mapleridge Drive Plano,<br> Texas 743A US.</p>\n\n                    <p>+91 908765432</p>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="your-items">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>{{"ur_item" | translate}}</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n                            <img src="assets/imgs/productimage.jpg">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-sky  mr-5">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-light">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="">1\n\n                                 <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                        <p class="card-bottom" padding-top>\n\n                            {{"delivery_by" | translate}} Fri,Jun 9: 40\n\n                            <span class="text-sky small" text-right> {{"remove" | translate}}</span>\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="your-items">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>{{"ur_item" | translate}}</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <!-- <img src="assets/imgs/suit_PNG8132.png"> -->\n\n                            <img src="assets/imgs/productimage.jpg">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-sky  mr-5">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-light">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>{{"quantity" | translate}}\n\n                                <span class="">1\n\n                                    <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                        <p class="card-bottom" padding-top>\n\n                            {{"delivery_by" | translate}} Fri,Jun 9: 40\n\n                            <span class="text-sky small" text-right> {{"remove" | translate}}</span>\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="spacebar-bottom"></div>\n\n    <div class="receipt btn-fisx-bottom">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>Item(s) price\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                    380\n\n                    </span>\n\n                </p>\n\n                <p>Delivery Payable\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                   40\n\n                    </span>\n\n                </p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <p>Amount Payable\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                   420\n\n                    </span>\n\n                </p>\n\n                <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="paymentPage()">{{"continue" | translate}}</button>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\shippining\shippining.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ShippiningPage);

//# sourceMappingURL=shippining.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
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
        selector: 'page-placed ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\placed\placed.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"ordered" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="img-box">\n\n        <img src="assets/imgs/order-placed.jpg">\n\n    </div>\n\n    <h3 class="text-sky" text-center>{{"ordered_text" | translate}}</h3>\n\n    <h4 class="" text-center>{{"ordered_text1" | translate}}<br>{{"ordered_text3" | translate}} <strong>{{"my_order" | translate}}</strong> {{"ordered_text2" | translate}}<br>{{"ordered_text4" | translate}}</h4>\n\n    <div class="btn-padding btn-fisx-bottom ">\n\n        <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="homePage()">{{"continue_shop" | translate}}</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\placed\placed.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], PlacedPage);

//# sourceMappingURL=placed.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_accountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(55);
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
        selector: 'page-my_account ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\my_account\my_account.html"*/'<ion-header class="bg-thime">\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n    <ion-icon class="menu-icon">\n\n      <img src="assets/imgs/ic_menu.png">\n\n    </ion-icon>\n\n  </button>\n\n    <ion-title>My Account\n\n      <!-- <span float-right> \n\n        <ion-icon padding-right name="ios-search-outline" class="icon"></ion-icon>\n\n        <ion-icon name="ios-cart-outline" class="icon"></ion-icon>              \n\n      </span> -->\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-list padding-left>\n\n    <ion-item padding-left padding-right>\n\n      <ion-avatar item-start>\n\n         <img src="assets/imgs/more.png"> \n\n      </ion-avatar>\n\n      <!-- <h2 class="">John Smith\n\n        <small class=""> {{"edit_profile" | translate}}</small>\n\n      </h2> -->\n\n      <p class="text-dark">+91 123456789\n\n      </p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <!-- <ion-toolbar no-border-top class="tab-bar">\n\n    <ion-segment [(ngModel)]="account">\n\n\n\n      <ion-segment-button value="profile">\n\n       Profile\n\n      </ion-segment-button>\n\n\n\n      \n\n    </ion-segment>  \n\n  </ion-toolbar> -->\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="account">\n\n\n\n   \n\n\n\n    <div *ngSwitchCase="\'profile\'" class="profile-section">\n\n      <ion-list>\n\n        \n\n        <ion-item lines="none">\n\n          <ion-label floating style="color: black;text-transform: none;font-size: 14px;">Display Name</ion-label>\n\n          <ion-input disabled type="text"  style="margin-top: 10px;color: black;" [(ngModel)]="strDisplayName"></ion-input>\n\n        </ion-item>\n\n        <ion-item lines="none">\n\n          <ion-label floating style="color: black;text-transform: none;font-size: 14px" >Email</ion-label>\n\n          <ion-input disabled type="email"  style="margin-top: 10px;color: black;" [(ngModel)]="strDataUserEmail"></ion-input>\n\n        </ion-item>\n\n        <ion-item lines="none">\n\n          <ion-label floating style="color: black;text-transform: none;font-size: 14px">User Registered On </ion-label>\n\n          <ion-input disabled type="email" style="margin-top: 10px;color: black;" [(ngModel)]="strDataUserRegistered"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n\n\n\n\n   \n\n\n\n    \n\n\n\n  \n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\my_account\my_account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
], My_accountPage);

//# sourceMappingURL=my_account.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(55);
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
        selector: 'page-myorder_1 ',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\myorder_1\myorder_1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"my_order" | translate}}\n\n            <span float-right> \n\n               <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="border-bottom-none border" style="position: relative;">\n\n        <ion-card-header>\n\n            <p class="left-side">\n\n                <span class="text-light">{{"order_id" | translate}}</span> 2513254112\n\n                <br>\n\n                <span class="text-light">{{"placed_on" | translate}}</span> 17-march-17\n\n            </p>\n\n            <p class="right-side text-sky">\n\n                {{"cancel_order" | translate}}\n\n            </p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <small><span class="text-light">{{"quantity" | translate}}:</span> 1</small>\n\n                    <p>\n\n                        <img src="assets/imgs/rupee-black.png"> 380\n\n                        <small class="text-light">{{"by_cod" | translate}}</small>\n\n                    </p>\n\n                    <small><span class="text-light">{{"track_status" | translate}}</span> 15-March\'17</small>\n\n                    <button ion-button full class="bg-green btn-round  btn-text">{{"reached" | translate}} Hub,US  <ion-icon name="ios-arrow-down-outline"></ion-icon></button>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div class="order-info border-top-none border">\n\n        <div class="order-container">\n\n            <div class="status active">\n\n                <p padding-left padding-right>{{"order" | translate}}<br>{{"placed" | translate}}</p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status active">\n\n                <p>\n\n                    {{"dispatched" | translate}}<br>{{"4m" | translate}} Bangalore\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status active">\n\n                <p>\n\n                    {{"reached" | translate}} Hub <br>New Delhi\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p>12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status">\n\n                <p>\n\n                    {{"out4" | translate}}<br>{{"delivery" | translate}}\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status">\n\n                <p>\n\n                    {{"item" | translate}}<br>{{"delivery" | translate}}\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <p class="left-side">\n\n                <span class="text-light">{{"order_id" | translate}}</span> 2513254112\n\n                <br>\n\n                <span class="text-light">{{"placed_on" | translate}}</span> 17-march-17\n\n            </p>\n\n            <p class="right-side text-sky">\n\n                {{"return_item" | translate}}\n\n            </p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <small><span class="text-light">{{"quantity" | translate}}:</span> 1</small>\n\n                    <p>\n\n                        <img src="assets/imgs/rupee-black.png"> 880\n\n                        <small class="text-light">{{"by_crd" | translate}}</small>\n\n                    </p>\n\n                    <small><span class="text-light">{{"deliver_on" | translate}} </span> 05-May\'17</small>\n\n                    <button ion-button full class="bg-thime btn-round  btn-text">{{"rate_now" | translate}}<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\myorder_1\myorder_1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], Myorder_1Page);

//# sourceMappingURL=myorder_1.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
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
        this.checkStatus = this.localStorageItem();
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
    localStorageItem() {
        if (localStorage.getItem("isSigned") === "true") {
            console.log('isSigned true');
            return true;
        }
        else {
            console.log('isSigned false');
            return false;
        }
        ;
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
            sessionStorage.setItem('id', this.strId);
            sessionStorage.setItem('_product_id', this.strId);
            this.userDataValue = response.status;
            console.log('status value' + this.userDataValue);
            console.log('RespCode value' + this.strResponseCode);
            console.log('user_email value' + this.strUserData);
            console.log('id value' + this.strId);
            if (this.obj.includes('Login Successfully')) {
                console.log('Json Response success ' + this.obj);
                console.log('Json Response status ' + this.obj.status);
                window.location.reload();
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
        selector: 'page-demo',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\demo\demo.html"*/'<ion-content class="login-content" padding >\n\n  <ion-row class="logo-row">\n\n      <ion-col>\n\n        <img src="assets/imgs/sterlinglogo.png"/>\n\n        <br/>\n\n        <h4 style="text-align: center;">Sterling Tools</h4>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n    <div >\n\n      <ion-list >\n\n          <div class="login-box">\n\n            \n\n                <ion-row>\n\n                  <ion-col>\n\n                    <ion-list inset>\n\n                      \n\n                     \n\n                      <div class="input-container">\n\n                        <ion-icon name="mail"  item-left ></ion-icon>\n\n                        <input class="input-field" placeholder="Username" type="name" [(ngModel)]="emailAddress" >\n\n                      </div>\n\n\n\n                      <div class="input-container">\n\n                        <ion-icon name="eye"  item-left ></ion-icon>\n\n                        <input class="input-field"  placeholder="Password"  type="password"  [(ngModel)]="password">\n\n                      </div>\n\n                      \n\n                      \n\n                    </ion-list>\n\n                  </ion-col>\n\n                </ion-row>\n\n                \n\n                <ion-row>  \n\n                  <ion-col class="signup-col">\n\n                    <button ion-button class="submit-btn" full type="submit" style="text-transform: none;" class="bg-thime btn-round btn-text" (click)="loginBtnClick()">Login</button>\n\n                    <button ion-button class="submit-btn" full type="submit" style="text-transform: none;" class="bg-thime btn-round btn-text" (click)="registerBtnClick()" >Signup</button>\n\n\n\n                  </ion-col>\n\n                </ion-row>\n\n                \n\n             \n\n            </div>\n\n      </ion-list>\n\n    \n\n      \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\demo\demo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */]])
], DemoPage);

//# sourceMappingURL=demo.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductcategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productcategorydetail_productcategorydetail__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewcart_viewcart__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__capacitor_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wishlistupdated_wishlistupdated__ = __webpack_require__(27);
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










let ProductcategoryPage = class ProductcategoryPage {
    constructor(navCtrl, navParams, apiProvider, modalCtrl, app, platform, toastController, httpClient, loadingController, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.platform = platform;
        this.toastController = toastController;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.productCategoryList = [];
        this.productCategoryGridList = [];
        this.items = [];
        this.viewCartList = [];
        this.countProductsCartLocalUpdated = 0;
        this.countProductsWishlistLocalUpdated = 0;
        this.countProductsWishList = 0;
    }
    ngOnInit() {
        this.checkNetwork();
        this.viewCartApi();
        this.getProductCategoriesApi();
        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'ProductcategoryPage') {
                if (nav.canGoBack()) {
                }
                else {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
            }
        });
        if (this.countProductsWishlistLocalUpdated === 0) {
            this.countProductsWishlistLocalUpdated = '';
            console.log('Entered');
        }
        if (this.countProductsCartLocalUpdated === 0) {
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
    }
    cartPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__viewcart_viewcart__["a" /* ViewcartPage */]);
    }
    sortDropDownValue() {
        console.log("Selected sortDropDownValue");
        this.showToastOnSortingCategory();
        this.productCategoryGridList.sort((a, b) => (a.name > b.name) ? 1 : -1);
        console.log('Sorted:   ' + this.productCategoryGridList);
        var points = [5.0, 3.7, 1.0, 2.9, 3.4, 4.5];
        var output = [];
        for (let i = 0; i < points.length; i++) {
            points.sort(function (a, b) {
                return b - a;
            });
            output += points[i] + "<br>";
        }
        console.log(output);
    }
    searchPage() {
    }
    wishlistPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__wishlistupdated_wishlistupdated__["a" /* WishlistupdatedPage */]);
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
            this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
                this.obj = JSON.stringify(jsonResponse);
                console.log("Sent productsList response " + this.obj);
                console.log("Sent productsList id " + id);
                this.showToastOnAddProductServer(name);
                this.countProductsCart++;
            });
        }
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getProductCategoriesApi();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.complete();
        }, 500);
    }
    // getProductCategoriesApi1(){
    //   const service = this.apiProvider.getProductCategoriesGrid();
    //   service.subscribe((data) => {
    //       this.constresultado = data;
    //       this.productCategoryGridList = this.constresultado;
    //       this.productTitle = data.title;
    //   });
    // }
    getProductCategoriesApi() {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                content: 'Please wait loading products!',
            });
            yield loader.present();
            loader.present().then(() => {
                // const service = this.apiProvider.getOrders();   
                // service.subscribe((jsonResponse) => {      
                this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_category_grid').subscribe(jsonResponse => {
                    if (jsonResponse) {
                        this.productCategoryGridList = jsonResponse['result'];
                        this.obj = JSON.stringify(jsonResponse);
                        console.log('details available ' + this.obj);
                        loader.dismiss();
                    }
                    const myURL_body = jsonResponse['result'];
                    this.strResponse = myURL_body;
                    if (this.strResponse = 'null') {
                        console.log('details available obj empty ');
                        this.strDataServer = 'No data';
                    }
                    else {
                        console.log('details not available ');
                    }
                }, error => {
                    console.log(error);
                    //this.showToastOnProductError(error);
                });
            });
        });
    }
    itemdetailPage(catId, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__productcategorydetail_productcategorydetail__["a" /* ProductcategorydetailPage */], {
            catId: catId,
            name: name
        });
        console.log('Sent productsList id ' + catId);
    }
    viewCartApi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = this.apiProvider.getCartDetails();
                service.subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                    if (data) {
                        const resultado = data;
                        this.viewCartList = resultado;
                        this.obj = JSON.stringify(data);
                        console.log('All Json Response' + this.obj);
                        this.strData = 'No Products in Cart';
                        // console.log('Length of cart ' + this.viewCartList.length);
                        if (this.viewCartList) {
                            this.countProductsCartLocalUpdated = this.viewCartList.length;
                        }
                        else {
                            this.countProductsCartLocalUpdated = this.countProductsCart;
                        }
                    }
                    else {
                    }
                }));
            }
            catch (error) { }
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
    showToastOnAddProductSingle(strProductAdded) {
        const toast = this.toastController.create({
            message: 'Product Added in Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
            duration: 3000,
            position: "bottom",
        });
        toast.present();
    }
    showToastOnSortingCategory() {
        let loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 700);
    }
    checkNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Network } = __WEBPACK_IMPORTED_MODULE_7__capacitor_core__["a" /* Plugins */];
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
                //this.router.navigate(['/invoices']);
                // this.router.navigate(['/managecard']);
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
};
ProductcategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-productcategory',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\productcategory\productcategory.html"*/'<ion-header>  \n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"\n\n        ><img src="assets/imgs/ic_menu.png"\n\n      /></ion-icon>\n\n    </button>\n\n    <ion-title\n\n      >Product Categories\n\n    \n\n\n\n      \n\n        \n\n\n\n       \n\n        <span float-right>\n\n       \n\n       \n\n          <ion-icon class="icon-add" name="heart" style="margin-left: 12px;" (click)="wishlistPage()">\n\n            <ion-badge id="notifications-badge" color="primary">{{countProductsWishlistLocalUpdated}}</ion-badge>\n\n          </ion-icon> \n\n          \n\n          <ion-icon class="icon-add" name="cart" style="margin-left: 12px;" (click)="cartPage()">\n\n            <ion-badge id="notifications-badge" color="primary">{{countProductsCartLocalUpdated}}</ion-badge>\n\n          </ion-icon> \n\n      \n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="chevron-down-circle-outline"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing Product Categories."\n\n    >\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n   \n\n   <!-- <ion-item>\n\n    <ion-label>SORT BY </ion-label>\n\n    <ion-select placeholder="Please select" value="Name" okText="Okay" cancelText="Dismiss" (ionChange)="sortDropDownValue(productCategoryGridList)" style="width: 200px;\n\n    padding: 0px 10px;">\n\n      <ion-option value="Name"  >Name</ion-option>\n\n    </ion-select>\n\n  </ion-item> -->\n\n   \n\n   <ion-grid class="product-grid" >\n\n    <ion-row class="rowgrid" text-center style="height: 300px;">\n\n      <ion-col col-6\n\n        class="columngrid"\n\n        *ngFor="let productCategoryGrid of productCategoryGridList"\n\n        (click)="itemdetailPage(productCategoryGrid.catId)">\n\n        <ion-card>  \n\n          <ion-card-header style="justify-content: left">\n\n            <div\n\n              class="img-box">\n\n              <img  [src]="productCategoryGrid.thumbnail"  style="width:200px;height:100px ;">\n\n            </div>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            \n\n            <div >\n\n              <div > \n\n                <span style="font-size: 12px;color: black;">{{productCategoryGrid.name}}</span>\n\n              </div>\n\n            </div> \n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\productcategory\productcategory.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ProductcategoryPage);

//# sourceMappingURL=productcategory.js.map

/***/ })

},[414]);
//# sourceMappingURL=main.js.map