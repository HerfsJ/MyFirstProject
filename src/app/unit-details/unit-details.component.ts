import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../shared/unit';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.css']
})
export class UnitDetailsComponent implements OnInit {
  @Input() unit: Unit;

  constructor() { }

  ngOnInit(): void {
  }

}
