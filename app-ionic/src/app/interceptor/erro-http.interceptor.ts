import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {AlertController} from "@ionic/angular";

@Injectable()
export class ErroHttpInterceptor implements HttpInterceptor {

  constructor(
    private alertController: AlertController
  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(catchError(this.catchError()));

  }

  private catchError() {

    return (httpError: any) => {

      if (httpError instanceof HttpErrorResponse) {

        this.alertController.create({
          header: `Alerta: Erro ${httpError.status} - ${httpError.statusText}`,
          message: (httpError.error && httpError.error.message) ? httpError.error.message : 'Erro ao acessar a API.',
          buttons: ['OK']

        }).then(alert => {

          alert.present();

        })

      }

      return throwError(httpError);

    };
  }
}
