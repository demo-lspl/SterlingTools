import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppconstantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appconstants',
  templateUrl: 'appconstants.html',
})
export class AppconstantsPage implements OnInit {

  gerProductsUrl: 'http://busybanda.com/sterling-tools/api/get_products/';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ngOnInit(){
    

  }

 

}
