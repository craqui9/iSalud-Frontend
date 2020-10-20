import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminEliminarPage } from './admin-eliminar.page';

describe('AdminEliminarPage', () => {
  let component: AdminEliminarPage;
  let fixture: ComponentFixture<AdminEliminarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEliminarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminEliminarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
