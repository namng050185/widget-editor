import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-download',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-download.html',
  styleUrl: './widget-download.scss',
})
export class WidgetDownload {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
