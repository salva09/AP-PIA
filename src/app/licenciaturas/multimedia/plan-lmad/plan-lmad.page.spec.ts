import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanLMADPage } from './plan-lmad.page';

describe('PlanLMADPage', () => {
  let component: PlanLMADPage;
  let fixture: ComponentFixture<PlanLMADPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanLMADPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanLMADPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
