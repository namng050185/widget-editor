import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-faq.html',
  styleUrl: './widget-faq.scss',
})
export class WidgetFaq {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
