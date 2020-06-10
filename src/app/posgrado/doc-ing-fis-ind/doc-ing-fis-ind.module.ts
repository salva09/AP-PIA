import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocIngFisIndPageRoutingModule } from './doc-ing-fis-ind-routing.module';

import { DocIngFisIndPage } from './doc-ing-fis-ind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocIngFisIndPageRoutingModule
  ],
  declarations: [DocIngFisIndPage]
})
export class DocIngFisIndPageModule {}
