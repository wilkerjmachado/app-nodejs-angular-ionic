import {Routes} from "@angular/router";
import {ClienteListComponent} from "./cliente.list.component";
import {ClienteEditComponent} from "./cliente.edit.component";

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
    path: 'cliente/novo',

    component: ClienteEditComponent,

  }
];
