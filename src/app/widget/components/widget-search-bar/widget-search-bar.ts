import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-search-bar.html',
  styleUrl: './widget-search-bar.scss',
})
export class WidgetSearchBar {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
