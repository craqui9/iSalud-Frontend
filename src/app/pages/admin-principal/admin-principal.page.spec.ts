import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminPrincipalPage } from './admin-principal.page';

describe('AdminPrincipalPage', () => {
  let component: AdminPrincipalPage;
  let fixture: ComponentFixture<AdminPrincipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrincipalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
