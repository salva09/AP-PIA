import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  paginas = [
    {
      nombre: "Inicio",
      referencia: "/home"
    },
    {
      nombre: "Licenciaturas",
      referencia: "/licenciaturas"
    },
    {
      nombre: "Contacto",
      referencia: "/contacto"
    }
  ]
}
