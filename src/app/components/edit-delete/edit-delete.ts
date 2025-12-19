import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-delete.html',
  styleUrl: './edit-delete.scss',
})
export class EditDeleteComponent {
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  ngOnInit(): void {
  }
}
