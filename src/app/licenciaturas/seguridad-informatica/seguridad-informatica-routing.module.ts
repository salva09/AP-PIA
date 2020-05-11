import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguridadInformaticaPage } from './seguridad-informatica.page';

const routes: Routes = [
  {
    path: '',
    component: SeguridadInformaticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadInformaticaPageRoutingModule {}
