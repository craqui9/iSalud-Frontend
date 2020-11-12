import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuPacienteComponent } from './menu-paciente/menu-paciente.component';
import { MenuDoctorComponent } from './menu-doctor/menu-doctor.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { DoctorListadoPacientesComponent } from './doctor-listado-pacientes/doctor-listado-pacientes.component';
import { DoctorListadoPacienteComponent } from './doctor-listado-paciente/doctor-listado-paciente.component';
import { DoctorListadoCitaComponent } from './doctor-listado-cita/doctor-listado-cita.component';
import { DoctorListadoCitasComponent } from './doctor-listado-citas/doctor-listado-citas.component';



@NgModule({
  declarations: [
    MenuAdminComponent,
    MenuPacienteComponent,
    MenuDoctorComponent,
    NoticiasComponent,
    NoticiaComponent,
    DoctorListadoPacientesComponent,
    DoctorListadoPacienteComponent,
    DoctorListadoCitaComponent,
    DoctorListadoCitasComponent
  ],
  exports: [
    MenuAdminComponent,
    MenuPacienteComponent,
    MenuDoctorComponent,
    NoticiasComponent,
    NoticiaComponent,
    DoctorListadoPacientesComponent,
    DoctorListadoPacienteComponent,
    DoctorListadoCitaComponent,
    DoctorListadoCitasComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
