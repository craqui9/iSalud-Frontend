import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorVistaHistorialPage } from './doctor-vista-historial.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorVistaHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorVistaHistorialPageRoutingModule {}
