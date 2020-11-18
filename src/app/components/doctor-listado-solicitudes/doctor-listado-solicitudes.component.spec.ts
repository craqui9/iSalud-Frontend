import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorListadoSolicitudesComponent } from './doctor-listado-solicitudes.component';

describe('DoctorListadoSolicitudesComponent', () => {
  let component: DoctorListadoSolicitudesComponent;
  let fixture: ComponentFixture<DoctorListadoSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorListadoSolicitudesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorListadoSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
