import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradientSpinnerComponent } from './gradient-spinner.component';



@NgModule({
  declarations: [
    GradientSpinnerComponent
  ],
  exports: [
    GradientSpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GradientSpinnerModule { }
