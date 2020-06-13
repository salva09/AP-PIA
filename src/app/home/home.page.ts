import { Component } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private menu: MenuController, private router: Router) {}
    sliderConfig = {
        initialSlide: 0,
        speed: 400,
        autoplay: true
      };

    eventos = [
        {
            nombre: 'Calendario Estudiantil FCFM',
            imagen: "https://scontent.fntr5-1.fna.fbcdn.net/v/t1.0-9/101427272_3187280781304087_6263068387887284224_o.jpg?_nc_cat=107&_nc_sid=730e14&_nc_ohc=oKUrfjUsWa0AX88N6EF&_nc_ht=scontent.fntr5-1.fna&oh=baa6931d22f2c47af4fc270a8f31d388&oe=5F09D862",
            descripcion: "Calendario Emergente Covid-19 Periono Enero-Junio 2020 #SomosUni #EstrategiaDigitalUANL #BisonteEnCasa #QuedateEnCasa",
            referencia: "http://www.fcfm.uanl.mx/sites/default/files/2020_COVID-19_0.pdf?fbclid=IwAR1TMjwMOs0mL5Z7otV5H5MuxX7Dzts53kyX_7dan24Hhnjx27j4nFM04Uo"
        },
        {
            nombre: 'Call Center FCFM',
            imagen: "https://scontent.fntr5-1.fna.fbcdn.net/v/t1.0-9/98018266_3163049587060540_5201132411076739072_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=FZw4P2OIUQUAX9_N6BQ&_nc_ht=scontent.fntr5-1.fna&oh=0a909884c0622e4bc6a7630378ca3e2b&oe=5F0A7824",
            descripcion: "Herramienta que sirve para resolver dudas a través de Microsoft Teams, solo debes agregar en tu aplicacion el codigo de equipo correspondiente",
            referencia: "https://www.facebook.com/FCFM.UANL/photos/a.249852738380254/3163049583727207"
        },
        {
            nombre: 'Primer Defensa de Tesis por Medio de Miscrosoft Teams',
            imagen: "https://scontent.fntr5-1.fna.fbcdn.net/v/t1.0-9/98100772_3163044280394404_6606341540191141888_o.jpg?_nc_cat=105&_nc_sid=730e14&_nc_ohc=a_sdHv6UptEAX9VWRBq&_nc_ht=scontent.fntr5-1.fna&oh=c9f00d73a85e55f3fcb4f16dccfa0543&oe=5F08D14E",
            descripcion: "El día 20 de mayo de 2020, gracias a la #EstrategiaDigitalUANL, se llevó a cabo con éxito la primera defensa de tesis en línea por medio de MS Teams.",
            referencia: "https://www.facebook.com/FCFM.UANL/posts/3163080663724099"
        },
        {
            nombre: 'UANL arranca con primer torneo de FIFA 20',
            imagen: "https://dlprivateserver.com/wp-content/uploads/2020/02/FIFA-20-Demanda-en-Francia-quotFUT-debe-clasificarse-como-780x470.png",
            descripcion: "El primer torneo de FIFA 2020 de la UANL dio inicio el domingo 7 de junio con cuatro partidos de la fase de eliminatorias",
            referencia: "https://www.facebook.com/FCFM.UANL/posts/3218435334855298"
        }
    ]
    

}
