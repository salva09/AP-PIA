import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocMatePage } from './doc-mate.page';

const routes: Routes = [
  {
    path: '',
    component: DocMatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocMatePageRoutingModule {}
