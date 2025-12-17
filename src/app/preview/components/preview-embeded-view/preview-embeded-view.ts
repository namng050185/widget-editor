import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-embeded-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-embeded-view.html',
  styleUrl: './preview-embeded-view.scss',
})
export class PreviewEmbededView {
  @Input() widget: any;
}
