import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngSeguInfPage } from './ing-segu-inf.page';

describe('IngSeguInfPage', () => {
  let component: IngSeguInfPage;
  let fixture: ComponentFixture<IngSeguInfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngSeguInfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngSeguInfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
