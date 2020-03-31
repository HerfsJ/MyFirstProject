import { Unitaction } from './unitaction';

export class Unitactionwork extends Unitaction{
  name = 'Work';

  performActionImpl() {
    this.unit.owner.gold += this.unit.basePower;
  }
}
