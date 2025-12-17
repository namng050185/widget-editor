import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Widget } from '../types/widget.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {
  @Input() widgets: Widget[] = [];
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    // Xử lý logic drop widget ở đây
    console.log('Widget dropped');
  }
}

