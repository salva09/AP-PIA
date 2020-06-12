import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-actuaria',
  templateUrl: './actuaria.page.html',
  styleUrls: ['./actuaria.page.scss'],
})
export class ActuariaPage implements OnInit {

  constructor(private menu: MenuController) { }
  
  secciones = [
    {
      titulo:"Objetivo:",
      icon: "play-outline",
      texto:"Formar Licenciados en Actuaría apegados a los lineamientos educativos internacionales del gremio "+
       "actuarial en base a los Modelos Educativo y Académico de la UANL."
    },
    {
      titulo:"Cualidades del Aspirante:",
      icon: "play-outline",
      texto:"<b>PERFIL DE INGRESO:</b><br><br>" +

      "Los atributos deseables del estudiante son:<br><br>" +
      
      "• Posee conocimientos en álgebra, cálculo diferencial e integral y geometría analítica a nivel bachillerato.<br>"+
      "• Demuestra capacidad para la concentración y el trabajo durante largos periodos de tiempo.<br>"+
      "• Es tenaz y perseverante al analizar y resolver problemas.<br>"+
      "• Es creativo.<br>"+
      "• Posee marcado gusto por el estudio.<br>"+
      "• Tiene interés profundo en la aplicación de los conocimientos a problemas reales.<br>"+
      "• Posee aptitud de trabajo metódico y disciplinado.<br>"+
      "• Demuestra actitud proactiva y responsable ante los retos en situaciones adversas.<br>"+
      "• Mantiene una actitud orientada hacia la solución de problemas.<br>"
    },
    {
      titulo:"Perfil del Egresado:",
      icon: "play-outline",
      texto:"Formar Licenciados en Actuaría con un perfil integral, altamente competentes en el mundo laboral, capaces de entender holísticamente la realidad,"+
      " con plena conciencia de la situación regional, nacional y mundial, comprometidos con el desarrollo sustentable, económico, tecnológico y "+
      "social de la humanidad capaces de estudiar, plantear y formular modelos de contenido matemático así como estadístico y probabilístico,"+
      " información para la planeación, la previsión y la toma de decisiones acerca de fenómenos que involucran riesgos, además de ofrecer con el fin de proveer"+
      " soluciones relevantes y asesoría experta a problemas financieros, empresariales y sociales que involucren eventos futuros inciertos, tanto en el ámbito laboral público como privado."
    },
    {
      titulo: "Campo Laboral",
      icon: "play-outline",
      texto:"<b>Fuentes de empleo de los egresados de esta carrera</b><br><br>"+
      "• Compañías aseguradoras (diseño de planes de seguros de vida, accidentes, enfermedades, salud, daños y reaseguro )<br>"+
      "• Empresas del sector financiero (Instituciones bancarias, casas de bolsa, inversiones, administración del riesgo).<br>"+
      "• Empresas del sector Industrial (Estadística Industrial)<br>"+
      "• Despachos de consultoría actuarial.<br>"+
      "• Universidades e Instituciones Tecnológicas de educación media-superior y superior.<br>"+
      "• Institutos de Investigación y Divulgación de la ciencia."
    },
    {
      titulo: "Plan de Estudios",
      icon: "play-outline",
      texto: "Consulta el plan de estudios aquí: <a href=\"/licenciaturas/actuaria/plan-la\">Plan de Estudios</a>"
    }
  ]
  ngOnInit() {
  }

}
