import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  constructor(
    private camera: Camera,
    public composer: EmailComposer,
    private formBuilder: FormBuilder,
    private file: File
  ) {
    this.forma = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      edad: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      comentario: ['', Validators.required],
    });
  }

  forma: FormGroup = null;
  foto: any;
  fotoCorreo: any;

  hacerFoto() {
    const options: CameraOptions = {
    quality: 100,
    encodingType: this.camera.EncodingType.JPEG,
    destinationType: this.camera.DestinationType.FILE_URI
    }

    this.camera.getPicture(options).then((imageData) => {
      this.fotoCorreo = imageData;
      let filename = imageData.substring(imageData.lastIndexOf('/')+1);
      let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
      this.file.readAsDataURL(path, filename).then(res=> this.foto = res  );
    }, (err) => {
      alert(err);
    });
  }

  submit() {
    this.sendForm();
    console.log(this.forma.value)
    this.forma.reset();
  }

  sendForm() {
    const email = {
      to: 'sylnne.21@gmail.com',
      cc: this.forma.value.email,
      attachments: [
        this.fotoCorreo
      ],
      subject: 'Suicidio masivo en la facu',
      nombre: this.forma.value.nombre,
      comentario: this.forma.value.comentario,
      body: this.forma.value.nombre + ': ' + this.forma.value.comentario +
        '<br>Edad: ' + this.forma.value.edad + '<br><br>',
      app: 'Gmail',
      isHtml: true
    };

    this.composer.open(email);
  }

  ngOnInit() {
  }
}
