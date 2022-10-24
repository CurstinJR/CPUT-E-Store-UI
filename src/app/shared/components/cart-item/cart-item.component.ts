import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../../features/models/product.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: ProductModel;
  @Output()
  removeProductFromCart = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  removeCartItem(cartItemId: number) {
    this.removeProductFromCart.emit(cartItemId);
  }
}
