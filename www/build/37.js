webpackJsonp([37],{

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let LoginPageModule = class LoginPageModule {
};
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let LoginPage = class LoginPage {
    constructor(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
};
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"F:\Github Sterling Tools\SterlingTools\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-img class="logo-img"\n\n  style="align-items: center;"\n\n  src="assets/sterlinglogo.png"\n\n></ion-img>\n\n</ion-header>\n\n\n\n<!-- <ion-content padding>\n\n  <div class="form" padding-left padding-right>\n\n    <p text-center padding-bottom margin-bottom>{{"sign_up_label" | translate}}</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{"phone" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="+91 903 335 6708"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"full_name" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"email" | translate}}</ion-label>\n\n        <ion-input type="text" text-right value="jhonsmith8994@gmail.com"></ion-input>\n\n      </ion-item>\n\n      <div class="d-flex">\n\n        <ion-item>\n\n          <ion-label>{{"login_box2" | translate}}</ion-label>\n\n          <ion-input type="text" text-right value="******"></ion-input>\n\n        </ion-item>\n\n        <ion-icon name="ios-eye-outline" class="text-light eye-icon"></ion-icon>\n\n      </div>\n\n    </ion-list>\n\n    <button ion-button full class="bg-thime btn-round btn-text" (click)="homePage()">{{"continue" | translate}}</button>\n\n    <p text-center>\n\n      <small>\n\n        {{"tnc_prelabel" | translate}} \n\n        <span class="text-sky"> {{"tnc" | translate}} </span>\n\n      </small>\n\n    </p>\n\n  </div>\n\n</ion-content> -->\n\n'/*ion-inline-end:"F:\Github Sterling Tools\SterlingTools\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=37.js.map