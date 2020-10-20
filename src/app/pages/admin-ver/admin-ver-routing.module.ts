import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminVerPage } from './admin-ver.page';

const routes: Routes = [
  {
    path: '',
    component: AdminVerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminVerPageRoutingModule {}
