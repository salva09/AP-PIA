import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanLSTIPage } from './plan-lsti.page';

const routes: Routes = [
  {
    path: '',
    component: PlanLSTIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanLSTIPageRoutingModule {}
