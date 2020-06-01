import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanLMADPage } from './plan-lmad.page';

const routes: Routes = [
  {
    path: '',
    component: PlanLMADPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanLMADPageRoutingModule {}
