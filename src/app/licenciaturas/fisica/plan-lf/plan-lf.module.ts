import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanLFPageRoutingModule } from './plan-lf-routing.module';

import { PlanLFPage } from './plan-lf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanLFPageRoutingModule
  ],
  declarations: [PlanLFPage]
})
export class PlanLFPageModule {}
