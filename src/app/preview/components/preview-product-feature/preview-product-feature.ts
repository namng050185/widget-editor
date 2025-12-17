import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-product-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-product-feature.html',
  styleUrl: './preview-product-feature.scss',
})
export class PreviewProductFeature {
  @Input() widget: any;
}
