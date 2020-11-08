import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-listado-paciente',
  templateUrl: './doctor-listado-paciente.component.html',
  styleUrls: ['./doctor-listado-paciente.component.scss'],
})
export class DoctorListadoPacienteComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor() { }

  ngOnInit() {}

  clickUsuario(){
    const nombre = this.usuario.nombre;
    console.log(nombre);
    
  }

}
