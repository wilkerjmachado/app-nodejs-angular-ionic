import {Component, OnInit} from '@angular/core';
import {ProdutoService} from "../../base/service/produto.service";
import {Produto} from "../../base/model/produto";

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

  constructor(private service: ProdutoService) { }

  async excluir(id: string){

    await this.service.excluir(id)

    this.lista = await this.service.getAll()

  }

  async ngOnInit() {

    this.lista = await this.service.getAll()

  }

}
