import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-doctor-historial',
  templateUrl: './doctor-historial.page.html',
  styleUrls: ['./doctor-historial.page.scss'],
})
export class DoctorHistorialPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuDoctor');
  }
}
