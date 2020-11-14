import { Component, Input, OnInit } from '@angular/core';
import { Tratamiento } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-listado-tratamientos',
  templateUrl: './doctor-listado-tratamientos.component.html',
  styleUrls: ['./doctor-listado-tratamientos.component.scss'],
})
export class DoctorListadoTratamientosComponent implements OnInit {

  @Input() tratamientos: Tratamiento[] = [];

  constructor() { }

  ngOnInit() {}

}
