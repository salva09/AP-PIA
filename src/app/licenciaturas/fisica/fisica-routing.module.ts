import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FisicaPage } from './fisica.page';

const routes: Routes = [
  {
    path: '',
    component: FisicaPage
  },  {
    path: 'plan-lf',
    loadChildren: () => import('./plan-lf/plan-lf.module').then( m => m.PlanLFPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FisicaPageRoutingModule {}
