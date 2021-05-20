import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../base/service/cliente.service";
import {Cliente} from "../../base/model/cliente";
import {MatDialog} from "@angular/material/dialog";
import {AlertaComponent} from "../../base/componentes/alerta/alerta.component";

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

  constructor(
    private service: ClienteService,
    private dialog: MatDialog
  ) { }

  async excluir(id: string){

    const dialogRef = this.dialog.open(AlertaComponent, {
      data: {
        texto: 'Confirma a exclusão do registro?',
        labelBtnFechar : 'Não',
        labelBtnConfirmar : 'Sim',
        habilitarBtnConfirmar : true
      }
    });

    dialogRef.afterClosed().subscribe(async result => {

      if(result){

        await this.service.excluir(id)

        this.lista = await this.service.getAll()
      }

    });


  }

  async ngOnInit() {

    this.lista = await this.service.getAll()

  }

}
