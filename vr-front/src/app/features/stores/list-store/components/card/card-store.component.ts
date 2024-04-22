import {
  Component,
  EventEmitter,
  Output,
  computed,
  Input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Store } from '../../../../../shared/interfaces/store.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-store',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './card-store.component.html',
  styleUrl: './card-store.component.scss',
})
export class CardStoreComponent {
  @Input() store!: Store;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  getStoreTitle(): string {
    return this.store.descricao;
  }

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
