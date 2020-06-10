import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngSeguInfPage } from './ing-segu-inf.page';

const routes: Routes = [
  {
    path: '',
    component: IngSeguInfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngSeguInfPageRoutingModule {}
