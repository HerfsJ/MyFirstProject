import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../shared/shop';
import { Unit } from '../shared/unit';
import { Player } from '../shared/player';

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

  getAvailableUnits() {
    return this.shop.getUnitPool();
  }

  buyUnit(unit: Unit) {
    this.shop.buyUnit(unit, this.player);
  }

}
