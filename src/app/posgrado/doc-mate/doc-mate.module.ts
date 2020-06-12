import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocMatePageRoutingModule } from './doc-mate-routing.module';

import { DocMatePage } from './doc-mate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocMatePageRoutingModule
  ],
  declarations: [DocMatePage]
})
export class DocMatePageModule {}
