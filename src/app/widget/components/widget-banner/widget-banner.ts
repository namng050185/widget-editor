import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BannerDetail } from './banner-detail/banner-detail';
import { WidgetList } from '../../../components/widget-list/widget-list';

@Component({
  selector: 'app-widget-banner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, WidgetList, BannerDetail],
  templateUrl: './widget-banner.html',
  styleUrl: './widget-banner.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WidgetBanner {
  @Input() widget: any;
  @Input() disabled: any;
  @Output() widgetChange = new EventEmitter<any>();
  frm: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    items: new FormControl([], [Validators.required]),
  });
  detail: any = null;

  ngOnInit(): void {
    const value = this.widget?.value || {};
    const id = this.widget?.id;
    this.frm.setValue({ id, ...value });
    if (this.disabled) {
      this.frm.disable();
    } else {
      this.frm.valueChanges.subscribe((e) => {
        console.log('valueChanges', e);
      });
    }
  }

  onAction(event: any): void {
    console.log('onAction', event);
    switch (event.action) {
      case 'add':
        break;
      case 'edit':
        this.detail = event.data;
        break;
      case 'delete':
        break;
      case 'reorder':
        this.onReorder(event.data);
        break;
      default:
        break;
    }
  }

  onReorder(reorderedItems: any[]): void {
    // Cập nhật form với thứ tự mới
    this.frm.patchValue({ items: reorderedItems });
    // Emit widget change với giá trị mới
    const updatedWidget = {
      ...this.widget,
      value: {
        ...this.frm.value,
        items: reorderedItems,
      },
    };
    this.widgetChange.emit(updatedWidget);
  }
}
