import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSelect } from './banner-select';

describe('BannerSelect', () => {
  let component: BannerSelect;
  let fixture: ComponentFixture<BannerSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
