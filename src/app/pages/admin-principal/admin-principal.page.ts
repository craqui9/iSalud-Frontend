import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { IonInput, IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.page.html',
  styleUrls: ['./admin-principal.page.scss'],
})
export class AdminPrincipalPage implements OnInit {

  usuarios: Usuario[] = [];

  @ViewChild('selecRol') selecRol: IonSelect;

  @ViewChild('correoUsuario') correoUsuario: IonInput;
  @ViewChild('nombreUsuario') nombreUsuario: IonInput;
  @ViewChild('contraseñaUsuario') contraseñaUsuario: IonInput;
  @ViewChild('doctorUsuario') doctorUsuario: IonInput;


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getUsuarios()
        .subscribe(resp => {
          console.log(resp);
          this.usuarios.push(...resp.usuarios);
        });

    
  }



  crearUsuario(){

    //Recogida de datos
    console.log('rol: ', this.selecRol.value, '\ncorreo: ', this.correoUsuario.value,
                '\nnombre: ', this.nombreUsuario.value, '\ncontraseña: ', this.contraseñaUsuario.value);
    //Reocger el correo del doctor
    if(this.selecRol.value === 'doctor'){
      console.log('doctor: ', this.correoUsuario.value);
    }else{
      console.log('doctor: ', this.doctorUsuario.value);
    }   

  }

}
