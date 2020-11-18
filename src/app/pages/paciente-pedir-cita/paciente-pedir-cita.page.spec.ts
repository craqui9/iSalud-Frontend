import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientePedirCitaPage } from './paciente-pedir-cita.page';

describe('PacientePedirCitaPage', () => {
  let component: PacientePedirCitaPage;
  let fixture: ComponentFixture<PacientePedirCitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientePedirCitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientePedirCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
