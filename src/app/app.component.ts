import { Component, OnInit, Injectable } from '@angular/core';
import { Player } from './shared/player';
import { Unit } from './shared/unit';
import { Shop } from './shared/shop';
import { ThrowStmt } from '@angular/compiler';
import { Unitaction } from './shared/UnitAction/unitaction';
import { Gameservice } from './services/gameservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {

  constructor(public gameService: Gameservice) {

  }

  getGameTime(): number {
    return Math.round(Gameservice.currentGameTime / 1000);
  }


}
