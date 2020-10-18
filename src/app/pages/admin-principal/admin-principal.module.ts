import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPrincipalPageRoutingModule } from './admin-principal-routing.module';

import { AdminPrincipalPage } from './admin-principal.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPrincipalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminPrincipalPage]
})
export class AdminPrincipalPageModule {}
