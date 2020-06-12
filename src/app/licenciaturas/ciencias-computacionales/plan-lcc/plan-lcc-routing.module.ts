import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanLCCPage } from './plan-lcc.page';

const routes: Routes = [
  {
    path: '',
    component: PlanLCCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanLCCPageRoutingModule {}
