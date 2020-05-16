import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private menu: MenuController) {}

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

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
    },
    {
      nombre: "LCC",
      referencia: "/licenciaturas/ciencias-computacionales"
    }
  ]

  ngOnInit() {
  }

}
