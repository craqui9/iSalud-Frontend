import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorVerCitaspedidasPage } from './doctor-ver-citaspedidas.page';

describe('DoctorVerCitaspedidasPage', () => {
  let component: DoctorVerCitaspedidasPage;
  let fixture: ComponentFixture<DoctorVerCitaspedidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorVerCitaspedidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorVerCitaspedidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
