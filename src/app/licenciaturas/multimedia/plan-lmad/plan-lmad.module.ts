import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanLMADPageRoutingModule } from './plan-lmad-routing.module';

import { PlanLMADPage } from './plan-lmad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanLMADPageRoutingModule
  ],
  declarations: [PlanLMADPage]
})
export class PlanLMADPageModule {}
