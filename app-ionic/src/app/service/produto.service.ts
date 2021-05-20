import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Produto} from "../model/produto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseService<Produto> {

  constructor(http: HttpClient) {

    super("produto", http);
  }

}
