import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-paciente-ver-doctor',
  templateUrl: './paciente-ver-doctor.page.html',
  styleUrls: ['./paciente-ver-doctor.page.scss'],
})
export class PacienteVerDoctorPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuPaciente');
  }
}
