import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-to-list-store',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './back-to-list-store.component.html',
  styleUrl: './back-to-list-store.component.scss'
})
export class BackToListStoreComponent {

}
