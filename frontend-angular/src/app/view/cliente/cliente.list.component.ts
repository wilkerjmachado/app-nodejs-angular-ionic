import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../base/service/cliente.service";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente.list.component.html',
  styleUrls: ['./cliente.list.component.scss']
})
export class ClienteListComponent implements OnInit {

  constructor(private service: ClienteService) { }

  async ngOnInit() {

    let result = await this.service.getAll()

    console.log(result)

  }

}
