import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map: any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  destination = { lat: 25.725627, lng: -100.315146 };


  constructor(private geolocation: Geolocation,
    //EL LOADCTRL SIRVE PARA QUE CUANDO VEAN EL MAPA LES APAREZCA EL SIGNO DE CARGANDO EN PLAN DE "NO LE MUEVAS HASTA QUE CARGUE"
    private loadCtrl: LoadingController) {
  }
  //ES PA 
  ngOnInit() {
    this.loadMap();
  }
  //Usamos async para no mm hacer una promesa xd Por asi decirlo 
  

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.destination,
      zoom: 12
    });
  
    this.directionsDisplay.setMap(this.map);
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();
    });
  }

  private async calculateRoute() {
    this.directionsService.route({
      origin: await this.obtenerLocalizacion(),
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
    }

  private async obtenerLocalizacion(){
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

}
