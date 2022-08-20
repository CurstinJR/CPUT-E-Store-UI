import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./services/products.service";
import {ProductModel} from "./models/product.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-all-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe((response: ProductModel[]) => {
        this.products = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
}
