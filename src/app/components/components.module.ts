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
import { DoctorListadoTratamientosComponent } from './doctor-listado-tratamientos/doctor-listado-tratamientos.component';
import { DoctorListadoTratamientoComponent } from './doctor-listado-tratamiento/doctor-listado-tratamiento.component';
import { DoctorListadoSolicitudesComponent } from './doctor-listado-solicitudes/doctor-listado-solicitudes.component';
import { DoctorListadoSolicitudComponent } from './doctor-listado-solicitud/doctor-listado-solicitud.component';
import { PacienteListadoCitasComponent } from './paciente-listado-citas/paciente-listado-citas.component';
import { PacienteListadoCitaComponent } from './paciente-listado-cita/paciente-listado-cita.component';



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
    DoctorListadoCitasComponent,
    DoctorListadoTratamientosComponent,
    DoctorListadoTratamientoComponent,
    DoctorListadoSolicitudesComponent,
    DoctorListadoSolicitudComponent,
    PacienteListadoCitasComponent,
    PacienteListadoCitaComponent
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
    DoctorListadoCitasComponent,
    DoctorListadoTratamientosComponent,
    DoctorListadoTratamientoComponent,
    DoctorListadoSolicitudesComponent,
    DoctorListadoSolicitudComponent,
    PacienteListadoCitasComponent,
    PacienteListadoCitaComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
