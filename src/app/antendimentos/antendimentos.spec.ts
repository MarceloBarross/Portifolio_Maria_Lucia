import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Antendimentos } from './antendimentos';

describe('Antendimentos', () => {
  let component: Antendimentos;
  let fixture: ComponentFixture<Antendimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Antendimentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Antendimentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
