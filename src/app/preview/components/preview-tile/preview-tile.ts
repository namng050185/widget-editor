import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-tile.html',
  styleUrl: './preview-tile.scss',
})
export class PreviewTile {
  @Input() widget: any;
}
