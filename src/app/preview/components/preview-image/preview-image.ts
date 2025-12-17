import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-image.html',
  styleUrl: './preview-image.scss',
})
export class PreviewImage {
  @Input() widget: any;
}
