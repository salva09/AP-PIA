import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanLFPage } from './plan-lf.page';

describe('PlanLFPage', () => {
  let component: PlanLFPage;
  let fixture: ComponentFixture<PlanLFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanLFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanLFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
