import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConoceMasPage } from './conoce-mas.page';

const routes: Routes = [
  {
    path: '',
    component: ConoceMasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConoceMasPageRoutingModule {}
