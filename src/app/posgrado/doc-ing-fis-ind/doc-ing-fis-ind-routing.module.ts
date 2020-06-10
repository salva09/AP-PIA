import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocIngFisIndPage } from './doc-ing-fis-ind.page';

const routes: Routes = [
  {
    path: '',
    component: DocIngFisIndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocIngFisIndPageRoutingModule {}
