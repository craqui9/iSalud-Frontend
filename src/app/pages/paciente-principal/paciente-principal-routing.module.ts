import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientePrincipalPage } from './paciente-principal.page';

const routes: Routes = [
  {
    path: '',
    component: PacientePrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientePrincipalPageRoutingModule {}
