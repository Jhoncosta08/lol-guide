import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionsComponent } from './champions.component';
import {ChampionProfileModule} from "./champion-profile/champion-profile.module";


@NgModule({
  declarations: [
    ChampionsComponent
  ],
  imports: [
    CommonModule,
    ChampionProfileModule,
    ChampionsRoutingModule
  ]
})
export class ChampionsModule { }
