import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AddChampionComponent} from "./add-champion/add-champion.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'new-champion',
    component: AddChampionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
