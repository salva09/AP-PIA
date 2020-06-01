import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanLAPageRoutingModule } from './plan-la-routing.module';

import { PlanLAPage } from './plan-la.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanLAPageRoutingModule
  ],
  declarations: [PlanLAPage]
})
export class PlanLAPageModule {}
