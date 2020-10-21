import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin-eliminar',
  templateUrl: './admin-eliminar.page.html',
  styleUrls: ['./admin-eliminar.page.scss'],
})
export class AdminEliminarPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuAdmin');
  }

  //Boton eliminar usuario
  eliminarUsuario(){
    
    
    
  }

}
