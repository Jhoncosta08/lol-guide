import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleDivisorComponent} from "./title-divisor.component";



@NgModule({
  declarations: [
    TitleDivisorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleDivisorComponent
  ]
})
export class TitleDivisorModule { }
