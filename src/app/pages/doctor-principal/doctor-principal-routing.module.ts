import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorPrincipalPage } from './doctor-principal.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorPrincipalPageRoutingModule {}
