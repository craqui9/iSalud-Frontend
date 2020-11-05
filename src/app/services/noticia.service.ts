import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaNoticia, Noticia } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }


  //Método que lista las noticias
  getNoticias(){

    return this.http.get<RespuestaNoticia>(`${URL}/noticias/list`);

  }

  //Metodo que crea noticias en la base de datos
  crearNoticia(noticia: Noticia){

    return new Promise(resolve => {

      this.http.post(`${URL}/noticias/create`, noticia)
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
