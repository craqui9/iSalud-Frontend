import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminVerPage } from './admin-ver.page';

describe('AdminVerPage', () => {
  let component: AdminVerPage;
  let fixture: ComponentFixture<AdminVerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminVerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
