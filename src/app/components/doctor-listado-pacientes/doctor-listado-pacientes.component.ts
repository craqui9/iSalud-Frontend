import { Component, OnInit, Input } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-listado-pacientes',
  templateUrl: './doctor-listado-pacientes.component.html',
  styleUrls: ['./doctor-listado-pacientes.component.scss'],
})
export class DoctorListadoPacientesComponent {

  @Input() usuarios: Usuario[] = [];
  @Input() modo: string;

  constructor() { }

  async ionViewWillEnter() {

  }

}