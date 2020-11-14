import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  //Listar citas por doctor
  citasDoctor(usuario_doctor: string){

    return new Promise(resolve => {
      this.http.post(`${URL}/citas/doctor`, {usuario_doctor})
          .subscribe(resp => {

            resolve(resp['doctor']);
          });
    });

  }

  //Listar citas por paciente
  citasPaciente(usuario_paciente: string){

    return new Promise(resolve => {
      this.http.post(`${URL}/citas/paciente`, {usuario_paciente})
          .subscribe(resp => {

            resolve(resp['paciente']);
          });
    });

  }

  //Actualizar resuelto a true
  actualizarResuelto(identificador: number){

    return new Promise(resolve => {

      this.http.post(`${URL}/citas/resuelto`, {identificador})
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
