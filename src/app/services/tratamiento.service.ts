import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaTratamiento, Tratamiento } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http: HttpClient) { }

  //Listar tratamientos
  getTratamientos(){

    return this.http.get<RespuestaTratamiento>(`${URL}/tratamientos/list`);

  }

  //Crear tratamiento
  crearTratamiento(tratamiento: Tratamiento){

    return new Promise(resolve => {

      this.http.post(`${URL}/tratamientos/create`, tratamiento)
               .subscribe(resp => {
                if(resp['ok']){
                  resolve(true);
                }else{
                  resolve(false);
                }
               });

    });

  }

  //Listar tratamientos por paciente
  tratamientosPaciente(usuario_paciente: string){

    return new Promise(resolve => {
      this.http.post(`${URL}/tratamientos/paciente`, {usuario_paciente})
          .subscribe(resp => {

            resolve(resp['tratamientos']);
          });
    });

  }
}
