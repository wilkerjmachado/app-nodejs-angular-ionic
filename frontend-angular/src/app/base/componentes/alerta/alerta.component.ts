import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface DialogData {
  texto: string;
  titulo: string;
  labelBtnFechar : string;
  labelBtnConfirmar : string;
  habilitarBtnConfirmar : boolean;
}

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  texto: string

  titulo: string

  labelBtnFechar : string

  labelBtnConfirmar : string

  habilitarBtnConfirmar: boolean

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {

    this.texto = data.texto
    this.titulo = data.titulo ? data.titulo : 'Alerta'
    this.labelBtnFechar = data.labelBtnFechar ? data.labelBtnFechar : 'Fechar'
    this.labelBtnConfirmar = data.labelBtnConfirmar ? data.labelBtnConfirmar : 'Confirma'
    this.habilitarBtnConfirmar = data.habilitarBtnConfirmar
  }

  ngOnInit(): void {
  }

}
