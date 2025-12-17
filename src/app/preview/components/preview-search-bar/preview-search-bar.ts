import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-search-bar.html',
  styleUrl: './preview-search-bar.scss',
})
export class PreviewSearchBar {
  @Input() widget: any;
}
