import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../../features/models/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: ProductModel;
  @Input()
  public showAddCartBtn: boolean = false;
  @Output()
  public addProductToCart = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  addCartItem(product: ProductModel) {
    this.addProductToCart.emit(product);
  }

}
