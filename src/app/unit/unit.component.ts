import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../shared/unit';
import { Player } from '../shared/player';
import { Shop } from '../shared/shop';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  @Input() unit: Unit;
  @Input() player: Player;
  @Input() shop: Shop;

  constructor() { }

  ngOnInit(): void {
  }

}
