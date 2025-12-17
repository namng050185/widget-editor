import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-title.html',
  styleUrl: './preview-title.scss',
})
export class PreviewTitle {
  @Input() widget: any;
}
