import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorCreacionCitaPageRoutingModule } from './doctor-creacion-cita-routing.module';

import { DoctorCreacionCitaPage } from './doctor-creacion-cita.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorCreacionCitaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DoctorCreacionCitaPage]
})
export class DoctorCreacionCitaPageModule {}
