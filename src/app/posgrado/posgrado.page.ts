import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";
import { Howl } from 'howler';

@Component({
  selector: 'app-posgrado',
  templateUrl: './posgrado.page.html',
  styleUrls: ['./posgrado.page.scss'],
})
export class PosgradoPage implements OnInit {

  constructor(private menu: MenuController) { }

  reproducir(posgrado) {
    let sonido = new Audio();
    sonido.src = posgrado.audio;
    sonido.load();
    sonido.play();
  }

  posgrados = [
    {
      nombre: "Ciencias con Orientación en Matemáticas",
      siglas: "MCOM",
      descripcion: "Los que tengan maestría y doctorado con conocimientos sólidos en matemáticas y una disciplina " + 
      "relacionada como ciencias computacionales o ingeniería y puedan aplicar la teoría matemática a problemas " + 
      "del mundo real, tendrán las mejores propuestas de trabajo en ocupaciones relacionadas.",
      imagen: "assets/Posgrado/Ciencias.jpeg",
      pagina: "/posgrado/cien-orien-mate",
      audio: "assets/Posgrado/mcom.mp3"
    },
    {
      nombre: "Ing. Física Industrial",
      siglas: "MIFI",
      descripcion: "Es un programa de posgrado con orientación e investigación, multidisciplinario, y enfocado " + 
      "en la formación de recursos humanos con una sólida preparación para realizar investigación original, de " + 
      "frontera, y competitiva a nivel internacional, y con capacidad y conocimientos para desarrollar tecnología.",
      imagen: "assets/Posgrado/Ing-Fis-Ind.jpeg",
      pagina: "/posgrado/ing-fis-ind",
      audio: "assets/Posgrado/mifi.mp3"
    },
    {
      nombre: "Ing. en Seguridad de la Información",
      siglas: "MISI",
      descripcion: "La demanda sobre los riesgos informáticos y los avances tecnológicos ha ocasionado " +
      "que profesionales de TIC’s se involucren en temas especializados de Seguridad Informática, y consideramos " + 
      "que es necesario un posgrado que permita a estos profesionistas el poder actualizarse en esta área de Seguridad "
      + "de la Información.",
      imagen: "assets/Posgrado/Seguridad.jpeg",
      pagina: "/posgrado/ing-segu-inf",
      audio: "assets/Posgrado/misi.mp3"
    },
    {
      nombre: "Maestría en Astrofísica Planetaria y Tecnologías Afines",
      siglas: "MAPTA",
      descripcion: "La reciente creación de la Agencia Espacial Mexicana en 2010, define el inicio de nuevos esfuerzos " + 
      " para el desarrollo de las ciencias espaciales en México. Este entorno impone la necesidad de formar recursos " + 
      " humanos especializados con capacidad para colaborar en proyectos de investigación en las áreas de la Ciencias " + 
      " Planetarias",
      imagen: "assets/Posgrado/Astronomia.jpeg",
      pagina: "/posgrado/astrofisica",
      audio: "assets/Posgrado/mapta.mp3"
    },
    {
      nombre: "Doctorado en Matemáticas",
      siglas: "DCOM",
      descripcion: "Formar egresados con conocimientos profundos en algún área de la matemática con capacidad de " + 
      "participar en grupos de investigación en el sector público o privado y ser reconocidos por sus resusltados " + 
      "ante la comunidad científica nacional e internacional.",
      imagen: "assets/Posgrado/Doc-Mat.jpeg",
      pagina: "/posgrado/doc-mate",
      audio: "assets/Posgrado/dcom.mp3"
    },
    {
      nombre: "Doctorado en Ing. Física Industrial",
      siglas: "DIFI",
      descripcion: "Programa de posgrado con orientación e investigación, multidisciplinario, y enfocado en la " + 
      "formación de recursos humanos con una sólida preparación para realizar investigación original, de frontera, " + 
      "y competitiva a nivel internacional, y con capacidad y conocimientos para desarrollar tecnología.",
      imagen: "assets/Posgrado/Doc-Fisica.jpeg",
      pagina: "/posgrado/doc-ing-fis-ind",
      audio: "assets/Posgrado/difi.mp3"
    },
  ]

  activeAudio: String = null;
  player: Howl = null;
  isPlaying = false;

  start(audio: String, event: any) {
    if(this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [audio],
      onplay: () => {
        this.isPlaying = true;
        this.activeAudio = audio;
      },
      onend: () => {
        this.isPlaying = false;
      }
    })
    this.player.play();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if(pause) {
      this.player.pause();
    }
    else {
      this.player.play();
    }
  }

  stop() {
    this.player.pause();
    this.isPlaying = false;
    this.activeAudio = null;
  }

  ngOnInit() {
  }

}
