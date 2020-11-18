import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorVerCitaspedidasPage } from './doctor-ver-citaspedidas.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorVerCitaspedidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorVerCitaspedidasPageRoutingModule {}
