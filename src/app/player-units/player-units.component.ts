import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../shared/player';
import { AppComponent } from '../app.component';
import { Unit } from '../shared/unit';

@Component({
  selector: 'app-player-units',
  templateUrl: './player-units.component.html',
  styleUrls: ['./player-units.component.css']
})
export class PlayerUnitsComponent implements OnInit {
  @Input() player: Player;
  constructor(private app: AppComponent) { }

  ngOnInit(): void {
    console.log(this.app);
  }

  selectUnit(unit: Unit) {
    this.app.gameService.clickedUnit = unit;
  }

}
