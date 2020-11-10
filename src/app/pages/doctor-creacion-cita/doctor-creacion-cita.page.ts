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
    fecha: '',
    motivo: '',
    identificador: 0
  }

  emailDoctor: string;
  emailPaciente: string;

  constructor(private menuController: MenuController,
              private dataLocal: DataLocalService,
              private usuarioService: UsuarioService,
              private citaService: CitaService,
              private navController: NavController) { }

  async ionViewWillEnter() {

    const emailDoc = await this.dataLocal.cargarUsuario();
    this.emailDoctor = emailDoc;
    this.buscarUsu(this.emailDoctor, 'doctor');

    const emailPac = await this.dataLocal.cargarPaciente();
    this.emailPaciente = emailPac;
    this.buscarUsu(this.emailPaciente, 'paciente');

    console.log(this.emailPaciente);

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
  async buscarUsu(email, tipo){

    var getDatos: Usuario;
    getDatos = await this.usuarioService.buscarUsuario(email);

    if(tipo === 'doctor'){

      this.usuarioDoctor = {
        email: getDatos.email,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol
      }

    }else if(tipo === 'paciente'){

      this.usuarioPaciente = {
        email: getDatos.email,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol
      }

    }

  }

  onClick(){
    
    /* this.citas.forEach(cita => {
      cita.fecha = moment(cita.fecha).format('MM-DD-YYYY');
    });
    
    console.log('legth: '+this.citas); */

    //Comprobaciones
    if(this.comprobarVacio()){
        //ESTO ES LO BUENO PERO HAY QUE HACER ANTES LAS COMPROBACIONES
        this.crearObjeto();
        //console.log(this.citaNueva);
        this.citaService.crearCita(this.citaNueva);
        this.usuarioService.mensajeToast('Cita creada con éxito.');
        this.navController.navigateRoot('doctor-crear-cita');
    }else{
      this.usuarioService.mensajeToast('Por favor rellene los campos.');
    }

  }

  //Crear el objeto cita nueva
  crearObjeto(){

    this.fechaCita = moment(this.fechaCita).format('MM-DD-YYYY');

    this.citaNueva = {
      resuelto: false,
      usuario_paciente: this.usuarioPaciente.email,
      usuario_doctor: this.usuarioDoctor.email,
      fecha: this.fechaCita,
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
    }else if(motiu.trim() == ''){
      valido = false;
    }

    return valido;
  }

}
