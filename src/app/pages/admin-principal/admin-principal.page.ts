import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { AlertController, IonInput, IonSelect, MenuController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.page.html',
  styleUrls: ['./admin-principal.page.scss'],
})
export class AdminPrincipalPage implements OnInit {

  fechaUsuario;

  usuarios: Usuario[];
  usuarioNuevo: Usuario = {
    rol: '',
    nombre: '',
    dni: '',
    password: '',
    doctor: '',
    fecha_nacimiento: '',
    sexo: '',
    telefono: ''
  };


  //Datos del formulario
  @ViewChild('selecRol') selecRol: IonSelect;

  @ViewChild('dniUsuario') dniUsuario: IonInput;
  @ViewChild('nombreUsuario') nombreUsuario: IonInput;
  @ViewChild('contraseñaUsuario') contraseñaUsuario: IonInput;
  @ViewChild('doctorUsuario') doctorUsuario: IonInput;
  @ViewChild('sexoUsuario') sexoUsuario: IonSelect;
  @ViewChild('telefonoUsuario') telefonoUsuario: IonInput;
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
    this.fechaUsuario = moment(this.fechaUsuario).format('DD-MM-YYYY');
    
    //Actualizar el array de usuarios
    this.conseguirUsuarios();
  
    if(this.selecRol.value === 'paciente'){

      if(this.comprobacionPaciente){

        //creacion del objeto usuario
        this.usuarioNuevo = {
          rol: this.selecRol.value,
          nombre: this.nombreUsuario.value.toString(),
          dni: this.dniUsuario.value.toString(),
          password: this.contraseñaUsuario.value.toString(),
          doctor: this.doctorUsuario.value.toString(),
          sexo: this.sexoUsuario.value,
          fecha_nacimiento: this.fechaUsuario,
          telefono: this.telefonoUsuario.value.toString()
        } 

        //Comprobaciones
        if(!this.comprobacionPaciente()){
          this.usuarioService.mensajeToast("Por favor, rellene todos los datos.");
        }else if(this.existedni(this.usuarioNuevo)){
          this.usuarioService.mensajeToast("El dni indicado ya está en uso.");
        }else if(!this.existeDoctor(this.usuarioNuevo)){
          this.usuarioService.mensajeToast("El doctor indicado no existe.");
        }else{
          //Creacion del usuario
          this.confirmacionUsuario(this.crearMensajeConfirmacion(this.usuarioNuevo), this.usuarioNuevo);
          this.vaciarInputsPaciente();
        }
        
      }

      
    }else if(this.selecRol.value === 'doctor'){

      if(this.comprobacionPaciente){

        //creacion del objeto usuario
        this.usuarioNuevo = {
          rol: this.selecRol.value,
          nombre: this.nombreUsuario.value.toString(),
          dni: this.dniUsuario.value.toString(),
          password: this.contraseñaUsuario.value.toString(),
          doctor: this.doctorUsuario.value.toString(),
          sexo: this.sexoUsuario.value,
          fecha_nacimiento: this.fechaUsuario,
          telefono: this.telefonoUsuario.value.toString()
        } 

        if(!this.comprobacionPaciente()){
          this.usuarioService.mensajeToast("Por favor, rellene todos los datos.");
        }else if(this.existedni(this.usuarioNuevo)){
          this.usuarioService.mensajeToast("El dni indicado ya está en uso.");
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

    //-----------------------------------------------------------//
    this.usuarioService.registro(usuarioNuevo);
    //-----------------------------------------------------------//

  }

  //----------------------------------------------------------------//

  //Creacion del mensajes para el TOAST
  crearMensajeConfirmacion(objetoUsuario: Usuario){

    var mensaje = 'Rol: ' + objetoUsuario.rol + '<br>dni: ' + objetoUsuario.dni +
                  '<br>Nombre: ' + objetoUsuario.nombre + '<br>Contraseña: ' + objetoUsuario.password +
                  '<br>Doctor: ' + objetoUsuario.doctor + '<br>Fecha Nac.: ' + objetoUsuario.fecha_nacimiento + '<br>Sexo: ' + 
                  objetoUsuario.sexo + '<br>Telefono: ' + objetoUsuario.telefono;   

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

    let dni = this.dniUsuario.value.toString();
    let nombre = this.nombreUsuario.value.toString();
    let contraseña = this.contraseñaUsuario.value.toString();
    let doctor = this.doctorUsuario.value.toString();
    let tel = this.telefonoUsuario.value.toString();
    
    //Comprobar si estan todos los datos PACIENTE
    if(dni.trim() === ""){
      return false;
    }else if(nombre.trim() === ""){
      return false;
    }else if(contraseña.trim() === ""){
      return false;
    }else if(this.fechaUsuario === undefined){
      return false;
    }else if(doctor.trim() === ""){
      return false;
    }else if(tel.trim() === ""){
      return false;
    }else{

      return true;

    }
    

  }

  //Comprueba si el dni existe
  existedni(usuario: Usuario): boolean{

    var existe = false;

    //Actualizo el array de usuarios por si acaso
    this.conseguirUsuarios();
    
    if(this.usuarios.find(usu => usu.dni === usuario.dni)){
      existe = true;
    }    
    
    return existe;

  }

  //Comprueba si el doctor existe
  existeDoctor(usuario: Usuario): boolean{
    
    var existe = false;

    //Actualizo el array de usuarios por si acaso
    this.conseguirUsuarios();
    
    if(this.usuarios.find(usu => usu.dni === usuario.doctor)){
      existe = true;
    }    
    
    return existe;
    

  }
  //----------------------------------------------------------------//

  //-----------------------VACIAR DATOS-----------------------//
  vaciarInputsPaciente(){
    this.dniUsuario.value = "";
    this.nombreUsuario.value = "";
    this.contraseñaUsuario.value = "";
    this.doctorUsuario.value = "";
    this.telefonoUsuario.value = "";
  }

  vaciarInputsDoctor(){
    this.dniUsuario.value = "";
    this.nombreUsuario.value = "";
    this.contraseñaUsuario.value = "";
    this.doctorUsuario.value = "";
    this.telefonoUsuario.value = "";
  }

}