import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasValoradasComponent } from './mas-valoradas.component';

describe('MasValoradasComponent', () => {
  let component: MasValoradasComponent;
  let fixture: ComponentFixture<MasValoradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasValoradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasValoradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
