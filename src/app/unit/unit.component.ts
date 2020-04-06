import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../shared/unit';
import { Player } from '../shared/player';
import { Shop } from '../shared/shop';
import { AppComponent } from '../app.component';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],
})
export class UnitComponent implements OnInit {
  @Input() unit: Unit;
  @Input() player: Player;
  @Input() shop: Shop;

  constructor() { }

  ngOnInit(): void {
  }

}
