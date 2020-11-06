import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-doctor-crear-cita',
  templateUrl: './doctor-crear-cita.page.html',
  styleUrls: ['./doctor-crear-cita.page.scss'],
})
export class DoctorCrearCitaPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuDoctor');
  }
}
