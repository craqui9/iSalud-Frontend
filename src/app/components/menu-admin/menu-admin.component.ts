import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss'],
})
export class MenuAdminComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
              private navController: NavController) { }

  ngOnInit() {}

  logout(){
    this.usuarioService.logout();
  }


  crearUsuario(){
    this.navController.navigateRoot('admin-principal', {animated: false});
  }

  eliminarUsuario(){
    this.navController.navigateRoot('admin-eliminar', {animated: false});
  }

  verUsuario(){
    this.navController.navigateRoot('admin-ver', {animated: false});
  }

  crearNoticia(){
    this.navController.navigateRoot('admin-noticia', {animated: false});
  }

}
