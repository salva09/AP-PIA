import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-conoce-mas',
  templateUrl: './conoce-mas.page.html',
  styleUrls: ['./conoce-mas.page.scss'],
})
export class ConoceMasPage implements OnInit {

  conoceMas = 'servicios';

  constructor() {
    
  }

  opciones = {
    zoom: {
      maxRatio: 2
    }
  };

  @ViewChild(IonSegment, {static: true}) opcion: IonSegment;

  deportes = [
    {
      nombre: 'Ajedrez Femenil y Varonil',
      imagen: 'assets/Deportes/ajedrez.jpg'
    },
    {
      nombre: 'Atletismo Varonil',
      imagen: 'assets/Deportes/atletismo.png'
    },
    {
      nombre: 'Basquetbol Varonil y Femenil',
      imagen: 'assets/Deportes/basquetbol.jpg'
    },
    {
      nombre: 'Softbol Varonil',
      imagen: 'assets/Deportes/softbol.png'
    },
    {
      nombre: 'Futbol Soccer Femenil y Varonil',
      imagen: 'assets/Deportes/futbol.jpg'
    },
    {
      nombre: 'Handball Varonil',
      imagen: 'assets/Deportes/handball.png'
    },
    {
      nombre: 'Tae Kwon Do Varonil y Femenil',
      imagen: 'assets/Deportes/taekwondo.jpg'
    },
    {
      nombre: 'Tenis Varonil',
      imagen: 'assets/Deportes/tenis.png'
    },
    {
      nombre: 'Tochito Femenil',
      imagen: 'assets/Deportes/tochito.jpg'
    },
    {
      nombre: 'Tenis de Mesa Varonil y Femenil',
      imagen: 'assets/Deportes/tenis-mesa.jpg'
    },
    {
      nombre: 'Voleibol Varonil y Femenil',
      imagen: 'assets/Deportes/voleibol.jpg'
    },
    {
      nombre: 'Futbol Americano',
      imagen: 'assets/Deportes/futbol-americano.png'
    }
  ];

  actividadesCulturales = [

    {
      nombre: 'Tuna',
      imagen: 'assets/AC/tuna.png'
    },
    {
      nombre: 'Rondalla',
      imagen: 'assets/AC/rondalla.jpg'
    },
    {
      nombre: 'Guitarras Clasicas',
      imagen: 'assets/AC/guitarras-clasicas.png'
    },
    {
      nombre: 'Danza Folklórica',
      imagen: 'assets/AC/danza.jpg'
    },
    {
      nombre: 'Teatro',
      imagen: 'assets/AC/teatro.png'
    },
    {
      nombre: 'Ritmos Latinos',
      imagen: 'assets/AC/ritmos.png'
    },
    {
      nombre: 'Salsa',
      imagen: 'assets/AC/salsa.jpg'
    },
    {
      nombre: 'Grupo Musical (Fisicos)',
      imagen: 'assets/AC/grupo.jpg'
    },
    {
      nombre: 'Hip Hop',
      imagen: 'assets/AC/hip-hop.jpg'
    }
  ];

  ngOnInit() {}

}
