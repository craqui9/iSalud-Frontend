import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, MenuController, AlertController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-admin-eliminar',
  templateUrl: './admin-eliminar.page.html',
  styleUrls: ['./admin-eliminar.page.scss'],
})
export class AdminEliminarPage implements OnInit {

  @ViewChild('correoUsuario') correoUsuario: IonInput;

  usuarios: Usuario[];

  constructor(private menuController: MenuController,
              private usuarioService: UsuarioService,
              private alertController: AlertController) { }

  async ngOnInit() {
    this.conseguirUsuarios();
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuAdmin');
  }

  //Boton eliminar usuario
  async botonEliminar(){    
    
    //Empezar a llamar a todos los metodos aquí
    if(!this.comprobarVacio()){
      this.usuarioService.mensajeToast("Por favor indique un usuario.");
    }else if(!this.comprobarExiste()){
      this.usuarioService.mensajeToast('El usuario indicado no existe.');
    }else if(await this.comprobarDoctor()){
      this.usuarioService.mensajeToast('No se pueden eliminar doctores.');
    }else{
      this.confirmacionBorrado();
    }

    
  }
  //----------------------------------------------------------//

  //Actualizar el array de usuarios metiendo todos los usuarios aqui
  conseguirUsuarios(){
    this.usuarioService.getUsuarios()
    .subscribe(resp => {
      //console.log(resp);
      this.usuarios = resp.usuarios;
    });
  }

  //Comprobación vacio
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

  //Comprobar que el doctor no tenga pacientes
  async comprobarDoctor(): Promise<boolean>{
    let valido = false;
    
    
    var getDatos: Usuario;
    getDatos = await this.usuarioService.buscarUsuario(this.correoUsuario.value.toString());
    
    if(getDatos.rol !== 'paciente'){
      valido = true;
    }

    return valido;
    
  }


  //----------------------------------------------------------//

  //Crear mensaje para el TOAST de confirmacion
  async confirmacionBorrado(){
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Confirmar usuario',
      message: 'Vas a eliminar el usuario con identificador: '+this.correoUsuario.value.toString(),
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
            console.log('Usuario no eliminado.');
            this.correoUsuario.value = '';
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            //------------------------------//
            this.eliminarUsuario();
            this.usuarioService.mensajeToast('Usuario eliminado exitosamente.');
            this.correoUsuario.value = '';
            //------------------------------//
          }
        }
      ]
    });
    

    await alert.present();
  }

  //ELIMINAR USUARIO
  eliminarUsuario(){
    this.usuarioService.eliminarUsuario(this.correoUsuario.value.toString());
  }

  //----------------------------------------------------------//

}
