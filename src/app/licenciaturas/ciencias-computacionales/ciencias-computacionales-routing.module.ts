import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CienciasComputacionalesPage } from './ciencias-computacionales.page';

const routes: Routes = [
  {
    path: '',
    component: CienciasComputacionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CienciasComputacionalesPageRoutingModule {}
