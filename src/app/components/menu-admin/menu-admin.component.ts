import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss'],
})
export class MenuAdminComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {}

  logout(){
    this.usuarioService.logout();
  }

}
