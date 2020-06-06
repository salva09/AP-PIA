import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstrofisicaPageRoutingModule } from './astrofisica-routing.module';

import { AstrofisicaPage } from './astrofisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstrofisicaPageRoutingModule
  ],
  declarations: [AstrofisicaPage]
})
export class AstrofisicaPageModule {}
