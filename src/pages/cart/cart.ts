import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-cart ',
  templateUrl: 'cart.html'
})
export class CartPage {

  cart: any[];
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  }  

  removeFromCart(index: number) {
    this.cart.slice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
