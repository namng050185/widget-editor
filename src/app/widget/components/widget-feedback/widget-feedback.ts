import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-feedback.html',
  styleUrl: './widget-feedback.scss',
})
export class WidgetFeedback {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
