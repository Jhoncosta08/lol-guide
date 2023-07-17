import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunesRoutingModule } from './runes-routing.module';
import {RunesComponent} from "./runes.component";
import {TitleDivisorModule} from "../../shared/title-divisor/title-divisor.module";
import {ViewRuneModule} from "./view-rune/view-rune.module";
import {GradientSpinnerModule} from "../../shared/gradient-spinner/gradient-spinner.module";


@NgModule({
  declarations: [
    RunesComponent
  ],
  imports: [
    CommonModule,
    RunesRoutingModule,
    TitleDivisorModule,
    ViewRuneModule,
    GradientSpinnerModule
  ]
})
export class RunesModule { }
