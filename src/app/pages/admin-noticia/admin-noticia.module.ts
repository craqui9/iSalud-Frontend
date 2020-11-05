import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminNoticiaPageRoutingModule } from './admin-noticia-routing.module';

import { AdminNoticiaPage } from './admin-noticia.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminNoticiaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminNoticiaPage]
})
export class AdminNoticiaPageModule {}
