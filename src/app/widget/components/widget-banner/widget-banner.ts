import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BannerList } from './banner-list/banner-list';
import { BannerDetail } from './banner-detail/banner-detail';
import { BannerSelect } from './banner-select/banner-select';

@Component({
  selector: 'app-widget-banner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BannerList, BannerDetail, BannerSelect],
  templateUrl: './widget-banner.html',
  styleUrl: './widget-banner.scss',
})
export class WidgetBanner {
  @Input() widget: any;
  @Input() disabled: any;
  @Output() widgetChange = new EventEmitter<any>();
  frm: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    items: new FormArray([], [Validators.required]),
  });
  detail: any = null;

  ngOnInit(): void {
    this.frm.patchValue(this.widget);
    if (this.disabled) {
      this.frm.disable();
    } else {
      this.frm.valueChanges.subscribe((e) => {
        console.log('valueChanges', e);
      })
    }
  }
}
