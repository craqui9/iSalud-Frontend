import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, IonTextarea, MenuController } from '@ionic/angular';
import { Noticia } from '../../interfaces/interfaces';
import { NoticiaService } from '../../services/noticia.service';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-admin-noticia',
  templateUrl: './admin-noticia.page.html',
  styleUrls: ['./admin-noticia.page.scss'],
})
export class AdminNoticiaPage implements OnInit {

  noticiaNueva: Noticia;

  @ViewChild('titulo') titulo: IonInput;
  @ViewChild('descripcion') descripcion: IonTextarea;

  constructor(private menuController: MenuController,
              private noticiaService: NoticiaService,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuAdmin');
  }


  //Botón crear Noticia
  botonCrear(){
    //HACER VALIDACIONES ANTES DE GENERAR EL OBJETO
    if(this.comprobarVacio()){
      
      this.generarObjeto();
      
      this.noticiaService.crearNoticia(this.noticiaNueva);      

      this.usuarioService.mensajeToast('Noticia creada con éxito.');
      this.vaciarInputs();
    }else{
      this.usuarioService.mensajeToast('Rellene los campos, por favor.');
    }
    
  }

  //Generacion del objeto tipo Noticia
  generarObjeto(){
    this.noticiaNueva = {
      titulo: this.titulo.value.toString(),
      descripcion: this.descripcion.value.toString()
    }  
  }

  //Validaciones
  comprobarVacio(): boolean{

    let valido = true;
    let titu = this.titulo.value.toString();
    let desc = this.descripcion.value.toString();

    if(titu.trim() == ''){
      valido = false;
    }else if(desc.trim() == ''){
      valido = false;
    }

    return valido;
  }

  //vaciar inputs
  vaciarInputs(){
    this.titulo.value = '';
    this.descripcion.value = '';
  }
}
