import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LicenciaturasPage } from './licenciaturas.page';

describe('LicenciaturasPage', () => {
  let component: LicenciaturasPage;
  let fixture: ComponentFixture<LicenciaturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenciaturasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenciaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
