import { AfterViewInit, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-preview-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-banner.html',
  styleUrl: './preview-banner.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PreviewBanner implements AfterViewInit {
  @ViewChild('swiperBanner') swiperBanner!: ElementRef;
  @Input() widget: any;
  activeIndex = 0;


  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.log('Banner widget', this.widget);
  }

  ngAfterViewInit(): void {
    const swiperEl: any = this.swiperBanner.nativeElement;
    swiperEl.addEventListener('swiperslidechange', (event: any) => {
      const [swiper] = event.detail;
      this.activeIndex = swiper.activeIndex;
      this.cdr.detectChanges();
    });
  }
}
