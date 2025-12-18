import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-news.html',
  styleUrl: './widget-news.scss',
})
export class WidgetNews {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
