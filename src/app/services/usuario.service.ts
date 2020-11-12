import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { RespuestaUsuario, Usuario } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,
              private toastController: ToastController,
              private navController: NavController,
              private alertController: AlertController) { }

  //Metodo para generar mensajes
  async mensajeToast(mensaje){

    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500
    });
    toast.present();

  }

  //Metodo de generacion de alertas
  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Usuario',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  //Metodo que devuelve todos los usuarios
  getUsuarios(){

    return this.http.get<RespuestaUsuario>(`${URL}/user/list`);

  }

  //Buscar usuario por email
  buscarUsuario(email: string){
    return new Promise(resolve => {
      this.http.post(`${URL}/user/email`, {email})
               .subscribe(resp => {                     
               //console.log(resp['usuario']);
               
               resolve(resp['usuario']);
              }); 
    });
  }

  //Listar usuarios por doctor
  listaDoctor(doctor: string){
    
    return new Promise(resolve => {
      this.http.post(`${URL}/user/doctor`, {doctor})
               .subscribe(resp => {

               resolve(resp['usuario']);
              }); 
    });
    
  }
 

  //Metodo que crea el usuario en la base de datos
  registro(usuario: Usuario){

    return new Promise(resolve => {

      this.http.post(`${URL}/user/create`, usuario)
               .subscribe(resp => {
                
                if(resp['ok']){
                  resolve(true);
                }else{
                  resolve(false);
                }
               });

    });

  }

  //Eliminar el usuario
  eliminarUsuario(email: string){

    const data = {email};

    return new Promise(resolve => {

      this.http.post(`${URL}/user/delete`, data)
               .subscribe(resp => {
                 
                 if(resp['ok']){
                   resolve(true);
                 }else{
                   resolve(false);
                 }
               }) ;

    });

  }

  //Login
  login(email: string, password: string){

    const data = {email, password};

    return new Promise(resolve => {

      this.http.post(`${URL}/user/login`, data)
                .subscribe(async resp => {

                  if(resp['ok']){

                    switch (resp['rol']){
                      case 'admin': {
                        //enrutar a admin
                        this.navController.navigateRoot('admin-principal', {animated: true});
                        break;
                      }
                      case 'doctor': {
                        //enrutar a doctor
                        this.navController.navigateRoot('doctor-principal', {animated: true});
                        break;
                      }
                      case 'paciente': {
                        //enrutar a paciente
                        this.navController.navigateRoot('paciente-principal', {animated: true});
                        break;
                      }
                    }

                    resolve(true);
                  }else{

                    resolve(false);
                  }

                });

    });
  }

  //Logout
  logout(){
    this.navController.navigateRoot('/login', {animated: true});
  }

}
