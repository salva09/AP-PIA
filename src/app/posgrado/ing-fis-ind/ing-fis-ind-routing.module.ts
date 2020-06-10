import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngFisIndPage } from './ing-fis-ind.page';

const routes: Routes = [
  {
    path: '',
    component: IngFisIndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngFisIndPageRoutingModule {}
