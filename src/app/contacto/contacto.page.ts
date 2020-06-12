import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private camera: Camera, public composer: EmailComposer) {}

  foto: any;
  nombre = '';
  edad = '';
  comentario = '';
  mail = '';

  hacerFoto() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    };

    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  SendForm() {
    const email = {
      to: 'sylnne.21@gmail.com',
      cc: this.mail,
      subject: 'Suicidio masivo en la facu',
      body: this.nombre + ', ' + this.edad + ' años <br>' + this.comentario,
      app: 'Gmail',
      isHtml: true
    };

    this.composer.open(email);
  }

}
