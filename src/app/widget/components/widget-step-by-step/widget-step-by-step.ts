import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-step-by-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-step-by-step.html',
  styleUrl: './widget-step-by-step.scss',
})
export class WidgetStepByStep {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
