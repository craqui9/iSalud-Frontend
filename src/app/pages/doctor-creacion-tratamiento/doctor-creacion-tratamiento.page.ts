import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, IonTextarea, IonInput } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { DataLocalService } from '../../services/data-local.service';
import { TratamientoService } from '../../services/tratamiento.service';
import { Tratamiento } from '../../interfaces/interfaces';
import * as moment from 'moment';
import { CitaService } from '../../services/cita.service';

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

  dniDoctor: string;
  dniPaciente: string;
  identificadorCita: number;

  constructor(private menuController: MenuController,
              private dataLocal: DataLocalService,
              private usuarioService: UsuarioService,
              private navController: NavController,
              private citaService: CitaService,
              private tratamientoService: TratamientoService) { }

  async ionViewWillEnter() {
    
    const dniDoc = await this.dataLocal.cargarUsuario();
    this.dniDoctor = dniDoc;

    const dniPac = await this.dataLocal.cargarPaciente();
    this.dniPaciente = dniPac;

    const ideCita = await this.dataLocal.cargarIdentCita();
    this.identificadorCita = ideCita;
    
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuDoctor');
    
  }

  //Boton cancelar
  cancelar(){
    this.navController.navigateRoot('doctor-principal', {animated: true});
  }

  //BOTON CREAR TRATAMIENTO
  onClick(){

    if(this.comprobarVacio()){

      this.crearObjeto();
      this.tratamientoService.crearTratamiento(this.tratamientoNuevo);
      

      //Actualizar el cita resuelto a true
      this.citaService.actualizarResuelto(this.identificadorCita);

      this.usuarioService.mensajeToast('Tratamiento creado con éxito.');
      this.navController.navigateRoot('doctor-principal', {animated: true});

    }else{
      this.usuarioService.mensajeToast('Por favor rellene los campos.');
    }
  }

  crearObjeto(){

    this.fechaInic = moment(this.fechaInic).format('DD-MM-YYYY');
    this.fechaFin = moment(this.fechaFin).format('DD-MM-YYYY');

    this.tratamientoNuevo = {
      usuario_paciente: this.dniPaciente,
      usuario_doctor: this.dniDoctor,
      nombre_tratamiento: this.tituloTratamiento.value.toString(),
      descripcion: this.descrTratamiento.value,
      fecha_inicio: this.fechaInic,
      fecha_final: this.fechaFin,
      identificador: this.identificadorCita
    }

  }

  //HACER COMPROBACIONES DE QUE LOS CAMPOS NO ESTÁN VACIOS
  comprobarVacio(): boolean{

    let valido = true;
    let descrip = this.descrTratamiento.value.toString();
    let titol = this.tituloTratamiento.value.toString();

    if(this.fechaInic === undefined){
      valido = false;
    }else if(this.fechaFin === undefined){
      valido = false;
    }else if(descrip.trim() == ''){
      valido = false;
    }else if(titol.trim() == ''){
      valido = false;
    }
    
    return valido;
  }

}
