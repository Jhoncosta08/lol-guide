import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionProfileComponent } from './champion-profile.component';
import {GradientSpinnerModule} from "../../../shared/gradient-spinner/gradient-spinner.module";
import {TitleDivisorModule} from "../../../shared/title-divisor/title-divisor.module";
import {ChampionSkillsModule} from "./champion-skills/champion-skills.module";
import {ChampionSkinsModule} from "./champion-skins/champion-skins.module";
import {ChampionRunesModule} from "./champion-runes/champion-runes.module";



@NgModule({
  declarations: [
    ChampionProfileComponent
  ],
    imports: [
      CommonModule,
      GradientSpinnerModule,
      TitleDivisorModule,
      ChampionSkillsModule,
      ChampionSkinsModule,
      ChampionRunesModule
    ]
})
export class ChampionProfileModule { }
