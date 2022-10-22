import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {

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
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
