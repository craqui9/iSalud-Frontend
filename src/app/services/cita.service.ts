import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { RespuestaCita, Cita } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) { }

  //Listar las citas
  getCitas(){

    return this.http.get<RespuestaCita>(`${URL}/citas/list`);

  }

  //Crear cita
  crearCita(cita: Cita){

    return new Promise(resolve => {

      this.http.post(`${URL}/citas/create`, cita)
               .subscribe(resp => {
                
                if(resp['ok']){
                  resolve(true);
                }else{
                  resolve(false);
                }
               });

    });

  }
}
