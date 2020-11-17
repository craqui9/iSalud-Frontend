import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TratamientoService } from '../../services/tratamiento.service';
import { DataLocalService } from '../../services/data-local.service';
import { UsuarioService } from '../../services/usuario.service';
import { Tratamiento, Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-doctor-vista-historial',
  templateUrl: './doctor-vista-historial.page.html',
  styleUrls: ['./doctor-vista-historial.page.scss'],
})
export class DoctorVistaHistorialPage {
  
  editableFalse: string = 'false';
  editableTrue: string = 'true';

  usuario: Usuario = {
    nombre: ''
  }
  tratamientos: Tratamiento[] = [];
  tratamientosAbiertos: Tratamiento[] = [];
  tratamientosCerrados: Tratamiento[] = [];

  dniPaciente;

  constructor(private menuController: MenuController,
              private tratamientoService: TratamientoService,
              private dataLocal: DataLocalService,
              private usuarioService: UsuarioService) { }

  async ionViewWillEnter() {

    const pac = await this.dataLocal.cargarPaciente();
    this.dniPaciente = pac;

    this.buscarUsu(this.dniPaciente);

    await this.cargarTratamientos();

    this.getAbiertos();
    this.getCerrados();

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
      sexo: getDatos.sexo,
      telefono: getDatos.telefono
    }
  }

    //Cargar tratamientos
    async cargarTratamientos(){

      let getDatos;
      await this.tratamientoService.tratamientosPaciente(this.dniPaciente)
                .then(resp => {
                  getDatos = resp;
                })
  
      
      this.tratamientos = getDatos;
      
    }

    //tratamientos abiertos
    getAbiertos(){

      this.tratamientos.forEach(tratamiento => {
        
        if(tratamiento.resuelto === false){
          this.tratamientosAbiertos.push(tratamiento);
        }

      });

    }

    //tratamientos cerrados
    getCerrados(){

      this.tratamientos.forEach(tratamiento => {
        
        if(tratamiento.resuelto === true){
          this.tratamientosCerrados.push(tratamiento);
        }

      });

    }

}
