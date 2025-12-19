import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { PreviewComponent } from './preview/preview.component';
import { ModalComponent } from './components/modal/modal.component';
import { fakeWidgets } from './types/fake';

@Component({
  selector: 'app-root',
  imports: [CommonModule, WidgetComponent, PreviewComponent, ModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('widget-editor');
  protected readonly leftPanelWidth = signal(400);
  protected readonly isLeftPanelHidden = signal(false);
  protected readonly previewMode = signal<'pc' | 'tablet' | 'mobile'>('pc');
  protected readonly widgets = signal<any[]>(fakeWidgets);
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
    this.isLeftPanelHidden.update((value) => !value);
  }

  onShowLeftPanel(): void {
    // Hiện lại panel với độ rộng Narrow (400px)
    this.leftPanelWidth.set(400);
    this.isLeftPanelHidden.set(false);
  }

  onLeftPanelWidthChange(width: number): void {
    this.leftPanelWidth.set(width);
  }

  onPreviewModeChange(mode: 'pc' | 'tablet' | 'mobile'): void {
    this.previewMode.set(mode);
  }

  onWidgetChange(widgets: any[]): void {
    this.widgets.set(widgets);
  }
}
