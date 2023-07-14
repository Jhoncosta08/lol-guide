import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionsComponent } from './champions.component';
import {ChampionProfileModule} from "./champion-profile/champion-profile.module";
import {TitleDivisorModule} from "../../shared/title-divisor/title-divisor.module";
import {GradientSpinnerModule} from "../../shared/gradient-spinner/gradient-spinner.module";


@NgModule({
  declarations: [
    ChampionsComponent
  ],
  imports: [
    CommonModule,
    ChampionProfileModule,
    ChampionsRoutingModule,
    TitleDivisorModule,
    GradientSpinnerModule
  ]
})
export class ChampionsModule { }
