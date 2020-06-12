import { Injectable } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AnimacionService {

  constructor(
    private animationCtrl: AnimationController
  ) {

  }

  animateArrow(seccion) {
    let animation: Animation;
    if (seccion.open) {
      animation = this.animationCtrl.create()
          .addElement(document.querySelector('.' + seccion.clase))
          .duration(100)
          .fromTo('transform', 'rotate(90deg)', 'rotate(0deg)');
    } else {
      animation = this.animationCtrl.create()
          .addElement(document.querySelector('.' + seccion.clase))
          .duration(100)
          .fromTo('transform', 'rotate(0deg)', 'rotate(90deg)');
    }
    seccion.open = !seccion.open;
    animation.play()
  }
}
