import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-paciente-principal',
  templateUrl: './paciente-principal.page.html',
  styleUrls: ['./paciente-principal.page.scss'],
})
export class PacientePrincipalPage implements OnInit {

  constructor(private dataLocal: DataLocalService) { }

  async ngOnInit() {

    
  }

}
