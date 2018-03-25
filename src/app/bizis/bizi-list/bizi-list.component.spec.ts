import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiziListComponent } from './bizi-list.component';

describe('BiziListComponent', () => {
  let component: BiziListComponent;
  let fixture: ComponentFixture<BiziListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiziListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiziListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
