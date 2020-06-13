import { Component, OnInit } from '@angular/core';
import { AnimacionService } from '../../servicios/animacion.service';

@Component({
  selector: 'app-matematicas',
  templateUrl: './matematicas.page.html',
  styleUrls: ['./matematicas.page.scss'],
})
export class MatematicasPage implements OnInit {
  constructor(
    private animacion: AnimacionService
  ) {

  }

  animarFlecha(seccion) {
    this.animacion.animateArrow(seccion);
  }

  secciones = [
    {
      titulo: 'Objetivo:',
      clase: "a",
      texto: 'Formar Licenciados en Matemáticas con un perfil integral y sentido de responsabilidad social, ' +
        'capaces de validar y analizar teorías matemáticas a través del pensamiento lógico-matemático; ' +
        'plantear, modelar y resolver problemas reales con aplicaciones en la industria y en las ciencias físicas, ' +
        'biológicas y sociales; así como propiciar el pensamiento matemático mediante procesos de enseñanza aprendizaje. ' +
        'Son distinguidos por colaborar en proyectos de investigación de forma ética, en equipos interdisciplinarios y utilizar tecnologías de vanguardia. ' +
        'Los Licenciados en Matemáticas contribuyen al avance de la ciencia y su aplicación en beneficio de diferentes sectores gubernamentales y la industria privada.'
    },
    {
      titulo: 'Cualidades del Aspirante:',
      clase: "b",
      texto: '<b>Cualidades deseables en el aspirante a ingresar a esta carrera</b><br>' +
        '• Vocación para el estudio de las ciencias.<br>' +
        '• Capacidad para la investigación científica.<br>' +
        '• Capacidad de análisis y síntesis.<br> ' +
        '• Aptitudes e interés por el trabajo teórico, los avances de la tecnología y la resolución de problemas.<br>' +
        '• Interés por el ejercicio docente.'
    },
    {
      titulo: 'Cualidades del Egresado:',
      clase: "c",
      texto: '<b>Competencias específicas</b><br>' +
        '• Contribuir al desarrollo de proposiciones y teoremas empleando el razonamiento lógico-matemático y lenguaje formal ' +
        'que permitan comunicar los hallazgos para el avance de la ciencia y su futura aplicación en fenómenos del mundo real.<br>' +
        '• Proponer soluciones a problemas reales mediante la modelación matemática y resolución de dichos modelos con la ayuda de ' +
        'medios tecnológicos para el apoyo en la toma de decisiones en disciplinas de las ciencias físicas, biológicas y sociales.<br>' +
        '• Conducir procesos de enseñanza-aprendizaje apegados a principios pedagógicos, planeación y elementos didácticos de ' +
        'las matemáticas que permitan fortalecer en los estudiantes las habilidades de abstracción, análisis y resolución de problemas.'
    },
    {
      titulo: 'Campo Laboral',
      clase: "d",
      texto: '<b>Industrias en el sector público o privado (instituciones gubernamentales, empresas del ramo metalmecánico, ' +
        'consultorías, logística, financieras, entre otras).</b><br><br>' +

        '• Crear y utilizar herramientas en el análisis de datos de gran volumen.<br>' +
        '• Recolectar, analizar e interpretar datos.<br>' +
        '• Representar problemas reales mediante modelos matemáticos.<br>' +
        '• Establecer alternativas de solución para modelos matemáticos.<br>' +
        '• Diseñar herramientas matemáticas (algoritmos, software, entre otros).<br><br>' +

        '<b>Docencia: universidades e instituciones tecnológicas de educación media-superior y superior.</b><br><br>' +

        '• Diseñar planes de clase en cursos de la matemática.<br>' +
        '• Elaborar recursos didácticos en cursos de la matemática.<br>' +
        '• Realizar investigación educativa en el área de la matemática.<br><br>' +

        '<b>Investigación: institutos de investigación y divulgación de la ciencia</b><br><br>' +
        '• Colaborar con especialistas de otras áreas para crear diseños de experimentos.<br>' +
        '• Determinar tamaños de muestra para experimentos.<br>' +
        '• Hacer inferencias estadísticas sobre el fenómeno analizado.<br>' +
        '• Diseñar herramientas matemáticas (modelos, algoritmos, pruebas estadísticas, software, entre otros).<br>' +
        '• Escribir de artículos de investigación.<br>' +
        '• Realizar actividades de divulgación de la ciencia.'
    },
    {
      titulo: 'Plan de Estudios',
      clase: "e",
      texto: 'Consulta el plan de estudios aquí: <a href=\"/licenciaturas/matematicas/plan-lm\">Plan de Estudios</a>'
    }
  ];

  ngOnInit() {
  }
}