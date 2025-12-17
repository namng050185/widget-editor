import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-html',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-html.html',
  styleUrl: './preview-html.scss',
})
export class PreviewHtml {
  @Input() widget: any;
}
