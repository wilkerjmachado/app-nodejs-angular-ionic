import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../../base/service/cliente.service";
import {ActivatedRoute} from "@angular/router";
import {Cliente} from "../../base/model/cliente";

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente.edit.component.html',
  styleUrls: ['./cliente.edit.component.scss']
})
export class ClienteEditComponent implements OnInit {

  cliente: any = {}

  constructor(private route: ActivatedRoute,
              private service: ClienteService) {
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
