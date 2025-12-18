import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-tile.html',
  styleUrl: './widget-tile.scss',
})
export class WidgetTile {
  @Input() widget: any;
  @Output() widgetChange = new EventEmitter<any>();
}
