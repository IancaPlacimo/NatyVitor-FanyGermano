import { Router } from '@angular/router';
import { routes } from './../../app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  constructor(private router: Router) {}
}
