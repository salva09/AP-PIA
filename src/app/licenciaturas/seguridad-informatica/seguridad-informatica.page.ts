import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-seguridad-informatica',
  templateUrl: './seguridad-informatica.page.html',
  styleUrls: ['./seguridad-informatica.page.scss'],
})
export class SeguridadInformaticaPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

}
