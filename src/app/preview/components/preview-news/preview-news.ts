import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-news.html',
  styleUrl: './preview-news.scss',
})
export class PreviewNews {
  @Input() widget: any;
}
