import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorCreacionTratamientoPageRoutingModule } from './doctor-creacion-tratamiento-routing.module';

import { DoctorCreacionTratamientoPage } from './doctor-creacion-tratamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorCreacionTratamientoPageRoutingModule
  ],
  declarations: [DoctorCreacionTratamientoPage]
})
export class DoctorCreacionTratamientoPageModule {}
