import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-help-topics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-help-topics.html',
  styleUrl: './preview-help-topics.scss',
})
export class PreviewHelpTopics {
  @Input() widget: any;
}
