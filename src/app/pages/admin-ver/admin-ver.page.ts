import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, MenuController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';


@Component({
  selector: 'app-admin-ver',
  templateUrl: './admin-ver.page.html',
  styleUrls: ['./admin-ver.page.scss'],
})
export class AdminVerPage implements OnInit {

  @ViewChild('correoUsuario') correoUsuario: IonInput;

  usuarios: Usuario[];
  usuario: Usuario;

  constructor(private menuController: MenuController,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.conseguirUsuarios();
  }

  //Actualizar el array de usuarios metiendo todos los usuarios aqui
  conseguirUsuarios(){
    this.usuarioService.getUsuarios()
    .subscribe(resp => {
      //console.log(resp);
      this.usuarios = resp.usuarios;
    });
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuAdmin');
  }

  //-------------------------Boton Ver-------------------------
  async botonVer(){
    if(!this.comprobarVacio()){
      this.usuarioService.mensajeToast('Rellene el campo por favor.')
    }else if(!this.comprobarExiste()){
      this.usuarioService.mensajeToast('El usuario indicado no existe.');
    }else{
      await this.buscarUsu();
      
      this.usuarioService.presentAlert(this.crearMensaje());
    }
    
  }

  //-----------------------------------------------------------------//

  //  COMPROBACIONES  
  //Comprobar Vacio
  comprobarVacio(): boolean{
    let valido = true;
    
    if(this.correoUsuario.value === ""){
      valido = false;
    }

    return valido;
  }

  //Comprobar que existe
  comprobarExiste(): boolean{
    let valido = false;    

    if(this.usuarios.find(usu => usu.email === this.correoUsuario.value.toString())){
      valido = true;
    }

    return valido;
  }

  //-----------------------------------------------------------------//
  
  //Una vez rellenado el campo de manera correcta
  //Guardar el usuario
  async buscarUsu(){

    var getDatos: Usuario;
    getDatos = await this.usuarioService.buscarUsuario(this.correoUsuario.value.toString());

    //Así meto los datos en el objeto global :3
    this.usuario = {
      email: getDatos.email,
      nombre: getDatos.nombre,
      password: getDatos.password,
      doctor: getDatos.doctor,
      rol: getDatos.rol
    }

  }

  //Crear mensaje
  crearMensaje(){
    var mensaje = 'Rol: ' + this.usuario.rol + '<br>Email: ' + this.usuario.email +
                  '<br>Nombre: ' + this.usuario.nombre + 
                  '<br>Doctor: ' + this.usuario.doctor;   

    return mensaje;
  }
}
