import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-seguridad-informatica',
  templateUrl: './seguridad-informatica.page.html',
  styleUrls: ['./seguridad-informatica.page.scss'],
})
export class SeguridadInformaticaPage implements OnInit {

  constructor(private menu: MenuController) { }

  secciones = [
    {
      titulo: "Misión:",
      icon: "play-outline",
      texto: "Formar profesionales en la Licenciatura en Seguridad en Tecnologías de Información con sentido humanista, creativo" +
        " e innovador, capaces de generar, difundir y aplicar el conocimiento para responder a las demandas del desarrollo" +
        " científico, tecnológico, económico y social de la región y del país en el contexto internacional."
    },
    {
      titulo: "Visión:",
      icon: "play-outline",
      texto: "La Licenciatura en Seguridad en Tecnologías de Información de la Facultad de Ciencias Físico Matemáticas (FCFM)" +
        " de la Universidad Autónoma de Nuevo León es reconocida en el año 2020 como un Programa Educativo de clase" +
        " mundial por la formación integral de profesionales planetarios, por el alto nivel de formación y reconocimiento de su" +
        " personal académico, por la calidad de su gestión, infraestructura y equipamiento y por la sólida vinculación con los" +
        " sectores público, social y productivo, que respondan a las demandas del desarrollo científico, tecnológico, económico" +
        " y social de la región y del país, en el contexto internacional."
    },
    {
      titulo: "Cualidades del Aspirante:",
      icon: "play-outline",
      texto: "<b>El perfil requiere que el aspirante haya concluido sus estudios en el Nivel Medio Superior, y que cuente con los siguientes conocimientos:</b><br>" +
        "• Elementos básicos de aritmética, geometría, trigonometría, álgebra y lógica matemática.<br>" +
        "• Elementos básicos de computación y manejo de equipo de cómputo y conocimientos sobre la aplicación de software actualizado.<br>" +
        "• Elementos suficientes en español: lectura, escritura, pronunciación, redacción, conversación con solvencia para el estudio de la licenciatura.<br>" +
        "• Elementos suficientes de inglés: lectura, escritura, pronunciación, redacción, conversación con solvencia para el estudio de la licenciatura.<br>" +
        "• Elementos básicos de cultura general. Información general acerca del entorno político, económico y social actual.<br>" +
        "Para evaluar el perfil de ingreso, el aspirante debe obtener el puntaje mínimo requerido, definido por la Administración" +
        "de la Facultad, en el EXANI-II del Ceneval, Módulo de Admisión y Módulo de diagnóstico de Ingeniería y Tecnología.<br><br>" +
        "<b>Cualidades deseables en el aspirante a ingresar a esta carrera</b><br>" +
        "Los atributos deseables son:<br><br>" +
        "• Interés de incursionar en las nuevas tecnologías computacionales.<br>" +
        "• Sustentar una postura personal sobre temas de interés y relevancia general."
    },
    {
      titulo: "Cualidades del Egresado:",
      icon: "play-outline",
      texto: "El Licenciado en Seguridad en Tecnologías de Información es un profesionista comprometido con la sociedad, domina " +
        "el idioma inglés, está calificado para preservar la integridad, confidencialidad y disponibilidad de la información, " +
        "implementa técnicas y utiliza herramientas con gran ética profesional para detectar, evaluar y analizar amenazas para " +
        "minimizar el riesgo de que se explote una vulnerabilidad latente, implementa un plan de seguridad para tomar " +
        "acciones y medidas que permitan el cumplimiento de objetivos y compromisos legales, sociales, políticos y tecno " +
        "económicos de las organizaciones, asegurando la continuidad de éxito teniendo como base las tecnologías " +
        "de información."
    },
    {
      titulo: "Campo Laboral",
      icon: "play-outline",
      texto: "<b>Diseñador de software</b><br>" +
        "• Desarrollador de software.<br>" +
        "• Analista de sistemas.<br>" +
        "• Administrador de base de datos.<br>" +
        "• Diseñador web.<br>" +
        "• Administrador de seguridad informática en accesos de sistemas operativos y aplicaciones.<br><br>" +
        "<b>Seguridad Informática</b><br>" +
        "• Diseñador de políticas de seguridad informática.<br>" +
        "• Diseñador de infraestructura tecnológica.<br>" +
        "• Investigador en informática forense.<br>" +
        "• Consultor en procesos informáticos de recuperación de desastres.<br>" +
        "• Oficial de Seguridad de la Información.<br>" +
        "• Consultor de Seguridad Informática Ofensiva (Hackeo Ético).<br>" +
        "• Perito forense en materia de computo.<br>" +
        "• Investigador y analista de vulnerabilidades.<br>" +
        "• Analista de Seguridad.<br>" +
        "• Especialista en Seguridad de Información.<br>" +
        "• Auditor de Seguridad de la Información.<br>" +
        "• Coordinador de Programa de Seguridad de la Información.<br><br>" +
        "<b>Administrador de Redes</b><br>" +
        "• Implementación de telecomunicaciones en diferentes medios de transmisión.<br>" +
        "• Diseñador de interconexión de redes de comunicaciones.<br>" +
        "• Gestor en privacidad de la transmisión por diversos medios."
    },
    {
      titulo: "Plan de Estudios",
      icon: "play-outline",
      texto: "Consulta el plan de estudios aquí: <a href=\"#\">Plan de Estudios</a>"
    }
  ]

  ngOnInit() {
  }

}
