import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddChampionComponent } from './add-champion/add-champion.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DynamicButtonModule} from "../../shared/dynamic-buttons/dynamic-button.module";
import {TitleDivisorModule} from "../../shared/title-divisor/title-divisor.module";
import {AddRuneComponent} from "./add-rune/add-rune.component";
import { AddRuneChampionComponent } from './add-rune-champion/add-rune-champion.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddChampionItemComponent } from './add-champion-item/add-champion-item.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddChampionComponent,
    AddRuneComponent,
    AddRuneChampionComponent,
    AddItemComponent,
    AddChampionItemComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicButtonModule,
        TitleDivisorModule
    ]
})
export class AdminModule { }
