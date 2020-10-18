import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { AlertController, IonInput, IonSelect, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.page.html',
  styleUrls: ['./admin-principal.page.scss'],
})
export class AdminPrincipalPage implements OnInit {

  usuarios: Usuario[];
  usuarioNuevo: Usuario = {
    rol: '',
    nombre: '',
    email: '',
    password: '',
    doctor: ''
  };


  //Datos del formulario
  @ViewChild('selecRol') selecRol: IonSelect;

  @ViewChild('correoUsuario') correoUsuario: IonInput;
  @ViewChild('nombreUsuario') nombreUsuario: IonInput;
  @ViewChild('contraseñaUsuario') contraseñaUsuario: IonInput;
  @ViewChild('doctorUsuario') doctorUsuario: IonInput;
  //----------------------------------------------------------------//

  constructor(private usuarioService: UsuarioService,
              private alertController: AlertController,
              private menuController: MenuController) { }

  ngOnInit() {

    this.conseguirUsuarios();
    
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuAdmin');
  }

  //Metodo para meter los usuarios de la base de datos en 
  //el array
  conseguirUsuarios(){
    this.usuarioService.getUsuarios()
    .subscribe(resp => {
      //console.log(resp);
      this.usuarios = resp.usuarios;      
    });
  }
  //----------------------------------------------------------------//

  //Metodos principales para crear usuarios
  crearUsuario(){  
    
    //Actualizar el array de usuarios
    this.conseguirUsuarios();
  
    if(this.selecRol.value === 'paciente'){

      if(this.comprobacionPaciente){

        //creacion del objeto usuario
        this.usuarioNuevo = {
          rol: this.selecRol.value,
          nombre: this.nombreUsuario.value.toString(),
          email: this.correoUsuario.value.toString(),
          password: this.contraseñaUsuario.value.toString(),
          doctor: this.doctorUsuario.value.toString()
        } 

        //Comprobaciones
        if(!this.comprobacionPaciente()){
          this.usuarioService.mensajeToast("Por favor, rellene todos los datos.");
        }else if(this.existeCorreo(this.usuarioNuevo)){
          this.usuarioService.mensajeToast("El correo indicado ya está en uso.");
        }else if(!this.existeDoctor(this.usuarioNuevo)){
          this.usuarioService.mensajeToast("El doctor indicado no existe.");
        }else{
          //Creacion del usuario
          this.confirmacionUsuario(this.crearMensajeConfirmacion(this.usuarioNuevo), this.usuarioNuevo);
          this.vaciarInputsPaciente();
        }

        
        
      }

      
    }else if(this.selecRol.value === 'doctor'){

      if(this.comprobacionDoctor){

        //creacion del objeto usuario
        this.usuarioNuevo = {
          rol: this.selecRol.value,
          nombre: this.nombreUsuario.value.toString(),
          email: this.correoUsuario.value.toString(),
          password: this.contraseñaUsuario.value.toString(),
          doctor: this.correoUsuario.value.toString()
        } 

        if(!this.comprobacionDoctor()){
          this.usuarioService.mensajeToast("Por favor, rellene todos los datos.");
        }else if(this.existeCorreo(this.usuarioNuevo)){
          this.usuarioService.mensajeToast("El correo indicado ya está en uso.");
        }else{
          //Creacion del usuario
          this.confirmacionUsuario(this.crearMensajeConfirmacion(this.usuarioNuevo), this.usuarioNuevo);
          this.vaciarInputsDoctor();
        }

      }
      
    }

  }

  //ESTE ES EL QUE CREA DEFINITIVAMENTE LOS USUARIOS
  crearUsuario2(usuarioNuevo: Usuario){

    console.log(usuarioNuevo);

    //-----------------------------------------------------------//
    this.usuarioService.registro(usuarioNuevo);
    //-----------------------------------------------------------//

  }

  //----------------------------------------------------------------//

  //Creacion del mensajes para el TOAST
  crearMensajeConfirmacion(objetoUsuario: Usuario){

    var mensaje = 'Rol: ' + objetoUsuario.rol + '<br>Email: ' + objetoUsuario.email +
                  '<br>Nombre: ' + objetoUsuario.nombre + '<br>Contraseña: ' + objetoUsuario.password +
                  '<br>Doctor: ' + objetoUsuario.doctor;   

    return mensaje;

  }
  //----------------------------------------------------------------//

  //Confirmacion del usuario
  async confirmacionUsuario(mensaje, usuarioNuevo: Usuario) {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Confirmar usuario',
      message: mensaje,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
            console.log('Usuario no creado');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            //------------------------------//
            this.crearUsuario2(usuarioNuevo);
            this.usuarioService.mensajeToast('Usuario creado exitosamente.')
            //------------------------------//
          }
        }
      ]
    });
    

    await alert.present();
  }
  //----------------------------------------------------------------//

  //-----------------------COMPROBACIONES-----------------------//

  //Comprueba solo si está vacio
  comprobacionPaciente(): boolean{
    
    //Comprobar si estan todos los datos PACIENTE
    if(this.correoUsuario.value === ""){
      return false;
    }else if(this.nombreUsuario.value === ""){
      return false;
    }else if(this.contraseñaUsuario.value === ""){
      return false;
    }else if(this.doctorUsuario.value === ""){
      return false;
    }else{

      return true;

    }
    

  }
  
  //Comprueba solo si está vacio
  comprobacionDoctor(): boolean{

    //Comprobar si estan todos los datos DOCTOR
    if(this.correoUsuario.value === ''){
      return false;
    }else if(this.nombreUsuario.value === ""){
      return false;
    }else if(this.contraseñaUsuario.value === ""){
      return false;
    }else{

      return true;

    }

  }

  //Comprueba si el correo existe
  existeCorreo(usuario: Usuario): boolean{

    var existe = false;

    //Actualizo el array de usuarios por si acaso
    this.conseguirUsuarios();
    
    if(this.usuarios.find(usu => usu.email === usuario.email)){
      existe = true;
    }    
    
    return existe;

  }

  //Comprueba si el doctor existe
  existeDoctor(usuario: Usuario): boolean{
    
    var existe = false;

    //Actualizo el array de usuarios por si acaso
    this.conseguirUsuarios();
    
    if(this.usuarios.find(usu => usu.email === usuario.doctor)){
      existe = true;
    }    
    
    return existe;
    

  }
  //----------------------------------------------------------------//

  //-----------------------VACIAR DATOS-----------------------//
  vaciarInputsPaciente(){
    this.correoUsuario.value = "";
    this.nombreUsuario.value = "";
    this.contraseñaUsuario.value = "";
    this.doctorUsuario.value = "";
  }

  vaciarInputsDoctor(){
    this.correoUsuario.value = "";
    this.nombreUsuario.value = "";
    this.contraseñaUsuario.value = "";
  }

}
