import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionSection } from './auction-section';

describe('AuctionSection', () => {
  let component: AuctionSection;
  let fixture: ComponentFixture<AuctionSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuctionSection],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
