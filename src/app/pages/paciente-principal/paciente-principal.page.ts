import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-paciente-principal',
  templateUrl: './paciente-principal.page.html',
  styleUrls: ['./paciente-principal.page.scss'],
})
export class PacientePrincipalPage{

  usuario: Usuario;
  doctor: Usuario;

  constructor(private dataLocal: DataLocalService,
              private usuarioService: UsuarioService) { }

  //ESTE MÉTODO SUSTITUYE AL ONINIT PARA HACERLO ASYNC
  async ionViewWillEnter() {

    const email = await this.dataLocal.cargarUsuario();

    //Consigo el usuario
    await this.buscarUsu(email, true);
    //Consigo su doctor
    await this.buscarUsu(this.usuario.doctor, false);
    
    
    
  }

  //Guardar el usuario
  async buscarUsu(email, bandera){

    var getDatos: Usuario;
    getDatos = await this.usuarioService.buscarUsuario(email);

    //Así meto los datos en el objeto global :3
    if(bandera === true){
      this.usuario = {
        email: getDatos.email,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol
      }
    }else{
      this.doctor = {
        email: getDatos.email,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol
      }
    }
    

  }

}
