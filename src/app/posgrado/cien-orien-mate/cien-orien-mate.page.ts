import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cien-orien-mate',
  templateUrl: './cien-orien-mate.page.html',
  styleUrls: ['./cien-orien-mate.page.scss'],
})
export class CienOrienMatePage implements OnInit {

  constructor() { }

  secciones = [
    {
      titulo:"Descripción del Programa:",
      icon: "play-outline",
      texto:"El programa de Maestría en Ciencias con Orientación en  Matemáticas es un posgrado orientado a la" + 
      "investigación e inició actividades en agosto de 2010 bajo la modalidad escolarizada o presencial" + 
      "semestral. Actualmente se tienen tres líneas de investigación en las cuales se realiza investigación:<br><br>" +
      
      "• Métodos Matemáticos de Control<br>" +
      "• Optimización<br>" +
      "• Modelado Matemático<br>",
    },
    {
      titulo:"¿POR QUÉ ESTUDIAR UN POSGRADO EN MATEMÁTICAS?",
      icon: "play-outline",
      texto:"El incremento en el poder de cómputo aunado a la necesidad de competir en un mundo globalizado," + 
      "ha permitido que nuevas teorías y herramientas matemáticas se apliquen de forma efectiva en la solución" + 
      "de problemas reales en todas las áreas de formas que hace pocos años eran imposibles<br>" +

      "La matemática ofrece un poder y flexibilidad únicos para explotar las oportunidades de innovación en un "+
      "amplio espectro en industria y sociedad. Su uso será crucial para lograr la ambición de la Unión Europea "+
      "de convertirse en la economía basada en conocimiento más dinámica del mundo.” Unleashing Mathematics, NETIAM."+
      "Smith Institute, England. 2006<br>"+
      
      "Los que tengan maestría y doctorado con conocimientos sólidos en matemáticas y una disciplina relacionada como "+
      "ciencias computacionales o ingeniería y puedan aplicar la teoría matemática a problemas del mundo real, tendrán "+
      "las mejores propuestas de trabajo en ocupaciones relacionadas.” Occupational Outlook Handbook,Bureau of Labor "+
      "Statistics, USA. 2008-2009",
    },
    {
      titulo:"Cualidades del Aspirante:",
      icon: "play-outline",
      texto:"<b>PERFIL DE INGRESO:</b><br><br>" +

      "Los atributos deseables del estudiante son:<br><br>" +
      
      "• Tener conocimientos básicos de la matemática superior. En particular de Álgebra lineal, Cálculo Diferencial e Integral, Cálculo vectorial.<br>"+
      "• Tener   dominio de herramientas informáticas y del idioma inglés.<br>"+
      "• Tener  habilidades de razonamiento lógico matemático.<br>"+
      "• Ser  proactivo, motivado, emprendedor y con deseos de superación.<br>"
    },
    {
      titulo:"Perfil de Egresado:",
      icon: "play-outline",
      texto: "• El alumno conocerá en forma amplia los fundamentos matemáticos con el fin de comprender las teorías y métodos matemáticos más utilizados en la solución de problemas de otras áreas de ciencias y tecnología.<br>"+
      "• El alumno será capaz de diseñar, evaluar, implementar y analizar de forma adecuada modelos matemáticos basados en las teorías matemáticas y científicas conocidas, para mejorar la comprensión y facilitar la solución de problemas reales en ciencia y tecnología en empresas, industrias o centros de educación superior, usando herramientas computacionales.<br>"+
      "• El alumno será capaz de comunicar de forma eficiente su conocimiento o los resultados de sus investigaciones a otras personas (expertos en el área, alumnos u otros colaboradores).<br>"+
      "• El alumno será un colaborador responsable y efectivo en equipos multidisciplinarios aportando sus conocimientos matemáticos para el cumplimiento de los objetivos de los proyectos en empresas, industrias y centros educativos.<br>"
    }

  ]
  ngOnInit() {
  }

}
