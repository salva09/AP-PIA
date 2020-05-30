import { Component, OnInit } from '@angular/core';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from "@ionic-native/google-maps";

import { Platform, LoadingController, ToastController } from "@ionic/angular";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map: GoogleMap;
  loading: any;
  homeMarker: Marker;

  constructor(
      public loadingCtrl: LoadingController,
      public toastCtrl: ToastController,
      private platform: Platform
  ) {}

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: {
          lat: 25.725608,
          lng: -100.315211
        },
        zoom: 18,
        tilt: 30
      }
    });

      this.map.addMarkerSync({
          title: "FCFM",
          snippet: "Aquí se encuentra la facultad",
          position: {
              lat: 25.725608,
              lng: -100.315211
          },
          animation: GoogleMapsAnimation.BOUNCE
      });
  }

  async localizar() {
      //await this.map.clear();
      await this.homeMarker.remove();

    this.loading = await this.loadingCtrl.create({
      message: "Espere por favor..."
    });

    await this.loading.present();

    this.map
        .getMyLocation()
        .then((location: MyLocation) => {
          this.loading.dismiss();

          this.map.animateCamera({
            target: location.latLng,
            zoom: 17,
            tilt: 30
          });

          this.homeMarker = this.map.addMarkerSync({
            title: "Estoy aquí!",
            snippet: "Esta es su ubicación",
            position: location.latLng,
            animation: GoogleMapsAnimation.BOUNCE
          });

          this.homeMarker.showInfoWindow();

          this.homeMarker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            this.showToast("clicked!");
          });
        })
        .catch(error => {
          this.loading.dismiss();
          this.showToast(error.error_message);
        });
  }

  async showToast(mensaje) {
    let toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: "bottom"
    });

    await toast.present();
  }

}
