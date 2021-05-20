import {Component, OnInit} from '@angular/core';
import {ProdutoService} from "../../base/service/produto.service";
import {Produto} from "../../base/model/produto";
import {AlertaComponent} from "../../base/componentes/alerta/alerta.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto.list.component.html',
  styleUrls: ['./produto.list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  lista: Array<Produto> = []

  colunas: any[] = [
    {attr: 'codigo', titulo: 'Código'},
    {attr: 'nome', titulo: 'Nome'},
    {attr: 'fabricacao', titulo: 'Fabricação'},
    {attr: 'tamanho', titulo: 'Tamanho'},
    {attr: 'valor', titulo: 'Valor'}
  ];

  mostrarColunas: string[] = ['codigo', 'nome', 'fabricacao', 'tamanho', 'valor', 'acao'];

  constructor(
    private service: ProdutoService,
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
