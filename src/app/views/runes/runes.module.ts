import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunesRoutingModule } from './runes-routing.module';
import {RunesComponent} from "./runes.component";


@NgModule({
  declarations: [
    RunesComponent
  ],
  imports: [
    CommonModule,
    RunesRoutingModule
  ]
})
export class RunesModule { }
