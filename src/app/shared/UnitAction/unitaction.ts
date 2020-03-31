import { AppComponent } from 'src/app/app.component';
import { Unit } from '../unit';
import { ThrowStmt } from '@angular/compiler';
import { Gameservice } from 'src/app/services/gameservice';

export class Unitaction {

  public lastActionTimer = 0;

  public unit: Unit;
  public name = 'Standard Action';

  constructor() {
  }

  performAction() {
    if (Gameservice.currentGameTime >= this.getNextActionTimer()) {
      this.lastActionTimer = Gameservice.currentGameTime;
      this.performActionImpl();
    }
  }

  getNextActionTimer() {
    return this.lastActionTimer + this.getCooldown();
  }

  getCooldown() {
    return this.unit.baseSpeed * 1000;
  }

  performActionImpl() {
    console.log('Performing standard Action!');
  }

  resetActionTimer() {
    this.lastActionTimer = 0;
  }
}
