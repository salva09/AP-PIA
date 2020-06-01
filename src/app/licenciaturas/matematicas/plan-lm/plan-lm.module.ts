import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanLMPageRoutingModule } from './plan-lm-routing.module';

import { PlanLMPage } from './plan-lm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanLMPageRoutingModule
  ],
  declarations: [PlanLMPage]
})
export class PlanLMPageModule {}
