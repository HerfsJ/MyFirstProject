import { Unit } from './unit';
import { Player } from './player';
import { Unitaction } from './UnitAction/unitaction';
import { Unitactionwork } from './UnitAction/unitactionwork';
import { Unitactionattack } from './UnitAction/unitactionattack';
import { analyzeFileForInjectables } from '@angular/compiler';
import { Unitactionheal } from './UnitAction/unitactionheal';
import { ShopItem } from './shop-item';

export class Shop {

  public itemPool: ShopItem[] = [];

  constructor() {

  }

  buyItem(item: ShopItem, player: Player) {
    console.log('Buying item in shop');
  }

  toShopItem() {
    return new ShopItem(this, null, 'Shop.ts');
  }

  getItemPool(): ShopItem[] {
    return this.itemPool;
  }

  initItemPool() {

  }
}
