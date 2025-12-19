import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-image.html',
  styleUrl: './widget-image.scss',
})
export class WidgetImage {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
