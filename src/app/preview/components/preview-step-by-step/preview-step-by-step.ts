import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-step-by-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-step-by-step.html',
  styleUrl: './preview-step-by-step.scss',
})
export class PreviewStepByStep {
  @Input() widget: any;
}
