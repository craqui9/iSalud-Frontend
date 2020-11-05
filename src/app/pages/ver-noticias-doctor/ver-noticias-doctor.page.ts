import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ver-noticias-doctor',
  templateUrl: './ver-noticias-doctor.page.html',
  styleUrls: ['./ver-noticias-doctor.page.scss'],
})
export class VerNoticiasDoctorPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

    //Abrir el menu
    mostrarMenu(){
      this.menuController.open('menuDoctor');
    }
  

}
