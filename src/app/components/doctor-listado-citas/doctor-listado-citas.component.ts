import { Component, Input, OnInit } from '@angular/core';
import { Cita } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-listado-citas',
  templateUrl: './doctor-listado-citas.component.html',
  styleUrls: ['./doctor-listado-citas.component.scss'],
})
export class DoctorListadoCitasComponent implements OnInit {

  @Input() citas: Cita[] = [];

  constructor() { }

  ngOnInit() {}

}
