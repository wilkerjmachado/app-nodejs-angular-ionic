import {ProdutoListComponent} from "./produto.list.component";
import {ProdutoEditComponent} from "./produto.edit.component";
import {Routes} from "@angular/router";
import {PaginaNaoEncontradaComponent} from "../pagina-nao-encontrada/pagina-nao-encontrada.component";

export const PRODUTO_ROUTE: Routes = [

  {
    path: 'produto',

    component: ProdutoListComponent,

  },

  {
    path: 'produto/:id',

    component: ProdutoEditComponent,

  },

  {
    path: 'produto-novo',

    component: ProdutoEditComponent,

  }
];
