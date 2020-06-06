import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngSeguInfPageRoutingModule } from './ing-segu-inf-routing.module';

import { IngSeguInfPage } from './ing-segu-inf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngSeguInfPageRoutingModule
  ],
  declarations: [IngSeguInfPage]
})
export class IngSeguInfPageModule {}
