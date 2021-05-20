import {Entidade} from "../model/entidade";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export abstract class BaseService<T extends Entidade> {

  protected api: string

  protected http: HttpClient

  protected path: string

  constructor(path: string, http: HttpClient) {

    this.api = environment.api;

    this.http = http

    this.path = path
  }

  getAll(): Promise<[T]>{

    return this.http.get<[T]>(this.url(), { ...this.options() }).toPromise();
  }

  getById(id: number): Promise<T> {

    return this.http.get<T>(this.url(`${id}`), { ...this.options() }).toPromise();
  }

  inserir(entidade: T): Promise<any>{

    return this.http.post<any>(this.url(), entidade, this.options()).toPromise();
  }

  alterar(entidade: T): Promise<any>{

    return this.http.put<any>(this.url(), entidade, this.options()).toPromise();
  }

  excluir(id: string): Promise<any>{

    return this.http.delete<any>(this.url(`${id}`), this.options()).toPromise();
  }

  // @ts-ignore
  protected url(op: string = null): string {

    return [ this.api, this.path, (op ? op : '') ].join('/');
  }

  protected options() {

    return {

      headers: new HttpHeaders({

        'Content-Type': 'application/json',

        'Accept': 'application/json'
      })
    }
  }

}
