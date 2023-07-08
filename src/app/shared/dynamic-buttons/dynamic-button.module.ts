import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicButtonComponent} from "./dynamic-button.component";



@NgModule({
  declarations: [
    DynamicButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicButtonComponent
  ]
})
export class DynamicButtonModule { }
