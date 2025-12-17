import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-download',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-download.html',
  styleUrl: './preview-download.scss',
})
export class PreviewDownload {
  @Input() widget: any;
}
