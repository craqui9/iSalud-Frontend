import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacienteHistorialPage } from './paciente-historial.page';

describe('PacienteHistorialPage', () => {
  let component: PacienteHistorialPage;
  let fixture: ComponentFixture<PacienteHistorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteHistorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteHistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
