import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellersSection } from './bestsellers-section';

describe('BestsellersSection', () => {
  let component: BestsellersSection;
  let fixture: ComponentFixture<BestsellersSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestsellersSection],
    }).compileComponents();

    fixture = TestBed.createComponent(BestsellersSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
