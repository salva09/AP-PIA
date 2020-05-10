import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licenciaturas',
  templateUrl: './licenciaturas.page.html',
  styleUrls: ['./licenciaturas.page.scss'],
})
export class LicenciaturasPage implements OnInit {

  constructor() { }

  reproducir(licenciatura) {
    let sonido = new Audio();
    sonido.src = licenciatura.audio;
    sonido.load();
    sonido.play();
  }

  licenciaturas = [
    {
      nombre: "Licenciatura en Matemáticas",
      siglas: "LM",
      descripcion: "Formar profesionales de las Matemáticas, con capacidad para integrar conocimientos y colaborar en la" + 
        "solución de los diversos problemas específicos, fomentando el desarrollo de la comunidad, en los aspectos de docencia" +
        "e investigación básica y aplicada.",
      imagen: "assets/Licenciaturas/lm.jpg",
      pagina: "/licenciaturas/matematicas",
      audio: "assets/Licenciaturas/lm.mp3"
    },
    {
      nombre: "Licenciatura en Física",
      siglas: "LF",
      descripcion: "Formar profesionales con una preparación general en el área de las ciencias físicas, que les permita" + 
        "participar en el desarrollo científico, tecnológico, docencia e investigación para la sociedad.",
      imagen: "assets/Licenciaturas/lf.jpg",
      pagina: "/licenciaturas/fisica",
      audio: "assets/Licenciaturas/lf.mp3"
    },
    {
      nombre: "Licenciatura en Ciencias Computacionales",
      siglas: "LCC",
      descripcion: "Formar profesionistas dedicados al estudio de las Ciencias Computacionales, con capacidad de crear, desarrollar e implementar tecnologías de información y comunicación, para apoyar el ámbito económico, social y científico de la región y del país, a través del desarrollo y conocimiento tecnológico.",
      imagen: "assets/Licenciaturas/lcc.jpg",
      pagina: "/licenciaturas/ciencias-computacionales",
      audio: "assets/Licenciaturas/lcc.mp3"
    },
    {
      nombre: "Licenciatura en Actuaría",
      siglas: "LA",
      descripcion: "Formar Licenciados en Actuaría apegados a los lineamientos educativos internacionales del gremio actuarial" +
        "en base a los Modelos Educativo y Académico de la UANL.",
      imagen: "assets/Licenciaturas/la.jpg",
      pagina: "/licenciaturas/actuaria",
      audio: "assets/Licenciaturas/la.mp3"
    },
    {
      nombre: "Licenciatura en Multimedia y Animación Digital",
      siglas: "LMAD",
      descripcion: "Formar profesionistas capaces de diseñar aplicaciones enfocadas a cubrir necesidades de la industria del arte" +
        "digital y medios interactivos, haciendo uso de TICs y arte gráfico, para los sectores público y privado.",
      imagen: "assets/Licenciaturas/lmad.jpg",
      pagina: "/licenciaturas/multimedia",
      audio: "assets/Licenciaturas/lmad.mp3"
    },
    {
      nombre: "Licenciatura en Seguridad en Tecnologías de la Información.",
      siglas: "LSTI",
      descripcion: "Formar profesionales en la Licenciatura en Seguridad en Tecnologías de Información con sentido humanista," +
        "creativo e innovador, capaces de generar, difundir y aplicar el conocimiento para responder a las demandas del desarrollo" +
        "científico, tecnológico, económico y social de la región y del país en el contexto internacional.",
      imagen: "assets/Licenciaturas/lsti.jpg",
      pagina: "/licenciaturas/seguridad-informatica",
      audio: "assets/Licenciaturas/lsti.mp3"
    }
  ]

  ngOnInit() {
  }

}
