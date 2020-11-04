import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorPrincipalPageRoutingModule } from './doctor-principal-routing.module';

import { DoctorPrincipalPage } from './doctor-principal.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorPrincipalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DoctorPrincipalPage]
})
export class DoctorPrincipalPageModule {}
