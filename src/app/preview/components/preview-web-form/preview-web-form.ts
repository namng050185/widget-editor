import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-web-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-web-form.html',
  styleUrl: './preview-web-form.scss',
})
export class PreviewWebForm {
  @Input() widget: any;
}
