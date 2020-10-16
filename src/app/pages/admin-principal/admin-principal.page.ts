import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.page.html',
  styleUrls: ['./admin-principal.page.scss'],
})
export class AdminPrincipalPage implements OnInit {

  usuarios: Usuario[] = [];

  @ViewChild('selecRol') selecRol: IonSelect;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getUsuarios()
        .subscribe(resp => {
          console.log(resp);
          this.usuarios.push(...resp.usuarios);
        });

    

  }

}
