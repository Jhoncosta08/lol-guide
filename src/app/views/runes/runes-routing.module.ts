import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RunesComponent} from "./runes.component";
import {ViewRuneComponent} from "./view-rune/view-rune.component";

const routes: Routes = [
  {
    path: '',
    component: RunesComponent
  },
  {
    path: ':id',
    component: ViewRuneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunesRoutingModule { }
