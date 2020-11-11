import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PasswordPage } from '../password/password';
@Component({
  selector: 'page-phonenumber ',
  templateUrl: 'phonenumber.html'
})
export class PhonenumberPage implements OnInit{

  constructor(public navCtrl: NavController,public loadingController: LoadingController) {

  }    
 
  

ngOnInit() {

  this.showLoadingControllerLaunch();

}

  
    homePage(){
    this.navCtrl.push(HomePage);
    }
    passwordPage(){
    this.navCtrl.push(PasswordPage);
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
}
