import { Component, OnInit, Input, HostBinding } from '@angular/core';
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
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0px)' })),

      transition(':enter', [
        style({ transform: 'translateY(50px)', 'background-color': 'yellow'}),
        animate(500)
      ]),
      transition(':leave', [
        animate(500, style({ transform: 'translateY(50px)', 'background-color': 'red' }))
      ])
    ]),
    trigger('hpchange', [
      state('Damaged', style({ 'background-color': 'red' })),
      state('in', style({ 'background-color': 'none' })),
      state('Healed', style({ 'background-color': 'green' })),
      transition('* => *', [
        animate(500),
      ])
    ])
  ]
})
export class UnitComponent implements OnInit {
  @Input() unit: Unit;
  @Input() player: Player;
  @Input() shop: Shop;

  @HostBinding('@flyInOut') get getFlyInOut(): string {
    return 'in';
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

