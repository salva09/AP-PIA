import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FisicaPage } from './fisica.page';

describe('FisicaPage', () => {
  let component: FisicaPage;
  let fixture: ComponentFixture<FisicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
