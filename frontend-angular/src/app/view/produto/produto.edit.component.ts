import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProdutoService} from "../../base/service/produto.service";

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto.edit.component.html',
  styleUrls: ['./produto.edit.component.scss']
})
export class ProdutoEditComponent implements OnInit {

  produto: any = {}

  produtoForm :FormGroup;

  constructor(private route: ActivatedRoute,
              private service: ProdutoService) {

    this.produtoForm = new FormGroup({
      codigo: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      fabricacao: new FormControl('', Validators.required),
      tamanho: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required)
    });

  }

  async salvar(){

    if(this.produto._id){

      await this.service.alterar(this.produto, this.produto._id)

    }else{

      await this.service.inserir(this.produto)

    }
  }

  async ngOnInit() {

    try {

      const id = this.route.snapshot.params.id;

      if(id){

        this.produto = await this.service.getById(id);

      }

    } catch (e) {


    }

  }

}
