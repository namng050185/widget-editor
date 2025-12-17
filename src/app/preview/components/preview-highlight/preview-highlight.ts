import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-highlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-highlight.html',
  styleUrl: './preview-highlight.scss',
})
export class PreviewHighlight {
  @Input() widget: any;
}
