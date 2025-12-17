import { Component, ViewEncapsulation, Output, EventEmitter, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Widget } from '../types/widget.interface';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
  @Input() widgets: Widget[] = [];
  
  @Output() toggleHide = new EventEmitter<void>();
  @Output() widthChange = new EventEmitter<number>();
  @Output() modeChange = new EventEmitter<'pc' | 'tablet' | 'mobile'>();
  @Output() widgetsReorder = new EventEmitter<Widget[]>();

  protected readonly isHidden = signal(false);
  protected readonly currentWidth = signal(300);
  protected readonly currentMode = signal<'pc' | 'tablet' | 'mobile'>('pc');
  protected readonly isSortMode = signal(false);
  private readonly openWidgetConfigs = signal<Set<string>>(new Set());
  private draggedWidgetId: string | null = null;

  onClose(): void {
    // Xử lý logic đóng widget
    console.log('Close clicked');
  }

  onPreview(): void {
    // Xử lý logic preview
    console.log('Preview clicked');
  }

  onSave(): void {
    // Xử lý logic save
    console.log('Save clicked');
  }

  onToggleHide(): void {
    this.isHidden.update(value => !value);
    this.toggleHide.emit();
  }

  onWidthChange(width: number): void {
    this.currentWidth.set(width);
    this.widthChange.emit(width);
  }

  onToggleWidth(): void {
    const current = this.currentWidth();
    let nextWidth: number;
    
    // Chuyển đổi: Narrow (300) -> Normal (500) -> Wide (800) -> Narrow (300)
    if (current === 300) {
      nextWidth = 500; // Narrow -> Normal
    } else if (current === 500) {
      nextWidth = 800; // Normal -> Wide
    } else {
      nextWidth = 300; // Wide -> Narrow
    }
    
    this.onWidthChange(nextWidth);
  }

  getWidthLabel(): string {
    const width = this.currentWidth();
    if (width === 300) return 'Narrow';
    if (width === 500) return 'Normal';
    if (width === 800) return 'Wide';
    return 'Narrow';
  }

  onModeChange(mode: 'pc' | 'tablet' | 'mobile'): void {
    this.currentMode.set(mode);
    this.modeChange.emit(mode);
  }

  toggleWidgetConfig(widgetId: string): void {
    const current = this.openWidgetConfigs();
    const newSet = new Set(current);
    
    if (newSet.has(widgetId)) {
      newSet.delete(widgetId);
    } else {
      newSet.add(widgetId);
    }
    
    this.openWidgetConfigs.set(newSet);
  }

  isWidgetConfigOpen(widgetId: string): boolean {
    return this.openWidgetConfigs().has(widgetId);
  }

  onDeleteWidget(widgetId: string): void {
    // Xử lý logic xóa widget
    console.log('Delete widget:', widgetId);
    // Có thể emit event lên parent component để xóa widget
  }

  trackByWidgetId(index: number, widget: Widget): string {
    return widget.id;
  }

  onAddWidget(): void {
    // Xử lý logic thêm widget
    console.log('Add widget clicked');
  }

  onSort(): void {
    // Bật/tắt chế độ sort (drag & drop)
    const newSortMode = !this.isSortMode();
    this.isSortMode.set(newSortMode);
    
    // Nếu bật chế độ sort, đóng tất cả widget config đang mở
    if (newSortMode) {
      this.openWidgetConfigs.set(new Set());
    }
  }

  onDragStart(event: DragEvent, widgetId: string): void {
    if (!this.isSortMode()) return;
    this.draggedWidgetId = widgetId;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', widgetId);
    }
    // Thêm class để hiển thị trạng thái đang kéo
    const target = event.target as HTMLElement;
    if (target.closest('.widget-item')) {
      target.closest('.widget-item')?.classList.add('opacity-50');
    }
  }

  onDragEnd(event: DragEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.widget-item')) {
      target.closest('.widget-item')?.classList.remove('opacity-50');
    }
    this.draggedWidgetId = null;
  }

  onDragOver(event: DragEvent): void {
    if (!this.isSortMode() || !this.draggedWidgetId) return;
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onDrop(event: DragEvent, targetWidgetId: string): void {
    if (!this.isSortMode() || !this.draggedWidgetId || this.draggedWidgetId === targetWidgetId) {
      return;
    }
    
    event.preventDefault();
    
    // Tạo mảng mới với thứ tự đã thay đổi
    const widgets = [...this.widgets];
    const draggedIndex = widgets.findIndex(w => w.id === this.draggedWidgetId);
    const targetIndex = widgets.findIndex(w => w.id === targetWidgetId);
    
    if (draggedIndex === -1 || targetIndex === -1) return;
    
    // Di chuyển widget
    const [draggedWidget] = widgets.splice(draggedIndex, 1);
    widgets.splice(targetIndex, 0, draggedWidget);
    
    // Emit event với thứ tự mới
    this.widgetsReorder.emit(widgets);
    
    this.draggedWidgetId = null;
  }
}

