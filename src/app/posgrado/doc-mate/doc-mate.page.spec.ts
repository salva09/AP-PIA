import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocMatePage } from './doc-mate.page';

describe('DocMatePage', () => {
  let component: DocMatePage;
  let fixture: ComponentFixture<DocMatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocMatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocMatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
