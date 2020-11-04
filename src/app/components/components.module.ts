import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuPacienteComponent } from './menu-paciente/menu-paciente.component';
import { MenuDoctorComponent } from './menu-doctor/menu-doctor.component';



@NgModule({
  declarations: [
    MenuAdminComponent,
    MenuPacienteComponent,
    MenuDoctorComponent
  ],
  exports: [
    MenuAdminComponent,
    MenuPacienteComponent,
    MenuDoctorComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
