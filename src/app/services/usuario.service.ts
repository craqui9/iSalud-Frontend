import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaUsuario, Usuario } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

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
