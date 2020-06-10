import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocIngFisIndPage } from './doc-ing-fis-ind.page';

describe('DocIngFisIndPage', () => {
  let component: DocIngFisIndPage;
  let fixture: ComponentFixture<DocIngFisIndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocIngFisIndPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocIngFisIndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
