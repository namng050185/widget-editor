import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-top-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-top-articles.html',
  styleUrl: './preview-top-articles.scss',
})
export class PreviewTopArticles {
  @Input() widget: any;
}
