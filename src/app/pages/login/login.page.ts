import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonInput, IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides ;

  loginUser = {
    dni: '',
    password: ''
  };

  constructor(private usuarioService: UsuarioService,
              private dataLocal: DataLocalService,
              private navController: NavController) { }

  ngOnInit() {
    //pa que el slide se quede quieto
    this.slides.lockSwipes(true);
    this.dataLocal.limpiar();
  }

  async login(fLogin: NgForm){

    //Meter funcion que limpie el localsotrage
    this.dataLocal.limpiar();
    
    if(fLogin.invalid){
      this.usuarioService.mensajeToast('Rellene todos los datos.');
      return;
    }

    if(this.loginUser.dni === 'admin'){
      if(this.loginUser.password === 'admin'){
        this.navController.navigateRoot('admin-principal', {animated: true});
        return;
      }
    }

    const valido = await this.usuarioService.login(this.loginUser.dni, this.loginUser.password);
    this.dataLocal.guardarUsuario(this.loginUser.dni);

    if(!valido){
      this.usuarioService.mensajeToast('DNI/NIE o contraseña no son correctos.');
    }
    
  }

}
