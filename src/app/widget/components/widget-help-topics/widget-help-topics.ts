import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-help-topics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-help-topics.html',
  styleUrl: './widget-help-topics.scss',
})
export class WidgetHelpTopics {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
