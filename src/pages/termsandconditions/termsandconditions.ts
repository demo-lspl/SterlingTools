import { HomePage } from './../home/home';
import { DemoPage } from './../demo/demo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App, AlertController } from 'ionic-angular';



/**
 * Generated class for the TermsandconditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-termsandconditions',
  templateUrl: 'termsandconditions.html',
})
export class TermsandconditionsPage {
  



  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,
    public app: App,
    public alertCtrl: AlertController) {

   
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'TermsandconditionsPage') {
          if (nav.canGoBack()){
          } else {
              this.navCtrl.setRoot(HomePage);
          }
      }
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsandconditionsPage');
  }

}
