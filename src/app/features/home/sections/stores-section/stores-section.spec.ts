import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresSection } from './stores-section';

describe('StoresSection', () => {
  let component: StoresSection;
  let fixture: ComponentFixture<StoresSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoresSection],
    }).compileComponents();

    fixture = TestBed.createComponent(StoresSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
