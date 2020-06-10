import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CienOrienMatePage } from './cien-orien-mate.page';

describe('CienOrienMatePage', () => {
  let component: CienOrienMatePage;
  let fixture: ComponentFixture<CienOrienMatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CienOrienMatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CienOrienMatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
