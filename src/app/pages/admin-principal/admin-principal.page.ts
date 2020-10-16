import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { AlertController, IonInput, IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.page.html',
  styleUrls: ['./admin-principal.page.scss'],
})
export class AdminPrincipalPage implements OnInit {

  usuarios: Usuario[] = [];
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
              private alertController: AlertController) { }

  ngOnInit() {

    this.conseguirUsuarios();
    
  }

  //METODO PARA COMPROBAR QUE FUNCIONA LUEGO LO MODIFICO
  conseguirUsuarios(){
    this.usuarioService.getUsuarios()
    .subscribe(resp => {
      console.log(resp);
      this.usuarios.push(...resp.usuarios);
    });
  }
  //----------------------------------------------------------------//

  //Metodos principales para crear usuarios
  crearUsuario(){   
  
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

        //ESTE METODO FUNCIONA
        //SOLO QUE FALTA HACER LA COMPROBACION DE LOS DATOS
        //Y EL TOAST PARA VER SI ESTAN BIEN TODOS LOS DATOS
        //this.usuarioService.registro(this.usuarioNuevo);

        this.confirmacionUsuario(this.crearMensajeConfirmacion(this.usuarioNuevo), this.usuarioNuevo);
        
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

        //FALTA HACER LA COMPROBACION DE LOS DATOS

        this.confirmacionUsuario(this.crearMensajeConfirmacion(this.usuarioNuevo), this.usuarioNuevo);
        
      }
      
    }

  }

  //Este es el que crea definitivamente el usuario
  crearUsuario2(usuarioNuevo: Usuario){

    console.log(usuarioNuevo);
    //this.usuarioService.registro(usuarioNuevo);

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
            
            console.log('Cancelado');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            //------------------------------//
            this.crearUsuario2(usuarioNuevo);
            //------------------------------//
            console.log('confirmado');
          }
        }
      ]
    });
    

    await alert.present();
  }
  //----------------------------------------------------------------//

  //Comprueba solo si está vacio
  comprobacionPaciente(): boolean{
    
    //Comprobar si estan todos los datos PACIENTE
    if(this.correoUsuario.value === ''){
      console.log('Por favor, rellene todos los datos.');
      return false;
    }else if(this.nombreUsuario.value === ""){
      console.log('Por favor, rellene todos los datos.');
      return false;
    }else if(this.contraseñaUsuario.value === ""){
      console.log('Por favor, rellene todos los datos.');
      return false;
    }else if(this.doctorUsuario.value === ""){
      console.log('Por favor, rellene todos los datos.');
      return false;
    }else{

      return true;

    }
    

  }
  
  //Comprueba solo si está vacio
  comprobacionDoctor(){

    //Comprobar si estan todos los datos DOCTOR
    if(this.correoUsuario.value === ''){
      console.log('Por favor, rellene todos los datos.');
      return false;
    }else if(this.nombreUsuario.value === ""){
      console.log('Por favor, rellene todos los datos.');
      return false;
    }else if(this.contraseñaUsuario.value === ""){
      console.log('Por favor, rellene todos los datos.');
      return false;
    }else{

      return true;

    }

  }

}
