import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-support.html',
  styleUrl: './widget-support.scss',
})
export class WidgetSupport {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
