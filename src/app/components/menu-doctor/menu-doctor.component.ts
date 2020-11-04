import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-doctor',
  templateUrl: './menu-doctor.component.html',
  styleUrls: ['./menu-doctor.component.scss'],
})
export class MenuDoctorComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
              private navController: NavController) { }

  ngOnInit() {}

  logout(){
    this.usuarioService.logout();
  }

  onClick(){
    console.log('hola');
    
  }
}
