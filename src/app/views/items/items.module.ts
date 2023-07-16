import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import {ItemsComponent} from "./items.component";
import {TitleDivisorModule} from "../../shared/title-divisor/title-divisor.module";


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    TitleDivisorModule
  ]
})
export class ItemsModule { }
