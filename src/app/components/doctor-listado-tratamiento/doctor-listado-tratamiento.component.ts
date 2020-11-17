import { Component, Input, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Tratamiento } from '../../interfaces/interfaces';
import { TratamientoService } from '../../services/tratamiento.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-doctor-listado-tratamiento',
  templateUrl: './doctor-listado-tratamiento.component.html',
  styleUrls: ['./doctor-listado-tratamiento.component.scss'],
})
export class DoctorListadoTratamientoComponent implements OnInit {

  @Input() tratamiento: Tratamiento;
  @Input() editable: String;

  constructor(private tratamientoService: TratamientoService,
              private alertController: AlertController,
              private usuarioService: UsuarioService,
              private navController: NavController) { }

  ngOnInit() {}

  onClick(){

    if(this.editable === "true"){

      this.actualizar();

    }else{
      console.log('');
    }

  }

  async actualizar(){

    const alert = await this.alertController.create({

      //cssClass: 'my-custom-class',
      header: 'Resolver tratamiento',
      message: '¿Desea finalizar el tratamiento con caso: ' + this.tratamiento.nombre_tratamiento + '?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            //------------------------------//
            this.tratamientoService.actualizarResuelto(this.tratamiento.identificador);
            this.usuarioService.mensajeToast('Tratamiento resuelto.');
            window.location.reload();
            //------------------------------//
          }
        }
      ]

    });

    await alert.present();

  }

}
