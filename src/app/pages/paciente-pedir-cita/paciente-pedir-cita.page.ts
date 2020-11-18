import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, IonTextarea } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { PedirCita, Usuario } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';
import * as moment from 'moment';
import { CitaService } from '../../services/cita.service';
import { PedirCitaService } from '../../services/pedir-cita.service';

@Component({
  selector: 'app-paciente-pedir-cita',
  templateUrl: './paciente-pedir-cita.page.html',
  styleUrls: ['./paciente-pedir-cita.page.scss'],
})
export class PacientePedirCitaPage {

  @ViewChild('motivoConsulta') motivoConsulta: IonTextarea;

  fechaCita;
  horaCita;

  citaNueva: PedirCita = {
    resuelto: false,
    usuario_paciente: '',
    usuario_doctor: '',
    nombre_paciente: '',
    fecha: '',
    hora:'',
    motivo: '',
    identificador: 0
  }

  citasPedidas: PedirCita[] = [];

  usuarioDoctor: Usuario = {
    nombre: ''
  }
  usuarioPaciente: Usuario = {
    nombre: ''
  }

  dniDoctor: string;
  dniPaciente: string;

  constructor(private menuController: MenuController,
              private navController: NavController,
              private usuarioService: UsuarioService,
              private dataLocal: DataLocalService,
              private pedirCitaService: PedirCitaService) { }

  async ionViewWillEnter() {

    const dniDoc = await this.dataLocal.cargarDoctor();
    this.dniDoctor = dniDoc;
    this.buscarUsu(this.dniDoctor, 'doctor');

    const dniPac = await this.dataLocal.cargarUsuario();
    this.dniPaciente = dniPac;
    this.buscarUsu(this.dniPaciente, 'paciente');

    this.pedirCitaService.getCitas()
        .subscribe(resp => {
          this.citasPedidas = resp.pedirCitas;
        });

  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuPaciente');
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
        sexo: getDatos.sexo,
        telefono: getDatos.telefono
      }

    }else if(tipo === 'paciente'){

      this.usuarioPaciente = {
        dni: getDatos.dni,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol,
        fecha_nacimiento: getDatos.fecha_nacimiento,
        sexo: getDatos.sexo,
        telefono: getDatos.telefono
      }

    }

  }


  cancelar(){
    this.navController.navigateRoot('paciente-principal', {animated: true});
  }

  onClick(){
    
    //Comprobar
    if(this.comprovarVacio()){

      this.crearObjeto();
      this.pedirCitaService.crearCita(this.citaNueva);
      this.usuarioService.mensajeToast('Cita solicitada');
      this.navController.navigateRoot('paciente-principal', {animated: true});
      
    }else{
      this.usuarioService.mensajeToast('Por favor rellene los campos.');
    }

  }

  //Crear el objeto a subir
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
      identificador: this.citasPedidas.length+1
    }

  }

  //Comprobaciones
  comprovarVacio(): boolean{
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
