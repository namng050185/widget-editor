import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeWidget } from '../../../types/widget.interface';
import { values } from 'lodash';
import { getWidgetTypes } from '../../../types';



@Component({
    selector: 'app-list-type-widget',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './list-type-widget.component.html',
    styleUrl: './list-type-widget.component.scss'
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

    onSave(): void {
        this.close.emit(true);
    }

    onClose(): void {
        this.close.emit(false);
    }
}

