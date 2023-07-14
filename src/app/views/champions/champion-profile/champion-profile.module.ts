import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionProfileComponent } from './champion-profile.component';
import {GradientSpinnerModule} from "../../../shared/gradient-spinner/gradient-spinner.module";



@NgModule({
  declarations: [
    ChampionProfileComponent
  ],
    imports: [
        CommonModule,
        GradientSpinnerModule
    ]
})
export class ChampionProfileModule { }
