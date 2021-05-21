import {Component, OnInit} from '@angular/core';
import {Produto} from "../../model/produto";
import {ProdutoService} from "../../service/produto.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.list.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoListPage implements OnInit {

  lista : Array<Produto>

  constructor(
    private service: ProdutoService,
    private alertController: AlertController
  ) { }

  async excluir(produto){

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
            await this.service.excluir(produto._id)

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
