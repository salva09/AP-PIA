import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanLSTIPageRoutingModule } from './plan-lsti-routing.module';

import { PlanLSTIPage } from './plan-lsti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanLSTIPageRoutingModule
  ],
  declarations: [PlanLSTIPage]
})
export class PlanLSTIPageModule {}
