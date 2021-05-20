import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/inicio', icon: 'mail' },
    { title: 'Cliente', url: '/cliente', icon: 'mail' },
    { title: 'Produto', url: '/produto', icon: 'paper-plane' }
  ];
  constructor() {}
}
