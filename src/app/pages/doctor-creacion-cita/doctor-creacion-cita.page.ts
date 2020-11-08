import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-creacion-cita',
  templateUrl: './doctor-creacion-cita.page.html',
  styleUrls: ['./doctor-creacion-cita.page.scss'],
})
export class DoctorCreacionCitaPage {

  usuarioDoctor: Usuario = {
    nombre: ''
  }
  usuarioPaciente: Usuario = {
    nombre: ''
  }

  emailDoctor: string;
  emailPaciente: string;

  constructor(private menuController: MenuController,
              private dataLocal: DataLocalService,
              private usuarioService: UsuarioService) { }

  async ionViewWillEnter() {
    
    const emailDoc = await this.dataLocal.cargarUsuario();
    this.emailDoctor = emailDoc;
    this.buscarUsu(this.emailDoctor, 'doctor');

    const emailPac = await this.dataLocal.cargarPaciente();
    this.emailPaciente = emailPac;
    this.buscarUsu(this.emailPaciente, 'paciente');

    console.log(this.emailPaciente);
    

  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuDoctor');
    
  }

  //Guardar el usuario
  async buscarUsu(email, tipo){

    var getDatos: Usuario;
    getDatos = await this.usuarioService.buscarUsuario(email);

    if(tipo === 'doctor'){

      this.usuarioDoctor = {
        email: getDatos.email,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol
      }

    }else if(tipo === 'paciente'){

      this.usuarioPaciente = {
        email: getDatos.email,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol
      }

    }

    
}

}
