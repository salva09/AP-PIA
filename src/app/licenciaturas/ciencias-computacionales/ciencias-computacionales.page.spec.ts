import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CienciasComputacionalesPage } from './ciencias-computacionales.page';

describe('CienciasComputacionalesPage', () => {
  let component: CienciasComputacionalesPage;
  let fixture: ComponentFixture<CienciasComputacionalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CienciasComputacionalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CienciasComputacionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
