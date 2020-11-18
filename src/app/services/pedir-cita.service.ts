import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaPedirCita, PedirCita } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PedirCitaService {

  constructor(private http: HttpClient) { }

  //Listar las citas
  getCitas(){

    return this.http.get<RespuestaPedirCita>(`${URL}/pedirCita/list`);

  }

  //Crear peticion
  crearCita(pedirCita: PedirCita){

    return new Promise(resolve => {

      this.http.post(`${URL}/pedirCita/create`, pedirCita)
               .subscribe(resp => {
                
                if(resp['ok']){
                  resolve(true);
                }else{
                  resolve(false);
                }
               });

    });

  }

  //Listar citas por doctor
  citasDoctor(usuario_doctor: string){

    return new Promise(resolve => {
      this.http.post(`${URL}/pedirCita/doctor`, {usuario_doctor})
          .subscribe(resp => {

            resolve(resp['doctor']);
          });
    });

  }
}
