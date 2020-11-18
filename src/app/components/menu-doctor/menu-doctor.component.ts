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

  inicio(){
    this.navController.navigateRoot('doctor-principal', {animated: false});
  }

  noticias(){
    this.navController.navigateRoot('ver-noticias-doctor', {animated: false});
  }

  cita(){
    this.navController.navigateRoot('doctor-crear-cita', {animated: false});
  }

  historial(){
    this.navController.navigateRoot('doctor-historial', {animated: false});
  }

  verPedirCita(){
    this.navController.navigateRoot('doctor-ver-citaspedidas', {animated: false});
  }
}
