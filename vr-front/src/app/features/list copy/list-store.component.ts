import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card-store/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { NoItemsStoreComponent } from './components/no-items-store/no-items-store.component';
import { ConfirmationDialogStoreService } from '../../shared/services/confirmation-dialog-store.service';
import { StoreService } from '../../shared/services/store.service';
import { Store } from '../../shared/interfaces/store.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, NoItemsStoreComponent],
  templateUrl: './list-store.component.html',
  styleUrl: './list-store.component.scss',
})
export class ListComponent {
  stores = signal<Store[]>(
    inject(ActivatedRoute).snapshot.data['store']
  );

  storeService = inject(StoreService);
  router = inject(Router);
  confirmationDialogStoreService = inject(ConfirmationDialogStoreService);

  onEdit(store: Store) {
    this.router.navigate(['/edit-store', store.id]);
  }

  onDelete(store: Store) {
    this.confirmationDialogStoreService
      .openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.storeService.delete(store.id).subscribe(() => {
          this.storeService.getAll().subscribe((store) => {
            this.stores.set(store);
          });
        });
      });
  }
}
