import {Component, OnInit} from "@angular/core";
import {ProductModel} from "../models/product.model";
import {ProductsService} from "../services/products.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {

  products$: ProductModel[] = [];

  constructor(private productService: ProductsService) {
  }

  public get highlightProducts() {
    return this.products$.filter((item, index) => index > 5);
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.productService
      .getAll()
      .subscribe((data) => {
        this.products$ = data;
      })
  }

}
