import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerNoticiasDoctorPage } from './ver-noticias-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: VerNoticiasDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerNoticiasDoctorPageRoutingModule {}
