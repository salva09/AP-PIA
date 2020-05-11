import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosgradoPageRoutingModule } from './posgrado-routing.module';

import { PosgradoPage } from './posgrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosgradoPageRoutingModule
  ],
  declarations: [PosgradoPage]
})
export class PosgradoPageModule {}
