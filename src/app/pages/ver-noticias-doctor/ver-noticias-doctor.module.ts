import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerNoticiasDoctorPageRoutingModule } from './ver-noticias-doctor-routing.module';

import { VerNoticiasDoctorPage } from './ver-noticias-doctor.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerNoticiasDoctorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerNoticiasDoctorPage]
})
export class VerNoticiasDoctorPageModule {}
