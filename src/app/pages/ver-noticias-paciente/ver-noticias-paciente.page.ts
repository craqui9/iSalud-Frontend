import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../interfaces/interfaces';

@Component({
  selector: 'app-ver-noticias-paciente',
  templateUrl: './ver-noticias-paciente.page.html',
  styleUrls: ['./ver-noticias-paciente.page.scss'],
})
export class VerNoticiasPacientePage{

  noticias: Noticia[] = [];

  constructor(private menuController: MenuController,
              private noticiaService: NoticiaService ) { }


  async ionViewWillEnter() {

    this.actualizarArray();
   
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuPaciente');
  }

  //actualizar el array de noticias
  actualizarArray(event?){

    this.noticiaService.getNoticias()
        .subscribe(resp => {
          this.noticias.push(...resp.noticias);
        });


    if(event){
      event.target.complete();
    }
  }

  loadData(event){
    this.actualizarArray(event);
  }

}
