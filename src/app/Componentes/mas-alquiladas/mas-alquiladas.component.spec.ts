import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasAlquiladasComponent } from './mas-alquiladas.component';

describe('MasAlquiladasComponent', () => {
  let component: MasAlquiladasComponent;
  let fixture: ComponentFixture<MasAlquiladasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasAlquiladasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasAlquiladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
