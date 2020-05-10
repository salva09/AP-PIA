import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuariaPageRoutingModule } from './actuaria-routing.module';

import { ActuariaPage } from './actuaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuariaPageRoutingModule
  ],
  declarations: [ActuariaPage]
})
export class ActuariaPageModule {}
