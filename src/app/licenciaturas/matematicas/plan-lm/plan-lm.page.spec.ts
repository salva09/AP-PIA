import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanLMPage } from './plan-lm.page';

describe('PlanLMPage', () => {
  let component: PlanLMPage;
  let fixture: ComponentFixture<PlanLMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanLMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanLMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
