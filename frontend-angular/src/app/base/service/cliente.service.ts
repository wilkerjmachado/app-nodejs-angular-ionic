import {BaseService} from "./base.service";
import {Cliente} from "../model/cliente";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ClienteService extends BaseService<Cliente> {

  constructor(http: HttpClient) {

    super("cliente", http);
  }
}
