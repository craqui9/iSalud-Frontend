import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor(private storage: Storage) { }

  limpiar(){
    this.storage.clear();
  }

  guardarUsuario(email: string){
    this.storage.set('email', email);
  }

  //Hacer el get usuario
}
