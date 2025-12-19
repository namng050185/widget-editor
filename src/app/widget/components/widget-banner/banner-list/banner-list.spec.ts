import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerList } from './banner-list';

describe('BannerList', () => {
  let component: BannerList;
  let fixture: ComponentFixture<BannerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
