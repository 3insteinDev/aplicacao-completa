import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '../../interfaces/store.interface';

@Component({
  selector: 'app-form-store',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.scss'],
})
export class FormStoreComponent {
  @Input() store: Store | null = null;
  @Output() done = new EventEmitter<Store>();

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      descricao: new FormControl(this.store?.descricao ?? '', [Validators.required]),
    });
  }

  onSubmit() {
    const store = this.form.value as Store;
    this.done.emit(store);
  }
}
