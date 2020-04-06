import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../shared/shop';
import { Unit } from '../shared/unit';
import { Player } from '../shared/player';
import { ShopItem } from '../shared/shop-item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() shop: Shop;
  @Input() player: Player;
  constructor() { }

  ngOnInit(): void {
  }

  getAvailableItems() {
    return this.shop.getItemPool();
  }

  buy(item: ShopItem) {
    this.shop.buyItem(item, this.player);
  }

}
