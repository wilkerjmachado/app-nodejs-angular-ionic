import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../../base/service/cliente.service";
import {ActivatedRoute} from "@angular/router";
import {Cliente} from "../../base/model/cliente";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente.edit.component.html',
  styleUrls: ['./cliente.edit.component.scss']
})
export class ClienteEditComponent implements OnInit {

  cliente: any = {}

  clienteForm :FormGroup;

  constructor(private route: ActivatedRoute,
              private service: ClienteService) {

    this.clienteForm = new FormGroup({
      codigo: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('')
    });

  }

  async salvar(){

    if(this.cliente._id){

      await this.service.alterar(this.cliente, this.cliente._id)

    }else{

      await this.service.inserir(this.cliente)

    }
  }

  async ngOnInit() {

    try {

      const id = this.route.snapshot.params.id;

      if(id){

        this.cliente = await this.service.getById(id);

      }

    } catch (e) {


    }

  }

}
