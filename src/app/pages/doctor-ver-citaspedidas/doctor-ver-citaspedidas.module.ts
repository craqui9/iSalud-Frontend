import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorVerCitaspedidasPageRoutingModule } from './doctor-ver-citaspedidas-routing.module';

import { DoctorVerCitaspedidasPage } from './doctor-ver-citaspedidas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorVerCitaspedidasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DoctorVerCitaspedidasPage]
})
export class DoctorVerCitaspedidasPageModule {}
