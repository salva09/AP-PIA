import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuariaPage } from './actuaria.page';

const routes: Routes = [
  {
    path: '',
    component: ActuariaPage
  },  {
    path: 'plan-la',
    loadChildren: () => import('./plan-la/plan-la.module').then( m => m.PlanLAPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuariaPageRoutingModule {}
