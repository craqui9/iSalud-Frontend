import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminVerPageRoutingModule } from './admin-ver-routing.module';

import { AdminVerPage } from './admin-ver.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminVerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminVerPage]
})
export class AdminVerPageModule {}
