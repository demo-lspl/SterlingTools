import { Component } from '@angular/core';
import { CartitemComponent } from '../cartitem/cartitem';

/**
 * Generated class for the CartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cart',
  templateUrl: 'cart.html'
})
export class CartComponent {

  cartItems: CartitemComponent[] = [];

  public total() {
    return this.cartItems
      .map((item) => item.subtotal())
      .reduce((previous, current) => previous + current, 0);;
  }

}