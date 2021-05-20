import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../base/service/cliente.service";
import {Cliente} from "../../base/model/cliente";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente.list.component.html',
  styleUrls: ['./cliente.list.component.scss']
})
export class ClienteListComponent implements OnInit {

  lista: Array<Cliente> = []

  colunas: any[] = [
    {attr: 'codigo', titulo: 'Código'},
    {attr: 'nome', titulo: 'Nome'},
    {attr: 'cpf', titulo: 'CPF'},
    {attr: 'sexo', titulo: 'Sexo'},
    {attr: 'email', titulo: 'E-mail'}
  ];

  mostrarColunas: string[] = ['codigo', 'nome', 'cpf', 'sexo', 'email', 'acao'];

  constructor(private service: ClienteService) { }

  async excluir(id: string){

    await this.service.excluir(id)

    this.lista = await this.service.getAll()

  }

  async ngOnInit() {

    this.lista = await this.service.getAll()

  }

}
