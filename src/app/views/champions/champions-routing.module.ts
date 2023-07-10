import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChampionsComponent} from "./champions.component";
import {ChampionProfileComponent} from "./champion-profile/champion-profile.component";

const routes: Routes = [
  {
    path: '',
    component: ChampionsComponent
  },
  {
    path: ':id',
    component: ChampionProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionsRoutingModule { }
