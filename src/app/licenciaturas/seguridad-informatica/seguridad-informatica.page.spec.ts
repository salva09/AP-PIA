import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeguridadInformaticaPage } from './seguridad-informatica.page';

describe('SeguridadInformaticaPage', () => {
  let component: SeguridadInformaticaPage;
  let fixture: ComponentFixture<SeguridadInformaticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadInformaticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeguridadInformaticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
