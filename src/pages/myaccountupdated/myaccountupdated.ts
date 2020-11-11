import { ViewcartPage } from './../viewcart/viewcart';
import { WishlistupdatedPage } from './../wishlistupdated/wishlistupdated';
import { HomePage } from './../home/home';
import { ApiProvider } from './../../providers/api/api';
import { HttpClient } from '@angular/common/http';
import { LoadingController, Platform, ToastController, App } from 'ionic-angular';
/**
 * Generated class for the MyaccountupdatedPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-myaccountupdated',
  templateUrl: 'myaccountupdated.html',
})
export class MyaccountupdatedPage implements OnInit {
  account: string = "profile";
  emailAddress;
  userRegistered;
  obj;
  strDataUserLogin:string;
  strDataUserEmail:string;
  strDataUserRegistered: string;
  strDataUserTest:string;
  strDataUserTest1:string;
  strDisplayName:string;
  strResult:string;
  strStatus:string;
  toggleState:boolean;  
  viewCartList: any = [];
  strData: string;
  countProducts:number|any;
  buttonIcon: string ;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public loadingController: LoadingController,
              public httpClient: HttpClient,
              public platform: Platform,
              public toastController: ToastController,
              public apiProvider: ApiProvider,
              public app: App
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaccountupdatedPage');
  }

  ngOnInit(){

    this.viewCartApi();
    this.showLoaderPageLoad();
    this.httpClient.get('http://busybanda.com/sterling-tools/api/get_current_user_data?' +  'id=' + localStorage.getItem('Userid value'))
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
          if(activeView.name === 'MyaccountupdatedPage') {
              if (nav.canGoBack()){
              } else {
                  this.navCtrl.setRoot(HomePage);
              }
          }
      });
  } 
    
   
   
    


  async viewCartApi() {            
    try {
      const service = this.apiProvider.getTest1();  
      service.subscribe(async (data) => {
        if (data) {
          const resultado = data;
          this.viewCartList = resultado;     
          this.obj = JSON.stringify(data);
          console.log('All Json Response' + this.obj);
           this.strData = 'No Products in Cart';  
           if(this.viewCartList.length>=1) {
            console.log('Cart Filled ');
            this.countProducts = this.viewCartList.length;
             this.buttonIcon = "cart";
           }
  
           else{
            console.log('Cart Empty ');
           this.countProducts = 'Empty';
           }
        } else {
        }
  
      });
    } catch (error) {}
  }


  
  wishlistPage() {
    this.navCtrl.push(WishlistupdatedPage);
  }

  cartPage() {
    this.navCtrl.push(ViewcartPage);
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


 async showToastBackPress() {
  const toast = await this.toastController.create({
    message: 'Back press account page',
    duration: 5000,
    position: 'bottom',
  });
  toast.present();
  
  
   
  }

  update(){
    console.log("invoking notification");
    this.toggleState = true;
   }


 

}
