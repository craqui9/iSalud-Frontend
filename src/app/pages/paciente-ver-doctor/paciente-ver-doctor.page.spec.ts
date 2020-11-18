import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacienteVerDoctorPage } from './paciente-ver-doctor.page';

describe('PacienteVerDoctorPage', () => {
  let component: PacienteVerDoctorPage;
  let fixture: ComponentFixture<PacienteVerDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteVerDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteVerDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
