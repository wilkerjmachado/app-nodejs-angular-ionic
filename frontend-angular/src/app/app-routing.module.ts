import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CLIENTE_ROUTE} from "./view/cliente/cliente.route";
import {PRODUTO_ROUTE} from "./view/produto/produto.route";
import {PaginaNaoEncontradaComponent} from "./view/pagina-nao-encontrada/pagina-nao-encontrada.component";

const routes: Routes = [

  ...CLIENTE_ROUTE,

  ...PRODUTO_ROUTE,

  { path: '**', component: PaginaNaoEncontradaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
