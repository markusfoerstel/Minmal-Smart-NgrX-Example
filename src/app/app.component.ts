import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
  // encounters$ = this.store.select(state => Object.values(state['encounters']?.entities ?? {}));

  constructor(private store: Store) {}
}
