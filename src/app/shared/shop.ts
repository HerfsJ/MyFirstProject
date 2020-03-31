import { Unit } from './unit';
import { Player } from './player';
import { Unitaction } from './UnitAction/unitaction';
import { Unitactionwork } from './UnitAction/unitactionwork';
import { Unitactionattack } from './UnitAction/unitactionattack';
import { analyzeFileForInjectables } from '@angular/compiler';
import { Unitactionheal } from './UnitAction/unitactionheal';

export class Shop {

  private unitCreaterMap: Map<string, () => Unit>;
  private entireUnitPool: Unit[] = [];

  constructor() {
    this.initUnitPool();
  }

  initUnitPool() {
    this.unitCreaterMap = new Map<string,  any>();
    const createrFunctions = [
      this.buildUnitBasicWorker,
      this.buildUnitAttacker,
      this.buildUnitSarah,
      this.buildUnitHealer
    ];

    createrFunctions.forEach(f => {
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

  buyUnit(unit: Unit, player: Player) {
    const newUnit = this.unitCreaterMap.get(unit.getName()).apply(this);

    player.gold -= unit.baseCost;
    player.takeUnit(newUnit);
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
