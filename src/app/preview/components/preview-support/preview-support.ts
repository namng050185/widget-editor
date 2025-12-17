import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-support.html',
  styleUrl: './preview-support.scss',
})
export class PreviewSupport {
  @Input() widget: any;
}
