import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientePedirCitaPageRoutingModule } from './paciente-pedir-cita-routing.module';

import { PacientePedirCitaPage } from './paciente-pedir-cita.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientePedirCitaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PacientePedirCitaPage]
})
export class PacientePedirCitaPageModule {}
