import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorVistaHistorialPageRoutingModule } from './doctor-vista-historial-routing.module';

import { DoctorVistaHistorialPage } from './doctor-vista-historial.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorVistaHistorialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DoctorVistaHistorialPage]
})
export class DoctorVistaHistorialPageModule {}
