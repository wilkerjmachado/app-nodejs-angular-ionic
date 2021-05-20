import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    loadChildren: () => import('./view/cliente/cliente.module').then(m => m.ClientePageModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./view/produto/produto.module').then(m => m.ProdutoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./view/inicio/inicio.module').then(m => m.InicioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
