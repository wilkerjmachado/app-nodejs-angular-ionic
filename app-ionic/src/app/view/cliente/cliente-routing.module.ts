import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteEditPage } from './cliente.edit.page';
import {ClienteListPage} from "./cliente.list.page";

const routes: Routes = [
  {
    path: '',
    component: ClienteListPage
  },
  {
    path: 'editar/:id',
    component: ClienteEditPage
  },
  {
    path: 'novo',
    component: ClienteEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePageRoutingModule {}
