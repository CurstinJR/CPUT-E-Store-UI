import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: { name: string, price: number, image: string; };
  @Input()
  showAddCartBtn: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
