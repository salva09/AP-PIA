import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActuariaPage } from './actuaria.page';

describe('ActuariaPage', () => {
  let component: ActuariaPage;
  let fixture: ComponentFixture<ActuariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuariaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActuariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
