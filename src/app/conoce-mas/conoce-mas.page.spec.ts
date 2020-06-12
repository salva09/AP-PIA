import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConoceMasPage } from './conoce-mas.page';

describe('ConoceMasPage', () => {
  let component: ConoceMasPage;
  let fixture: ComponentFixture<ConoceMasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConoceMasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConoceMasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
