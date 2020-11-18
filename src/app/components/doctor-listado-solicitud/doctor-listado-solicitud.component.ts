import { Component, Input, OnInit } from '@angular/core';
import { PedirCita } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-listado-solicitud',
  templateUrl: './doctor-listado-solicitud.component.html',
  styleUrls: ['./doctor-listado-solicitud.component.scss'],
})
export class DoctorListadoSolicitudComponent implements OnInit {

  @Input() solicitud: PedirCita;

  constructor() { }

  ngOnInit() {}

  click(){
    
  }
}
