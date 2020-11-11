import { CategoryupdatedPage } from './../categoryupdated/categoryupdated';
import { RegisterPage } from './../register/register';
import { HttpClient } from '@angular/common/http';
import { HomePage } from './../home/home';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { Plugins } from '@capacitor/core';

/**
 * Generated class for the PaymentpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentpage',
  templateUrl: 'paymentpage.html',
})
export class PaymentpagePage implements OnInit {

  obj;  
  emailAddress = '';
  password = '';
  emailPattern="[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}"
  emailValidatorRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  userDataValue:number| string;
  strResponseCode: string;
  strUserData: string;  
  strId: string;

  loginModel = { 
    username: '', 
    password: '' ,
  };  
    
          

  constructor(public navController: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public alertController: AlertController,
              public toastController: ToastController,
              public loadingController: LoadingController,
              public httpClient: HttpClient,
              public navCtrl: NavController,
              public  app: App,

    ) {       
  }    



  async loginBtnClick() {
    console.log('Login Button clicked.');

     


    // Empty Email Validation
     if(this.emailAddress=== '')
    {
        this.showToastOnEmptyEmail();
    }
    // Empty Password Validation
    else if(this.password=== '')
    {
      this.showToastOnEmptyPassword();
    }
    // Invalid Email Validation
    else if (!this.emailValidatorRegex.test(this.emailAddress))
     {
        this.showToastOnInvalidEmailAddress();
     }

    // else if ((await Network.getStatus()).connectionType === 'none') {
    //   this.showNetworkAlert();
    //   console.log('Network status not available', this.networkStatus);
    // } 

    
    // Credentials filled 
    else 
     {
      this.showLoadingControllerLaunch();
     
      console.log('Value saved locally.');
     }
  }


  registerBtnClick() {
    this.navController.setRoot(RegisterPage);
  }
  

  ngOnInit() {
    this.showLoadingControllerLaunch1();
   

    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'DemoPage') {
          if (nav.canGoBack()){ 
          } else {
              const alert = this.alertController.create({
                  title: 'Exit App',
                  message: 'Are you sure?',
                  buttons: [{
                      text: 'Cancel',
                      role: 'cancel',
                      handler: () => {
                        this.navCtrl.setRoot('DemoPage');
                      }
                  },{
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


    public callLoginApi() {
     
      console.log('callLoginApi api called');
      const postParams = {email: this.emailAddress, password: this.password};
      this.httpClient.post('http://busybanda.com/sterling-tools/api/login', JSON.stringify(postParams)).subscribe(async (response: Response) => {
      
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
     
      if(this.obj.includes('Login Successfully'))
      {
        
        // this.showLoadingControllerSuccess();
        console.log('Json Response success ' + this.obj)

        console.log('Json Response status ' + this.obj.status)
        this.navController.setRoot(HomePage);

        // this.navController.setRoot(CategoryupdatedPage);

      }

      else
       {
      
       
        this.showLoadingControllerFailure();
        console.log('Json Response Failure ' + this.obj)
      }
       });
    }

    async showToastOnEmptyEmail()
     {
      const toast = await this.toastController.create({
        message: 'Enter Email ',
        duration: 1000,
        position: 'bottom',
      });
      toast.present();
    }

    async showToastOnEmptyPassword()
     {
      const toast = await this.toastController.create({
        message: 'Enter Password ',
        duration: 1000,
        position: 'bottom',
      });
      toast.present();
    }
    async showToastOnInvalidEmailAddress() 
    {
      const toast = await this.toastController.create({
        message: 'Invalid email address',
        duration: 1000,
        position: 'bottom',
      });
      toast.present();
    }

    async showLoadingControllerFailure() 
    {
      const toast = await this.toastController.create({
        message: 'Invalid username or password',
        duration: 1200,
        position: 'bottom',
      });
      toast.present();
    }

    async showLoadingControllerSuccess() 
    {
      const toast = await this.loadingController.create({
        content: 'Logged in successfully',
        duration: 300,
     
      });
      toast.present();
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


    private async exitAppAlert(): Promise<void> {
      // omitted;
      const alert = await this.alertController.create({
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
    }

   


    async showToastBackPress() 
    {
      const toast = await this.loadingController.create({
        content: 'Back Press successfully',
        duration: 5300,
     
      });
      toast.present();
    }

    
  } 


