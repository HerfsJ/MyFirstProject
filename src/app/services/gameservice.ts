import { Player } from '../shared/player';
import { Unit } from '../shared/unit';
import { Shop } from '../shared/shop';
import { Injectable } from '@angular/core';

@Injectable()
export class Gameservice {
  public static currentGameTime: number;

  private static loopTime = 50;

  title = 'my-first-project';
  player1: Player;
  cpu: Player;
  shop: Shop;
  clickedUnit: Unit;

  constructor() {
    this.initUnitPool();
    this.shop = new Shop();
    this.initCPU();
    this.initPlayer();

    this.cpu.currentTarget = this.player1;
    this.player1.currentTarget = this.cpu;

    this.startGameLoop();
  }

  initUnitPool() {
  }

  initCPU() {
    this.cpu = new Player('Computer', true);
    this.cpu.takeUnit(this.shop.buildUnitBasicWorker());
    this.cpu.takeUnit(this.shop.buildUnitAttacker());
    this.cpu.takeUnit(this.shop.buildUnitAttacker());

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
