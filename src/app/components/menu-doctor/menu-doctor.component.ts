import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-menu-doctor',
  templateUrl: './menu-doctor.component.html',
  styleUrls: ['./menu-doctor.component.scss'],
})
export class MenuDoctorComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
              private navController: NavController,
              private dataLocalService: DataLocalService) { }

  ngOnInit() {}

  logout(){
    this.usuarioService.logout();
  }

  onClick(){
    console.log('hola');
    
  }

  inicio(){
    this.navController.navigateRoot('doctor-principal', {animated: false});
  }

  noticias(){
    this.navController.navigateRoot('ver-noticias-doctor', {animated: false});
  }

  cita(){
    //limpiamos el campo de modo por si acaso
    this.dataLocalService.guardarModo('');

    this.navController.navigateRoot('doctor-crear-cita', {animated: false});
    this.dataLocalService.guardarModo('cita');
  }

  historial(){
    //limpiamos el campo de modo por si acaso
    this.dataLocalService.guardarModo('');

    
    this.navController.navigateRoot('doctor-historial', {animated: false});
    this.dataLocalService.guardarModo('historial');
  }
}
