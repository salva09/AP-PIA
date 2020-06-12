import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  ngOnInit() {
  }

  constructor(private camera: Camera, public composer: EmailComposer, private formBuilder: FormBuilder) {
    this.forma = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      edad: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      comentario: ['', Validators.required],
    });
  }

  forma: FormGroup = null;
  foto: any;

  hacerFoto() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  submit() {
    console.log(this.forma.value)
    this.forma.reset();
    this.sendForm();
  }

  sendForm() {
    let email = {
      to: 'sylnne.21@gmail.com',
      subject: 'Suicidio masivo en la facu',
      nombre: this.forma.value.nombre,
      comentario: this.forma.value.comentario,
      body: this.forma.value.nombre + ': ' + this.forma.value.comentario +
        '<br>Edad: ' + this.forma.value.edad + '<br><br>',
      attachments: [
        this.foto
      ],

      app: "Gmail",
      isHtml: true
    }
    this.composer.open(email);
  }
}