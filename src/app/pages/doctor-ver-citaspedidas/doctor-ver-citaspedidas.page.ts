import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { PedirCita } from '../../interfaces/interfaces';
import { PedirCitaService } from '../../services/pedir-cita.service';

@Component({
  selector: 'app-doctor-ver-citaspedidas',
  templateUrl: './doctor-ver-citaspedidas.page.html',
  styleUrls: ['./doctor-ver-citaspedidas.page.scss'],
})
export class DoctorVerCitaspedidasPage {

  doctor: string;

  soliSinFiltrar: PedirCita[] = [];
  solicitudes: PedirCita[] = [];

  constructor(private menuController: MenuController,
              private pedirCitaService: PedirCitaService,
              private dataLocal: DataLocalService) { }

  async ionViewWillEnter() {

    const dni = await this.dataLocal.cargarUsuario();
    this.doctor = dni;

    await this.conseguirTodo();
    this.filtrarCitas();
    
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuDoctor');
  }

  async conseguirTodo(){

    let getDatos;
    await this.pedirCitaService.citasDoctor(this.doctor)
              .then(resp => {
                getDatos = resp;
              });

    this.soliSinFiltrar = getDatos;
  }

  filtrarCitas(){

    this.soliSinFiltrar.forEach(solicitud => {
      if(solicitud.resuelto === false){
        this.solicitudes.push(solicitud);
      }
    });

  }

}
