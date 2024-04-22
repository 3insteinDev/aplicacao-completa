import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StoresService } from '../../../shared/services/stores.service';
import { Store } from '../../../shared/interfaces/store.interface';
import { FormStoreComponent } from '../../../shared/components/form-store/form-store.component';
import { BackToListStoreComponent } from '../../../shared/components/back-to-list-store/back-to-list-store.component';

@Component({
  selector: 'app-create-store',
  standalone: true,
  imports: [FormStoreComponent, BackToListStoreComponent],
  templateUrl: './create-store.component.html',
  styleUrl: './create-store.component.scss',
})
export class CreateStoreComponent {
  storeService = inject(StoresService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(store: Store) {
    this.storeService.post(store).subscribe(() => {
      this.matSnackBar.open('Loja criada com sucesso!', 'Ok');

      this.router.navigateByUrl('/stores');
    });
  }
}
