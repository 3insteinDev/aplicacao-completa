import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() product: Product | null = null;
  @Output() done = new EventEmitter<Product>();

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      descricao: new FormControl(this.product?.descricao ?? '', [Validators.required]),
      custo: new FormControl(this.product?.custo ?? 0, [Validators.required]),
      imagem: new FormControl(null), // Assuming it's a file input, initial value is null
    });
  }

  onSubmit() {
    const product = this.form.value as Product;
    this.done.emit(product);
  }
}
