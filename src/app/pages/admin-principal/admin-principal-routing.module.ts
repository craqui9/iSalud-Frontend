import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPrincipalPage } from './admin-principal.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPrincipalPageRoutingModule {}
