import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorListadoTratamientoComponent } from './doctor-listado-tratamiento.component';

describe('DoctorListadoTratamientoComponent', () => {
  let component: DoctorListadoTratamientoComponent;
  let fixture: ComponentFixture<DoctorListadoTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorListadoTratamientoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorListadoTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
