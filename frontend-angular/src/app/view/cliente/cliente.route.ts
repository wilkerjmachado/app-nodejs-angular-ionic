import {Routes} from "@angular/router";
import {ClienteListComponent} from "./cliente.list.component";
import {ClienteEditComponent} from "./cliente.edit.component";
import {PaginaNaoEncontradaComponent} from "../pagina-nao-encontrada/pagina-nao-encontrada.component";

export const CLIENTE_ROUTE: Routes = [

  {
    path: 'cliente',

    component: ClienteListComponent,

  },

  {
    path: 'cliente/:id',

    component: ClienteEditComponent,

  },

  {
    path: 'cliente-novo',

    component: ClienteEditComponent,

  }

];
