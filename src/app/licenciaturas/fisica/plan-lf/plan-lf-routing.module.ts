import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanLFPage } from './plan-lf.page';

const routes: Routes = [
  {
    path: '',
    component: PlanLFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanLFPageRoutingModule {}
