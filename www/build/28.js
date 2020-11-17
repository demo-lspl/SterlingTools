webpackJsonp([28],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AboutusPageModule = class AboutusPageModule {
};
AboutusPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */]),
        ],
    })
], AboutusPageModule);

//# sourceMappingURL=aboutus.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_search__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(46);
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
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let AboutusPage = class AboutusPage {
    constructor(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad AboutusPage');
    }
    searchPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__search_search__["a" /* SearchPage */]);
        modal.present();
    }
    cartPage() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    }
};
AboutusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-aboutus',template:/*ion-inline-start:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\aboutus\aboutus.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n  </button>\n      <ion-title>Privacy Policy\n          <!-- <span float-right> \n            <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n            <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n          </span> -->\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- <h3>Welcome to your first Ionic app!</h3> -->\n\n  <p>\n    Sterling Engineering Limited – T/A Sterling Clutch and Brake understands how important it is to protect the personal information of our customers, business partners and other stakeholders that we interact with. We take care to comply with the Privacy Principles contained in the Privacy Act and provide you with a level of comfort that the information you provide to us will be managed in accordance with law. This Privacy Policy describes how we collect, use and dispose of personal information.\n  </p>\n  <p>\n    1. What personal information do we collect?\nWe may collect information from you which reasonably identifies you as an individual, including your name, email address, telephone number and billing address. If you are a customer, we may also collect your vehicle registration number.\n  </p>\n  <p>\n    2. What type of personal information do we collect?\nWe may collect your personal information when you provide details through our website, contact us by phone, email or in-store or when you complete forms. Our website also uses cookies which stores personal information that you provide to track user traffic patterns and to better serve you when you revisit the website. You can disable cookies in your browser. Your personal information will be securely stored by us. Personal information relating to customers located in New Zealand may also be stored by us and by our selected third party providers in New Zealand.>\n  </p>\n\n  <p>\n    3. Why do we collect your personal information?\nWe may collect your personal information to:\n\nProcess transactions, both in-store and online;\nAnswer your questions, resolve your complaints and conduct investigations;\nMarket and sell our products and promote our brands;\nComply with any legal requirements;\nProcure goods and services;\nConduct research to better understand and serve our customers and for statistical purposes;\nCommunicate with you, including where we need to conduct a product recall;\nPrevent fraud, including services to protect your information; and\nProvide you with marketing offers and information about our brands.\nIf we want to use your personal information for other reasons, we will contact you and ask you for your consent.\n  </p>\n\n  <p>\n    4. When do we disclose your personal information?\nWe may disclose your personal information to people and organisations:\n\nThat provide us with services to promote our products;\nThat carry out, or help us to carry out, our business activities including our agents, contractors and external advisors;\nThat maintain our information technology and payment system infrastructure; and\nTo whom we are authorised or required by law to do so.\nYour personal information may also be disclosed by us to other people and organisations that you have consented to.\n  </p>\n\n  <p>\n    5.What rights do you have in relation to your personal information?\nYou have the right to access your personal information and require us to correct any of your personal information. To access or correct your personal information, please Contact Us. You can also contact us direct at the address below or writing to our Privacy Officer at: Sterling Clutch and Brake, 55 Neilson Street, Cnr Neilson Street and Onehunga Mall, Onehunga, Auckland 1643 , New Zealand. Sterling Clutch and Brake, PO Box PO Box 13101, Onehunga Mall, Onehunga, Auckland 1643, New Zealand\n  </p>\n\n  <p>\n    6.How do you make a complaint?\nIf you would like to make a complaint regarding our use of your personal information, you can Contact Us.\n  </p>\n\n  <p>\n    7. Who do you contact for further information?\nIf you require further information about this Privacy Policy, you can Contact Us.\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"D:\Visual Studio Apps\mobimall-ui-IONIC Source code\mobimall-ui\src\pages\aboutus\aboutus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
], AboutusPage);

//# sourceMappingURL=aboutus.js.map

/***/ })

});
//# sourceMappingURL=28.js.map