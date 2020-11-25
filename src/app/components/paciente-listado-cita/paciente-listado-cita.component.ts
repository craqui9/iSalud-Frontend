import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { Cita } from '../../interfaces/interfaces';

@Component({
  selector: 'app-paciente-listado-cita',
  templateUrl: './paciente-listado-cita.component.html',
  styleUrls: ['./paciente-listado-cita.component.scss'],
})
export class PacienteListadoCitaComponent implements OnInit {

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
