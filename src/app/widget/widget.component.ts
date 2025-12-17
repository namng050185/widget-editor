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

  protected readonly isHidden = signal(false);
  protected readonly currentWidth = signal(300);
  protected readonly currentMode = signal<'pc' | 'tablet' | 'mobile'>('pc');
  private readonly openWidgetConfigs = signal<Set<string>>(new Set());

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
}

