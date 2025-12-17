import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { PreviewComponent } from './preview/preview.component';
import { ModalComponent } from './components/modal/modal.component';
import { Widget } from './types/widget.interface';

@Component({
  selector: 'app-root',
  imports: [CommonModule, WidgetComponent, PreviewComponent, ModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('widget-editor');
  protected readonly leftPanelWidth = signal(300);
  protected readonly isLeftPanelHidden = signal(false);
  protected readonly previewMode = signal<'pc' | 'tablet' | 'mobile'>('pc');
  protected readonly widgets = signal<Widget[]>([
    { id: '1', title: 'Widget 1', description: 'Widget 1 description', type: 'widget', data: {} },
    { id: '2', title: 'Widget 2', description: 'Widget 2 description', type: 'widget', data: {} },
    { id: '3', title: 'Widget 3', description: 'Widget 3 description', type: 'widget', data: {} },
    { id: '4', title: 'Widget 4', description: 'Widget 4 description', type: 'widget', data: {} },
    { id: '5', title: 'Widget 5', description: 'Widget 5 description', type: 'widget', data: {} },
    { id: '6', title: 'Widget 6', description: 'Widget 6 description', type: 'widget', data: {} },
    { id: '7', title: 'Widget 7', description: 'Widget 7 description', type: 'widget', data: {} },
    { id: '8', title: 'Widget 8', description: 'Widget 8 description', type: 'widget', data: {} },
    { id: '9', title: 'Widget 9', description: 'Widget 9 description', type: 'widget', data: {} },
    { id: '10', title: 'Widget 10', description: 'Widget 10 description', type: 'widget', data: {} },
    { id: '11', title: 'Widget 11', description: 'Widget 11 description', type: 'widget', data: {} },
    { id: '12', title: 'Widget 12', description: 'Widget 12 description', type: 'widget', data: {} },
    { id: '13', title: 'Widget 13', description: 'Widget 13 description', type: 'widget', data: {} },
    { id: '14', title: 'Widget 14', description: 'Widget 14 description', type: 'widget', data: {} },
    { id: '15', title: 'Widget 15', description: 'Widget 15 description', type: 'widget', data: {} },
    { id: '16', title: 'Widget 16', description: 'Widget 16 description', type: 'widget', data: {} },
    { id: '17', title: 'Widget 17', description: 'Widget 17 description', type: 'widget', data: {} },
  ]);
  private isResizing = false;
  private startX = 0;
  private startWidth = 0;

  startResize(event: MouseEvent): void {
    this.isResizing = true;
    this.startX = event.clientX;
    this.startWidth = this.leftPanelWidth();
    event.preventDefault();
    // Thêm class để thay đổi cursor trên toàn bộ document
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isResizing) return;

    const diff = event.clientX - this.startX;
    const newWidth = this.startWidth + diff;

    // Giới hạn min 200px và max 800px
    const clampedWidth = Math.max(200, Math.min(800, newWidth));
    this.leftPanelWidth.set(clampedWidth);
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    if (this.isResizing) {
      this.isResizing = false;
      // Khôi phục cursor và user-select
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  }

  onToggleLeftPanel(): void {
    this.isLeftPanelHidden.update(value => !value);
  }

  onShowLeftPanel(): void {
    // Hiện lại panel với độ rộng Narrow (300px)
    this.leftPanelWidth.set(300);
    this.isLeftPanelHidden.set(false);
  }

  onLeftPanelWidthChange(width: number): void {
    this.leftPanelWidth.set(width);
  }

  onPreviewModeChange(mode: 'pc' | 'tablet' | 'mobile'): void {
    this.previewMode.set(mode);
  }

  onWidgetsReorder(reorderedWidgets: Widget[]): void {
    // Cập nhật thứ tự widgets
    this.widgets.set(reorderedWidgets);
  }
}
