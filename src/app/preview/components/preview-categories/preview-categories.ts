import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-categories.html',
  styleUrl: './preview-categories.scss',
})
export class PreviewCategories {
  @Input() widget: any;
}
