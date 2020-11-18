import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-paciente',
  templateUrl: './menu-paciente.component.html',
  styleUrls: ['./menu-paciente.component.scss'],
})
export class MenuPacienteComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
              private navController: NavController) { }

  ngOnInit() {}

  logout(){
    this.usuarioService.logout();
  }

  inicio(){
    this.navController.navigateRoot('paciente-principal', {animated: false});
  }

  noticias(){
    this.navController.navigateRoot('ver-noticias-paciente', {animated: false});
  }

  historial(){
    this.navController.navigateRoot('paciente-historial', {animated: false});
  }

  cita(){
    this.navController.navigateRoot('paciente-pedir-cita', {animated: false});
  }

  doctor(){
    this.navController.navigateRoot('paciente-ver-doctor', {animated: false});
  }

}
