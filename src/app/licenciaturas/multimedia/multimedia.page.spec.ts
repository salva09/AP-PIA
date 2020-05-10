import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultimediaPage } from './multimedia.page';

describe('MultimediaPage', () => {
  let component: MultimediaPage;
  let fixture: ComponentFixture<MultimediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultimediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
