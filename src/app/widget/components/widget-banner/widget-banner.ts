import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BannerList } from './banner-list/banner-list';
import { BannerDetail } from './banner-detail/banner-detail';
import { BannerSelect } from './banner-select/banner-select';
import { AddSortComponent } from '../../../components/add-sort/add-sort';

@Component({
  selector: 'app-widget-banner',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BannerList,
    BannerDetail,
    BannerSelect,
  ],
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
    this.frm.setValue({id, ...value});
    if (this.disabled) {
      this.frm.disable();
    } else {
      this.frm.valueChanges.subscribe((e) => {
        console.log('valueChanges', e);
      });
    }
  }

  

  onAdd(): void {
    console.log('onAdd');
  }

  onSort(): void {
    console.log('onSort');
  }
}
