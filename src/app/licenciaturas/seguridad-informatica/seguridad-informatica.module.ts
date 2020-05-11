import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguridadInformaticaPageRoutingModule } from './seguridad-informatica-routing.module';

import { SeguridadInformaticaPage } from './seguridad-informatica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguridadInformaticaPageRoutingModule
  ],
  declarations: [SeguridadInformaticaPage]
})
export class SeguridadInformaticaPageModule {}
