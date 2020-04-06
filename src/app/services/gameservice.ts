import { Player } from '../shared/player';
import { Unit } from '../shared/unit';
import { Shop } from '../shared/shop';
import { Injectable } from '@angular/core';
import { BasicUnitShop } from '../shared/basic-unit-shop';
import { AdvancedUnitShop } from '../advanced-unit-shop';

@Injectable()
export class Gameservice {
  public static currentGameTime: number;

  private static loopTime = 50;

  title = 'my-first-project';
  player1: Player;
  cpu: Player;
  shops: Shop[] = [];
  basicUnitShop: BasicUnitShop;
  clickedUnit: Unit;
  clickedShop: Shop;

  constructor() {
    this.initUnitPool();
    this.basicUnitShop = new BasicUnitShop();
    this.shops.push(this.basicUnitShop);
    this.shops.push(new AdvancedUnitShop());
    this.initCPU();
    this.initPlayer();

    this.cpu.currentTarget = this.player1;
    this.player1.currentTarget = this.cpu;
    this.clickedShop = this.basicUnitShop;

    this.startGameLoop();
  }

  initUnitPool() {
  }

  initCPU() {
    this.cpu = new Player('Computer', true);
    this.cpu.takeUnit(this.basicUnitShop.buildUnitBasicWorker());
    this.cpu.takeUnit(this.basicUnitShop.buildUnitAttacker());
    this.cpu.takeUnit(this.basicUnitShop.buildUnitAttacker());
  }

  initPlayer() {
    this.player1 = new Player('Spieler 1', false);
  }

  startGameLoop() {
    Gameservice.currentGameTime = 0;

    setInterval(() => {
      this.player1.performAction();
      this.cpu.performAction();
      Gameservice.currentGameTime += Gameservice.loopTime;
    }, Gameservice.loopTime);
  }

}
