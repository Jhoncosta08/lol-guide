import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunesRoutingModule } from './runes-routing.module';
import {RunesComponent} from "./runes.component";
import {TitleDivisorModule} from "../../shared/title-divisor/title-divisor.module";


@NgModule({
  declarations: [
    RunesComponent
  ],
  imports: [
    CommonModule,
    RunesRoutingModule,
    TitleDivisorModule
  ]
})
export class RunesModule { }
