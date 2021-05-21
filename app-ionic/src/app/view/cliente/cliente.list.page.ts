import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../service/cliente.service";
import {Cliente} from "../../model/cliente";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.list.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClienteListPage implements OnInit {

  lista : Array<Cliente>

  constructor(
    private service: ClienteService,
    private alertController: AlertController
  ) { }

  async excluir(cliente){

    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Confirma a exclusão do registro?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
        }, {
          text: 'Sim',
          handler: async () => {
            await this.service.excluir(cliente._id)

            this.lista = await this.service.getAll()
          }
        }
      ]
    });

    await alert.present();
  }


  async ionViewWillEnter(){

    this.lista = await this.service.getAll()
  }

  async ngOnInit() {

  }

}
