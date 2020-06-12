import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.page.html',
  styleUrls: ['./multimedia.page.scss'],
})
export class MultimediaPage implements OnInit {

  constructor(private menu: MenuController) { }

  secciones = [
    {
      titulo: "Objetivo:",
      icon: "play-outline",
      texto: "Formar profesionistas capaces de diseñar aplicaciones enfocadas a cubrir necesidades de la industria del arte digital y"+ 
      " medios interactivos, haciendo uso de TICs y arte gráfico, para los sectores público y privado."
    },
    {
      titulo: "Cualidades del Aspirante:",
      icon: "play-outline",
      texto: "<b>Cualidades deseables en el aspirante a ingresar a esta carrera</b><br>" +
        "• Tener interés en las TIC´s y la innovación de las expresiones gráficas.<br>"+
        "• Poseer la capacidad y habilidad para comprender, resolver y aplicar los diferentes algoritmos para el desarrollo de"+
        " animación y gráficas por computadoras.<br>" +
        "• Tener vocación de servicio para la solución integral de los problemas de la sociedad.<br>" +
        "• Tener habilidad de integrarse en trabajo de equipo interdisciplinario para hacer frente a los retos que la sociedad"+
        " tecnológica, industrial y de entretenimiento le exige como profesionista."
    },
    {
      titulo: "Cualidades del Egresado:",
      icon: "play-outline",
      texto: "<b>Las competencias específicas del profesional de Licenciatura en Multimedia y Animación Digital son:</b><br>"+
      "• Crear multimedia, videojuegos y animación para la promoción de ideas, de productos, de entretenimiento utilizando"+
      " herramientas de software de vanguardia para su difusión en computadora, televisión, radio y otros medios.<br>"+
      "• Crear software que sirva como herramienta para el desarrollo de aplicaciones multimedia, animación y videojuegos," +
      " que sea innovador y que permita reducir costos por uso de licencias.<br>" +
      "• Coordinar desarrollos multimedia, animación y videojuegos para verificar la correcta implementación de las ideas a" +
      " transmitir y la selección adecuada de los recursos humanos, técnicos, materiales y financieros, asegurando el logro"+
      " de las metas establecidas del proyecto.<br>" +
      "• Evaluar la infraestructura para el desarrollo de aplicaciones multimedia, animación y videojuegos para tomar" +
      " decisiones que permitan optimizar el costo y obtener la mayor portabilidad.<br>"+
      "• Crear animación para dar la sensación de vida a cualquier tipo de personaje u objeto, a través de un argumento"+
      " dado, aplicándolo en ambientes industriales, educativos, comerciales y de entretenimiento asegurando la atención del observador.<br>" +
      "• Estructurar aplicaciones y/o software que sean rentables económicamente. A partir del análisis sistemático de las"+
      " necesidades del mercado de la informática.<br>" +
      "• Crear videojuegos con fines de entretenimiento utilizando plataformas propias y otras ya existentes basadas tanto"+
      " en la computadora personal como en cualquier otro tipo de consolas.<br>"+
      "• Crear sistemas de comunicación que permiten integrar nuevos servicios tecnológicos para la organización."
    },
    {
      titulo: "Campo Laboral",
      icon: "play-outline",
      texto: "<b>Áreas laborales para los egresados de esta carrera</b><br>" +
        "• Diseño y producción de videojuegos.<br>" +
        "• Animación y efectos especiales en cine y televisión.<br>" +
        "• Aplicaciones para la simulación de procesos industriales en tiempo real.<br>" +
        "• Comercio Electrónico sobre WEB.<br>" +
        "• Producción multimedia en diversos sectores.<br>" +
        "• Desarrollo de hardware, software, aplicaciones científicas y de entretenimiento.<br>" +
        "• Sistemas de entretenimiento bajo entornos de realidad virtual.<br>" +
        "• Diseño y mantenimiento de servidores WEB.<br>" +
        "• Modelado por computadora.<br>" +
        "• Industria Cinematográfica.<br>" +
        "• Televisión.<br>" +
        "• Industria de los videojuegos.<br>" +
        "• Producción de comics animados.<br>" +
        "• Tiene la capacidad para desarrollar su propia empresa." 
    },
    {
      titulo: "Plan de Estudios",
      icon: "play-outline",
      texto: "Consulta el plan de estudios aquí: <a href=\"/licenciaturas/multimedia/plan-lmad\">Plan de Estudios</a>"
    }
  ]

  ngOnInit() {
  }

}
