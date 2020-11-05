import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ver-noticias-paciente',
  templateUrl: './ver-noticias-paciente.page.html',
  styleUrls: ['./ver-noticias-paciente.page.scss'],
})
export class VerNoticiasPacientePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuPaciente');
  }

}
