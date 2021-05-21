import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClienteService} from "../../service/cliente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.edit.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClienteEditPage implements OnInit {

  cliente: any = {}

  clienteForm :FormGroup;

  constructor(
    private service: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {

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

    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Cliente salvo com sucesso!',
      buttons: ['OK']
    });

    await alert.present();

    this.router.navigate(['/cliente'])

  }

  async ngOnInit() {

    const id = this.route.snapshot.params.id;

    if(id){

      this.cliente = await this.service.getById(id);

    }

  }

}
