import { Shop } from './shared/shop';
import { Unitshop } from './unitshop';
import { Unit } from './shared/unit';
import { Unitactionwork } from './shared/UnitAction/unitactionwork';

export class AdvancedUnitShop extends Unitshop {
  initCreaterFunctions() {
    this.createrFunctions = [
      this.buildUnitAdvancedWorker
    ];
  }

  buildUnitAdvancedWorker(): Unit {
    return new Unit('Advanced Worker', 30, 10, 0.9, 10).addAction(new Unitactionwork());
  }
}
