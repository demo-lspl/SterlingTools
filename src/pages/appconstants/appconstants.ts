import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

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

  // users: any;

  users: any = [];  

  gerProductsUrl: 'http://busybanda.com/sterling-tools/api/get_products/';

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public data: ApiProvider) {
  }


  ngOnInit(){
    this.data.getData1().subscribe(res => {
      this.users = res.results;
  })

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.data.getData1().subscribe(res => {
        for (let user of res.results) {
          this.users.push(user)
        }
      });
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000)  
  }

 

}
