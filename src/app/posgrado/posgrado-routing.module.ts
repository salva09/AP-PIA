import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosgradoPage } from './posgrado.page';

const routes: Routes = [
  {
    path: '',
    component: PosgradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosgradoPageRoutingModule {}
