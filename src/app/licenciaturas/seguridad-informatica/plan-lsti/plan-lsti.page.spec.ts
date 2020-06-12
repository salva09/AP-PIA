import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanLSTIPage } from './plan-lsti.page';

describe('PlanLSTIPage', () => {
  let component: PlanLSTIPage;
  let fixture: ComponentFixture<PlanLSTIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanLSTIPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanLSTIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
