import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {  CardStoreComponent } from './components/card/card-store.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../../shared/services/confirmation-dialog.service';
import { NoItemsComponent } from './components/no-items/no-items.component';
import { Store } from '../../../shared/interfaces/store.interface';
import { StoresService } from '../../../shared/services/stores.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardStoreComponent, RouterLink, MatButtonModule, NoItemsComponent],
  templateUrl: './list-store.component.html',
  styleUrl: './list-store.component.scss',
})
export class ListStoreComponent {
  stores = signal<Store[]>(
    inject(ActivatedRoute).snapshot.data['stores']
  );

  storesService = inject(StoresService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);

  onEdit(store: Store) {
    this.router.navigate(['/edit-store', store.id]);
  }

  onDelete(store: Store) {
    this.confirmationDialogService
      .openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.storesService.delete(store.id).subscribe(() => {
          this.storesService.getAll().subscribe((stores) => {
            this.stores.set(stores);
          });
        });
      });
  }
}
