import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { PaymentPage } from '../payment/payment';
@Component({
  selector: 'page-shippining ',
  templateUrl: 'shippining.html'
})
export class ShippiningPage {

  constructor(public navCtrl: NavController) {

  }
  
     paymentPage() {
    this.navCtrl.push(PaymentPage);
  }

}
