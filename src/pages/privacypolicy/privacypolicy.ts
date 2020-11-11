import { HomePage } from './../home/home';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App } from 'ionic-angular';

/**
 * Generated class for the PrivacypolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privacypolicy',
  templateUrl: 'privacypolicy.html',
})
export class PrivacypolicyPage implements OnInit{

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public app: App) {
  }

  ngOnInit() {
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'PrivacypolicyPage') {
          if (nav.canGoBack()){
          } else {
              this.navCtrl.setRoot(HomePage);
          }
      }
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacypolicyPage');
  }

}
