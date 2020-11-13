import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, MenuController, IonTextarea, IonInput } from '@ionic/angular';
import { CitaService } from '../../services/cita.service';
import { UsuarioService } from '../../services/usuario.service';
import { DataLocalService } from '../../services/data-local.service';
import { TratamientoService } from '../../services/tratamiento.service';
import { Tratamiento, Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-creacion-tratamiento',
  templateUrl: './doctor-creacion-tratamiento.page.html',
  styleUrls: ['./doctor-creacion-tratamiento.page.scss'],
})
export class DoctorCreacionTratamientoPage {

  @ViewChild('tituloTratamiento') tituloTratamiento: IonInput;
  @ViewChild('descrTratamiento') descrTratamiento: IonTextarea;

  fechaInic;
  fechaFin;

  tratamientoNuevo: Tratamiento = {
    usuario_paciente: '',
    usuario_doctor: '',
    nombre_tratamiento: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_final: '',
    identificador: 0
  }

  usuarioDoctor: Usuario;
  usuarioPaciente: Usuario;

  constructor(private menuController: MenuController,
              private dataLocal: DataLocalService,
              private usuarioService: UsuarioService,
              private navController: NavController,
              private tratamientoService: TratamientoService) { }

  async ionViewWillEnter() {
    
    
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuDoctor');
    
  }



  //BOTON CREAR TRATAMIENTO
  onClick(){

  }

  //Boton cancelar
  cancelar(){
    this.navController.navigateRoot('doctor-principal', {animated: true});
  }

}
