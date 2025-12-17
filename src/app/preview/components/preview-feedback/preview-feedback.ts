import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-feedback.html',
  styleUrl: './preview-feedback.scss',
})
export class PreviewFeedback {
  @Input() widget: any;
}
