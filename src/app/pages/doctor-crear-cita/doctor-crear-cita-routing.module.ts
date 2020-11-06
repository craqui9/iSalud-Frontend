import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorCrearCitaPage } from './doctor-crear-cita.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorCrearCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorCrearCitaPageRoutingModule {}
