import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-my_account ',
  templateUrl: 'my_account.html'
})
export class My_accountPage implements OnInit{
 account: string = "profile";

 emailAddress;
 userRegistered;
 obj;
 strDataUserLogin:string;
 strDataUserEmail:string;
 strDataUserRegistered: string;
 strDisplayName:string;
 strResult:string;
 strStatus:string;



  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public httpClient: HttpClient,
    public loadingController: LoadingController) {
    // console.log('Value' + localStorage.getItem('Email'));
    // console.log('User Id Value' + localStorage.getItem('Userid value'));
    this.emailAddress = localStorage.getItem('Email');
    this.userRegistered = '2020-07-03 07:27:20 ';
  }

  

ngOnInit(){


  this.viewCartApi();
  this.showLoadingControllerLaunch1();

  //console.log('Value' + localStorage.getItem('Email'));
  this.emailAddress = localStorage.getItem('Email');
  this.userRegistered = '2020-07-03 07:27:20 ';


  // this.httpClient.get('http://busybanda.com/sterling-tools/api/get_current_user_data/')
  this.httpClient.get('http://busybanda.com/sterling-tools/api/get_current_user_data?' +  'id=' +localStorage.getItem('Userid value'))
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
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  
  
    cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }

  viewCartApi(){
    this.httpClient.get('http://busybanda.com/sterling-tools/api/get_current_cart?' +  'id=' +localStorage.getItem('Userid value'))
    .subscribe((jsonResponse) => {
     
      this.obj = JSON.stringify(jsonResponse);
      const parsedData1 = JSON.parse(this.obj);
      status = parsedData1.status;
      this.strStatus = parsedData1.status;
      console.log('All Json response' + this.obj)
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

  
}
  