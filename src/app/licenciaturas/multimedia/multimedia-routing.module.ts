import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultimediaPage } from './multimedia.page';

const routes: Routes = [
  {
    path: '',
    component: MultimediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultimediaPageRoutingModule {}
