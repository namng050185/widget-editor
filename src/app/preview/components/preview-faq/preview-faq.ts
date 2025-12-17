import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-faq.html',
  styleUrl: './preview-faq.scss',
})
export class PreviewFaq {
  @Input() widget: any;
}
