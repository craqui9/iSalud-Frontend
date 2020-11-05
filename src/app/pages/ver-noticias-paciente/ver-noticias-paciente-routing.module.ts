import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerNoticiasPacientePage } from './ver-noticias-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: VerNoticiasPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerNoticiasPacientePageRoutingModule {}
