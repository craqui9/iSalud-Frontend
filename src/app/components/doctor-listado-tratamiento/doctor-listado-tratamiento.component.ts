import { Component, Input, OnInit } from '@angular/core';
import { Tratamiento } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-listado-tratamiento',
  templateUrl: './doctor-listado-tratamiento.component.html',
  styleUrls: ['./doctor-listado-tratamiento.component.scss'],
})
export class DoctorListadoTratamientoComponent implements OnInit {

  @Input() tratamiento: Tratamiento;
  @Input() editable: String;

  constructor() { }

  ngOnInit() {}

  onClick(){

    if(this.editable === "true"){
      console.log('true');
    }else{
      console.log('false');
    }

  }

}
