import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEliminarPage } from './admin-eliminar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminEliminarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEliminarPageRoutingModule {}
