import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Produto} from "../model/produto";

@Injectable()
export class ProdutoService extends BaseService<Produto> {

  constructor(http: HttpClient) {

    super("produto", http);
  }

}
