import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-all-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {

  // products: ProductModel[] = [];

  products: { name: string, price: number, image: string; }[] = [
    {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    },
    {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    },
    {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    },
    {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    },
    {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    },
    {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    }, {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    },
    {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    },
    {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    },
    {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    },
    {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    },
    {
      name: "Product Name",
      price: 123.15,
      image: "https://picsum.photos/200"
    }
  ];

  categoryFilters: string[] = ["All", "Apparels", "Accessories"];


  constructor() {
  }

  ngOnInit(): void {
  }

}
