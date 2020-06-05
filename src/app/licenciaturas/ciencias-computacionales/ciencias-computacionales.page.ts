import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-ciencias-computacionales',
  templateUrl: './ciencias-computacionales.page.html',
  styleUrls: ['./ciencias-computacionales.page.scss'],
})
export class CienciasComputacionalesPage implements OnInit {

  constructor(private menu: MenuController) {}

  secciones = [
    {
      titulo: "Objetivo:",
      icon: "play-outline",
      texto: "La formación en este nivel educativo se enfoca en la preparación para desarrollar una profesión o actividad laboral. " +
        "Es por ello que en muchos casos los estudiantes se encuentran inmersos en actividades profesionales, ya sea con un trabajo " +
        "formal que no propiamente corresponde a su área de formación.<br>" +
        "Es el uso de estas tecnologías (TIC) lo que está propiciando este cambio de paradigmas facilitando el acceso a la " +
        "información, permitiendo con ello disminuir la desigualdad social y mejorar el nivel de vida de la población."
    },
    {
      titulo: "Cualidades del Aspirante:",
      icon: "play-outline",
      texto: "El aspirante deberá demostrar las aptitudes y competencias en las áreas de pensamiento matemático, pensamiento analítico, " +
        "estructura de la lengua y comprensión lectora a través del examen EXANI-II de CENEVAL en la prueba de Admisión, adicional " +
        "a esto en la prueba de Diagnóstico, el aspirante deberá demostrar las competencias disciplinares del módulo de Ingenierías y " +
        "Tecnología, el cual incluye las áreas de física y matemáticas que deben dominar los estudiantes para ingresar al programa de " +
        "educación superior que han elegido.<br><br>" +
        "Para que el estudiante logre con éxito el plan de estudios es deseable que posea las siguientes características:<br>" +
        "• Tener gusto por la ciencia y la tecnología.<br>" +
        "• Tener gusto por las matemáticas."
    },
    {
      titulo: "Cualidades del Egresado:",
      icon: "play-outline",
      texto: " Formar Licenciados en Ciencias Computacionales, con un perfil integral que les permita trabajar en equipos " +
        "multidisciplinarios; con responsabilidad y ética profesional; capaces de desarrollar tecnologías computacionales " +
        "innovadoras; analizar y diseñar soluciones tecnológicas mediante la utilización de modelos matemáticos; crear software " +
        "utilizando herramientas computacionales de última generación; administrar proyectos de sistemas computacionales; diseñar " +
        "estrategias, metodologías o herramientas tecnológicas para desempeñarse en departamentos de sistemas, tecnologías de " +
        "información, soporte tecnológico o de desarrollo de software, a fin de contribuir al desarrollo de las organizaciones " +
        "tanto en el ámbito público como privado."
    },
    {
      titulo: "Campo Laboral",
      icon: "play-outline",
      texto: "<b>Áreas Laborales</b><br>" +
        "Departamento de Sistemas, Desarrollo de Software, Tecnologías de la Información o Soporte Tecnológico de instituciones " +
        "públicas y privadas en general: <br><br>" +

        "• Analiza sistemas de software.<br>" +
        "• Diseña sistemas de software.<br>" +
        "• Desarrolla sistemas de software.<br>" +
        "• Asegura la calidad del sistema de software.<br>" +
        "• Implementa sistemas de software.<br>" +
        "• Mantiene sistemas de software.<br>" +
        "• Audita sistemas de software.<br>" +
        "• Construye software de base.<br>" +
        "• Crea soluciones de software web y aplicativo.<br>" +
        "• Lidera proyectos de software.<br>" +
        "• Administra proyectos de sistemas computacionales.<br>" +
        "• Administra redes y servicios de telecomunicaciones.<br>" +
        "• Administra bases de datos.<br>" +
        "• Consultor de empresas en sus áreas de tecnología de información.<br>" +
        "• Investiga y desarrolla nuevas tecnologías en empresas líderes en su ramo o en Instituciones Educativas."
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
