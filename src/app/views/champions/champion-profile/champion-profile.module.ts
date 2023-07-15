import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionProfileComponent } from './champion-profile.component';
import {GradientSpinnerModule} from "../../../shared/gradient-spinner/gradient-spinner.module";
import {TitleDivisorModule} from "../../../shared/title-divisor/title-divisor.module";
import {ChampionSkillsModule} from "./champion-skills/champion-skills.module";



@NgModule({
  declarations: [
    ChampionProfileComponent
  ],
    imports: [
      CommonModule,
      GradientSpinnerModule,
      TitleDivisorModule,
      ChampionSkillsModule
    ]
})
export class ChampionProfileModule { }
