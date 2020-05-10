import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CienciasComputacionalesPageRoutingModule } from './ciencias-computacionales-routing.module';

import { CienciasComputacionalesPage } from './ciencias-computacionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CienciasComputacionalesPageRoutingModule
  ],
  declarations: [CienciasComputacionalesPage]
})
export class CienciasComputacionalesPageModule {}
