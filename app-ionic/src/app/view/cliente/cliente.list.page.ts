import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../service/cliente.service";
import {Cliente} from "../../model/cliente";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.list.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClienteListPage implements OnInit {

  lista : Array<Cliente>

  constructor(private service: ClienteService) { }

  async ngOnInit() {

    this.lista = await this.service.getAll()
  }

}
