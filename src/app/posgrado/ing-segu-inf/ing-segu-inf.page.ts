import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ing-segu-inf',
  templateUrl: './ing-segu-inf.page.html',
  styleUrls: ['./ing-segu-inf.page.scss'],
})
export class IngSeguInfPage implements OnInit {

  constructor() { }

  secciones = [
    {
      titulo:"Propósito:",
      icon: "play-outline",
      texto:"El propósito es formar profesionistas comprometidos con la sociedad y con gran ética que está calificado "+
      "para preservar la integridad, la confidencialidad y la disponibilidad de la información y de activos "+
      "informáticos mediante la aplicación con responsabilidad de controles tecnológicos y de procesos, en base "+
      "al reconocimiento de amenazas, vulnerabilidades y evaluación de los riesgos incurridos, permitiendo con esto "+
      "el cumplimiento de objetivos y compromisos legales, normativos, sociales, políticos y técnico económicos de las "+
      "organizaciones, asegurando la continuidad de éxito teniendo como base la tecnología de información. ",
    },
    {
      titulo:"Cualidades del Aspirante:",
      icon: "play-outline",
      texto:"<b>PERFIL DE INGRESO:</b><br><br>" +

      "Los atributos deseables del estudiante son:<br><br>" +
      
      "• Interés de incursionar en las tecnologías de seguridad de la información.<br>"+
      "• Sustenta una postura personal sobre temas de interés y relevancia general.<br>"+
      "• Haber cumplido con el perfil de egreso de alguna licenciatura en tecnología de información, leyes, ingeniería o a fin.<br>"
    },
    {
      titulo:"Perfil de Egresado:",
      icon: "play-outline",
      texto: "El alumno egresado del programa educativo de Maestría en Ingeniería en Seguridad de la Información, "+
      "conoce los conceptos de integridad, confiabilidad y disponibilidad de la información, así como los factores "+
      "de riesgo con la finalidad de explicar mediante éstas, los principales problemas de seguridad informática con "+
      "los que se enfrentan los usuarios de computadoras, y que pueden afectar a las organizaciones y los activos "+
      "informáticos en el entorno local, nacional e internacional. (CONOCER)<br>"+
      "Diseña normas, procedimientos, métodos y técnicas, con la finalidad de proveer condiciones seguras y "+
      "confiables para el procesamiento de datos en sistemas informáticos con un enfoque ecuménico para resolver, "+
      "confrontar y transformar la realidad de su entorno con compromiso humano, responsabilidad social y "+
      "ambiental. (HACER)<br>"+
      "Asegura que los recursos del sistema de información de una organización sean utilizados de la manera en que "+
      "se diseñaron y que el acceso a la información ahí contenida así como su modificación, solo sea posible a las "+
      "personas que se encuentren acreditadas y dentro de los límites de su autorización contribuyendo a promover "+
      "una sociedad responsable, sostenible y sustentable conforme a los valores promovidos por la UANL para hacer "+
      "frente a los retos de la sociedad contemporánea. (SER)"
    }

  ]
  ngOnInit() {
  }

}
