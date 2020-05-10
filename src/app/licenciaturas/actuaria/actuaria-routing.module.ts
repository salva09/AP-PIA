import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuariaPage } from './actuaria.page';

const routes: Routes = [
  {
    path: '',
    component: ActuariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuariaPageRoutingModule {}
