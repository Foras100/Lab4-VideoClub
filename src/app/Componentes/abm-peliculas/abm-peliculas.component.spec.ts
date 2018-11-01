import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmPeliculasComponent } from './abm-peliculas.component';

describe('AbmPeliculasComponent', () => {
  let component: AbmPeliculasComponent;
  let fixture: ComponentFixture<AbmPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
