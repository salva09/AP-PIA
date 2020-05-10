import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PosgradoPage } from './posgrado.page';

describe('PosgradoPage', () => {
  let component: PosgradoPage;
  let fixture: ComponentFixture<PosgradoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosgradoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PosgradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
