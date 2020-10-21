import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, MenuController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-admin-eliminar',
  templateUrl: './admin-eliminar.page.html',
  styleUrls: ['./admin-eliminar.page.scss'],
})
export class AdminEliminarPage implements OnInit {

  @ViewChild('correoUsuario') correoUsuario: IonInput;

  constructor(private menuController: MenuController,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuAdmin');
  }

  //Boton eliminar usuario
  eliminarUsuario(){    
    
    
    

    //ESTO LO ELIMINA POR COMPLETO, HACER COMPROBACIONES ANTES
    this.usuarioService.eliminarUsuario(this.correoUsuario.value.toString());
    
  }

}
