import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { CitaService } from '../../services/cita.service';
import { UsuarioService } from '../../services/usuario.service';
import { DataLocalService } from '../../services/data-local.service';
import { TratamientoService } from '../../services/tratamiento.service';

@Component({
  selector: 'app-doctor-creacion-tratamiento',
  templateUrl: './doctor-creacion-tratamiento.page.html',
  styleUrls: ['./doctor-creacion-tratamiento.page.scss'],
})
export class DoctorCreacionTratamientoPage {

  constructor(private menuController: MenuController,
              private dataLocal: DataLocalService,
              private usuarioService: UsuarioService,
              private navController: NavController,
              private tratamientoService: TratamientoService) { }

  async ionViewWillEnter() {
    
    
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuDoctor');
    
  }

}
