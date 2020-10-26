import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientePrincipalPageRoutingModule } from './paciente-principal-routing.module';

import { PacientePrincipalPage } from './paciente-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientePrincipalPageRoutingModule
  ],
  declarations: [PacientePrincipalPage]
})
export class PacientePrincipalPageModule {}
