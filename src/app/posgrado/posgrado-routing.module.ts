import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosgradoPage } from './posgrado.page';

const routes: Routes = [
  {
    path: '',
    component: PosgradoPage
  },  {
    path: 'cien-orien-mate',
    loadChildren: () => import('./cien-orien-mate/cien-orien-mate.module').then( m => m.CienOrienMatePageModule)
  },
  {
    path: 'ing-fis-ind',
    loadChildren: () => import('./ing-fis-ind/ing-fis-ind.module').then( m => m.IngFisIndPageModule)
  },
  {
    path: 'ing-segu-inf',
    loadChildren: () => import('./ing-segu-inf/ing-segu-inf.module').then( m => m.IngSeguInfPageModule)
  },
  {
    path: 'astrofisica',
    loadChildren: () => import('./astrofisica/astrofisica.module').then( m => m.AstrofisicaPageModule)
  },
  {
    path: 'doc-mate',
    loadChildren: () => import('./doc-mate/doc-mate.module').then( m => m.DocMatePageModule)
  },
  {
    path: 'doc-ing-fis-ind',
    loadChildren: () => import('./doc-ing-fis-ind/doc-ing-fis-ind.module').then( m => m.DocIngFisIndPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosgradoPageRoutingModule {}
