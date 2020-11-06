import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorCrearCitaPageRoutingModule } from './doctor-crear-cita-routing.module';

import { DoctorCrearCitaPage } from './doctor-crear-cita.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorCrearCitaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DoctorCrearCitaPage]
})
export class DoctorCrearCitaPageModule {}
