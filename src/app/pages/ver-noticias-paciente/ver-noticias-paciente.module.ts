import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerNoticiasPacientePageRoutingModule } from './ver-noticias-paciente-routing.module';

import { VerNoticiasPacientePage } from './ver-noticias-paciente.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerNoticiasPacientePageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerNoticiasPacientePage]
})
export class VerNoticiasPacientePageModule {}
