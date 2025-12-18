import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-product-comparison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-product-comparison.html',
  styleUrl: './widget-product-comparison.scss',
})
export class WidgetProductComparison {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
