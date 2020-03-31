import { Player } from './player';
import { PerformsAction } from './performs-action';
import { Unitmodifier } from './unitmodifier';
import { Unitaction } from './UnitAction/unitaction';
import { AppComponent } from '../app.component';
import { ThrowStmt } from '@angular/compiler';

export class Unit {
  originalUnit: Unit;
  owner: Player;
  mods: Unitmodifier[] = [];
  actions: Unitaction[] = [];
  private app: AppComponent;
  public currentHP: number;

  constructor(public name: string, public baseCost: number, public basePower: number, public baseSpeed: number, public basehp: number) {
    this.currentHP = basehp;
  }

  getName() {
    return this.name;
  }

  addAction(action: Unitaction) {
    action.unit = this;
    this.actions.push(action);
    return this;
  }

  isAvailable(player: Player) {
      return player.getGold() >= this.baseCost;
  }

  performAction(): void {
    this.actions.forEach((action) => action.performAction());
  }

  takeDmg(dmg: number): void {
    this.currentHP -= dmg;
    if (this.currentHP <= 0) {
      this.die();
    }
  }

  takeHeal(heal: number) {
    this.currentHP = Math.min(this.currentHP + heal, this.basehp);
  }

  die() {
    this.owner.loseUnit(this);
  }
}
