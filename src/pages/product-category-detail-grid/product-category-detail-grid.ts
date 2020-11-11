import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductCategoryDetailGridPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-category-detail-grid',
  templateUrl: 'product-category-detail-grid.html',
})
export class ProductCategoryDetailGridPage {

  strData:string;
  strProductCategoryGridId:string;
  strProductCategoryGridName:string;
  strProductCategoryGridURL:string;



  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    this.strProductCategoryGridId = navParams.get("catId");
    this.strProductCategoryGridURL = navParams.get("url");

    console.log('Received Id ' + this.strProductCategoryGridId);
    console.log('Received URL ' + this.strProductCategoryGridURL);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductCategoryDetailGridPage');

    
  }

}
