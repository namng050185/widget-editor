import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-web-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-web-form.html',
  styleUrl: './widget-web-form.scss',
})
export class WidgetWebForm {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
