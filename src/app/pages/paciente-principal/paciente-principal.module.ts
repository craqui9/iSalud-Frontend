import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientePrincipalPageRoutingModule } from './paciente-principal-routing.module';

import { PacientePrincipalPage } from './paciente-principal.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientePrincipalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PacientePrincipalPage]
})
export class PacientePrincipalPageModule {}
