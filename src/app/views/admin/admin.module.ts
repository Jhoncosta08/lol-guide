import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddChampionComponent } from './add-champion/add-champion.component';
import {FormsModule} from "@angular/forms";
import {DynamicButtonModule} from "../../shared/dynamic-buttons/dynamic-button.module";


@NgModule({
  declarations: [
    AdminComponent,
    AddChampionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    DynamicButtonModule
  ]
})
export class AdminModule { }
