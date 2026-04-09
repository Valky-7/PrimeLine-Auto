import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fundo } from './fundo';

describe('Fundo', () => {
  let component: Fundo;
  let fixture: ComponentFixture<Fundo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fundo],
    }).compileComponents();

    fixture = TestBed.createComponent(Fundo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
