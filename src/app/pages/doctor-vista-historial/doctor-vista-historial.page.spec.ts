import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorVistaHistorialPage } from './doctor-vista-historial.page';

describe('DoctorVistaHistorialPage', () => {
  let component: DoctorVistaHistorialPage;
  let fixture: ComponentFixture<DoctorVistaHistorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorVistaHistorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorVistaHistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
