import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  email: string;

  constructor(private storage: Storage) { }

  limpiar(){
    this.storage.clear();
  }

  guardarUsuario(email: string){
    this.storage.set('email', email);
  }

  //Hacer el get usuario
  async cargarUsuario(){
    const mail = await this.storage.get('email');
    
    this.email = mail;
    return this.email;
  }


}
