import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {FormsModule} from "@angular/forms";
import {DynamicButtonModule} from "../../shared/dynamic-buttons/dynamic-button.module";


@NgModule({
  declarations: [
    AuthComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
      DynamicButtonModule
    ]
})
export class AuthModule { }
