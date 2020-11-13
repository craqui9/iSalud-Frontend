import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorCreacionTratamientoPage } from './doctor-creacion-tratamiento.page';

describe('DoctorCreacionTratamientoPage', () => {
  let component: DoctorCreacionTratamientoPage;
  let fixture: ComponentFixture<DoctorCreacionTratamientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorCreacionTratamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorCreacionTratamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
