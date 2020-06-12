import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanLCCPageRoutingModule } from './plan-lcc-routing.module';

import { PlanLCCPage } from './plan-lcc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanLCCPageRoutingModule
  ],
  declarations: [PlanLCCPage]
})
export class PlanLCCPageModule {}
