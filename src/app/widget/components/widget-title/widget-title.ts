import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-title.html',
  styleUrl: './widget-title.scss',
})
export class WidgetTitle {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
