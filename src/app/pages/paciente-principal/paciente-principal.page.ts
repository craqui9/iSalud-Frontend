import { Component } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario, Cita, Tratamiento } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';
import { CitaService } from '../../services/cita.service';
import * as moment from 'moment';
import { TratamientoService } from '../../services/tratamiento.service';

@Component({
  selector: 'app-paciente-principal',
  templateUrl: './paciente-principal.page.html',
  styleUrls: ['./paciente-principal.page.scss'],
})
export class PacientePrincipalPage{

  editable: string = 'true';
  citasEditable: boolean = false;

  usuario: Usuario = {
    nombre: ''
  };
  doctor: Usuario;

  trata: Tratamiento[] = [];
  tratamientos: Tratamiento[] = [];

  citas: Cita[] = [];
  citasHoy: Cita[] = [];
  citasNoResueltas: Cita[] = [];


  constructor(private dataLocal: DataLocalService,
              private usuarioService: UsuarioService,
              private menuController: MenuController,
              private citaService: CitaService,
              private tratamientoService: TratamientoService) { }

  //ESTE MÉTODO SUSTITUYE AL ONINIT PARA HACERLO ASYNC
  async ionViewWillEnter() {

    const dni = await this.dataLocal.cargarUsuario();

    //Consigo el usuario
    await this.buscarUsu(dni, true);
    //Consigo su doctor
    await this.buscarUsu(this.usuario.doctor, false);
    
    //Guardar el doctor en el local storage
    this.dataLocal.guardarDoctor(this.doctor.dni);

    //Citas
    await this.cargarCitas();

    this.fechaHoy();
    this.cargarCitasHoy();
    this.cargarCitasNoResueltas();
    
    //tratamientos
    await this.cargarTratamientos();
    this.cargarTratamientosNoResueltos();
  }

  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuPaciente');
  }

  //Guardar el usuario
  async buscarUsu(dni, bandera){

    var getDatos: Usuario;
    getDatos = await this.usuarioService.buscarUsuario(dni);

    //Así meto los datos en el objeto global :3
    if(bandera === true){
      this.usuario = {
        dni: getDatos.dni,
        nombre: getDatos.nombre,
        password: getDatos.password,
        doctor: getDatos.doctor,
        rol: getDatos.rol,
        fecha_nacimiento: getDatos.fecha_nacimiento,
        sexo: getDatos.sexo,
        telefono: getDatos.telefono
      }
    }else{
      this.doctor = {
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

  //Cargar las citas
  async cargarCitas(){

    let getDatos;
    await this.citaService.citasPaciente(this.usuario.dni)
              .then(resp => {
                getDatos = resp;
              })

    
    this.citas = getDatos;
    
  }

  //fecha de hoy
  fechaHoy(){

    let hoy = new Date;
    let fecha = hoy.toISOString();
    fecha = moment(hoy).format('DD-MM-YYYY');

    return fecha;
    
  }

  //citas con la fecha de hoy
  cargarCitasHoy(){

    this.citas.forEach(cita => {

      if(cita.resuelto === false){
        if(cita.fecha === this.fechaHoy()){
          this.citasHoy.push(cita);
        }
      }

    });

  }

  //citas no resueltas todavia
  cargarCitasNoResueltas(){

    this.citas.forEach(cita => {
      if(cita.resuelto === false){
        this.citasNoResueltas.push(cita);
      }
    });

  }

  //tratamientos
  async cargarTratamientos(){

    let getDatos;
    await this.tratamientoService.tratamientosPaciente(this.usuario.dni)
              .then(resp => {
                getDatos = resp;
              })

    
    this.trata = getDatos;

  }

  cargarTratamientosNoResueltos(){

    this.trata.forEach(tratamiento => {
      if(tratamiento.resuelto === false){
        this.tratamientos.push(tratamiento);
      }
    });

  }

}
