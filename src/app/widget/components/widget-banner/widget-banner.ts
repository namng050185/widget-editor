import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-banner.html',
  styleUrl: './widget-banner.scss',
})
export class WidgetBanner {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
