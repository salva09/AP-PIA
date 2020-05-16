import { Component } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

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
}
