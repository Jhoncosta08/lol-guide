import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AddChampionComponent} from "./add-champion/add-champion.component";
import {AddRuneComponent} from "./add-rune/add-rune.component";
import {AddItemComponent} from "./add-item/add-item.component";
import {AddRuneChampionComponent} from "./add-rune-champion/add-rune-champion.component";
import {AddChampionItemComponent} from "./add-champion-item/add-champion-item.component";

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
    path: 'new-champion/:id',
    component: AddChampionComponent
  },
  {
    path: 'new-rune',
    component: AddRuneComponent
  },
  {
    path: 'new-rune/:id',
    component: AddRuneComponent
  },
  {
    path: 'new-item',
    component: AddItemComponent
  },
  {
    path: 'new-item/:id',
    component: AddItemComponent
  },
  {
    path: 'add-rune-to-champion',
    component: AddRuneChampionComponent
  },
  {
    path: 'add-item-to-champion',
    component: AddChampionItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
