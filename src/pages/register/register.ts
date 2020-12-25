/*
    Signup Screen Lasting Erp 21/10/2020
*/


import { DemoPage } from './../demo/demo';
import { HttpClient } from '@angular/common/http';
import { HomePage } from './../home/home';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { Plugins, NetworkStatus, PluginListenerHandle, Network } from "@capacitor/core";

@IonicPage()
@Component({  
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit{


  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;

  obj;
  emailAddress = '';
  userName = '';
  emailPattern="[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}"
  emailValidatorRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform,
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public httpClient: HttpClient,
    public  app: App,
    public alertCtrl: AlertController

    ) {
      
     
  }
  
  
     

  backBtnClick() {
    this.navCtrl.setRoot(DemoPage);
  }

  async registerBtnClick() {
    console.log('Register Button clicked.');

    // Empty Email Validation
    if(this.emailAddress=== '')
    {
        this.showToastOnEmptyEmail();
    }
    // Empty Password Validation
    else if(this.userName=== '')
    {
      this.showToastOnEmptyName();
    }
    // Invalid Email Validation
    else if (!this.emailValidatorRegex.test(this.emailAddress))
     {
        this.showToastOnInvalidEmailAddress();
     }

     else if ((await Network.getStatus()).connectionType === 'none') {
      this.showNetworkAlert();
      console.log('Network status not available', this.networkStatus);
    } 
    // Credentials filled 
    else 
     {
      this.showLoadingControllerLaunch();
      console.log('Value saved locally.');
     }
  }

  ngOnInit() {
    this.showLoadingControllerLaunch1();

    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'RegisterPage') {
          if (nav.canGoBack()){  
          } else {
              this.navCtrl.setRoot(DemoPage);
          }
      }
  });   

  }
 


    public callRegisterApi() {
      console.log('callRegisterApi api called');
      const postParams = {email: this.emailAddress, name: this.userName};
      this.httpClient.post('http://busybanda.com/sterling-tools/api/user_register', JSON.stringify(postParams)).subscribe((jsonResponse) => {
      console.log('test' + jsonResponse);
      this.obj = JSON.stringify(jsonResponse);
      const parsedData = JSON.parse(this.obj);
      status = parsedData.Status;
      console.log('status'  + this.obj );
      if(this.obj.includes('User Register Successfully'))
      {
        console.log('Json Response success ' + this.obj)
       
        const toast = this.toastController.create({ message: 'User Registered successfully',duration: 900});
        toast.present();

        this.navCtrl.setRoot(DemoPage);
      }
  
      else
       {
      
        const toast = this.toastController.create({message: 'Email already registered', duration: 1200});
        toast.present();
        console.log('Json Response Failure ' + this.obj)
      }
       });
    }

    async showToastOnEmptyEmail()
     {
      const toast = await this.toastController.create({
        message: 'Enter Email ',
        duration: 10000,
        position: 'bottom',
      });
      toast.present();
    }

    async showToastOnEmptyName()
     {
      const toast = await this.toastController.create({
        message: 'Enter Name ',
        duration: 10000,
        position: 'bottom',
      });
      toast.present();
    }
    async showToastOnInvalidEmailAddress() 
    {
      const toast = await this.toastController.create({
        message: 'Invalid email address',
        duration: 10000,
        position: 'bottom',
      });
      toast.present();
    }

    async showToastOnPageLoad() 
    {
      const toast = await this.toastController.create({
        message: 'Please wait! ',
        duration: 400,
        position: 'bottom',
      });
      toast.present();
    }

    private async showNetworkAlert(): Promise<void> {
      // omitted;
      const alert = await this.alertController.create({
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




    async showToastOnBackSignUp() 
    {
      const toast = await this.toastController.create({
        message: 'Disabled Back Button',
        duration: 10000,
        position: 'bottom',
      });
      toast.present();
    }
  } 





