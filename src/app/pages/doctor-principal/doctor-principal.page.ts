import { Component } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { UsuarioService } from '../../services/usuario.service';
import { MenuController } from '@ionic/angular';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-principal',
  templateUrl: './doctor-principal.page.html',
  styleUrls: ['./doctor-principal.page.scss'],
})
export class DoctorPrincipalPage{

  //MUY IMPORTANTE INICIALIZAR EL ATRIBUTO DEL OBJETO CON ALGO PRA QUE 
  //LUEGO NO DIGA QUE ESTA VACIO AUN QUE LE ESTEMOS
  //ASIGNANDO UN VALOR, COMO ESTE ES ASIGNADO DE MANERA ASINCRONA
  //HAY QUE DARLE UN VALOR AUN QUE SEA VACIO ANTES
  usuario: Usuario = {
    nombre: ''
  };
  usuarios: Usuario[] = [];
  doctor: string;

  constructor(private dataLocal: DataLocalService,
              private usuarioService: UsuarioService,
              private menuController: MenuController) { }

    //ESTE MÉTODO SUSTITUYE AL ONINIT PARA HACERLO ASYNC
    async ionViewWillEnter() {

      const email = await this.dataLocal.cargarUsuario();
      this.doctor = email;
  
      //Consigo el usuario
      await this.buscarUsu(email);
      
    }
    
    //Abrir el menu
    mostrarMenu(){
      this.menuController.open('menuDoctor');
    }

    //Guardar el usuario
    async buscarUsu(email){

      var getDatos: Usuario;
      getDatos = await this.usuarioService.buscarUsuario(email);

      this.usuario = {
        email: getDatos.email,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol
      }
  }

}
