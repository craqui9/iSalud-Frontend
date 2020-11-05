import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerNoticiasDoctorPage } from './ver-noticias-doctor.page';

describe('VerNoticiasDoctorPage', () => {
  let component: VerNoticiasDoctorPage;
  let fixture: ComponentFixture<VerNoticiasDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerNoticiasDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerNoticiasDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
