import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorListadoPacientesPage } from './doctor-listado-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorListadoPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorListadoPacientesPageRoutingModule {}
