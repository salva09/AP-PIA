import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actuaria',
  templateUrl: './actuaria.page.html',
  styleUrls: ['./actuaria.page.scss'],
})
export class ActuariaPage implements OnInit {

  constructor() { }
  secciones = [
    {
      titulo:"Objetivo:",
      icon: "play-outline",
      texto:"Formar Licenciados en Actuaría apegados a los lineamientos educativos internacionales del gremio "+
       "actuarial en base a los Modelos Educativo y Académico de la UANL."
    },
    {
      titulo:"Perfil del Egresado:",
      icon: "play-outline",
      texto:"Formar Licenciados en Actuaría con un perfil integral, altamente competentes en el mundo laboral, capaces de entender holísticamente la realidad,"+
      " con plena conciencia de la situación regional, nacional y mundial, comprometidos con el desarrollo sustentable, económico, tecnológico y "+
      "social de la humanidad capaces de estudiar, plantear y formular modelos de contenido matemático así como estadístico y probabilístico,"+
      " información para la planeación, la previsión y la toma de decisiones acerca de fenómenos que involucran riesgos, además de ofrecer con el fin de proveer"+
      " soluciones relevantes y asesoría experta a problemas financieros, empresariales y sociales que involucren eventos futuros inciertos, tanto en el ámbito laboral público como privado."
    }
  ]
  ngOnInit() {
  }

}
