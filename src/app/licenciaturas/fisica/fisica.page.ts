import { Component, OnInit } from '@angular/core';
import { AnimacionService } from '../../servicios/animacion.service';

@Component({
  selector: 'app-fisica',
  templateUrl: './fisica.page.html',
  styleUrls: ['./fisica.page.scss'],
})
export class FisicaPage implements OnInit {
  constructor(
    private animacion: AnimacionService
  ) {

  }

  animarFlecha(seccion) {
    this.animacion.animateArrow(seccion);
  }

  secciones = [
    {
      titulo: "Objetivo:",
      clase: "a",
      texto: "Formar profesionales con una preparación general en el área de las ciencias físicas, que les permita" +
        " participar en el desarrollo científico, tecnológico, docencia e investigación para la sociedad."
    },
    {
      titulo: "Cualidades del Aspirante:",
      clase: "b",
      texto: "<b>El aspirante a la Licenciatura en Física debe poseer las siguientes características:</b><br>" +
        "• Capacidad para buscar información, seleccionarla, ordenarla y utilizarla oportunamente.<br>" +
        "• Capacidad de identificar cuál es el problema esencial en una situación dada; distinguir elementos intrínsecos y" +
        " contextuales de esa situación, descubrir y ponderar rutas alternas de solución y tomar decisiones.<br>" +
        "• Poseer conocimientos suficientes para proseguir sus estudios.<br>" +
        "• Presta atención a hechos y datos; conceptos, términos y símbolos; procedimientos y fórmulas; teorías y principios, y" +
        " nociones fundamentales que tradicionalmente se incluyen en los programas del bachillerato.<br> " +
        "• Debe tener dominio del propio idioma, como instrumento de comunicación y el manejo de otros idiomas y el" +
        " cómputo, el de las matemáticas hasta la comprensión y aplicación de conceptos como función y límite, el manejo de" +
        " elementos de probabilidad y la estimación por rangos.<br>" +
        "• Capacidad de razonamiento para reconocer distintas situaciones o alternativas: identificarlas o diferenciarlas unas" +
        " de otras, transferir lo conocido a otras circunstancias, descubrir todos y partes, comparar, seleccionar, juzgar," +
        " evaluar. Reconocer qué está o puede estar incluido en qué, identificar qué puede esperarse a partir de ver" +
        " regularidades o maneras permanentes de proceder o enlazarse los sucesos. Implica imaginar soluciones o suponer" +
        " condiciones, probar, explorar, comprobar."
    },
    {
      titulo: "Cualidades del Egresado:",
      clase: "c",
      texto: "La enseñanza de la Física, a través del plan de estudios de esta Licenciatura, toma en cuenta el carácter científico de" +
        " esta actividad humana. En este sentido busca formar al estudiante en la aplicación de la metodología para que" +
        " incorpore a sus habilidades las competencias características de un científico que practica esta disciplina. Sobre esta" +
        " base, las metas en la formación del egresado deben incluir:<br>" +
        "1. El estudio sistemático de los fenómenos naturales tratando de encontrar las leyes básicas que lo rigen.<br>" +
        "2. El uso de las matemáticas como lenguaje y la combinación de estudios teóricos con experimentales para la" +
        " obtención de las leyes.<br>" +
        "3. La concepción metodológica clara de que una ley física es cierta cuando su comprobación experimental" +
        " proporciona resultados positivos.<br>" +
        "4. El cultivo de la expresión sistematizada del conocimiento disciplinar, tanto en forma oral como escrita."
    },
    {
      titulo: "Campo Laboral",
      clase: "d",
      texto: "El egresado de la Licenciatura en Física podrá ejercer su práctica profesional en diversos espacios tanto públicos" +
        " como privados como:<br>" +
        "• Industria y servicios.<br>" +
        "• Sector salud.<br>" +
        "• Docencia.<br>" +
        "• Investigación."
    },
    {
      titulo: "Plan de Estudios",
      clase: "e",
      texto: "Consulta el plan de estudios aquí: <a href=\"/licenciaturas/fisica/plan-lf\">Plan de Estudios</a>"
    }
  ]

  ngOnInit() {
  }
}