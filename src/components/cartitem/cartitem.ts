import { ProductComponent } from './../product/product';
import { Component } from '@angular/core';

/**
 * Generated class for the CartitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cartitem',
  templateUrl: 'cartitem.html'
})
export class CartitemComponent {

  text: string;
  product: ProductComponent;
  productId: string | number;
  price: number;
  qty: number = 0;

  



  subtotal() {
    return this.price * this.qty;
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }


}
