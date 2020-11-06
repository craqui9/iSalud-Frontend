import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorHistorialPage } from './doctor-historial.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorHistorialPageRoutingModule {}
