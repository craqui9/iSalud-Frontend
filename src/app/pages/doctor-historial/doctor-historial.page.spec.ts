import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorHistorialPage } from './doctor-historial.page';

describe('DoctorHistorialPage', () => {
  let component: DoctorHistorialPage;
  let fixture: ComponentFixture<DoctorHistorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorHistorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorHistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
