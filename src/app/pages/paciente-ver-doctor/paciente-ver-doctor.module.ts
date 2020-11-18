import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteVerDoctorPageRoutingModule } from './paciente-ver-doctor-routing.module';

import { PacienteVerDoctorPage } from './paciente-ver-doctor.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteVerDoctorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PacienteVerDoctorPage]
})
export class PacienteVerDoctorPageModule {}
