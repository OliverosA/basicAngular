import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasImagenesComponent } from './cartas-imagenes.component';

describe('CartasImagenesComponent', () => {
  let component: CartasImagenesComponent;
  let fixture: ComponentFixture<CartasImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartasImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartasImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
