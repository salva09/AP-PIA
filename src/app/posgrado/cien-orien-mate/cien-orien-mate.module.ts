import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CienOrienMatePageRoutingModule } from './cien-orien-mate-routing.module';

import { CienOrienMatePage } from './cien-orien-mate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CienOrienMatePageRoutingModule
  ],
  declarations: [CienOrienMatePage]
})
export class CienOrienMatePageModule {}
