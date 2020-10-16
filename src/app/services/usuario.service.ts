import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { RespuestaUsuario, Usuario } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,
              private toastController: ToastController,
              private alertController: AlertController) { }

  async mensajeToast(mensaje){

    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();

  }

  
  getUsuarios(){

    return this.http.get<RespuestaUsuario>(`${URL}/user/list`);

  }

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
