import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({ 
  selector: 'page-searchdata',
  templateUrl: 'searchdata.html',
})
export class SearchdataPage {

  strInputtedValue:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.strInputtedValue = navParams.get("input");

    console.log('received SearchdataPage' + this.strInputtedValue);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchdataPage');
  }

}
