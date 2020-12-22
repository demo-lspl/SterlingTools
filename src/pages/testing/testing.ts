/**
 *  Created By Lasting Erp
 */

import { ViewcartPage } from "./../viewcart/viewcart";
import { HomePage } from "./../home/home";
import { Storage } from "@ionic/storage";
import { PaymentPage } from "./../payment/payment";
import { ApiProvider } from "./../../providers/api/api";
import { ViewChild } from "@angular/core";
import { ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Renderer } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController,
  ToastController,
  Platform,
  App,
} from "ionic-angular";
import { Plugins, NetworkStatus, PluginListenerHandle } from "@capacitor/core";

@IonicPage()
@Component({
  selector: "page-testing",
  templateUrl: "testing.html",
})
export class TestingPage implements OnInit {
  firstName = "";
  lastName = "";
  companyName = "";
  streetAddress = "";
  town = "";
  postCode = "";
  phoneNo = "";
  emailAddress = "";
  addressArray: any = [];
  countProductsAddress: number = 0;
  strFirstName: string;

  emailAddress1 = "104402:BEo8VfAJvOT7Rf0h";
  password = "";
  obj;
  emailAddressencoded = "testing";
  enstring = "104402:BEo8VfAJvOT7Rf0h";
  strUpdatedValue: string;
  strTest: number;
  retrievedObject: string;

  constructor(
    public apiService: ApiProvider,
    public loadingController: LoadingController,
    public platform: Platform,
    public navCtrl: NavController,
    public httpClient: HttpClient,
    public toastController: ToastController,
    public app: App
  ) {
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
        } else {
          this.navCtrl.setRoot(HomePage);
        }
      }
    });
  }

  pickAddress() {
    if (localStorage.getItem("address") === null) {
      console.log("Address Empty");
    } else {
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
    this.navCtrl.push(ViewcartPage);
  }

  checkoutBtnClick() {
    if (this.firstName === "") {
      this.showToastOnEmptyFirstName();
    } else if (this.lastName === "") {
      this.showToastOnEmptyLastName();
    } else if (this.streetAddress === "") {
      this.showToastOnEmptyStreetAddress();
    } else if (this.town === "") {
      this.showToastOnEmptyTown();
    } else if (this.postCode === "") {
      this.showToastOnEmptyPostCode();
    } else if (this.phoneNo === "") {
      this.showToastOnEmptyPhoneNo();
    } else if (this.emailAddress === "") {
      this.showToastOnEmptyEmailAddress();
    } else {
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

  async showToastOnFormSuccess() {
    const toast = await this.toastController.create({
      message: "Success ",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyFirstName() {
    const toast = await this.toastController.create({
      message: "Enter First Name ",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyLastName() {
    const toast = await this.toastController.create({
      message: "Enter Last Name ",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyCompanyName() {
    const toast = await this.toastController.create({
      message: "Enter Company Name ",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyCountry() {
    const toast = await this.toastController.create({
      message: "Enter Country ",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyStreetAddress() {
    const toast = await this.toastController.create({
      message: "Enter Street Address ",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyTown() {
    const toast = await this.toastController.create({
      message: "Enter Town ",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyRegion() {
    const toast = await this.toastController.create({
      message: "Enter Region ",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyPostCode() {
    const toast = await this.toastController.create({
      message: "Enter Post Code ",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyPhoneNo() {
    const toast = await this.toastController.create({
      message: "Enter phone no ",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyEmailAddress() {
    const toast = await this.toastController.create({
      message: "Enter email address ",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnAddAddressLocal(strFirstName) {
    const toast = await this.toastController.create({
      message: "Address saved locally ",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      content: "Please wait  !",
      duration: 900,
    });
    return await loading.present();
  }

  loginCredentialsCheck1() {
    // Define the string
    // Encode the String
    var encodedString = btoa(this.enstring);
    console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Cookie",
      "ASP.NET_SessionId=cgydxj1s0320hgw0f5udwoh1; AWSELB=C99F59C51651FA01D4CDD5A64A04F21C64855D8A0792B4BF2570A997B2A9F532677F47FCCE580B41D0156EDE6538E87105E9B5B40ADB39EC1FFBEBBBAF86F902187CC34F8A; AWSELBCORS=C99F59C51651FA01D4CDD5A64A04F21C64855D8A0792B4BF2570A997B2A9F532677F47FCCE580B41D0156EDE6538E87105E9B5B40ADB39EC1FFBEBBBAF86F902187CC34F8A; TS01ea8473=01bec82efc8fe8f35bcdc2a3780ccc780d98d2ebd25ccdb4d1c13d630287e253bfa2a5e1b02a916c4a8fb482006e8406c92df561b5b915ab86c2e7ec2d288b4da518bf90c1965312dcc601882be8be4678b7855d7a6ab61d6d6b5783f73217a2851e84003f"
    );
    var urlencoded = new URLSearchParams();
    urlencoded.append("account_id", "625835");
    urlencoded.append("username", "104402");
    urlencoded.append("password", "BEo8VfAJvOT7Rf0h");
    urlencoded.append("cmd", "_xclick");

    this.retrievedObject = JSON.parse(localStorage.getItem("name"));

    console.log("this.strTest " + this.retrievedObject);

    urlencoded.append("amount", this.retrievedObject);

    urlencoded.append(
      "return_url",
      "https://demo.paymarkclick.co.nz/guides/test"
    );
    let requestParam: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl =
        "https://demo.paymarkclick.co.nz/api/webpayments/paymentservice/rest/WPRequest";
    fetch(proxyUrl + targetUrl, requestParam)
      .then((response) => response.text())
      .then((result) => window.open(result.replace(/<\/?[^>]+>/gi, "")));
  }
}
