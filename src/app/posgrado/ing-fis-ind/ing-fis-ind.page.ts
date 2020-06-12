import { Component, OnInit } from '@angular/core';
import { AnimacionService } from '../../servicios/animacion.service';

@Component({
  selector: 'app-ing-fis-ind',
  templateUrl: './ing-fis-ind.page.html',
  styleUrls: ['./ing-fis-ind.page.scss'],
})
export class IngFisIndPage implements OnInit {
  constructor(
    private animacion: AnimacionService
  ) {

  }

  animarFlecha(seccion) {
    this.animacion.animateArrow(seccion);
  }

  secciones = [
    {
      titulo: "Misión y Visión:",
      clase: "a",
      texto: "La misión del Maestría en Ingeniería Física Industrial es la de preparar especialistas capacitados" +
        " y emprendedores capaces de desarrollar proyectos basado en tecnología y contribuir con ello en el mejoramiento " +
        "de las condiciones de la comunidad general.<br>" +

        "La visión del Maestría en Ingeniería Física Industrial es la de un programa orientado a investigación de frontera, " +
        "con una planta docente y de investigación reconocida internacionalmente por su producción científica y tecnológica, " +
        "y por la preparación de recursos humanos en investigación y desarrollo de calidad mundial.<br>",
    },
    {
      titulo: "Cualidades del Aspirante:",
      clase: "b",
      texto: "<b>PERFIL DE INGRESO:</b><br><br>" +

        "Los atributos deseables del estudiante son:<br><br>" +

        "•Poseer conocimientos y habilidades en matemáticas y física, las cuales serán evaluadas mediante un examen escrito.<br>" +
        "•Poseer actitudes de interés por la investigación científica y desarrollo de nuevas tecnologías.<br>"
    },
    {
      titulo: "Perfil de Egresado:",
      clase: "c",
      texto: "•Desarrollará trabajos de investigación en física aplicada.<br>" +
        "•Propondrá  proyectos de investigación en física básica.<br>" +
        "•Participará en la solución de problemas de la producción en el sector industrial.<br>" +
        "•Trabajará en grupos de investigación en la industria.<br>" +
        "•Desempeñará labores docentes de alto nivel en el área de la ingeniería física que haya seleccionado. " +
        "•Continuará estudios de doctorado en física o ingeniería física."
    }

  ]
  ngOnInit() {
  }
}