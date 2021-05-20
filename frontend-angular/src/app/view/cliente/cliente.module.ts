import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseModule} from "../../base/base.module";
import {ClienteEditComponent} from "./cliente.edit.component";
import {ClienteListComponent} from "./cliente.list.component";

@NgModule({
  declarations: [
    ClienteEditComponent,
    ClienteListComponent
  ],
  imports: [
    BaseModule
  ]
})
export class ClienteModule { }
