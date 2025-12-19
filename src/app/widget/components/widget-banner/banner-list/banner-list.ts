import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditDeleteComponent } from '../../../../components/edit-delete/edit-delete';
import { AddSortComponent } from '../../../../components/add-sort/add-sort';

@Component({
  selector: 'app-banner-list',
  imports: [EditDeleteComponent, AddSortComponent],
  templateUrl: './banner-list.html',
  styleUrl: './banner-list.css',
})
export class BannerList {
  @Input() disabled: boolean = false;
  @Input() list: any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onSort = new EventEmitter<any>();

  
  ngOnInit(): void {
  }

  isSortMode(): boolean {
    return false;
  }
}
