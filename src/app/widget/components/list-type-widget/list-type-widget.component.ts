import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeWidget } from '../../../types/widget.interface';
import { values } from 'lodash';
import { getWidgetTypes } from '../../../types';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list-type-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-type-widget.component.html',
  styleUrl: './list-type-widget.component.scss',
})
export class ListTypeWidgetComponent {
  @Input() typeWidgets: TypeWidget[] = [];
  @Output() widgetSelected = new EventEmitter<TypeWidget>();
  @Output() close = new EventEmitter<any>();
  selectedWidget: TypeWidget | null = null;
  ngOnInit(): void {
    this.typeWidgets = values(getWidgetTypes());
  }

  onSelectWidget(widget: TypeWidget): void {
    this.selectedWidget = widget;
    this.widgetSelected.emit(this.selectedWidget);
  }

  onSelect(): void {
    this.close.emit({
      ...JSON.parse(JSON.stringify(this.selectedWidget?.example)),
      type: this.selectedWidget?.type,
      title: this.selectedWidget?.title,
      id: uuidv4(),
    });
  }

  onClose(): void {
    this.close.emit(false);
  }

  trackByWidgetId(index: number, widget: TypeWidget): string {
    return widget.type || index.toString();
  }
}
