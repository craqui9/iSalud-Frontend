import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-paciente-principal',
  templateUrl: './paciente-principal.page.html',
  styleUrls: ['./paciente-principal.page.scss'],
})
export class PacientePrincipalPage{

  usuario: Usuario;
  doctor: Usuario;

  constructor(private dataLocal: DataLocalService,
              private usuarioService: UsuarioService,
              private menuController: MenuController) { }

  //ESTE MÉTODO SUSTITUYE AL ONINIT PARA HACERLO ASYNC
  async ionViewWillEnter() {

    const dni = await this.dataLocal.cargarUsuario();

    //Consigo el usuario
    await this.buscarUsu(dni, true);
    //Consigo su doctor
    await this.buscarUsu(this.usuario.doctor, false);
    
    //Guardar el doctor en el local storage
    this.dataLocal.guardarDoctor(this.doctor.dni);
    
  }
    //Abrir el menu
    mostrarMenu(){
      this.menuController.open('menuPaciente');
    }

  //Guardar el usuario
  async buscarUsu(dni, bandera){

    var getDatos: Usuario;
    getDatos = await this.usuarioService.buscarUsuario(dni);

    //Así meto los datos en el objeto global :3
    if(bandera === true){
      this.usuario = {
        dni: getDatos.dni,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol,
        fecha_nacimiento: getDatos.fecha_nacimiento,
        sexo: getDatos.sexo
      }
    }else{
      this.doctor = {
        dni: getDatos.dni,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol,
        fecha_nacimiento: getDatos.fecha_nacimiento,
        sexo: getDatos.sexo
      }
    }
    

  }

}
