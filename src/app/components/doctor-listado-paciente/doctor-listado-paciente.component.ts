import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-doctor-listado-paciente',
  templateUrl: './doctor-listado-paciente.component.html',
  styleUrls: ['./doctor-listado-paciente.component.scss'],
})
export class DoctorListadoPacienteComponent implements OnInit {

  @Input() usuario: Usuario;
  @Input() modo: string;

  constructor(private dataLocal: DataLocalService,
              private navController: NavController) { }

  ngOnInit() {}

  clickUsuario(){
    const mail = this.usuario.dni;

    this.dataLocal.guardarPaciente(mail);
    

    //Abrir la pagina de historial o la de crear cita
    if(this.modo === 'cita'){
      //Enrutar a cita
      this.navController.navigateRoot('doctor-creacion-cita', {animated: true});      
    }else if(this.modo === 'historial'){
      //Enrutar a historial
      this.navController.navigateRoot('doctor-vista-historial', {animated: true});
    }
  }

}
