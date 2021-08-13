import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaMenuComponent } from './busqueda-menu.component';

describe('BusquedaMenuComponent', () => {
  let component: BusquedaMenuComponent;
  let fixture: ComponentFixture<BusquedaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
