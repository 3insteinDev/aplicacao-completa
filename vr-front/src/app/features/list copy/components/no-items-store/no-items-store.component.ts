import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-no-items-store',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './no-items-store.component.html',
  styleUrl: './no-items-store.component.scss'
})
export class NoItemsStoreComponent {

}
