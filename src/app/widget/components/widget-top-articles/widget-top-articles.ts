import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-top-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-top-articles.html',
  styleUrl: './widget-top-articles.scss',
})
export class WidgetTopArticles {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
