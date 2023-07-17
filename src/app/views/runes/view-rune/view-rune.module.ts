import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRuneComponent } from './view-rune.component';
import {GradientSpinnerModule} from "../../../shared/gradient-spinner/gradient-spinner.module";
import {TitleDivisorModule} from "../../../shared/title-divisor/title-divisor.module";



@NgModule({
  declarations: [
    ViewRuneComponent
  ],
  imports: [
    CommonModule,
    GradientSpinnerModule,
    TitleDivisorModule
  ]
})
export class ViewRuneModule { }
