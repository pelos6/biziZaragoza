import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiziMapComponent } from './bizi-map.component';

describe('BiziMapComponent', () => {
  let component: BiziMapComponent;
  let fixture: ComponentFixture<BiziMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiziMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiziMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
