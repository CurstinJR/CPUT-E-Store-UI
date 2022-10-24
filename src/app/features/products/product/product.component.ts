import {Component, OnInit} from "@angular/core";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../../models/product.model";
import {LocalCartService} from "../../services/local-cart.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {

  public product: ProductModel;

  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute,
              private localCartService: LocalCartService) {
  }

  ngOnInit(): void {
    this.loadSelectedProduct();
  }

  loadSelectedProduct() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id')!;
      this.productsService.getById(id).subscribe(data => this.product = data);
    });
  }

  addProductToCart(product: ProductModel) {
    this.localCartService.addProductToCart(product);
  }

}
