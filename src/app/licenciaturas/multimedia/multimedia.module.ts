import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultimediaPageRoutingModule } from './multimedia-routing.module';

import { MultimediaPage } from './multimedia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultimediaPageRoutingModule
  ],
  declarations: [MultimediaPage]
})
export class MultimediaPageModule {}
