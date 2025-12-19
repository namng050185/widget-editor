import { Component, EventEmitter, Input, Output, signal, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDeleteComponent } from '../edit-delete/edit-delete';
import { AddSortComponent } from '../add-sort/add-sort';
import { AppendService } from '../../services/append.service';

@Component({
  selector: 'app-widget-list',
  standalone: true,
  imports: [CommonModule, EditDeleteComponent, AddSortComponent],
  templateUrl: './widget-list.html',
  styleUrl: './widget-list.scss',
})
export class WidgetList {
  @Input() absolute: boolean = false;
  @Input() disabled: boolean = false;
  @Input() list: any[] = [];
  @Input() itemTemplate!: TemplateRef<any>;
  @Output() onAction = new EventEmitter<any>();

  protected readonly isSortMode = signal(false);
  protected draggedIndex: number | null = null;

  constructor(private readonly appendService: AppendService) {
    this.isSortMode.set(false);
  }

  ngOnInit(): void {}

  toggleSortMode(): void {
    const newSortMode = !this.isSortMode();
    this.isSortMode.set(newSortMode);
  }

  onDragStart(event: DragEvent, index: number): void {
    if (!this.isSortMode()) return;
    this.draggedIndex = index;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', index.toString());
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
    this.draggedIndex = null;
  }

  onDragOver(event: DragEvent): void {
    if (!this.isSortMode() || this.draggedIndex === null) return;
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onDrop(event: DragEvent, targetIndex: number): void {
    if (!this.isSortMode() || this.draggedIndex === null || this.draggedIndex === targetIndex) {
      return;
    }

    event.preventDefault();

    // Tạo mảng mới với thứ tự đã thay đổi
    const items = [...this.list];
    const draggedItem = items[this.draggedIndex];

    // Xóa item ở vị trí cũ
    items.splice(this.draggedIndex, 1);

    // Chèn item vào vị trí mới
    items.splice(targetIndex, 0, draggedItem);

    // Emit event với thứ tự mới
    this.onAction.emit({ action: 'reorder', data: items });

    this.draggedIndex = null;
  }

  onAdd() {
    this.onAction.emit({ action: 'add' });
  }

  onEdit(item: any) {
    this.onAction.emit({ action: 'edit', data: item });
  }

  onDelete(item: any) {
    this.onAction.emit({ action: 'delete', data: item });
  }
}
