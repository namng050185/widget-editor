import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-sort.html',
  styleUrl: './add-sort.scss',
})
export class AddSortComponent {
  @Input() title: string = 'Add Widget';
  @Input() disabled: boolean = false;
  @Input() isSortMode: boolean = false;
  @Output() onAdd = new EventEmitter<any>();
  @Output() onSort = new EventEmitter<any>();

  ngOnInit(): void {
  }
}
