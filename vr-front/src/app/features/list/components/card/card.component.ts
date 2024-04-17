import {
  Component,
  EventEmitter,
  Output,
  computed,
  Input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() product!: Product;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  getProductTitle(): string {
    return this.product.descricao;
  }

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
