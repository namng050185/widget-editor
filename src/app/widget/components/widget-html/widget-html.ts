import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-html',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-html.html',
  styleUrl: './widget-html.scss',
})
export class WidgetHtml {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
