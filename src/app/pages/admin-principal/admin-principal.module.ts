import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPrincipalPageRoutingModule } from './admin-principal-routing.module';

import { AdminPrincipalPage } from './admin-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPrincipalPageRoutingModule
  ],
  declarations: [AdminPrincipalPage]
})
export class AdminPrincipalPageModule {}
