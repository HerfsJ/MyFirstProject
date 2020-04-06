import { Player } from './player';
import { Shop } from './shop';

export class ShopItem {
  constructor(public shop: Shop, public object: any, public name: string) {

  }

}
