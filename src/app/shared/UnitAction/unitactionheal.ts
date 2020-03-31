import { Unitaction } from './unitaction';

export class Unitactionheal extends Unitaction {
  name = 'Heal';

  performActionImpl() {
      this.unit.owner.ownedUnits[0].takeHeal(this.unit.basePower);
  }
}
