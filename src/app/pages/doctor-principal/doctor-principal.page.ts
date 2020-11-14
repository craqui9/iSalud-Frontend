import { Component } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { UsuarioService } from '../../services/usuario.service';
import { MenuController } from '@ionic/angular';
import { Usuario, Cita } from '../../interfaces/interfaces';
import { CitaService } from '../../services/cita.service';
import * as moment from 'moment';

@Component({
  selector: 'app-doctor-principal',
  templateUrl: './doctor-principal.page.html',
  styleUrls: ['./doctor-principal.page.scss'],
})
export class DoctorPrincipalPage{

  //MUY IMPORTANTE INICIALIZAR EL ATRIBUTO DEL OBJETO CON ALGO PRA QUE
  //LUEGO NO DIGA QUE ESTA VACIO AUN QUE LE ESTEMOS
  //ASIGNANDO UN VALOR, COMO ESTE ES ASIGNADO DE MANERA ASINCRONA
  //HAY QUE DARLE UN VALOR AUN QUE SEA VACIO ANTES
  usuario: Usuario = {
    nombre: ''
  };
  usuarios: Usuario[] = [];
  doctor: string;

  citas: Cita[] = [];
  citasHoy: Cita[] = [];

  constructor(private dataLocal: DataLocalService,
              private usuarioService: UsuarioService,
              private menuController: MenuController,
              private citaService: CitaService) { }

  //ESTE MÉTODO SUSTITUYE AL ONINIT PARA HACERLO ASYNC
  async ionViewWillEnter() {

    const dni = await this.dataLocal.cargarUsuario();
    this.doctor = dni;

    //Consigo el usuario
    await this.buscarUsu(dni);

    await this.cargarCitas();

    this.fechaHoy();
    this.cargarCitasHoy();
    
  }
  
  //Abrir el menu
  mostrarMenu(){
    this.menuController.open('menuDoctor');
  }

  //Guardar el usuario
  async buscarUsu(dni){

    var getDatos: Usuario;
    getDatos = await this.usuarioService.buscarUsuario(dni);

    this.usuario = {
      dni: getDatos.dni,
      nombre: getDatos.nombre,
      password: getDatos.password,
      doctor: getDatos.doctor,
      rol: getDatos.rol,
      fecha_nacimiento: getDatos.fecha_nacimiento,
      sexo: getDatos.sexo
    }
  }

  //Cargar las citas
  async cargarCitas(){

    let getDatos;
    await this.citaService.citasDoctor(this.doctor)
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

}
