import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';

import { ClienteEditPage } from './cliente.edit.page';
import {ClienteListPage} from "./cliente.list.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClientePageRoutingModule
  ],
  declarations: [
    ClienteEditPage,
    ClienteListPage
  ]
})
export class ClientePageModule {}