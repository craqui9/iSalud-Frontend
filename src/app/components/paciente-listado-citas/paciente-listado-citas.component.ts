import { Component, OnInit, Input } from '@angular/core';
import { Cita } from '../../interfaces/interfaces';

@Component({
  selector: 'app-paciente-listado-citas',
  templateUrl: './paciente-listado-citas.component.html',
  styleUrls: ['./paciente-listado-citas.component.scss'],
})
export class PacienteListadoCitasComponent implements OnInit {

  @Input() citas: Cita[] = [];
  @Input() citasEditable: boolean;

  constructor() { }

  ngOnInit() {}

}
