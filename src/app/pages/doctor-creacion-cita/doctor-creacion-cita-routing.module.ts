import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorCreacionCitaPage } from './doctor-creacion-cita.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorCreacionCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorCreacionCitaPageRoutingModule {}
