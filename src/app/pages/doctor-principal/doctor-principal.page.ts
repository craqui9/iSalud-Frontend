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

  usuario: Usuario;

  constructor(private dataLocal: DataLocalService,
              private usuarioService: UsuarioService,
              private menuController: MenuController) { }

    //ESTE MÉTODO SUSTITUYE AL ONINIT PARA HACERLO ASYNC
    async ionViewWillEnter() {

      const email = await this.dataLocal.cargarUsuario();
  
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
