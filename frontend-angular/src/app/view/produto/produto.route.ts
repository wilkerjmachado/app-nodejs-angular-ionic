import {ProdutoListComponent} from "./produto.list.component";
import {ProdutoEditComponent} from "./produto.edit.component";
import {Routes} from "@angular/router";

export const PRODUTO_ROUTE: Routes = [

  {
    path: 'produto',

    component: ProdutoListComponent,

  },

  {
    path: 'produto/:id',

    component: ProdutoEditComponent,

  }
];
