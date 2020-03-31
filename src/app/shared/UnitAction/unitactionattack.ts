import { Unitaction } from './unitaction';
import { Gameservice } from 'src/app/services/gameservice';

export class Unitactionattack extends Unitaction {
  name = 'Attack';

  performActionImpl() {
    if (this.unit.owner.currentTarget.ownedUnits[0]) {
      this.unit.owner.currentTarget.ownedUnits[0].takeDmg(this.unit.basePower);
    } else {
      this.resetActionTimer();
    }
  }
}
