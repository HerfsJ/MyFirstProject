import { Shop } from './shop';
import { Unit } from './unit';
import { Player } from './player';
import { Unitactionwork } from './UnitAction/unitactionwork';
import { Unitactionattack } from './UnitAction/unitactionattack';
import { Unitactionheal } from './UnitAction/unitactionheal';
import { ShopItem } from './shop-item';
import { Unitshop } from '../unitshop';

export class BasicUnitShop extends Unitshop {

  initCreaterFunctions() {
    this.createrFunctions = [
      this.buildUnitBasicWorker,
      this.buildUnitAttacker,
      this.buildUnitSarah,
      this.buildUnitHealer
    ];
  }

  buildUnitBasicWorker(): Unit {
    return new Unit('Basic Worker', 5, 1, 1, 10).addAction(new Unitactionwork());
  }

  buildUnitAttacker(): Unit {
    return new Unit('Basic Attacker', 5, 1, 1, 10).addAction(new Unitactionattack());
  }

  buildUnitSarah() {
    return new Unit('Sarah', 10, 10, 2, 10)
    .addAction(new Unitactionwork())
    .addAction(new Unitactionattack());
  }

  buildUnitHealer() {
    return new Unit('Basic Healer', 5, 1, 1, 10).addAction(new Unitactionheal());
  }
}
