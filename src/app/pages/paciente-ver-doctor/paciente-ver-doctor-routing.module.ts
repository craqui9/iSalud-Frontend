import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteVerDoctorPage } from './paciente-ver-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteVerDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteVerDoctorPageRoutingModule {}
