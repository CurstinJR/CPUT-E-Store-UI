import {Injectable} from '@angular/core';
import {ProductModel} from "../models/product.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalCartService {

  public cartItems: ProductModel[] = [];
  public cartItems$: Observable<ProductModel[]>;
  private cartItemsSubject: BehaviorSubject<ProductModel[]>;

  constructor() {
    // @ts-ignore
    this.cartItemsSubject = new BehaviorSubject<ProductModel>(JSON.parse(localStorage.getItem("cartItems")));
    this.cartItems$ = this.cartItemsSubject.asObservable();
  }

  addProductToCart(product: ProductModel) {
    if (!this.cartItems.includes(product, 0)) {
      this.cartItems.push(product);
      this.cartItemsSubject.next(this.cartItems);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    }
    return null;
  }

  getAllCartItems(): Observable<ProductModel[]> {
    return this.cartItems$;
  }

  removeProductFromCart(cartItemId: number) {
    // @ts-ignore
    const serializeCartItems = JSON.parse(localStorage.getItem("cartItems"));
    let indexOfCartItem = serializeCartItems.findIndex((cartItems: ProductModel) => {
      return cartItems.id === cartItemId;
    });
    if (indexOfCartItem !== -1) {
      serializeCartItems.splice(indexOfCartItem, 1);
      this.cartItems = serializeCartItems;
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      this.cartItemsSubject.next(serializeCartItems);
    }
  }
}
