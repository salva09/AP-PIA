import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatematicasPageRoutingModule } from './matematicas-routing.module';

import { MatematicasPage } from './matematicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatematicasPageRoutingModule
  ],
  declarations: [MatematicasPage]
})
export class MatematicasPageModule {}
