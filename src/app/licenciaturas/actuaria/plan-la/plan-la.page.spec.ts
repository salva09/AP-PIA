import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanLAPage } from './plan-la.page';

describe('PlanLAPage', () => {
  let component: PlanLAPage;
  let fixture: ComponentFixture<PlanLAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanLAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanLAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
