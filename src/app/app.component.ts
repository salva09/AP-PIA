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
      referencia: "/home",
      icon: "home-outline"
    },
    {
      nombre: "Contacto",
      referencia: "/contacto",
      icon: "call-outline"
    },
    {
      nombre: "Licenciaturas",
      referencia: "/licenciaturas",
      icon: "book-outline",
      children: [
        {
          nombre: "Matemáticas",
          referencia: "/licenciaturas/matematicas",
          icon: "calculator-outline"
        },
        {
          nombre: "Física",
          referencia: "/licenciaturas/fisica",
          icon: "logo-electron"
        },
        {
          nombre: "Ciencias Computacionales",
          referencia: "/licenciaturas/ciencias-computacionales",
          icon: "desktop-outline"
        },
        {
          nombre: "Actuaría",
          referencia: "/licenciaturas/actuaria",
          icon: "bar-chart-outline"
        },
        {
          nombre: "Multimedia y Animación Digital",
          referencia: "/licenciaturas/multimedia",
          icon: "game-controller-outline"
        },
        {
          nombre: "Seguridad Infromática",
          referencia: "/licenciaturas/seguridad-informatica",
          icon: "lock-closed-outline"
        },
      ]
    },
    {
      nombre: "Posgrado",
      referencia: "/posgrado",
      icon: "school-outline"
    }
  ]

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}