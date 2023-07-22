import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionRunesComponent } from './champion-runes.component';
import {GradientSpinnerModule} from "../../../../shared/gradient-spinner/gradient-spinner.module";
import {TitleDivisorModule} from "../../../../shared/title-divisor/title-divisor.module";



@NgModule({
  declarations: [
    ChampionRunesComponent
  ],
  exports: [
    ChampionRunesComponent
  ],
  imports: [
    CommonModule,
    GradientSpinnerModule,
    TitleDivisorModule,
  ]
})
export class ChampionRunesModule { }
