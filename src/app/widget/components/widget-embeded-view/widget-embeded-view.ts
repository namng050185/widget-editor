import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-embeded-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-embeded-view.html',
  styleUrl: './widget-embeded-view.scss',
})
export class WidgetEmbededView {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
