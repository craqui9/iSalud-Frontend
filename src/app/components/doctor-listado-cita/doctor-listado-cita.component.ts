import { Component, OnInit, Input } from '@angular/core';
import { Cita } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-doctor-listado-cita',
  templateUrl: './doctor-listado-cita.component.html',
  styleUrls: ['./doctor-listado-cita.component.scss'],
})
export class DoctorListadoCitaComponent implements OnInit {

  @Input() cita: Cita;
  @Input() citasEditable: boolean;

  constructor(private dataLocal: DataLocalService,
              private navController: NavController) { }

  ngOnInit() {}

  clickCita(){
    
    if(this.citasEditable === true){
      this.dataLocal.guardarPaciente(this.cita.usuario_paciente);
      this.dataLocal.guardarIdentCita(this.cita.identificador);
  
      //navegar a creacion tratamiento
      this.navController.navigateRoot('doctor-creacion-tratamiento', {animated: true});
    }

  }

}
