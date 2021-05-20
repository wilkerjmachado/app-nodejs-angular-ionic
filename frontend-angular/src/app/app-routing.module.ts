import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CLIENTE_ROUTE} from "./view/cliente/cliente.route";
import {PRODUTO_ROUTE} from "./view/produto/produto.route";

const routes: Routes = [

  ...CLIENTE_ROUTE,

  ...PRODUTO_ROUTE,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
