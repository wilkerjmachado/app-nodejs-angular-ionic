import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BaseModule} from "./base/base.module";
import {ProdutoModule} from "./view/produto/produto.module";
import {ClienteModule} from "./view/cliente/cliente.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BaseModule,
    ProdutoModule,
    ClienteModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
