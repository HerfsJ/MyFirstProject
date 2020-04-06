import { Shop } from './shared/shop';
import { ShopItem } from './shared/shop-item';
import { Player } from './shared/player';
import { Unit } from './shared/unit';

export class Unitshop extends Shop {
  protected unitCreaterMap: Map<string, () => Unit>;
  protected entireUnitPool: Unit[] = [];
  protected createrFunctions = [];

  constructor() {
    super();
    this.initUnitPool();
    this.initItemPool();
  }


  initCreaterFunctions() {

  }

  initUnitPool() {
    this.initCreaterFunctions();
    this.unitCreaterMap = new Map<string,  any>();


    this.createrFunctions.forEach(f => {
      const unit = f.apply(this);
      this.unitCreaterMap.set(unit.getName(), f);
    });

    this.unitCreaterMap.forEach((value, key) => {
      this.entireUnitPool.push(value.apply(this));
    });

  }

  getUnitPool() {
    return this.entireUnitPool;
  }

  buyItem(item: ShopItem, player: Player) {
    this.buyUnit(item.object, player);
  }

  buyUnit(unit: Unit, player: Player) {
    const newUnit = this.unitCreaterMap.get(unit.getName()).apply(this);

    player.gold -= unit.baseCost;
    player.takeUnit(newUnit);
  }

  initItemPool() {
    this.itemPool = this.entireUnitPool.map(unit => new ShopItem(this, unit, unit.getName()));
  }


}
