import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { RespuestaUsuario, Usuario } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,
              private toastController: ToastController) { }

  //Metodo para generar mensajes
  async mensajeToast(mensaje){

    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();

  }

  //Metodo que devuelve todos los usuarios
  getUsuarios(){

    return this.http.get<RespuestaUsuario>(`${URL}/user/list`);

  }

  //Metodo que crea el usuario en la base de datos
  registro(usuario: Usuario){

    return new Promise(resolve => {

      this.http.post(`${URL}/user/create`, usuario)
               .subscribe(resp => {
                console.log(resp);
                
                if(resp['ok']){
                  resolve(true);
                }else{
                  resolve(false);
                }
               });

    });

  }

  
}
