import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminEliminarPageRoutingModule } from './admin-eliminar-routing.module';

import { AdminEliminarPage } from './admin-eliminar.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminEliminarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminEliminarPage]
})
export class AdminEliminarPageModule {}
