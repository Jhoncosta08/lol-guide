import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RunesComponent} from "./runes.component";

const routes: Routes = [
  {
    path: '',
    component: RunesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunesRoutingModule { }
