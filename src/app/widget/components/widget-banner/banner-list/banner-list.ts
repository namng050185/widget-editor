import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDeleteComponent } from '../../../../components/edit-delete/edit-delete';
import { AddSortComponent } from '../../../../components/add-sort/add-sort';

@Component({
  selector: 'app-banner-list',
  standalone: true,
  imports: [CommonModule, EditDeleteComponent, AddSortComponent],
  templateUrl: './banner-list.html',
  styleUrl: './banner-list.css',
})
export class BannerList {
  @Input() disabled: boolean = false;
  @Input() list: any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onReorder = new EventEmitter<any[]>();

  protected readonly isSortMode = signal(false);
  protected draggedIndex: number | null = null;

  ngOnInit(): void {
  }

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
    if (target.closest('.banner-item')) {
      target.closest('.banner-item')?.classList.add('opacity-50');
    }
  }

  onDragEnd(event: DragEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.banner-item')) {
      target.closest('.banner-item')?.classList.remove('opacity-50');
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
    this.onReorder.emit(items);

    this.draggedIndex = null;
  }
}
