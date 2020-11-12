import { Component, OnInit, Input } from '@angular/core';
import { Cita } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-listado-cita',
  templateUrl: './doctor-listado-cita.component.html',
  styleUrls: ['./doctor-listado-cita.component.scss'],
})
export class DoctorListadoCitaComponent implements OnInit {

  @Input() cita: Cita;

  constructor() { }

  ngOnInit() {}

  clickCita(){
    
  }

}
