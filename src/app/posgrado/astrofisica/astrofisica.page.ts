import { Component, OnInit } from '@angular/core';
import { AnimacionService } from '../../servicios/animacion.service';

@Component({
  selector: 'app-astrofisica',
  templateUrl: './astrofisica.page.html',
  styleUrls: ['./astrofisica.page.scss'],
})
export class AstrofisicaPage implements OnInit {

  constructor(
    private animacion: AnimacionService
  ) {

  }

  animarFlecha(seccion) {
    this.animacion.animateArrow(seccion);
  }

  secciones = [
    {
      titulo: "Descripción:",
      clase: "a",
      texto: "La Universidad Autónoma de Nuevo León (UANL) se sitúa en una de las regiones del país donde hay un " +
        "elevado desarrollo industrial, en el que la innovación científica y tecnológica es imprescindible para la " +
        "competitividad de las empresas de la región y de la misma UANL. Por otro lado, la reciente creación de la " +
        "Agencia Espacial Mexicana en 2010, define el inicio nuevos esfuerzos para el desarrollo de las ciencias " +
        "espaciales en México.  Este entorno impone la necesidad de formar recursos humanos especializados con " +
        "capacidad para colaborar en proyectos de investigación en las áreas de la Ciencias Planetarias, o " +
        "desarrollar actividades específicas que fortalezcan el desarrollo de las Ciencias Espaciales y áreas " +
        "tecnológicas de instrumentación y software en el país.",
    }
  ]
  ngOnInit() {
  }

}
