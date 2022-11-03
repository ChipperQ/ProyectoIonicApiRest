import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoCamaraPageRoutingModule } from './no-camara-routing.module';

import { NoCamaraPage } from './no-camara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoCamaraPageRoutingModule
  ],
  declarations: [NoCamaraPage]
})
export class NoCamaraPageModule {}
