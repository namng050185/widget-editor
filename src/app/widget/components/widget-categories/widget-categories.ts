import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-categories.html',
  styleUrl: './widget-categories.scss',
})
export class WidgetCategories {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
