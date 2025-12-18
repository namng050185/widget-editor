import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-product-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-product-feature.html',
  styleUrl: './widget-product-feature.scss',
})
export class WidgetProductFeature {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
