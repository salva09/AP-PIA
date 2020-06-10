import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CienOrienMatePage } from './cien-orien-mate.page';

const routes: Routes = [
  {
    path: '',
    component: CienOrienMatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CienOrienMatePageRoutingModule {}
