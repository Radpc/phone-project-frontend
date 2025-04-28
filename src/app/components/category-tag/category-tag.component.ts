import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category-tag',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './category-tag.component.html',
  styleUrl: './category-tag.component.scss',
})
export class CategoryTagComponent {
  @Input() category!: string;
}
