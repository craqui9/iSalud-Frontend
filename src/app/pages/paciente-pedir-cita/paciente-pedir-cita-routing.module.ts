import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientePedirCitaPage } from './paciente-pedir-cita.page';

const routes: Routes = [
  {
    path: '',
    component: PacientePedirCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientePedirCitaPageRoutingModule {}
