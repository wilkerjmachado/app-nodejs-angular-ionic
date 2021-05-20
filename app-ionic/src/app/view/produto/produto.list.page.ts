import {Component, OnInit} from '@angular/core';
import {Produto} from "../../model/produto";
import {ProdutoService} from "../../service/produto.service";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.list.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoListPage implements OnInit {

  lista : Array<Produto>

  constructor(private service: ProdutoService) { }

  async ngOnInit() {

    this.lista = await this.service.getAll()
  }

}
