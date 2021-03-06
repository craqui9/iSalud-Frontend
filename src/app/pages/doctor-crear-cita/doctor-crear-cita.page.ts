import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-crear-cita',
  templateUrl: './doctor-crear-cita.page.html',
  styleUrls: ['./doctor-crear-cita.page.scss'],
})
export class DoctorCrearCitaPage{

  //MUY IMPORTANTE INICIALIZAR EL ATRIBUTO DEL OBJETO CON ALGO PRA QUE 
  //LUEGO NO DIGA QUE ESTA VACIO AUN QUE LE ESTEMOS
  //ASIGNANDO UN VALOR, COMO ESTE ES ASIGNADO DE MANERA ASINCRONA
  //HAY QUE DARLE UN VALOR AUN QUE SEA VACIO ANTES
  usuario: Usuario = {
    nombre: ''
  };
  usuarios: Usuario[] = [];
  doctor: string;

  modo: string = 'cita'

  constructor(private dataLocal: DataLocalService,
              private usuarioService: UsuarioService,
              private menuController: MenuController) { }

    //ESTE MÉTODO SUSTITUYE AL ONINIT PARA HACERLO ASYNC
    async ionViewWillEnter() {

      const dni = await this.dataLocal.cargarUsuario();
      this.doctor = dni;
  
      //Consigo el usuario
      await this.buscarUsu(dni);
      
      await this.conseguirUsuarios();
    }

    async conseguirUsuarios(){

      let getDatos;
      await this.usuarioService.listaDoctor(this.doctor)
          .then(resp => {
            getDatos = resp;
            
          });   

      this.usuarios = getDatos;
    }

    //Abrir el menu
    mostrarMenu(){
      this.menuController.open('menuDoctor');
    }

    //Guardar el usuario
    async buscarUsu(dni){

      var getDatos: Usuario;
      getDatos = await this.usuarioService.buscarUsuario(dni);

      this.usuario = {
        dni: getDatos.dni,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol,
        fecha_nacimiento: getDatos.fecha_nacimiento,
        sexo: getDatos.sexo,
        telefono: getDatos.telefono
      }
  }

}
