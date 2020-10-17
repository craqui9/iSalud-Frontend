import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Datos del formulario
  @ViewChild('correoUsuario') correoUsuario: IonInput;
  @ViewChild('contraseñaUsuario') contraseñaUsuario: IonInput;

  constructor() { }

  ngOnInit() {
  }

  login(){
    
    
    
  }

}
