import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TypeWidget {
    id: string;
    name: string;
    description: string;
    icon?: string;
    category?: string;
    data?: any;
}

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
    @Output() close = new EventEmitter<void>();

    ngOnInit(): void {
        console.log(this.typeWidgets);
    }

    onSelectWidget(widget: TypeWidget): void {
        this.widgetSelected.emit(widget);
    }

    onClose(): void {
        this.close.emit();
    }
}

