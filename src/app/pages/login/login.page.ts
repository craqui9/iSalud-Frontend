import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonInput, IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides ;

  loginUser = {
    email: '',
    password: ''
  };

  constructor(private usuarioService: UsuarioService,
              private navController: NavController) { }

  ngOnInit() {
    //pa que el slide se quede quieto
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm){
    
    if(fLogin.invalid){
      this.usuarioService.mensajeToast('Rellene todos los datos.');
      return;
    }

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);
    

    if(!valido){
      this.usuarioService.mensajeToast('Correo/contraseña no son correctos.');
    }
    
  }

}
