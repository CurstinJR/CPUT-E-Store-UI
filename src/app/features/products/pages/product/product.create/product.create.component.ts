import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {ProductModel} from "../../../models/product.model";
import {ProductsModule} from "../../../products.module";

@Component({
  selector: 'app-product.create',
  templateUrl: './product.create.component.html',
  styleUrls: ['./product.create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  getNewProductData(){
    let productName = document.getElementById("productName") as HTMLInputElement
    let productId = document.getElementById("productId") as HTMLInputElement
    let productPrice = document.getElementById("productPrice") as HTMLInputElement
    let description = document.getElementById("description") as HTMLInputElement;

    console.log(productId.value)
    console.log(productName.value)
    console.log(productPrice.value)
    console.log(description.value)

  }
}
// Integer id;
// private String name;
// private String description;
// private BigDecimal price;
// private LocalDateTime createdAt;
// private LocalDateTime modifiedAt;
