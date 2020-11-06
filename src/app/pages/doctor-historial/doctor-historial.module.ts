import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorHistorialPageRoutingModule } from './doctor-historial-routing.module';

import { DoctorHistorialPage } from './doctor-historial.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorHistorialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DoctorHistorialPage]
})
export class DoctorHistorialPageModule {}
