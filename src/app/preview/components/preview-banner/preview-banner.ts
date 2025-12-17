import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-banner.html',
  styleUrl: './preview-banner.scss',
})
export class PreviewBanner {
  @Input() widget: any;
}
