import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuPacienteComponent } from './menu-paciente/menu-paciente.component';
import { MenuDoctorComponent } from './menu-doctor/menu-doctor.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { DoctorListadoPacientesComponent } from './doctor-listado-pacientes/doctor-listado-pacientes.component';



@NgModule({
  declarations: [
    MenuAdminComponent,
    MenuPacienteComponent,
    MenuDoctorComponent,
    NoticiasComponent,
    NoticiaComponent,
    DoctorListadoPacientesComponent
  ],
  exports: [
    MenuAdminComponent,
    MenuPacienteComponent,
    MenuDoctorComponent,
    NoticiasComponent,
    NoticiaComponent,
    DoctorListadoPacientesComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
