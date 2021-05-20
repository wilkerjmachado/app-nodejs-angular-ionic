import {NgModule} from '@angular/core';
import {BaseModule} from "../../base/base.module";
import {ProdutoEditComponent} from "./produto.edit.component";
import {ProdutoListComponent} from "./produto.list.component";

@NgModule({
  declarations: [
    ProdutoEditComponent,
    ProdutoListComponent
  ],
  imports: [
    BaseModule
  ]
})
export class ProdutoModule { }
