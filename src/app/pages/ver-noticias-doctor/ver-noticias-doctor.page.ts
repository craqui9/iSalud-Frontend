import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../interfaces/interfaces';

@Component({
  selector: 'app-ver-noticias-doctor',
  templateUrl: './ver-noticias-doctor.page.html',
  styleUrls: ['./ver-noticias-doctor.page.scss'],
})
export class VerNoticiasDoctorPage {

  noticias: Noticia[] = [];

  constructor(private menuController: MenuController,
    private noticiaService: NoticiaService) { }

  async ionViewWillEnter() {
    this.actualizarArray();
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuDoctor');
  }
  
  //actualizar el array de noticias
  actualizarArray(event?){

    this.noticiaService.getNoticias()
        .subscribe(resp => {
          this.noticias.push(...resp.noticias);
          this.noticias.reverse();
        });


    if(event){
      event.target.complete();
    }
  }

  loadData(event){
    this.actualizarArray(event);
  }

}
