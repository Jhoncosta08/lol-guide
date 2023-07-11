import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./views/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'champions',
    loadChildren: () => import('./views/champions/champions.module').then((m) => m.ChampionsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'runes',
    loadChildren: () => import('./views/runes/runes.module').then((m) => m.RunesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'items',
    loadChildren: () => import('./views/items/items.module').then((m) => m.ItemsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./views/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
