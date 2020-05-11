import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatematicasPage } from './matematicas.page';

describe('MatematicasPage', () => {
  let component: MatematicasPage;
  let fixture: ComponentFixture<MatematicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatematicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatematicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
