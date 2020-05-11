import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FisicaPageRoutingModule } from './fisica-routing.module';

import { FisicaPage } from './fisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FisicaPageRoutingModule
  ],
  declarations: [FisicaPage]
})
export class FisicaPageModule {}
