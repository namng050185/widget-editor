import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDetail } from './banner-detail';

describe('BannerDetail', () => {
  let component: BannerDetail;
  let fixture: ComponentFixture<BannerDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
