import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConoceMasPageRoutingModule } from './conoce-mas-routing.module';

import { ConoceMasPage } from './conoce-mas.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConoceMasPageRoutingModule
  ],
  declarations: [ConoceMasPage]
})
export class ConoceMasPageModule {}
