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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
