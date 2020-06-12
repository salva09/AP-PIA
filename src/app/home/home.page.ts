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
            imagen: "https://scontent.fntr5-1.fna.fbcdn.net/v/t1.0-9/101427272_3187280781304087_6263068387887284224_o.jpg?_nc_cat=107&_nc_sid=730e14&_nc_ohc=dQke0-70Ye8AX9eB23W&_nc_ht=scontent.fntr5-1.fna&oh=347aa24319ced9d142dd3e022c30814e&oe=5F01EF62",
            descripcion: "Emergente Covid-19"+
            "Periono Enero-Junio 2020"
        },
        {
            nombre: 'Primer Defensa de Tesis por Medio de Miscrosoft Teams',
            imagen: "https://scontent.fntr5-1.fna.fbcdn.net/v/t1.0-9/98359898_3158096720889160_7573720955826995200_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=KE4qQq7Yx0wAX-zQmEq&_nc_ht=scontent.fntr5-1.fna&oh=e46811a208704f350d02fbdba41a573a&oe=5F02B991",
            descripcion: "El día 20 de mayo de 2020, gracias a la #EstrategiaDigitalUANL, se llevó a cabo con éxito la primera defensa de tesis en línea por medio de MS Teams."
        },
        {
            nombre: 'UANL arranca con primer torneo de FIFA 20',
            imagen: "https://dlprivateserver.com/wp-content/uploads/2020/02/FIFA-20-Demanda-en-Francia-quotFUT-debe-clasificarse-como-780x470.png",
            descripcion: "El primer torneo de FIFA 2020 de la UANL dio inicio el domingo 7 de junio con cuatro partidos de la fase de eliminatorias"
        }
        
    ]
    

}
