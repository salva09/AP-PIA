import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-conoce-mas',
  templateUrl: './conoce-mas.page.html',
  styleUrls: ['./conoce-mas.page.scss'],
})
export class ConoceMasPage implements OnInit {

  conoceMas = 'servicios';

  constructor(private modalC: ModalController) { }

  opciones = {
    zoom: {
      maxRatio: 2
    }
  };

  @ViewChild(IonSegment, {static: true}) opcion: IonSegment;

  deportes = [
    {
      nombre: 'Ajedrez Femenil y Varonil',
      imagen: 'https://i.pinimg.com/originals/93/80/77/93807741e52b8641e63cab9d5a29e469.jpg'
    },
    {
      nombre: 'Atletismo Varonil',
      imagen: 'https://i.pinimg.com/originals/78/41/b8/7841b87f5f045017642952f4f882053e.png'
    },
    {
      nombre: 'Basquetbol Varonil y Femenil',
      imagen: 'https://i.pinimg.com/originals/6b/8e/d8/6b8ed8532ffbb741997b69cc150b3826.jpg'
    },
    {
      nombre: 'Softbol Varonil',
      imagen: 'https://cdn.pixabay.com/photo/2020/02/22/06/44/baseball-drawing-4869572_960_720.png'
    },
    {
      nombre: 'Futbol Soccer Femenil y Varonil',
      imagen: 'https://cdn5.dibujos.net/dibujos/pintados/201622/jugador-de-futbol-con-balon-dibujos-de-los-usuarios-10641872.jpg'
    },
    {
      nombre: 'Handball Varonil',
      imagen: 'https://abantu.es/wp-content/uploads/2015/04/balonmano.png'
    },
    {
      nombre: 'Tae Kwon Do Varonil y Femenil',
      imagen: 'https://i.pinimg.com/474x/6e/fa/c9/6efac9355cb69e41d9214335548d890b.jpg'
    },
    {
      nombre: 'Tenis Varonil',
      imagen: 'https://i.pinimg.com/originals/25/4f/67/254f67411f3b38b87ee6999cf664b7b2.png'
    },
    {
      nombre: 'Tochito Femenil',
      imagen: 'https://i.pinimg.com/originals/a1/38/ca/a138ca5abc8a5db37f263dfb8743ac35.jpg'
    },
    {
      nombre: 'Tenis de Mesa Varonil y Femenil',
      imagen: 'https://cdn5.dibujos.net/dibujos/pintados/201943/tenis-de-mesa-1-juegos-11652307.jpg'
    },
    {
      nombre: 'Voleibol Varonil y Femenil',
      imagen: 'https://i.pinimg.com/736x/e7/54/89/e754896f2f99a345dc836b9f6e3d2227.jpg'
    },
    {
      nombre: 'Futbol Americano',
      imagen: 'https://i.pinimg.com/originals/74/5e/f4/745ef4935ef3a8a326ddfa2759840ddf.png'
    }
  ];

  actividadesCulturales = [

    {
      nombre: 'Tuna',
      imagen: 'https://www.ulima.edu.pe/sites/default/files/styles/600x300/public/event/img/tunas-banner-600x300.png?itok=o0jGSaHC'
    },
    {
      nombre: 'Rondalla',
      imagen: 'https://eventosciudadjuarez.files.wordpress.com/2012/11/musica.jpg'
    },
    {
      nombre: 'Guitarras Clasicas',
      imagen: 'https://lh3.googleusercontent.com/proxy/zNyZVv255ePSCS5qENcZoDG2kYSXodk_lw0C59LzF4B3E2UP2XFfXQWy_V1fF_eAHAnjJPgecaMYA3jK9n-zPs0aXC5LL4k3WOi_WzAqQbCt69vadDdJuN4RDEE5n1dXFg'
    },
    {
      nombre: 'Danza Folklórica',
      imagen: 'https://cartelera.morelos.gob.mx/wp-content/uploads/2019/06/banner_danzafolklorica-01.jpg'
    },
    {
      nombre: 'Teatro',
      imagen: 'https://www.netclipart.com/pp/m/233-2338340_stage-dibujo-de-un-teatro-a-color.png'
    },
    {
      nombre: 'Ritmos Latinos',
      imagen: 'https://illustoon.com/photo/923.png'
    },
    {
      nombre: 'Salsa',
      imagen: 'https://image.shutterstock.com/image-vector/vector-cartoon-music-note-icon-260nw-1165584241.jpg'
    },
    {
      nombre: 'Grupo Musical (Fisicos)',
      imagen: 'https://i.pinimg.com/originals/37/98/03/37980363eab04d9cd22ee9bb1da08da7.jpg'
    },
    {
      nombre: 'Hip Hop',
      imagen: 'https://cdn5.dibujos.net/dibujos/pintados/201248/notas-en-la-escala-musical-musica-pintado-por-popet20-9784953.jpg'
    }
  ];

  ngOnInit() {}

}
