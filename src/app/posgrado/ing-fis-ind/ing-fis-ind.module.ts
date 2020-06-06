import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngFisIndPageRoutingModule } from './ing-fis-ind-routing.module';

import { IngFisIndPage } from './ing-fis-ind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngFisIndPageRoutingModule
  ],
  declarations: [IngFisIndPage]
})
export class IngFisIndPageModule {}
