import {Component, OnInit} from "@angular/core";
import {ProductModel} from "../models/product.model";
import {LocalCartService} from "../services/local-cart.service";
import {ProductsService} from "../services/products.service";

@Component({
  selector: "app-all-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];

  categoryFilters: string[] = ["All", "Apparels", "Accessories"];

  constructor(private productService: ProductsService,
              private localCartService: LocalCartService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService
      .getAll()
      .subscribe((data) => {
        this.products = data;
      })
  }

  onAddProductToCart(product: ProductModel) {
    this.localCartService.addProductToCart(product);
  }

}
