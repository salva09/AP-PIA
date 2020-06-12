import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanLAPage } from './plan-la.page';

const routes: Routes = [
  {
    path: '',
    component: PlanLAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanLAPageRoutingModule {}
