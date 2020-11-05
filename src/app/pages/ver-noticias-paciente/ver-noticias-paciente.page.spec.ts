import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerNoticiasPacientePage } from './ver-noticias-paciente.page';

describe('VerNoticiasPacientePage', () => {
  let component: VerNoticiasPacientePage;
  let fixture: ComponentFixture<VerNoticiasPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerNoticiasPacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerNoticiasPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
