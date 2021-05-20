import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProdutoEditPage} from './produto.edit.page';
import {ProdutoListPage} from "./produto.list.page";

const routes: Routes = [
  {
    path: '',
    component: ProdutoListPage
  },
  {
    path: '/:id',
    component: ProdutoEditPage
  },
  {
    path: '/novo',
    component: ProdutoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoPageRoutingModule {}
