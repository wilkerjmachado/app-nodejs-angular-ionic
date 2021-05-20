import {Entidade} from "./entidade";

export interface Produto extends Entidade {

  codigo: string

  nome: string

  fabricacao: string

  tamanho: number

  valor: number

}
