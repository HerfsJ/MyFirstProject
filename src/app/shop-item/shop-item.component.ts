import { Component, OnInit, Input } from '@angular/core';
import { ShopItem } from '../shared/shop-item';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input()
  public item: ShopItem;

  constructor() { }

  ngOnInit(): void {
  }



}
