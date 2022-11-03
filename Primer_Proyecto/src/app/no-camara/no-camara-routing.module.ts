import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoCamaraPage } from './no-camara.page';

const routes: Routes = [
  {
    path: '',
    component: NoCamaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoCamaraPageRoutingModule {}
