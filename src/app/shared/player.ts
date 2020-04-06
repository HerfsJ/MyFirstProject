import { Unit } from './unit';
import { PerformsAction } from './performs-action';
import { AppComponent } from '../app.component';

export class Player implements PerformsAction {
  hp = 1000;
  gold = 50;
  currentTarget: Player;

  ownedUnits: Unit[] = [];
  private app: AppComponent;
  constructor(private name: string, private computer: boolean) {

  }

  takeUnit(unit: Unit) {
    unit.owner = this;
    this.ownedUnits.push(unit);
  }

  loseUnit(unit: Unit) {
    this.ownedUnits = this.ownedUnits.filter(u => u !== unit);
  }

  performAction(): void {
    this.ownedUnits.forEach((unit) => unit.performAction());
  }

  getIsComputer() {
    return this.computer;
  }

  getName() {
    return this.name;
  }

  getGold() {
    return this.gold;
  }


  gethp() {
    return this.hp;
  }

  takeDmg(dmg: number) {
    this.hp -= dmg;
  }

}
