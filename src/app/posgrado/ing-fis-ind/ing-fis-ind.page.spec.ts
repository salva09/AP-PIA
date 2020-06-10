import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngFisIndPage } from './ing-fis-ind.page';

describe('IngFisIndPage', () => {
  let component: IngFisIndPage;
  let fixture: ComponentFixture<IngFisIndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngFisIndPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngFisIndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
