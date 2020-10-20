import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin-ver',
  templateUrl: './admin-ver.page.html',
  styleUrls: ['./admin-ver.page.scss'],
})
export class AdminVerPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuAdmin');
  }

}
