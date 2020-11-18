import { Component, Input, OnInit } from '@angular/core';
import { PedirCita } from '../../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { PedirCitaService } from '../../services/pedir-cita.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-doctor-listado-solicitud',
  templateUrl: './doctor-listado-solicitud.component.html',
  styleUrls: ['./doctor-listado-solicitud.component.scss'],
})
export class DoctorListadoSolicitudComponent implements OnInit {

  @Input() solicitud: PedirCita;

  constructor(private alertController: AlertController,
              private pedirCitaService: PedirCitaService,
              private usuarioService: UsuarioService) { }

  ngOnInit() {}

  click(){
    this.alerta();
  }

  async alerta(){

    const alert = await this.alertController.create({

      //cssClass: 'my-custom-class',
      header: 'Resolver solicitud',
      message: '¿Desea resolver la solicitud de '+ this.solicitud.nombre_paciente +'?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log();
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            //------------------------------//
            this.pedirCitaService.actualizarResuelto(this.solicitud.identificador);
            this.usuarioService.mensajeToast('Solicitud resuelta.');
            window.location.reload();
            //------------------------------//
          }
        }
      ]

    });

    await alert.present();

  }
}
