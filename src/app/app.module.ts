import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ShopComponent } from './shop/shop.component';
import { UnitComponent } from './unit/unit.component';
import { PlayerUnitsComponent } from './player-units/player-units.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { Gameservice } from './services/gameservice';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopSelectorComponent } from './shop-selector/shop-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ShopComponent,
    UnitComponent,
    PlayerUnitsComponent,
    UnitDetailsComponent,
    ShopItemComponent,
    ShopSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [Gameservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
