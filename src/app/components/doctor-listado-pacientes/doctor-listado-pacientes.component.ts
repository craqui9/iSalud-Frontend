import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-doctor-listado-pacientes',
  templateUrl: './doctor-listado-pacientes.component.html',
  styleUrls: ['./doctor-listado-pacientes.component.scss'],
})
export class DoctorListadoPacientesComponent {

  prueba;

  constructor(private dataLocal: DataLocalService) { }

  async ionViewWillEnter() {

    const aux = await this.dataLocal.cargarModo();

    this.prueba = aux;
    console.log(aux);
    
  }

}