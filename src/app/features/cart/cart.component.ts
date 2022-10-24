import {Component, OnInit} from "@angular/core";
import {ProductModel} from "../models/product.model";
import {LocalCartService} from "../services/local-cart.service";

type CartSummary = {
  items: number,
  subTotal: number,
  vat: number,
  total: number
};

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {

  cartItems: ProductModel[];
  cartSummary: CartSummary;

  constructor(private localCartService: LocalCartService) {
    this.getAllCartItems();
    this.calculateCartSummary();
  }

  ngOnInit(): void {
  }

  getAllCartItems() {
    return this.localCartService.getAllCartItems()
      .subscribe((data) => this.cartItems = data);
  }

  removeCartItem(cartItemId: number) {
    this.localCartService.removeProductFromCart(cartItemId);
  }

  calculateCartSummary() {
    this.localCartService.getAllCartItems().subscribe((data) => {
      const price: number = data.map(cartItem => cartItem.price)
        .reduce((previousPrice, currentPrice,) => previousPrice + currentPrice, 0);
      let vat = price * 15 / 115;
      this.cartSummary = {
        items: this.cartItems.length,
        subTotal: this.roundOffTwoDecimals(price - vat),
        vat: this.roundOffTwoDecimals(vat),
        total: this.roundOffTwoDecimals(price)
      }
    });
  }

  roundOffTwoDecimals(value: number) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  }

}
