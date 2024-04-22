import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StoresService } from '../../../shared/services/stores.service';
import { Store } from '../../../shared/interfaces/store.interface';
import { FormStoreComponent } from '../../../shared/components/form-store/form-store.component';
import { BackToListStoreComponent } from '../../../shared/components/back-to-list-store/back-to-list-store.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormStoreComponent, BackToListStoreComponent],
  templateUrl: './edit-store.component.html',
  styleUrl: './edit-store.component.scss',
})
export class EditStoreComponent {
  storeService = inject(StoresService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  store: Store = inject(ActivatedRoute).snapshot.data['store'];

  onSubmit(store: Store) {
    this.storeService.put(this.store.id, store).subscribe(() => {
      this.matSnackBar.open('Loja editada com sucesso!', 'Ok');

      this.router.navigateByUrl('/stores');
    });
  }
}
