import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private animationCtrl: AnimationController
  ) {
    this.initializeApp();
  }

  animateArrow(open) {
    let animation: Animation;
    if (open) {
      animation = this.animationCtrl.create()
          .addElement(document.querySelector('.arrow'))
          .duration(100)
          .fromTo('transform', 'rotate(90deg)', 'rotate(0deg)');
    } else {
      animation = this.animationCtrl.create()
          .addElement(document.querySelector('.arrow'))
          .duration(100)
          .fromTo('transform', 'rotate(0deg)', 'rotate(90deg)');
    }
    animation.play()
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