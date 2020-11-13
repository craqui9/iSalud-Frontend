import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  dni: string;
  doctor: string;
  paciente: string;
  ide: number;

  constructor(private storage: Storage) { }

  limpiar(){
    this.storage.clear();
  }

  //----------------------USUARIO----------------------
  guardarUsuario(dni: string){
    this.storage.set('dni', dni);
  }

  //Hacer el get usuario
  async cargarUsuario(){
    const mail = await this.storage.get('dni');
    
    this.dni = mail;
    return this.dni;
  }
  //------------------------------------------------------------------
  //----------------------DOCTOR----------------------
  guardarDoctor(dni: string){
    this.storage.set('doctor', dni);
  }

  //Hacer el get usuario
  async cargarDoctor(){
    const mail = await this.storage.get('doctor');
    
    this.doctor = mail;
    return this.doctor;
  }
  //------------------------------------------------------------------
  //----------------------PACIENTE----------------------
  guardarPaciente(dniPaciente: string){
    this.storage.set('dniPaciente', dniPaciente);
  }

  async cargarPaciente(){
    const dni = await this.storage.get('dniPaciente');

    this.paciente = dni;
    return this.paciente;
  }
  //------------------------------------------------------------------
  //----------------------CITA----------------------
  guardarIdentCita(ide: number){
    this.storage.set('ideCita', ide);
  }

  async cargarIdentCita(){
    const id = await this.storage.get('ideCita');

    this.ide = id;
    return this.ide;
  }
}
