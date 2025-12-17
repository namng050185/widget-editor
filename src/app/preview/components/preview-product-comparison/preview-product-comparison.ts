import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-product-comparison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-product-comparison.html',
  styleUrl: './preview-product-comparison.scss',
})
export class PreviewProductComparison {
  @Input() widget: any;
}
