import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenciaturasPageRoutingModule } from './licenciaturas-routing.module';

import { LicenciaturasPage } from './licenciaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenciaturasPageRoutingModule
  ],
  declarations: [LicenciaturasPage]
})
export class LicenciaturasPageModule {}
