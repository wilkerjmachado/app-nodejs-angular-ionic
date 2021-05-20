import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService<Cliente> {

  constructor(http: HttpClient) {

    super("cliente", http);
  }

}
