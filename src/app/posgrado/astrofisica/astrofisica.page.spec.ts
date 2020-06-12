import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AstrofisicaPage } from './astrofisica.page';

describe('AstrofisicaPage', () => {
  let component: AstrofisicaPage;
  let fixture: ComponentFixture<AstrofisicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstrofisicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AstrofisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
