import { Component, OnInit, Input } from '@angular/core';
import { PedirCita } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-listado-solicitudes',
  templateUrl: './doctor-listado-solicitudes.component.html',
  styleUrls: ['./doctor-listado-solicitudes.component.scss'],
})
export class DoctorListadoSolicitudesComponent implements OnInit {

  @Input() solicitudes: PedirCita[] = [];

  constructor() { }

  ngOnInit() {}

}
