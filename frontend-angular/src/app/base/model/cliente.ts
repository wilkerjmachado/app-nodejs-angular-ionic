import {Entidade} from "./entidade";

export interface Cliente extends Entidade {

  codigo: string

  nome: string

  cpf: string

  sexo: string

  email: string
}
