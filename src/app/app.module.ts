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

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ShopComponent,
    UnitComponent,
    PlayerUnitsComponent,
    UnitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Gameservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
