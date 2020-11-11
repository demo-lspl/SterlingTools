/**
 *  Created By Lasting Erp
 */

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

  firstname= '';
  lastName= '';
  companyName= '';
  country= '';
  streetAddress= '';
  town= '';
  region= '';
  postcode= '';
  
     
  constructor(  
    public apiService: ApiProvider,
    public loadingController: LoadingController,
    public platform: Platform,
    public navCtrl: NavController,
    public httpClient: HttpClient,
    public toastController: ToastController,
    public app: App,
    
  ) {
  
    // tslint:disable-next-line: no-unused-expression
  }

  ngOnInit() {
    this.presentLoading();
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'TestingPage') {
          if (nav.canGoBack()){
          } else {
               this.navCtrl.setRoot(HomePage);
          }
      }
  });
  }  

  checkoutBtnClick(){

    if(this.firstname === '') {
      this.showToastOnEmptyFirstName();
    }

    else if(this.lastName === '') {
      this.showToastOnEmptyLastName();
    }
    else if(this.companyName = '') {
      this.showToastOnEmptyCompanyName();
    }

    else if(this.country = '') {
      this.showToastOnEmptyCountry();  
    }

    else if(this.streetAddress = '') {
      this.showToastOnEmptyStreetAddress();
    }

    else if(this.town = '') {
      this.showToastOnEmptyCompanyName();
    }

    else if(this.region = '') {
      this.showToastOnEmptyCountry();
    }

    
    else if(this.postcode = '') {  
      this.showToastOnEmptyPostCode();
    }


    else {
      this.showToastOnFormSuccess();
       this.navCtrl.setRoot(PaymentPage);

      console.log('All Result ' + this.firstname);
      
    }
      
  }

  async showToastOnFormSuccess()
  {
   const toast = await this.toastController.create({
     message: 'Success ',
     duration: 1000,
     position: 'bottom',
   });
   toast.present();
 }

  async showToastOnEmptyFirstName()
  {
   const toast = await this.toastController.create({
     message: 'Enter First Name ',
     duration: 1000,
     position: 'bottom',
   });
   toast.present();
 }

 async showToastOnEmptyLastName()
 {
  const toast = await this.toastController.create({
    message: 'Enter Last Name ',
    duration: 1000,
    position: 'bottom',
  });
  toast.present();
}  

async showToastOnEmptyCompanyName()
{
 const toast = await this.toastController.create({
   message: 'Enter Company Name ',
   duration: 1000,
   position: 'bottom',
 });
 toast.present();
}

async showToastOnEmptyCountry()
{
 const toast = await this.toastController.create({
   message: 'Enter Country ',
   duration: 1000,
   position: 'bottom',
 });
 toast.present();
}

async showToastOnEmptyStreetAddress()
{
 const toast = await this.toastController.create({
   message: 'Enter Street Address ',
   duration: 1000,
   position: 'bottom',
 });
 toast.present();
}

async showToastOnEmptyTown()
{
 const toast = await this.toastController.create({
   message: 'Enter Town ',
   duration: 1000,
   position: 'bottom',
 });
 toast.present();
}

async showToastOnEmptyRegion()
{
 const toast = await this.toastController.create({
   message: 'Enter Region ',
   duration: 1000,
   position: 'bottom',
 });
 toast.present();
}

async showToastOnEmptyPostCode()
{
 const toast = await this.toastController.create({
   message: 'Enter Post Code ',
   duration: 1000,
   position: 'bottom',
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
                       
   
}  
  