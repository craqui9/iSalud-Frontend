import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorListadoTratamientosComponent } from './doctor-listado-tratamientos.component';

describe('DoctorListadoTratamientosComponent', () => {
  let component: DoctorListadoTratamientosComponent;
  let fixture: ComponentFixture<DoctorListadoTratamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorListadoTratamientosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorListadoTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
