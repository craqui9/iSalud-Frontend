import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonTextarea, NavController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario, Cita } from '../../interfaces/interfaces';
import * as moment from 'moment';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-doctor-creacion-cita',
  templateUrl: './doctor-creacion-cita.page.html',
  styleUrls: ['./doctor-creacion-cita.page.scss'],
})
export class DoctorCreacionCitaPage {

  @ViewChild('motivoConsulta') motivoConsulta: IonTextarea;

  fechaCita;
  horaCita;

  citas: Cita[] = [];

  usuarioDoctor: Usuario = {
    nombre: ''
  }
  usuarioPaciente: Usuario = {
    nombre: ''
  }

  citaNueva: Cita = {
    resuelto: false,
    usuario_paciente: '',
    usuario_doctor: '',
    nombre_paciente: '',
    fecha: '',
    hora:'',
    motivo: '',
    identificador: 0
  }

  dniDoctor: string;
  dniPaciente: string;

  constructor(private menuController: MenuController,
              private dataLocal: DataLocalService,
              private usuarioService: UsuarioService,
              private citaService: CitaService,
              private navController: NavController) { }

  async ionViewWillEnter() {

    const dniDoc = await this.dataLocal.cargarUsuario();
    this.dniDoctor = dniDoc;
    this.buscarUsu(this.dniDoctor, 'doctor');

    const dniPac = await this.dataLocal.cargarPaciente();
    this.dniPaciente = dniPac;
    this.buscarUsu(this.dniPaciente, 'paciente');

    this.citaService.getCitas()
        .subscribe(resp => {
          this.citas = resp.citas;
        })
    

  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuDoctor');
    
  }

  //Guardar el usuario
  async buscarUsu(dni, tipo){

    var getDatos: Usuario;
    getDatos = await this.usuarioService.buscarUsuario(dni);

    if(tipo === 'doctor'){

      this.usuarioDoctor = {
        dni: getDatos.dni,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol,
        fecha_nacimiento: getDatos.fecha_nacimiento,
        sexo: getDatos.sexo
      }

    }else if(tipo === 'paciente'){

      this.usuarioPaciente = {
        dni: getDatos.dni,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol,
        fecha_nacimiento: getDatos.fecha_nacimiento,
        sexo: getDatos.sexo
      }

    }

  }

  cancelar(){
    this.navController.navigateRoot('doctor-crear-cita', {animated: true});
  }

  onClick(){
    
    /* this.citas.forEach(cita => {
      cita.fecha = moment(cita.fecha).format('MM-DD-YYYY');
    });
    
    console.log('legth: '+this.citas); */

    //Comprobaciones
    if(this.comprobarVacio()){

        this.crearObjeto();
        //console.log(this.citaNueva);
        this.citaService.crearCita(this.citaNueva);
        this.usuarioService.mensajeToast('Cita creada con éxito.');
        this.navController.navigateRoot('doctor-crear-cita', {animated: true});
    }else{
      this.usuarioService.mensajeToast('Por favor rellene los campos.');
    }

  }

  //Crear el objeto cita nueva
  crearObjeto(){

    this.fechaCita = moment(this.fechaCita).format('DD-MM-YYYY');
    this.horaCita = moment(this.horaCita).format('HH:mm');

    this.citaNueva = {
      resuelto: false,
      usuario_paciente: this.usuarioPaciente.dni,
      usuario_doctor: this.usuarioDoctor.dni,
      nombre_paciente: this.usuarioPaciente.nombre,
      fecha: this.fechaCita,
      hora: this.horaCita,
      motivo: this.motivoConsulta.value,
      identificador: this.citas.length+1
    }

  }

  //HACER COMPROBACIONES DE QUE LOS CAMPOS NO ESTÁN VACIOS
  comprobarVacio(): boolean{

    let valido = true;
    let motiu = this.motivoConsulta.value.toString();

    if(this.fechaCita === undefined){
      valido = false;
    }else if(this.horaCita === undefined){
      valido = false;
    }else if(motiu.trim() == ''){
      valido = false;
    }

    return valido;
  }

}
