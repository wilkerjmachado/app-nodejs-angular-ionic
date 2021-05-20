import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoPageRoutingModule } from './produto-routing.module';

import { ProdutoEditPage } from './produto.edit.page';
import {ProdutoListPage} from "./produto.list.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoPageRoutingModule
  ],
  declarations: [
    ProdutoEditPage,
    ProdutoListPage
  ]
})
export class ProdutoPageModule {}
