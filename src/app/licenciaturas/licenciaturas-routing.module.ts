import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenciaturasPage } from './licenciaturas.page';

const routes: Routes = [
  {
    path: '',
    component: LicenciaturasPage
  },
  {
    path: 'matematicas',
    loadChildren: () => import('./matematicas/matematicas.module').then( m => m.MatematicasPageModule)
  },
  {
    path: 'fisica',
    loadChildren: () => import('./fisica/fisica.module').then( m => m.FisicaPageModule)
  },
  {
    path: 'ciencias-computacionales',
    loadChildren: () => import('./ciencias-computacionales/ciencias-computacionales.module').then( m => m.CienciasComputacionalesPageModule)
  },
  {
    path: 'actuaria',
    loadChildren: () => import('./actuaria/actuaria.module').then( m => m.ActuariaPageModule)
  },
  {
    path: 'seguridad-informatica',
    loadChildren: () => import('./seguridad-informatica/seguridad-informatica.module').then( m => m.SeguridadInformaticaPageModule)
  },
  {
    path: 'multimedia',
    loadChildren: () => import('./multimedia/multimedia.module').then( m => m.MultimediaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenciaturasPageRoutingModule {}
