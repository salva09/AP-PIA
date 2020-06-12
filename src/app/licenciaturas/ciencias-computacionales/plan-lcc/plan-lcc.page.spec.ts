import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanLCCPage } from './plan-lcc.page';

describe('PlanLCCPage', () => {
  let component: PlanLCCPage;
  let fixture: ComponentFixture<PlanLCCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanLCCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanLCCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
