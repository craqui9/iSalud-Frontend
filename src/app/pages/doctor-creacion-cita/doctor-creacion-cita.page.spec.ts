import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorCreacionCitaPage } from './doctor-creacion-cita.page';

describe('DoctorCreacionCitaPage', () => {
  let component: DoctorCreacionCitaPage;
  let fixture: ComponentFixture<DoctorCreacionCitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorCreacionCitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorCreacionCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
