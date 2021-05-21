import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {AlertaComponent} from "../componentes/alerta/alerta.component";

@Injectable()
export class ErroHttpInterceptor implements HttpInterceptor {

  configDialog : any = {
    data: {
      labelBtnFechar : 'Fechar',
      habilitarBtnConfirmar : false
    }
  }

  constructor(private dialog: MatDialog) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(catchError(this.catchError()));

  }

  private catchError() {

    return (httpError: any) => {

      if (httpError instanceof HttpErrorResponse) {

        this.configDialog.data.titulo = `Alerta: Erro ${httpError.status} - ${httpError.statusText}`

        this.configDialog.data.texto = (httpError.error && httpError.error.message) ? httpError.error.message : 'Erro ao acessar a API.'

        this.dialog.open(AlertaComponent, this.configDialog);

      }

      return throwError(httpError);
    };
  }
}
