import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatematicasPage } from './matematicas.page';

const routes: Routes = [
  {
    path: '',
    component: MatematicasPage
  },  {
    path: 'plan-lm',
    loadChildren: () => import('./plan-lm/plan-lm.module').then( m => m.PlanLMPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatematicasPageRoutingModule {}
