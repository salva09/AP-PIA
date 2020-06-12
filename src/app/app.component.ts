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

  paginas = [
    {
      nombre: 'Inicio',
      referencia: '/home',
      icon: 'home-outline'
    },
    {
      nombre: 'Contacto',
      referencia: '/contacto',
      icon: 'call-outline'
    },
    {
      nombre: 'Licenciaturas',
      referencia: '/licenciaturas',
      icon: 'book-outline',
      children: [
        {
          nombre: 'Matemáticas',
          referencia: '/licenciaturas/matematicas',
          icon: 'calculator-outline'
        },
        {
          nombre: 'Física',
          referencia: '/licenciaturas/fisica',
          icon: 'logo-electron'
        },
        {
          nombre: 'Ciencias Computacionales',
          referencia: '/licenciaturas/ciencias-computacionales',
          icon: 'desktop-outline'
        },
        {
          nombre: 'Actuaría',
          referencia: '/licenciaturas/actuaria',
          icon: 'bar-chart-outline'
        },
        {
          nombre: 'Multimedia y Animación Digital',
          referencia: '/licenciaturas/multimedia',
          icon: 'game-controller-outline'
        },
        {
          nombre: 'Seguridad Infromática',
          referencia: '/licenciaturas/seguridad-informatica',
          icon: 'lock-closed-outline'
        },
      ]
    },
    {
      nombre: 'Posgrado',
      referencia: '/posgrado',
      icon: 'school-outline',
      children: [
        {
          nombre: 'Ciencias con Orientación en Matemáticas',
          referencia: '/posgrado/cien-orien-mate',
          icon: 'analytics-outline'
        },
        {
          nombre: 'Ing. Física Industrial',
          referencia: '/posgrado/ing-fis-ind',
          icon: 'construct-outline'
        },
        {
          nombre: 'Ing. en Seguridad de la Información',
          referencia: '/posgrado/ing-segu-inf',
          icon: 'key-outline'
        },
        {
          nombre: 'Maestría en Astrofísica Planetaria y Tecnologías Afines',
          referencia: '/posgrado/astrofisica',
          icon: 'planet-outline'
        },
        {
          nombre: 'Doctorado en Matemáticas',
          referencia: '/posgrado/doc-mate',
          icon: 'clipboard-outline'
        },
        {
          nombre: 'Doctorado en Ing. Física Industrial',
          referencia: '/posgrado/doc-ing-fis-ind',
          icon: 'rocket-outline'
        },
      ]
    },
    {
      nombre: 'Explorar',
      referencia: '/conoce-mas',
      icon: 'compass'
    }
  ];

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
    animation.play();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
