import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorCreacionTratamientoPage } from './doctor-creacion-tratamiento.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorCreacionTratamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorCreacionTratamientoPageRoutingModule {}
