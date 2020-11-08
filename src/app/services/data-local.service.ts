import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  email: string;
  doctor: string;
  paciente: string;

  constructor(private storage: Storage) { }

  limpiar(){
    this.storage.clear();
  }

  //----------------------USUARIO----------------------
  guardarUsuario(email: string){
    this.storage.set('email', email);
  }

  //Hacer el get usuario
  async cargarUsuario(){
    const mail = await this.storage.get('email');
    
    this.email = mail;
    return this.email;
  }
  //------------------------------------------------------------------
  //----------------------DOCTOR----------------------
  guardarDoctor(email: string){
    this.storage.set('doctor', email);
  }

  //Hacer el get usuario
  async cargarDoctor(){
    const mail = await this.storage.get('doctor');
    
    this.doctor = mail;
    return this.doctor;
  }
  //------------------------------------------------------------------
  //----------------------PACIENTE----------------------
  guardarPaciente(emailPaciente: string){
    this.storage.set('emailPaciente', emailPaciente);
  }

  async cargarPaciente(){
    const email = await this.storage.get('emailPaciente');

    this.paciente = email;
    return this.paciente;
  }
}
