import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Shop } from '../shared/shop';
import { Gameservice } from '../services/gameservice';

@Component({
  selector: 'app-shop-selector',
  templateUrl: './shop-selector.component.html',
  styleUrls: ['./shop-selector.component.css']
})
export class ShopSelectorComponent implements OnInit {
  @Input() public shops: Shop[];
  @Input() public gameservice: Gameservice;

  constructor() { }

  ngOnInit(): void {
  }

  click(shop: Shop) {
    console.log('Selecting a shop');
    this.gameservice.clickedShop = shop;
  }

}
