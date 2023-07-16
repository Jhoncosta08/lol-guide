import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AddChampionComponent} from "./add-champion/add-champion.component";
import {AddRuneComponent} from "./add-rune/add-rune.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'new-champion',
    component: AddChampionComponent
  },
  {
    path: 'new-rune',
    component: AddRuneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
