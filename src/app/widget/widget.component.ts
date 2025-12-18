import { Component, Output, EventEmitter, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppendService } from '../services/append.service';
import { ListTypeWidgetComponent } from './components/list-type-widget/list-type-widget.component';
import { WidgetTitle } from './components/widget-title/widget-title';
import { WidgetTile } from './components/widget-tile/widget-tile';
import { WidgetHtml } from './components/widget-html/widget-html';
import { WidgetHighlight } from './components/widget-highlight/widget-highlight';
import { WidgetSearchBar } from './components/widget-search-bar/widget-search-bar';
import { WidgetBanner } from './components/widget-banner/widget-banner';
import { WidgetCategories } from './components/widget-categories/widget-categories';
import { WidgetNews } from './components/widget-news/widget-news';
import { WidgetTopArticles } from './components/widget-top-articles/widget-top-articles';
import { WidgetSupport } from './components/widget-support/widget-support';
import { WidgetHelpTopics } from './components/widget-help-topics/widget-help-topics';
import { WidgetFaq } from './components/widget-faq/widget-faq';
import { WidgetDownload } from './components/widget-download/widget-download';
import { WidgetStepByStep } from './components/widget-step-by-step/widget-step-by-step';
import { WidgetFeedback } from './components/widget-feedback/widget-feedback';
import { WidgetProductComparison } from './components/widget-product-comparison/widget-product-comparison';
import { WidgetProductFeature } from './components/widget-product-feature/widget-product-feature';
import { WidgetImage } from './components/widget-image/widget-image';
import { WidgetWebForm } from './components/widget-web-form/widget-web-form';
import { WidgetEmbededView } from './components/widget-embeded-view/widget-embeded-view';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [
    CommonModule,
    WidgetTitle,
    WidgetTile,
    WidgetHtml,
    WidgetHighlight,
    WidgetSearchBar,
    WidgetBanner,
    WidgetCategories,
    WidgetNews,
    WidgetTopArticles,
    WidgetSupport,
    WidgetHelpTopics,
    WidgetFaq,
    WidgetDownload,
    WidgetStepByStep,
    WidgetFeedback,
    WidgetProductComparison,
    WidgetProductFeature,
    WidgetImage,
    WidgetWebForm,
    WidgetEmbededView
  ],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
  @Input() widgets: any[] = [];

  @Output() toggleHide = new EventEmitter<void>();
  @Output() widthChange = new EventEmitter<number>();
  @Output() modeChange = new EventEmitter<'pc' | 'tablet' | 'mobile'>();
  @Output() onWidgetChange = new EventEmitter<any[]>();

  protected readonly isHidden = signal(false);
  protected readonly currentWidth = signal(300);
  protected readonly currentMode = signal<'pc' | 'tablet' | 'mobile'>('pc');
  protected readonly isSortMode = signal(false);
  private readonly openWidgetConfigs = signal<Set<string>>(new Set());
  private draggedWidgetId: string | null = null;

  constructor(private appendService: AppendService) {
  }

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
    const updatedWidgets = this.widgets.filter(w => w.id !== widgetId);
    this.onWidgetChange.emit(updatedWidgets);
  }

  onWidgetConfigChange(updatedWidget: any, widgetId: string): void {
    // Cập nhật widget trong danh sách
    const updatedWidgets = this.widgets.map(w => 
      w.id === widgetId ? { ...updatedWidget, id: widgetId } : w
    );
    this.onWidgetChange.emit(updatedWidgets);
  }

  trackByWidgetId(index: number, widget: any): string {
    return widget.id;
  }

  onAddWidget(): void {
    // Hiển thị modal với component
    this.appendService.showModal({
      component: ListTypeWidgetComponent,
      data: { },
      title: 'Select widget',
      width: 'w-[1000px] max-w-full',
      closeOnBackdrop: true
    });
    this.appendService.close$.subscribe((data) => {
      if (data) {
        this.onWidgetChange.emit([...this.widgets, data]);
      }
    });
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
    this.onWidgetChange.emit(widgets);

    this.draggedWidgetId = null;
  }
}

