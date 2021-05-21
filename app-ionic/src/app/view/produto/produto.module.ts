import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProdutoPageRoutingModule} from './produto-routing.module';

import {ProdutoEditPage} from './produto.edit.page';
import {ProdutoListPage} from "./produto.list.page";
import {NgxMaskIonicModule} from "ngx-mask-ionic";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProdutoPageRoutingModule,
    NgxMaskIonicModule.forRoot()
  ],
  declarations: [
    ProdutoEditPage,
    ProdutoListPage
  ]
})
export class ProdutoPageModule {}
