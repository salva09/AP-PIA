import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  paginas = [
    {
      nombre: "Inicio",
      referencia: "/home"
    },
    {
      nombre: "Contacto",
      referencia: "/contacto"
    },
    {
      nombre: "Licenciaturas",
      children: [
        {
          nombre: "Oferta Académica",
          referencia: "/licenciaturas"
        },
        {
          nombre: "Matemáticas",
          referencia: "/licenciaturas/matematicas"
        },
        {
          nombre: "Física",
          referencia: "/licenciaturas/fisica"
        },
        {
          nombre: "Ciencias Computacionales",
          referencia: "/licenciaturas/ciencias-computacionales"
        },
        {
          nombre: "Actuaría",
          referencia: "/licenciaturas/actuaria"
        },
        {
          nombre: "Multimedia y Animación Digital",
          referencia: "/licenciaturas/multimedia"
        },
        {
          nombre: "Seguridad Infromática",
          referencia: "/licenciaturas/seguridad-informatica"
        },
      ]
    },
    {
      nombre: "Posgrado",
      referencia: "/posgrado"
    }
  ]

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
