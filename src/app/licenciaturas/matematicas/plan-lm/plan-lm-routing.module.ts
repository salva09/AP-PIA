import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanLMPage } from './plan-lm.page';

const routes: Routes = [
  {
    path: '',
    component: PlanLMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanLMPageRoutingModule {}
