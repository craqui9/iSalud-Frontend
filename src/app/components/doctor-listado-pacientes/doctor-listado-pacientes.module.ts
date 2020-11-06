import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorListadoPacientesPageRoutingModule } from './doctor-listado-pacientes-routing.module';

import { DoctorListadoPacientesPage } from './doctor-listado-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorListadoPacientesPageRoutingModule
  ],
  declarations: [DoctorListadoPacientesPage]
})
export class DoctorListadoPacientesPageModule {}
