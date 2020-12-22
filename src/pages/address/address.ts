/**
 * Generated class for the AddressPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
} from "ionic-angular";
import { first } from "rxjs/operators";

@IonicPage()
@Component({
  selector: "page-address",
  templateUrl: "address.html",
})
export class AddressPage implements OnInit {
  firstName = "";
  lastName = "";
  streetAddress = "";
  town = "";
  postCode = "";
  phoneNo = "";
  emailAddress = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  saveBtnClick() {
    if (this.firstName === "") {
      this.showToastOnEmptyFirstName();
    } else if ((this.lastName = "")) {
      this.showToastOnEmptyLastName();
    } else if ((this.streetAddress = "")) {
      this.showToastOnEmptyStreetAddress();
    } else if ((this.town = "")) {
      this.showToastOnEmptyTown();
    } else if ((this.postCode = "")) {
      this.showToastOnEmptyPostCode();
    } else if ((this.phoneNo = "")) {
      this.showToastOnEmptyPhoneNo();
    } else if ((this.emailAddress = "")) {
      this.showToastOnEmptyEmailAddress();
    } else {
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

  async showToastOnEmptyFirstName() {
    const toast = await this.toastController.create({
      message: "Enter first name ",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyLastName() {
    const toast = await this.toastController.create({
      message: "Enter last name ",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyStreetAddress() {
    const toast = await this.toastController.create({
      message: "Enter street address ",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyTown() {
    const toast = await this.toastController.create({
      message: "Enter town ",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  async showToastOnEmptyPostCode() {
    const toast = await this.toastController.create({
      message: "Enter Post code ",
      duration: 3000,
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
  public isActive(pageName: string): boolean {
    return this.navCtrl.getActive().name === pageName;
  }
}
